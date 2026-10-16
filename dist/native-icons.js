// Reconstructed functional UI symbols from the supplied Android close-ups.
// Explicit per-path colours preserve the native charcoal/red line artwork.
const ink = "#51494f";
const red = "#b83f55";
const line = (d, color = ink, width = 1.65) =>
  `<path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
const circle = (cx, cy, r, color = ink, width = 1.65) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="${width}"/>`;
const rupees = `<text x="16" y="13.9" fill="${red}" stroke="none" text-anchor="middle" font-family="Arial,sans-serif" font-weight="600" font-size="9.2">Rs</text>`;
const banking =
  line(
    "M8.4 18H5.1A2.1 2.1 0 0 1 3 15.9V5.8a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v10.1a2.1 2.1 0 0 1-2.1 2.1h-3.3",
  ) +
  rupees +
  line("M10 17v6a6 6 0 0 0 12 0v-6h-4v6a2 2 0 0 1-4 0v-6ZM10 21h4M18 21h4");
const shapes = {
  "repeat-money":
    line(
      "M6.5 13.6A11 11 0 0 1 26.6 11.5M26.6 6.5v5h-5M27.5 20.4A11 11 0 0 1 7.4 22.5M7.4 27.5v-5h5",
      "currentColor",
      1.5,
    ) +
    `<text x="17" y="20.5" text-anchor="middle" fill="currentColor" stroke="none" font-family="Roboto,Arial,sans-serif" font-weight="500" font-size="10">Rs</text>`,

  send:
    line("M12.5 17v7.2c0 1.7 1.2 2.1 2.2 1.1l2.9-3.1", red) +
    line(
      "M26.6 3.1 4 13.4c-1.3.6-1.1 2.3.3 2.5l9.2 1.5 6.5 9.7c.8 1.2 2.1.8 2.4-.6L28 4.5c.3-1.5-.7-2-1.4-1.4ZM13.5 17.4 26.8 4.5",
    ),
  bill:
    line(
      "M11 3.5h14.3c2 0 3.2 1.3 3.2 3.2v5.1h-6M22.5 7v16.2c0 4.4-2.4 5.3-6.1 5.3H5.2c3.5-1.4 4-3.4 4-7.2V7c0-2.3 1-3.5 3.2-3.5h12.2c-1.6.3-2.1 1.6-2.1 3.5",
    ) +
    line(
      "M12.9 8h3.2M12.9 12.2h6.4M12.9 16.4h6.4M12.9 20.6h6.4M12.9 24.8h3.2",
      red,
    ),
  phone:
    line(
      "M15.8 29H7.5a3 3 0 0 1-3-3V5.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9.8M4.5 23.8h10",
    ) +
    line(
      "m23.3 17 7.2 3.2v9l-7.2 3.3-7.1-3.3v-9ZM16.2 20.2l7.1 3.3 7.2-3.3M23.3 23.5v9M19.7 18.6l7.2 3.3",
      red,
    ),
  bank: banking,
  corporate: banking,
  moon:
    line(
      "M23.8 5.2c7.7 5 7.6 16.5.2 22.2-6.5 5-15.8 3-19.5-3.3 6.1 3 13.1 1.5 17-3.7 3.8-5.1 4-10.2 2.3-15.2Z",
    ) +
    line(
      "m11.5 4.7 1.7 3.5 3.9.6-2.8 2.7.7 3.9-3.5-1.8L8 15.4l.6-3.9-2.8-2.7 3.9-.6Z",
      red,
    ),
  health:
    line(
      "M9.4 19.9C6.3 17 5 14.8 5 11.8a6.1 6.1 0 0 1 10.4-4.4 6.1 6.1 0 0 1 7.1-1.1M27.3 13.5c-.9 3.1-3 5.3-6.1 8",
    ) +
    line("m8.9 14.2 3.3.1 1.7-2.7 2.5 5 2.3-4.7 1.7 2.4h4", red) +
    circle(26, 5.7, 5.1) +
    line("M26 3.1v5.2M23.4 5.7h5.2", red, 1.8) +
    line(
      "M1.7 22h4.1v8H1.7ZM5.8 23.2l5.9-2.1 7.2 1.4c2.3.5 1.8 3-.3 3h-5.1l4.6 1.5 9-2.9c2.5-.9 3.9 1.7 1.4 2.8l-10.8 4.5-8-2.1H5.8",
    ),
  more: circle(6, 16, 3.4) + circle(16, 16, 3.4) + circle(26, 16, 3.4),
  yeylo:
    `<rect x="1" y="1" width="30" height="30" rx="6" fill="#f6e400" stroke="none"/>` +
    line(
      "M9.2 7v9c0 4.7 4.6 6.1 7.5 5.4 3.7-.8 5-3.3 5-6.6V7M21.7 14.8v7.7c0 6-7.2 6.9-12.3 4.1",
      "#2421cd",
      3.8,
    ),
  chat:
    line(
      "M24.6 13A11 11 0 1 0 7.1 23.4L2.7 27l2-7.1M20.8 19.8l6 7.2",
      "currentColor",
      2,
    ) + circle(20, 18.7, 6.3, "currentColor", 2),
  user:
    circle(16, 8.2, 5.1, "currentColor", 2) +
    line(
      "M5.4 29v-2.8c0-4.7 3.7-7.1 10.6-7.1s10.6 2.4 10.6 7.1V29",
      "currentColor",
      2,
    ),
  contactless: line(
    "M9.5 12a6 6 0 0 1 0 8M14 8a12 12 0 0 1 0 16M18.5 4a18 18 0 0 1 0 24M5 14.5a2.3 2.3 0 0 1 0 3",
    "currentColor",
    2,
  ),
  "wallet-card":
    `<rect x="3" y="5.5" width="26" height="21" rx="2.6" fill="currentColor" stroke="none"/>` +
    line("M3.6 11h24.8", "#b76b73", 2.5) +
    line("M8 17h9M8 21h6", "#b76b73", 1.8),
  "reward-medal":
    circle(16, 16, 12.8, "#ffcf00", 2.5) +
    line(
      "m16 8 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8Z",
      "#ffcf00",
      1.8,
    ),
  "wallet-refresh": line(
    "M25.6 11.5A10.5 10.5 0 1 0 25.2 22M25.6 4.4v7.1h-7.1",
    "currentColor",
    2.5,
  ),
};
export function nativeIcon(name, cls = "") {
  if (!shapes[name]) return null;
  return `<svg class="icon native-icon ${cls}" viewBox="0 0 34 34" fill="none" aria-hidden="true">${shapes[name]}</svg>`;
}
