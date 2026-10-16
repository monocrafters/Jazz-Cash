# Jazz-Cash

A frontend-only portfolio project using HTML, CSS and vanilla JavaScript. The home, transaction history, receipt and yellow dotted loading transition follow the Android app shown in the supplied screen recording. Secondary screens are interactive approximations.

## Run locally

```sh
npm run dev
```

Open http://127.0.0.1:5173. No dependency installation or build step is required. `server.mjs` only serves static files for development; it is not a payment backend.

## View on a phone

Connect the phone and laptop to the same Wi-Fi and open the Mobile URL printed by `npm run dev` (currently `http://192.168.100.213:5173`). Keep the server running. The IP may change when reconnecting to Wi-Fi. This is a local network preview, not a public deployment. To restrict the server to the laptop, set `HOST=127.0.0.1`.

## Demo timeline

The sample history ends on 8 October 2026 (the requested scenario date), with 18 entries across 6–8 October. The starting balance is Rs. 2,801.20, calculated from the sample ledger plus Rs. 0.20 opening balance. Newly simulated payments use the same October 8 scenario date.

## Explore

- Refresh Balance shows a small inline loader for two 2-second cycles, then restores the sample balance.
- Tap the balance to open Transaction History through the yellow dotted loader.
- Filter by date, category, received or sent payments; switch to Spending.
- Tap a transaction or its Receipt button for the shared ANSAR-style receipt screen, with the same emblem, typography, card, purpose and fee rows. Received and sent entries retain their own direction, amount, name and date.
- History distinguishes JazzCash recipients, masked RAAST IDs, RAAST credits and ReadyCash total repayments. Receipt wording follows the payment type; repayments and incoming credits do not offer Repeat.
- Repeat opens an editable demo payment. Amount validation prevents spending beyond the sample balance.
- Save exports a visibly marked sample receipt. Share copies sample transaction text. Statement downloads a sample CSV.
- Explore money transfer, bills, mobile load, cards, QR simulation, rewards and profile.
- Profile → Reset demo restores the starting sample data. Browser Back and in-app Back work.

No phone authentication, OTP, MPIN, payment credentials, banking APIs or backend are used. State lives in memory and resets on refresh. The ANSAR ALI reference receipt uses the date, masked account, amount and transaction reference supplied in the user screenshot; other sample records use fictional account numbers and references. All screens remain a portfolio simulation. This is not affiliated with JazzCash and cannot make payments. The supplied reference video is not included in the website or deployment.

## Files

- `dist/index.html` — app shell
- `dist/app.js` — screens, UI state, simulated interactions
- `dist/transaction-presentation.js` — payment-specific history labels and receipt wording
- `dist/native-icons.js` — hand-drawn two-colour symbols from the Android close-ups
- `dist/loader.js` — animated SVG dots and rounded arcs
- `dist/styles.css` — responsive Android layout and animations
- `dist/assets/` — local logo, Montserrat body fonts and Roboto wallet fonts
- `server.mjs` — local static preview

## Reference and asset credits

- Primary layout reference: user-supplied Android app recording, `IMG_7683.MOV`, `IMG_7686.MOV`, `IMG_7689.MOV`, and the two supplied close-up photos (not distributed).
- [Official Android app listing](https://play.google.com/store/apps/details?id=com.techlogix.mobilinkcustomer).
- [JazzCash 2025 logo](<https://commons.wikimedia.org/wiki/File:JazzCash_logo_(2025).png>), attributed to JazzCash; trademark belongs to its respective owner.
- Montserrat from Google Fonts is used as a visual match for the reference body text; license included in `dist/assets/Montserrat-OFL.txt`.
- Roboto from Google Fonts, licensed under SIL Open Font License; license included in `dist/assets/Roboto-OFL.txt`.

Exact proprietary animation assets are not available. The animation is reconstructed from individual video frames using SVG paths: four horizontal dots expand into rotating rounded arcs, then return to a row. It is a visual recreation, not the original animation file.

## Deployment

Vercel serves `dist/` as a static site. `vercel.json` runs the JavaScript checks and sets the output directory. No server, database or environment variables are required. The repository contains the frontend and local development server; private reference images and videos are excluded.

The historical rows retain their supplied reference order, including ReadyCash, RAAST 1,800, ANSAR 6,000 sent, RAAST 6,000 received, and 100 sent. Receipt dates remain unchanged.
