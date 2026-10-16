// The reference cycles from four dots into two rounded rotating arcs and two
// smaller orbiting dots, then settles back into the original horizontal row.
export const loaderMarkup = () =>
  `<svg class="jazzcash-loader" viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="#ffcf00" stroke-linecap="round" stroke-linejoin="round">${Array.from({ length: 4 }, () => "<path/>").join("")}</g></svg>`;
export const LOADER_CYCLE_MS = 2000;
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => t * t * (3 - 2 * t);
export function loaderFrame(milliseconds) {
  const ms = milliseconds % LOADER_CYCLE_MS;
  // IMG_7689: motion repeats at 2.60s and 4.60s. Most of each
  // cycle is a quiet row; the rounded-arc turn lasts about 0.55s.
  let blend;
  if (ms < 600) blend = 0;
  else if (ms < 750) blend = ease((ms - 600) / 150);
  else if (ms < 880) blend = 1;
  else if (ms < 1150) blend = 1 - ease((ms - 880) / 270);
  else blend = 0;
  const spin = -Math.PI / 2 + (Math.max(0, ms - 600) / 550) * Math.PI * 2.7;
  const settle =
    ms >= 1080 && ms < 1430 ? Math.sin(((ms - 1080) / 350) * Math.PI) * 2 : 0;
  const radii = [27, 24, 16, 8];
  const offsets = [0, Math.PI, 0, Math.PI];
  const lengths = [0, 1.85, 1.35, 0];
  return [0, 1, 2, 3].map((i) => {
    const width = lerp(5.8, [5.8, 11, 10, 5][i], blend);
    const points = [];
    const arc = lengths[i] * blend * (0.84 + 0.16 * Math.sin(spin + i));
    for (let j = 0; j <= 24; j++) {
      const a = spin + offsets[i] - (arc * j) / 24;
      const rowX = 26 + i * 16;
      const x = lerp(rowX, 50 + Math.cos(a) * radii[i], blend);
      const y = lerp(
        50 + Math.sin(i * 1.7 + ms / 80) * settle,
        50 + Math.sin(a) * radii[i],
        blend,
      );
      points.push(`${j ? "L" : "M"}${x.toFixed(2)} ${y.toFixed(2)}`);
    }
    // A short segment, rather than a zero-length path, paints on all browsers.
    if (blend === 0 || lengths[i] === 0) points.push(`l0.01 0`);
    return { d: points.join(" "), width };
  });
}
export function animateLoader(svg, { phase = 0 } = {}) {
  const paths = [...svg.querySelectorAll("path")];
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let frame;
  const start = performance.now();
  function draw(now) {
    loaderFrame(reduced ? 0 : now - start + phase).forEach((shape, i) => {
      paths[i].setAttribute("d", shape.d);
      paths[i].setAttribute("stroke-width", shape.width);
    });
    if (!reduced && svg.isConnected) frame = requestAnimationFrame(draw);
  }
  draw(start);
  return () => cancelAnimationFrame(frame);
}
