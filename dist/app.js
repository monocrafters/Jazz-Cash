import { nativeIcon } from "./native-icons.js";
import { loaderMarkup, animateLoader, LOADER_CYCLE_MS } from "./loader.js";

const paths = {
  home: "M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z",
  send: "m22 2-7 20-4-9-9-4Z M22 2 11 13",
  bill: "M6 3h12v18l-3-2-3 2-3-2-3 2Z M9 7h6M9 11h6M9 15h3",
  phone:
    "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2",
  bank: "m3 9 9-6 9 6H3ZM5 10v8M10 10v8M14 10v8M19 10v8M3 21h18",
  bag: "M5 7h14l2 14H3ZM9 8V6a3 3 0 0 1 6 0v2",
  moon: "M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z",
  travel:
    "M5 17H3V7h16v10h-2M7 17h6M7 7V4h8v3M3 12h16M19 10h2v7h-2 M7 17a2 2 0 1 0 0 .1M17 17a2 2 0 1 0 0 .1",
  hand: "M2 17h4l3 3h9l4-6c-1-1-2-1-3 0l-2 2H11M6 17v-5h6l3 3v1M8 4h8M12 2v6",
  more: "M5 12h.01M12 12h.01M19 12h.01",
  user: "M20 21v-2a7 7 0 0 0-14 0v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
  headset: "M3 14v-3a9 9 0 0 1 18 0v3M3 11h4v8H3ZM17 11h4v8h-4ZM17 19v2h-5",
  chevron: "m9 5 7 7-7 7",
  back: "m15 5-7 7 7 7M8 12h13",
  plus: "M12 5v14M5 12h14",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  refresh:
    "M20 7v5h-5M4 17v-5h5M6 7a7 7 0 0 1 12-1l2 6M4 12l2 6a7 7 0 0 0 12-1",
  scan: "M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5M7 7h4v4H7ZM14 7h3v3h-3ZM7 14h3v3H7ZM14 14h3v3h-3Z",
  gift: "M3 8h18v4H3ZM5 12v9h14v-9M12 8v13M12 8H8a3 3 0 1 1 3-3Zm0 0h4a3 3 0 1 0-3-3Z",
  history: "M3 11a9 9 0 1 1 3 8M3 4v7h7M12 7v5l3 2",
  card: "M3 5h18v14H3ZM3 10h18M6 15h4",
  search: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 6 6",
  check: "m5 12 4 4L19 6",
  close: "m6 6 12 12M18 6 6 18",
  bell: "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4",
  bolt: "m13 2-9 12h7l-1 8 10-13h-7Z",
  shield: "m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6Z m-4 10 3 3 5-6",
  wifi: "M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8 16a6 6 0 0 1 8 0M12 20h.01",
  lock: "M5 10h14v11H5ZM8 10V6a4 4 0 0 1 8 0v4",
  arrow: "M12 4v16m-6-6 6 6 6-6",
  star: "m12 3 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z",
  edit: "m16 3 5 5-12 12-6 1 1-6Z M13 6l5 5",
  logout: "M9 3H3v18h6M9 12h12m-5-5 5 5-5 5",
  fingerprint:
    "M7 16v-5a5 5 0 0 1 10 0v3M4 13v-2a8 8 0 0 1 16 0v6M10 20v-9a2 2 0 0 1 4 0v7M7 19v2M14 21v1M17 18v3",
  download: "M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4",
};
Object.assign(paths, {
  chat: "M21 11a8 8 0 0 1-12 7L4 20l1-5a8 8 0 1 1 16-4Z M9 10h.01M13 10h.01M17 10h.01",
  coin: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",
  health:
    "M2 20h4l3 2h8l5-6-2-1-4 3h-5M6 20v-6h7l3 3M12 12l-5-4a3 3 0 0 1 5-4 3 3 0 0 1 5 4ZM20 2v6M17 5h6",
  corporate: "M5 3h14v11H5ZM8 7h3M8 10h3M9 14v4H6v3h12v-3h-3v-4",
  location:
    "M18 10c0 5-6 10-6 10S6 15 6 10a6 6 0 0 1 12 0ZM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 20l-2 2M20 20l2 2",
  down: "m8 10 4 4 4-4",
  receipt: "M5 3h14v18H5ZM2 6v17h14M8 8h8M8 12h5M8 16h5",
  statement:
    "M5 3h12v5H5ZM5 11h6M5 15h4M3 3v18h8M16 17a4 2 0 1 0 0-4 4 2 0 0 0 0 4ZM12 15v5c0 3 8 3 8 0v-5M12 18c0 3 8 3 8 0",
  "diagonal-in": "M6 6l12 12M8 18h10V8",
  "diagonal-out": "M6 18 18 6M8 6h10v10",
  share: "M8 8H4v13h16V8h-4M12 16V2m-4 4 4-4 4 4",
  "repeat-money":
    "M3 8a9 9 0 0 1 16-2l2 3M21 3v6h-6M21 16a9 9 0 0 1-16 2l-2-3M3 21v-6h6M10 9v6M10 9h2a2 2 0 0 1 0 4h-2m2 0 2 2",
});
const icon = (name, cls = "") =>
  nativeIcon(name, cls) ||
  `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name] || paths.more}"/></svg>`;
const $ = (s) => document.querySelector(s);
const money = (n) =>
  Number(n).toLocaleString("en-PK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
const escapeHtml = (v) =>
  String(v).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const state = {
  view: "home",
  balance: 0,
  hidden: false,
  filter: "All",
  search: "",
  tab: "Physical",
  frozen: false,
  recipient: "",
  amount: 0,
  type: "send",
  method: "JazzCash",
  history: [],
  last: null,
  historyTab: "All Payments",
  categoryFilter: "All",
  dateFilter: "All dates",
};
const initialTransactions = [
  {
    name: "Ali Ahmed",
    type: "Money Transfer",
    amount: -500,
    date: "08 October, 2026 | 04:40 PM",
    icon: "send",
    id: "DEMO-20261008-004",
    account: "0300 000 0001",
  },
  {
    name: "Demo Grocery Store",
    type: "Merchant Payment",
    amount: -980,
    date: "08 October, 2026 | 03:15 PM",
    icon: "cart",
    id: "DEMO-20261008-003",
    account: "DEMO-MERCHANT",
  },
  {
    name: "Jazz Monthly Package",
    type: "Mobile Load",
    amount: -650,
    date: "08 October, 2026 | 12:40 PM",
    icon: "phone",
    id: "DEMO-20261008-002",
    account: "0300 000 0000",
  },
  {
    name: "RAAST Credit",
    type: "Money Transfer",
    amount: 2500,
    date: "08 October, 2026 | 09:10 AM",
    icon: "arrow",
    id: "DEMO-20261008-001",
    account: "0300 000 0003",
  },
  {
    name: "Jazz Mobile Load",
    type: "Mobile Load",
    amount: -420,
    date: "07 October, 2026 | 06:20 PM",
    icon: "phone",
    id: "DEMO-20261007-004",
    account: "0300 000 0000",
  },
  {
    name: "Sara Khan",
    type: "Money Transfer",
    amount: -1200,
    date: "07 October, 2026 | 01:35 PM",
    icon: "send",
    id: "DEMO-20261007-003",
    account: "0300 000 0002",
  },
  {
    name: "Electricity Bill",
    type: "Bill Payment",
    amount: -1750,
    date: "07 October, 2026 | 11:30 AM",
    icon: "bill",
    id: "DEMO-20261007-002",
    account: "DEMO-BILL-001",
  },
  {
    name: "RAAST Credit",
    type: "Money Transfer",
    amount: 5000,
    date: "07 October, 2026 | 09:15 AM",
    icon: "arrow",
    id: "DEMO-20261007-001",
    account: "0300 000 0003",
  },

  {
    name: "Lahore Garrison Educational Foundation",
    type: "Education",
    amount: -3586,
    date: "06 October, 2026 | 03:20 PM",
    icon: "send",
    id: "DEMO-202600001",
  },
  {
    name: "RAAST Credit",
    type: "Money Transfer",
    amount: 1000,
    date: "06 October, 2026 | 03:18 PM",
    icon: "arrow",
    id: "DEMO-202600002",
  },
  {
    name: "Lahore Garrison Educational Foundation",
    type: "Education",
    amount: -4688,
    date: "06 October, 2026 | 03:16 PM",
    icon: "send",
    id: "DEMO-202600003",
  },
  {
    name: "RAAST Credit",
    type: "Money Transfer",
    amount: 8000,
    date: "06 October, 2026 | 03:12 PM",
    icon: "arrow",
    id: "DEMO-202600004",
  },
  {
    name: "Total Repayment",
    type: "ReadyCash",
    amount: -1725,
    date: "06 October, 2026 | 03:10 PM",
    icon: "send",
    id: "DEMO-202600005",
  },
  {
    name: "RAAST Credit",
    type: "Money Transfer",
    amount: 1800,
    date: "06 October, 2026 | 03:06 PM",
    icon: "arrow",
    id: "DEMO-202600006",
  },
  {
    name: "ANSAR ALI",
    type: "Money Transfer",
    amount: -6000,
    date: "06 October, 2026 | 04:12 PM",
    icon: "send",
    id: "726306519265",
    account: "*******2449",
    subtitle: "JazzCash - ANSAR ALI",
    receiptChannel: "Transferred via Other Wallet",
    purpose: "Others",
    fee: "Free",
    referenceReceipt: true,
  },
  {
    name: "RAAST Credit",
    type: "Money Transfer",
    amount: 6000,
    date: "06 October, 2026 | 03:01 PM",
    icon: "arrow",
    id: "DEMO-202600008",
  },
  {
    name: "JazzCash account",
    type: "Money Transfer",
    amount: -100,
    date: "06 October, 2026 | 11:20 AM",
    icon: "send",
    id: "DEMO-202600009",
    account: "0300 000 0002",
  },
  {
    name: "RAAST Credit",
    type: "Money Transfer",
    amount: 100,
    date: "06 October, 2026 | 11:15 AM",
    icon: "arrow",
    id: "DEMO-202600010",
  },
];
// Preserve the reference history order; receipt timestamps are displayed independently.
const initialBalance =
  Math.round(
    (0.2 + initialTransactions.reduce((sum, t) => sum + t.amount, 0)) * 100,
  ) / 100;
state.balance = initialBalance;
let transactions = [...initialTransactions];
function transactionDates() {
  return [...new Set(transactions.map((t) => t.date.split(" | ")[0]))];
}
function statementPeriod() {
  const dates = transactionDates();
  return dates.length
    ? `${dates[dates.length - 1]} – ${dates[0]}`
    : "No transactions";
}
const services = [
  ["Money Transfer", "send", "transfer"],
  ["Bill Payment", "bill", "bills"],
  ["Load & Packages", "phone", "load"],
  ["Banking & Finance", "bank", "banking"],
  ["Yeylo", "yeylo", "yeylo"],
  ["Government Payments", "moon", "government"],
  ["Sehat +", "health", "sehat"],
  ["Corporate Payments", "corporate", "corporate"],
  ["More", "more", "more"],
];
const wordmark = () =>
  '<span class="wordmark"><img src="assets/jazzcash-logo.png" alt="JazzCash"></span>';
const btn = (text, action, cls = "primary") =>
  `<button class="${cls}" data-action="${action}">${text}</button>`;
const row = (title, subtitle, ic, action) =>
  `<button class="list-row" data-action="${action}"><span class="row-icon">${icon(ic)}</span><span><b>${title}</b>${subtitle ? `<small>${subtitle}</small>` : ""}</span>${icon("chevron")}</button>`;
const heading = (title, sub = "") =>
  `<header class="page-header"><button class="icon-btn" data-action="back" aria-label="Go back">${icon("back")}</button><h1>${title}</h1><button class="icon-btn" data-action="help" aria-label="Help">${icon("headset")}</button></header>${sub ? `<p class="page-intro">${sub}</p>` : ""}`;
function nav() {
  const el = $("#bottom-nav");
  el.hidden = state.view !== "home";
  el.className = "reference-bottom-nav";
  el.innerHTML = [
    ["home", "Home", "home"],
    ["locator", "Find an agent", "location"],
    ["scan", "Scan QR", "scan"],
    ["favourites", "Favourites", "star"],
    ["offers", "Rewards", "gift"],
  ]
    .map(
      ([action, label, ic]) =>
        `<button data-action="${action}" aria-label="${label}" class="${action === "home" ? "active" : ""} ${action === "scan" ? "center-qr" : ""}">${icon(ic)}</button>`,
    )
    .join("");
}
function serviceGrid(items = services) {
  return `<div class="service-grid">${items.map(([label, ic, action]) => `<button class="service" data-action="${action}">${["yeylo", "sehat"].includes(action) ? '<span class="new-badge">New</span>' : ""}<span class="service-icon">${icon(ic)}</span><span>${label === "Banking & Finance" ? "Banking &<br>Finance" : label}</span></button>`).join("")}</div>`;
}
function home() {
  return `<section class="wallet reference-wallet"><div class="wallet-top">${wordmark()}<div><button class="tap-pay" data-action="tap">Tap ${icon("contactless")}</button><button class="icon-btn" data-action="help" aria-label="Support">${icon("chat")}</button><span class="top-divider"></span><button class="icon-btn" data-action="profile" aria-label="My account">${icon("user")}</button></div></div><div class="wallet-main"><div class="wallet-account"><button class="account-mini" data-action="profile"><span class="avatar">MA</span><span><b>Mohsin</b><small><span class="reward-coin">${icon("reward-medal")}</span>Reward Hub ${icon("chevron")}</small></span></button><div class="balance"><button class="balance-link" data-action="history" aria-label="Available balance, view transaction history"><span>Rs.</span><strong>${state.hidden ? "•••" : money(state.balance).split(".")[0]}</strong><sup>${state.hidden ? "••" : "." + money(state.balance).split(".")[1]}</sup></button><button class="icon-btn balance-history" data-action="history" aria-label="View transaction history">${icon("chevron")}</button></div><button class="refresh-balance" data-action="refresh">${icon("wallet-refresh")} Refresh Balance</button></div><div class="wallet-actions"><button data-action="cards">${icon("wallet-card")}<span>Card</span></button><button data-action="loan"><b class="rupee">Rs</b><span>Loan</span></button></div></div></section><div class="home-body reference-home">${serviceGrid()}<div class="home-page-dots"><i class="selected"></i><i></i></div><div class="partner-carousel"><button class="partner insure" data-action="insurance"><span class="partner-accent">${icon("shield")}</span><b>InsureNow</b></button><button class="partner committee" data-action="committee"><b>Committee</b><span class="partner-accent">${icon("coin")}</span></button><button class="partner tbills" data-action="tbills"><span class="partner-accent">${icon("bill")}</span><b>T-Bills</b></button><button class="partner green-partner" data-action="savings">${icon("bank")}<b>Savings</b></button></div><div class="home-page-dots partner-dots"><i class="selected"></i><i></i><i></i><i></i></div><button class="promo reference-promo" data-action="load"><span class="promo-copy"><b>Buy Now, Pay Later</b><span>Buy prepaid & postpaid packages with</span><strong>ReadyLoad</strong><span>and pay back later!</span></span><span class="packages-preview"><small>Mobile Load & Packages</small><span>${icon("phone")}${icon("bill")}${icon("refresh")}</span><small>Mobile Load · Packages</small></span></button><div class="secondary-home"><div class="section-heading"><h2>Favourites</h2><button data-action="edit-favourites">Edit</button></div><div class="favourites"><button data-action="quick-ali"><span class="contact-avatar">AA</span><span>Ali Ahmed</span></button><button data-action="quick-sara"><span class="contact-avatar rose">SK</span><span>Sara Khan</span></button><button data-action="load"><span class="contact-avatar yellow">${icon("phone")}</span><span>My Jazz</span></button><button data-action="transfer"><span class="contact-avatar add-fav">${icon("plus")}</span><span>Add new</span></button></div><div class="section-heading"><h2>Recent activity</h2><button data-action="history">View all</button></div>${transactionRows(transactions.slice(0, 2))}<p class="sample-note">Unofficial portfolio recreation · Sample data</p></div></div>`;
}

function transactionRows(items) {
  return `<div class="transactions">${items.map((t) => `<button class="transaction" data-action="transaction" data-index="${transactions.indexOf(t)}"><span class="row-icon ${t.amount > 0 ? "positive" : ""}">${icon(t.icon)}</span><span class="transaction-name"><b>${escapeHtml(t.name)}</b><small>${escapeHtml(t.date)}</small></span><span class="transaction-value ${t.amount > 0 ? "positive" : ""}"><b>${t.amount > 0 ? "+" : "−"} Rs. ${money(Math.abs(t.amount))}</b><small>${escapeHtml(t.type)}</small></span></button>`).join("")}</div>`;
}
function transfer() {
  return (
    heading("Money Transfer", "Send to a mobile wallet or a bank account.") +
    `<div class="page-body"><div class="list-card">${row("JazzCash", "Send to a JazzCash mobile account", "phone", "method-jazz")}${row("Bank Account", "Transfer to a bank in Pakistan", "bank", "method-bank")}${row("Other Mobile Wallet", "Send to Easypaisa or another wallet", "send", "method-wallet")}${row("Raast", "Instant transfer using a Raast ID", "bolt", "method-raast")}</div><div class="section-heading"><h2>Recent recipients</h2></div>${row("Ali Ahmed", "0300 000 0001 · Demo contact", "user", "quick-ali")}${row("Sara Khan", "0300 000 0002 · Demo contact", "user", "quick-sara")}<p class="sample-note">All transfers are simulated in your browser.</p></div>`
  );
}
function recipient() {
  return (
    heading(state.method === "Bank Account" ? "Bank Transfer" : "Send Money") +
    `<div class="page-body"><div class="step-indicator"><b>1</b><span></span><i>2</i><span></span><i>3</i></div><h2 class="large-title">Who are you sending to?</h2><p class="muted">Choose a demo contact or enter a sample number.</p><form id="recipient-form">${state.method === "Bank Account" ? '<label for="bank">Select bank</label><select id="bank"><option>HBL</option><option>Meezan Bank</option><option>UBL</option><option>Bank Alfalah</option><option>Allied Bank</option></select>' : ""}<label for="recipient">${state.method === "Bank Account" ? "Account number" : "Mobile number"}</label><div class="input-wrap">${icon(state.method === "Bank Account" ? "bank" : "phone")}<input id="recipient" name="recipient" inputmode="numeric" autocomplete="off" placeholder="${state.method === "Bank Account" ? "Enter sample account number" : "03XX XXXXXXX"}" maxlength="24" value="${escapeHtml(state.recipientNumber || "")}"></div><p class="field-hint">${state.method === "Bank Account" ? "Use a fictional 10–24 digit account number." : "For example: 03000000001"}</p><p id="form-error" class="form-error" role="alert"></p><button class="primary" type="submit">Continue</button></form><div class="section-heading"><h2>Saved contacts</h2></div>${row("Ali Ahmed", "0300 000 0001", "user", "quick-ali")}${row("Sara Khan", "0300 000 0002", "user", "quick-sara")}</div>`
  );
}
function amountView() {
  const adding = ["add", "loan"].includes(state.type);
  return (
    heading(
      {
        send: "Enter Amount",
        bill: "Pay Bill",
        load: "Mobile Load",
        add: "Add Money",
        loan: "ReadyCash",
      }[state.type] || "Enter Amount",
    ) +
    `<div class="page-body"><div class="recipient-summary"><span class="contact-avatar ${adding ? "yellow" : ""}">${icon(adding ? "plus" : state.type === "bill" ? "bill" : state.type === "load" ? "phone" : "user")}</span><b>${escapeHtml(state.recipient || "Demo account")}</b><span>${escapeHtml(state.recipientNumber || state.method)}</span></div><form id="amount-form"><label for="amount">${adding ? "Amount to add" : "Enter amount"}</label><div class="amount-input"><span>Rs.</span><input id="amount" name="amount" type="number" inputmode="decimal" min="1" max="50000" step="0.01" placeholder="0" value="${state.amount || ""}" autocomplete="off"></div><div class="amount-chips">${[100, 500, 1000, 5000].map((n) => `<button type="button" data-action="amount-preset" data-value="${n}">Rs. ${n.toLocaleString()}</button>`).join("")}</div><div class="balance-hint">Available balance <b>Rs. ${money(state.balance)}</b></div>${state.type === "loan" ? '<p class="info-note">ReadyCash UI preview only. No loan application, approval, or agreement is created.</p>' : ""}<label for="note">Note <span class="optional">(optional)</span></label><input id="note" name="note" placeholder="What is this for?" maxlength="70" value="${escapeHtml(state.note || "")}"><p id="form-error" class="form-error" role="alert"></p><button class="primary" type="submit">Continue</button></form><p class="sample-note">Demo balance · No real money will move</p></div>`
  );
}
function review() {
  return (
    heading("Review Details") +
    `<div class="page-body"><div class="review-amount"><span>You are ${["add", "loan"].includes(state.type) ? "adding" : "sending"}</span><h2>Rs. ${money(state.amount)}</h2><span class="demo-badge">SIMULATED PAYMENT</span></div><div class="detail-card">${detail("To", state.recipient)}${detail("Account", state.recipientNumber || "Demo wallet")}${detail("Payment type", { send: state.method, bill: "Bill payment", load: "Mobile load", add: "Add money", loan: "ReadyCash demo" }[state.type])}${detail("Amount", "Rs. " + money(state.amount))}${detail("Fee", "Rs. 0.00")}${state.note ? detail("Note", state.note) : ""}<div class="detail-total">${detail("Total", "Rs. " + money(state.amount))}</div></div><p class="info-note">This is a portfolio demo. Confirming only updates the sample balance on this page.</p>${btn("Confirm demo payment", "confirm")}<button class="text-button" data-action="back">Edit details</button></div>`
  );
}
const detail = (a, b) =>
  `<div class="detail"><span>${escapeHtml(a)}</span><b>${escapeHtml(b ?? "")}</b></div>`;
function receipt() {
  const t = state.last;
  if (!t)
    return (
      heading("Receipt") + '<p class="page-intro">No demo payment yet.</p>'
    );
  return (
    heading("Payment Summary") +
    `<div class="page-body"><div class="success-mark">${icon("check")}</div><h2 class="center-title">Demo payment complete!</h2><p class="center muted">Your sample transaction was successful.</p><div class="receipt-paper"><span class="receipt-demo">DEMO — NOT A PAYMENT RECEIPT</span><h2>Rs. ${money(Math.abs(t.amount))}</h2><p>${escapeHtml(t.name)}</p><div class="receipt-separator"></div>${detail("Status", "Simulated · Successful")}${detail("Transaction ID", t.id || "DEMO-SAMPLE")}${detail("Date & time", t.date)}${detail("Payment type", t.type)}${detail("Fee", "Rs. 0.00")}<p class="sample-note">No funds were transferred. Not valid as proof of payment.</p></div>${btn("Back to home", "home")}<button class="text-button" data-action="history">View transaction history</button></div>`
  );
}
function bills() {
  return (
    heading("Bill Payment", "Pay your everyday bills in a few taps.") +
    `<div class="page-body"><div class="list-card">${row("Electricity", "LESCO, IESCO, K-Electric & more", "bolt", "utility-electric")}${row("Gas", "SNGPL & SSGC", "moon", "utility-gas")}${row("Internet", "PTCL, Nayatel & more", "wifi", "utility-internet")}${row("Water", "WASA & water boards", "bill", "utility-water")}${row("Telephone", "Landline & postpaid bills", "phone", "utility-phone")}</div><div class="section-heading"><h2>Saved bill</h2></div>${row("Home electricity", "LESCO · Demo reference 12345678901234", "bolt", "saved-bill")}</div>`
  );
}
function billDetails() {
  return (
    heading(state.utility + " Bill") +
    `<div class="page-body"><span class="feature-icon">${icon("bill")}</span><h2 class="large-title">Enter your bill details</h2><form id="bill-form"><label for="provider">Service provider</label><select id="provider">${{ Electricity: ["LESCO", "IESCO", "K-Electric", "MEPCO", "FESCO"], Gas: ["SNGPL", "SSGC"], Internet: ["PTCL", "Nayatel", "StormFiber"], Water: ["WASA Lahore", "WASA Rawalpindi", "Karachi Water Board"], Telephone: ["PTCL", "Jazz Postpaid"] }[state.utility].map((p) => `<option>${p}</option>`).join("")}</select><label for="reference">Consumer / reference number</label><input id="reference" inputmode="numeric" placeholder="Enter a sample reference number" maxlength="20" autocomplete="off"><p class="field-hint">Use any 8–20 digit sample number.</p><p id="form-error" class="form-error" role="alert"></p><button class="primary" type="submit">Fetch demo bill</button></form></div>`
  );
}
function load() {
  return (
    heading("Load & Packages") +
    `<div class="page-body"><div class="segmented"><button class="selected" data-action="load-tab">Mobile Load</button><button data-action="packages">Packages</button></div><h2 class="large-title">Stay connected</h2><p class="muted">Top up a prepaid mobile number.</p><form id="load-form"><label for="network">Select network</label><div class="network-grid">${["Jazz", "Zong", "Ufone", "Telenor"].map((n) => `<label class="network ${n.toLowerCase()}"><input type="radio" name="network" value="${n}" ${n === (state.network || "Jazz") ? "checked" : ""}><span>${n}</span></label>`).join("")}</div><label for="mobile">Mobile number</label><div class="input-wrap">${icon("phone")}<input id="mobile" inputmode="numeric" placeholder="03XX XXXXXXX" maxlength="11" autocomplete="off" value="03000000000"></div><p class="field-hint">Sample number for this portfolio demo.</p><p id="form-error" class="form-error" role="alert"></p><button class="primary" type="submit">Continue</button></form><div class="soft-banner"><span>${icon("bolt")}</span><div><b>Need a little extra?</b><p>Explore the ReadyLoad demo.</p></div><button class="icon-btn" data-action="readyload" aria-label="About ReadyLoad">${icon("chevron")}</button></div></div>`
  );
}
function packages() {
  return (
    heading("Mobile Packages") +
    `<div class="page-body"><div class="segmented"><button data-action="load">Mobile Load</button><button class="selected" data-action="packages">Packages</button></div><p class="muted">Illustrative Jazz bundles for the demo.</p>${[
      ["Daily Social", "1 GB", "100", "1 day", 100],
      ["Weekly Super", "10 GB", "1,000", "7 days", 500],
      ["Monthly Max", "30 GB", "3,000", "30 days", 1500],
    ]
      .map(
        ([name, data, mins, valid, price]) =>
          `<button class="package-card" data-action="package" data-name="${name}" data-price="${price}"><span><b>${name}</b><strong>Rs. ${price}</strong></span><div><span>${icon("wifi")} ${data}</span><span>${icon("phone")} ${mins} mins</span></div><small>Validity: ${valid} · Sample package</small></button>`,
      )
      .join("")}</div>`
  );
}
function nativeAmount(n) {
  const [whole, decimal] = money(Math.abs(n)).split(".");
  return `Rs. ${whole}<sup>.${decimal}</sup>`;
}
function nativeHeading(title) {
  return `<header class="native-header"><button data-action="back" aria-label="Go back">${icon("back")}</button><h1>${title}</h1></header>`;
}
function getHistoryResults() {
  return transactions.filter(
    (t) =>
      (state.filter === "All" ||
        (state.filter === "Received" ? t.amount > 0 : t.amount < 0)) &&
      (state.categoryFilter === "All" || t.type === state.categoryFilter) &&
      (state.dateFilter === "All dates" ||
        t.date.startsWith(state.dateFilter)) &&
      `${t.name} ${t.type}`.toLowerCase().includes(state.search.toLowerCase()),
  );
}
function historyRows(items) {
  return items
    .map(
      (t, i) =>
        `<div class="native-transaction-group">${i === 0 || items[i - 1].date.split("|")[0] !== t.date.split("|")[0] ? `<div class="native-date">${escapeHtml(t.date)}</div>` : ""}<article class="native-transaction"><button class="native-transaction-main" data-action="transaction" data-index="${transactions.indexOf(t)}" aria-label="View ${escapeHtml(t.name)} ${money(Math.abs(t.amount))} receipt"><span class="native-direction ${t.amount > 0 ? "incoming" : "outgoing"}">${icon("arrow")}</span><span class="native-transaction-copy">${t.type !== "Education" ? `<span class="native-type">${escapeHtml(t.type)}</span>` : ""}<strong>Rs. ${money(Math.abs(t.amount))}</strong><span class="native-counterparty">${escapeHtml(t.subtitle || t.name)}</span></span></button><div class="transaction-actions">${t.amount < 0 && t.type !== "ReadyCash" ? `<button data-action="repeat-transaction" data-index="${transactions.indexOf(t)}">${icon("repeat-money")} Repeat</button>` : ""}<button data-action="transaction" data-index="${transactions.indexOf(t)}">${icon("receipt")} Receipt</button></div></article></div>`,
    )
    .join("");
}
function historyView() {
  const items = getHistoryResults();
  const incoming = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  const outgoing = -transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0);
  return `<div class="native-history">${nativeHeading("Transaction History")}<div class="native-history-tabs"><button class="${state.historyTab === "All Payments" ? "selected" : ""}" data-action="history-tab" data-value="All Payments">All Payments</button><button class="${state.historyTab === "Spending" ? "selected" : ""}" data-action="history-tab" data-value="Spending">Spending</button></div><div class="native-totals"><div><span class="total-direction incoming">${icon("arrow")}</span><span><small>Received</small><b>${nativeAmount(incoming)}</b></span></div><div><span class="total-direction outgoing">${icon("arrow")}</span><span><small>Sent</small><b>${nativeAmount(outgoing)}</b></span></div></div>${
    state.historyTab === "All Payments"
      ? `<div class="native-filterbar"><button class="${state.dateFilter !== "All dates" ? "selected" : ""}" data-action="date-filter">Date ${icon("down")}</button><button class="${state.categoryFilter !== "All" ? "selected" : ""}" data-action="category-filter">Categories ${icon("down")}</button><button class="${state.filter === "Received" ? "selected" : ""}" data-action="native-filter" data-value="Received">${icon("diagonal-in")} Received</button><button class="${state.filter === "Sent" ? "selected" : ""}" data-action="native-filter" data-value="Sent">${icon("diagonal-out")} Sent</button></div><div class="native-history-meta"><div><b>${state.historyLoading ? "&nbsp;" : `Last ${items.length} transactions`}</b><span>${icon("refresh")} Update in 2 hours</span></div><button data-action="statement">${icon("statement")} Statement</button></div><div class="native-history-records">${state.historyLoading ? "" : items.length ? historyRows(items) : `<div class="empty-state"><h2>No transactions found</h2><p>Change your date or category filter.</p>${btn("Clear filters", "clear-native-filter", "secondary")}</div>`}</div>`
      : `<div class="spending-content"><h2>Spending overview</h2><p>Your recent outgoing payments</p>${[
          "Education",
          "ReadyCash",
          "Money Transfer",
        ]
          .map((cat) => {
            const amount = -transactions
              .filter((t) => t.amount < 0 && t.type === cat)
              .reduce((sum, t) => sum + t.amount, 0);
            return `<div class="spending-category"><div><span>${cat}</span><b>Rs. ${money(amount)}</b></div><div class="spending-track"><span style="width:${(amount / outgoing) * 100}%"></span></div></div>`;
          })
          .join("")}</div>`
  }</div>`;
}
function brandMark(cls = "") {
  return `<span class="brand-symbol ${cls}"><img src="assets/jazzcash-logo.png" alt="JazzCash"></span>`;
}
function receiptDate(value) {
  const match = value.match(/(\d+) (\w+), (\d+) \| (\d+):(\d+) (AM|PM)/);
  if (!match) return value.replace(" | ", " at ");
  const [, day, month, year, hour, minute, period] = match;
  const hours = (Number(hour) % 12) + (period === "PM" ? 12 : 0);
  return `${month} ${Number(day)},${year} at ${String(hours).padStart(2, "0")}:${minute}`;
}
function transactionDetails() {
  const t = state.selectedTransaction || transactions[0];
  const channel =
    t.receiptChannel ||
    (t.amount > 0
      ? "Received in JazzCash"
      : t.type === "Money Transfer"
        ? "Transferred to JazzCash"
        : "Payment completed");
  const tear = '<div class="receipt-tear"><i></i><i></i></div>';
  const extras = t.referenceReceipt
    ? `${detail("Purpose of Payment", t.purpose)}${tear}<div class="detail receipt-fee"><span>Transaction Fee</span><b class="free-fee">${escapeHtml(t.fee)}</b></div>`
    : "";
  return `<div class="native-receipt ${t.referenceReceipt ? "reference-wallet-receipt" : ""}"><button class="receipt-back" data-action="back" aria-label="Go back">${icon("back")}</button><div class="receipt-brand-emblem">${brandMark()}${t.referenceReceipt ? "" : "<i></i><i></i><i></i><i></i>"}</div><p class="native-receipt-date">${escapeHtml(receiptDate(t.date))}</p><h1>Transaction Successful</h1><p class="receipt-channel">${escapeHtml(channel)}</p><div class="native-receipt-card"><h2>${nativeAmount(t.amount)}</h2><p>${t.amount > 0 ? "received from" : "transferred to"}</p><h3>${escapeHtml(t.name.toUpperCase())}</h3><span class="receipt-account">${escapeHtml(t.account || "0300 000 0001")}</span>${tear}${detail("Transaction Amount", "Rs. " + money(Math.abs(t.amount)))}${extras}${detail("TID", t.id || "DEMO-SAMPLE")}<span class="receipt-sample-stamp">DEMO · NOT A REAL PAYMENT</span></div><div class="securely-sent">Securely sent via ${brandMark()}</div><div class="native-receipt-actions"><button data-action="save-receipt">${icon("download")} Save</button><button data-action="share-receipt">${icon("share")} Share</button><button class="repeat-round" data-action="repeat-selected" aria-label="Repeat this payment">${icon("repeat-money")}</button></div></div>`;
}

function qrArt() {
  let squares = "";
  for (let y = 0; y < 21; y++)
    for (let x = 0; x < 21; x++) {
      const finder = (ox, oy) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7;
      const inFinder = finder(0, 0) || finder(14, 0) || finder(0, 14);
      if (!inFinder && (x * 11 + y * 7 + x * y) % 5 < 2)
        squares += `<rect x="${x}" y="${y}" width="1" height="1"/>`;
    }
  for (const [x, y] of [
    [0, 0],
    [14, 0],
    [0, 14],
  ])
    squares += `<rect x="${x}" y="${y}" width="7" height="7"/><rect x="${x + 1}" y="${y + 1}" width="5" height="5" fill="white"/><rect x="${x + 2}" y="${y + 2}" width="3" height="3"/>`;
  return `<svg viewBox="-2 -2 25 25" class="qr-art" aria-label="Decorative demo QR code, not a payment code" role="img">${squares}</svg>`;
}
function scan() {
  return (
    heading("Scan & Pay") +
    `<div class="scan-screen"><div class="scan-tabs"><button class="${state.qrReceive ? "" : "selected"}" data-action="qr-scan">Scan QR</button><button class="${state.qrReceive ? "selected" : ""}" data-action="qr-receive">My QR</button></div><p>${state.qrReceive ? "Receive money with your QR" : "Place a QR code inside the frame"}</p><div class="scanner"><div class="scanner-corner tl"></div><div class="scanner-corner tr"></div><div class="scanner-corner bl"></div><div class="scanner-corner br"></div>${qrArt()}${state.qrReceive ? "" : '<div class="scan-line"></div>'}<span class="qr-demo-label">DEMO ONLY</span></div><h2>${state.qrReceive ? "Muhammad Mohsin" : "Scan a demo payment"}</h2><p class="scan-sub">${state.qrReceive ? "This display code cannot receive real payments." : "Camera access is not needed for this preview."}</p>${btn(state.qrReceive ? "Copy demo account" : "Try demo scan", state.qrReceive ? "copy-demo" : "scan-demo")}<span class="scan-footer">${icon("shield")} Simulated QR experience</span></div>`
  );
}
function cards() {
  return (
    heading("My Debit Cards") +
    `<div class="page-body"><div class="segmented">${["Physical", "Virtual", "Women"].map((t) => `<button class="${state.tab === t ? "selected" : ""}" data-action="card-tab" data-value="${t}">${t}</button>`).join("")}</div><div class="debit-card ${state.tab === "Women" ? "women-card" : ""}"><div>${wordmark()}<span>${state.tab.toUpperCase()}</span></div><div class="card-chip">${icon("card")}${icon("wifi")}</div><p class="card-number">${state.cardVisible ? "0000 0000 0000 2026" : "••••  ••••  ••••  2026"}</p><div class="card-owner"><span>MUHAMMAD MOHSIN<br><small>DEMO CARD · NOT VALID</small></span><span class="mastercard"><i></i><i></i></span></div></div><div class="card-controls"><button data-action="card-details">${icon("eye")}<span>${state.cardVisible ? "Hide" : "Show"} details</span></button><button data-action="freeze">${icon("lock")}<span>${state.frozen ? "Unfreeze" : "Freeze"} card</span></button><button data-action="card-limit">${icon("card")}<span>Card limits</span></button></div>${state.frozen ? '<p class="info-note">Your demo card is frozen. Tap Unfreeze card to enable it.</p>' : ""}<div class="list-card">${row("Online payments", "Manage your demo card preferences", "bag", "card-settings")}${row("Card details", "Expiry, card type and account", "card", "card-info")}${row("Help with your card", "Frequently asked questions", "headset", "help")}</div><p class="sample-note">Display card only. Not connected to a card network.</p></div>`
  );
}
const offerData = [
  [
    "Shopping",
    "More smiles. More savings.",
    "Save on your everyday shopping.",
    "bag",
    "red",
  ],
  [
    "Food",
    "A little treat, on us.",
    "Explore your favourite food deals.",
    "gift",
    "gold",
  ],
  [
    "Travel",
    "Your next trip starts here.",
    "Discover travel offers in one place.",
    "travel",
    "dark",
  ],
];
function offers() {
  return (
    heading("Rewards & Offers") +
    `<div class="page-body"><div class="rewards-hero">${icon("gift")}<span>Your loyalty points</span><h2>1,250</h2><span>Silver member</span><div class="progress-track"><span></span></div><small>750 more points to Gold</small></div><div class="filter-tabs">${["All", "Shopping", "Food", "Travel"].map((x) => `<button class="${(state.offerFilter || "All") === x ? "selected" : ""}" data-action="offer-filter" data-value="${x}">${x}</button>`).join("")}</div>${offerData
      .filter(
        (o) =>
          !state.offerFilter ||
          state.offerFilter === "All" ||
          o[0] === state.offerFilter,
      )
      .map(
        ([cat, title, desc, ic, color]) =>
          `<button class="offer-card ${color}" data-action="offer" data-title="${title}"><span class="offer-category">${cat}</span><h2>${title}</h2><p>${desc}</p>${icon(ic)}<small>Illustrative portfolio offer</small></button>`,
      )
      .join("")}</div>`
  );
}
function profile() {
  return (
    heading("My Account") +
    `<div class="page-body"><div class="profile-head"><span class="profile-avatar">MM</span><h2>Muhammad Mohsin</h2><p>0300 000 0000</p><span class="demo-badge">DEMO ACCOUNT</span></div><div class="list-card">${row("Account details", "View your sample account information", "user", "account-details")}${row("My debit cards", "Physical & virtual cards", "card", "cards")}${row("Transaction history", "View your recent activity", "history", "history")}${row("Notifications", "Updates from your demo account", "bell", "notifications")}${row("Help & support", "Find answers and app information", "headset", "help")}${row("Replay welcome screen", "See the splash and demo entry flow", "refresh", "welcome")}${row("Reset demo", "Restore the starting sample data", "refresh", "reset")}</div><p class="sample-note">Unofficial portfolio recreation<br>JazzCash branding belongs to its respective owner.</p></div>`
  );
}
function more() {
  return (
    heading("All Services") +
    `<div class="page-body"><div class="input-wrap search-wrap">${icon("search")}<input id="service-search" type="search" placeholder="Find a service" aria-label="Find a service"></div><div id="all-services">${serviceGrid([...services.slice(0, 8), ["My Debit Cards", "card", "cards"], ["Rewards", "gift", "offers"], ["QR Payments", "scan", "scan"], ["ReadyCash", "hand", "loan"]])}</div></div>`
  );
}
const categories = {
  banking: [
    "Banking & Finance",
    [
      ["My Debit Cards", "Manage physical & virtual cards", "card", "cards"],
      ["Savings", "Explore sample savings plans", "bank", "savings"],
      ["ReadyCash", "Explore the loan screen", "hand", "loan"],
      ["Insurance", "Browse demo coverage options", "shield", "insurance"],
    ],
  ],
  market: [
    "Marketplace",
    [
      ["Shopping", "Browse shopping offers", "bag", "offers"],
      ["Food & Delivery", "Explore food offers", "gift", "food-offers"],
      ["Gift Hub", "View sample gift cards", "gift", "gift-hub"],
    ],
  ],
  government: [
    "Government Payments",
    [
      ["Traffic Challan", "View a sample challan payment", "bill", "gov-bill"],
      ["Passport Fee", "Explore the fee payment flow", "user", "gov-bill"],
      ["Excise & Taxation", "Preview a government payment", "bank", "gov-bill"],
    ],
  ],
  travel: [
    "Travel",
    [
      ["Bus Tickets", "Browse sample routes", "travel", "bus"],
      ["Railway Tickets", "Preview railway booking", "travel", "train"],
      ["Travel Offers", "See available demo deals", "gift", "travel-offers"],
    ],
  ],
  services: [
    "Other Payments & Services",
    [
      ["Donations", "Browse demo donation causes", "hand", "donation"],
      ["Education", "Preview fee payments", "bill", "education"],
      ["Invite Friends", "Copy the portfolio demo message", "user", "invite"],
      ["Help & Support", "Find answers", "headset", "help"],
    ],
  ],
};
function category(key) {
  const [name, items] = categories[key];
  return (
    heading(name) +
    `<div class="page-body"><div class="list-card">${items.map((args) => row(...args)).join("")}</div></div>`
  );
}
function help() {
  return (
    heading("Help & Support") +
    `<div class="page-body"><div class="support-hero">${icon("headset")}<h2>How can we help?</h2><p>Everything you need to explore the demo.</p></div>${[
      [
        "Can I make a real payment?",
        "No. All balances, contacts, cards and transactions are fictional. Everything happens locally in your browser.",
      ],
      [
        "Does this ask for my MPIN or OTP?",
        "No credentials are needed. Use the demo entry button and sample account details.",
      ],
      [
        "Will my demo activity be saved?",
        "Activity lasts for this page session. Reload or use Reset demo to restore the starting balance.",
      ],
      [
        "Is this the official JazzCash app?",
        "This is an independent portfolio recreation, based on publicly available design references. It is not affiliated with JazzCash.",
      ],
    ]
      .map(
        ([q, a]) =>
          `<details class="faq"><summary>${q}</summary><p>${a}</p></details>`,
      )
      .join("")}</div>`
  );
}
function welcome() {
  return `<div class="welcome"><img src="assets/jazzcash-logo.png" alt="JazzCash" class="welcome-logo"><h1>JazzCash Hai Na!</h1><p>Your everyday money companion.</p><div class="welcome-bottom"><span class="demo-badge">ANDROID UI · PORTFOLIO DEMO</span><h2>Welcome to your demo account</h2><p>Explore the experience with sample data.</p>${btn("Enter demo account", "enter-demo")}<small>No phone number, OTP or MPIN required.</small></div></div>`;
}
const views = {
  home,
  transfer,
  recipient,
  amount: amountView,
  review,
  receipt,
  bills,
  "bill-details": billDetails,
  load,
  packages,
  history: historyView,
  "transaction-details": transactionDetails,
  scan,
  cards,
  offers,
  profile,
  more,
  help,
  welcome,
  ...Object.fromEntries(
    Object.keys(categories).map((k) => [k, () => category(k)]),
  ),
};
let stopBalanceRefresh = null;
function render({ keepScroll = false } = {}) {
  stopBalanceRefresh?.();
  nav();
  const scroll = $("#screen").scrollTop;
  $("#screen").classList.toggle("history-container", state.view === "history");
  $("#screen").innerHTML = (views[state.view] || home)();
  $("#screen").scrollTop = keepScroll ? scroll : 0;
  document.title = `${state.view === "home" ? "JazzCash Android" : state.view.replace(/-/g, " ")} · Portfolio Demo`;
}
function go(view, { replace = false } = {}) {
  closeModal();
  if (!views[view]) view = "home";
  if (state.view !== view) {
    state.history.push(state.view);
    state.view = view;
    if (replace) history.replaceState({ view }, "", `#${view}`);
    else history.pushState({ view }, "", `#${view}`);
  }
  render();
}
function back() {
  if ($("#overlay dialog")) return closeModal();
  if (state.history.length) {
    history.back();
  } else go("home", { replace: true });
}
window.addEventListener("popstate", (e) => {
  closeModal();
  state.view = views[e.state?.view] ? e.state.view : "home";
  state.history.pop();
  render();
});
function modal(title, body, actions = "") {
  closeModal();
  $("#overlay").innerHTML =
    `<dialog aria-labelledby="dialog-title"><div class="sheet-handle"></div><div class="sheet-heading"><h2 id="dialog-title">${title}</h2><button class="icon-btn" data-action="close" aria-label="Close">${icon("close")}</button></div><div class="sheet-body">${body}</div>${actions}</dialog>`;
  const d = $("#overlay dialog");
  d.showModal();
  d.addEventListener("click", (e) => {
    if (e.target === d) {
      const r = d.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        closeModal();
    }
  });
  d.addEventListener("cancel", (e) => {
    if (state.busy) e.preventDefault();
  });
}
function closeModal() {
  if (state.busy) return;
  $("#overlay dialog")?.close();
  $("#overlay").innerHTML = "";
}
function openHistory() {
  state.historyLoading = true;
  go("history");
  return loading(() => {
    state.historyLoading = false;
    render();
  }, "Loading transaction history");
}
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function loading(callback, label = "Please wait…") {
  if (state.busy) return;
  modal(
    "",
    `<div class="loading-panel" role="status">${loaderMarkup()}<span class="sr-only">${label}</span></div>`,
  );
  state.busy = true;
  $("#overlay dialog").classList.add("loading-dialog");
  const stopAnimation = animateLoader($("#overlay .jazzcash-loader"), {
    phase: 450,
  });
  try {
    await delay(1250);
    state.busy = false;
    closeModal();
    callback();
  } finally {
    stopAnimation();
    state.busy = false;
  }
}
function refreshBalance() {
  if (stopBalanceRefresh) return;
  const amount = $(".balance-link");
  const button = $(".refresh-balance");
  if (!amount || !button) return;
  const previous = amount.innerHTML;
  amount.classList.add("balance-refreshing");
  amount.setAttribute("aria-busy", "true");
  amount.innerHTML = `<span>Rs.</span><span class="balance-loader" role="status" aria-label="Refreshing balance">${loaderMarkup()}</span>`;
  button.disabled = true;
  const stopAnimation = animateLoader(amount.querySelector("svg"));
  const timer = setTimeout(() => stopBalanceRefresh?.(), LOADER_CYCLE_MS * 2);
  stopBalanceRefresh = () => {
    clearTimeout(timer);
    stopAnimation();
    amount.innerHTML = previous;
    amount.classList.remove("balance-refreshing");
    amount.removeAttribute("aria-busy");
    button.disabled = false;
    stopBalanceRefresh = null;
  };
}
function startAmount(type, recipient, number = "", amount = 0) {
  state.type = type;
  state.recipient = recipient;
  state.recipientNumber = number;
  state.amount = amount;
  state.note = "";
  go("amount");
}
function contact(name, number) {
  state.method = "JazzCash";
  startAmount("send", name, number);
}
function info(title, body) {
  modal(title, `<p class="muted">${body}</p>`, btn("Got it", "close"));
}
function commitDemo() {
  const incoming = ["add", "loan"].includes(state.type);
  if (
    !Number.isFinite(state.amount) ||
    state.amount <= 0 ||
    (!incoming && state.amount > state.balance)
  ) {
    toast("Please check the amount and available balance.");
    return;
  }
  loading(() => {
    state.balance =
      Math.round(
        (state.balance + (incoming ? state.amount : -state.amount)) * 100,
      ) / 100;
    const t = {
      name: state.recipient,
      type: {
        send: "Money Transfer",
        bill: "Bill payment",
        load: "Mobile load",
        add: "Money added",
        loan: "ReadyCash demo",
      }[state.type],
      amount: incoming ? state.amount : -state.amount,
      account: state.recipientNumber || "0300 000 0000",
      // Keep new simulated payments within the requested October 8 demo timeline.
      date:
        "08 October, 2026 | " +
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Karachi",
        }).format(new Date()),
      icon: {
        send: "send",
        bill: "bill",
        load: "phone",
        add: "plus",
        loan: "hand",
      }[state.type],
      id: "DEMO-" + Date.now().toString().slice(-9),
    };
    transactions.unshift(t);
    state.last = t;
    state.selectedTransaction = t;
    go("transaction-details");
  }, "Processing demo payment…");
}
async function splash() {
  if (state.busy) return;
  $("#overlay").innerHTML =
    `<div class="splash" role="status"><img src="assets/jazzcash-logo.png" alt="JazzCash"><div class="loader-dots"><i></i><i></i><i></i></div><span>JazzCash Hai Na!</span><small>UNOFFICIAL PORTFOLIO DEMO</small></div>`;
  await delay(1350);
  $("#overlay").innerHTML = "";
}
function toast(text) {
  $("#toast").textContent = text;
  $("#toast").classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(
    () => $("#toast").classList.remove("show"),
    2800,
  );
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-action]");
  if (!b || state.busy) return;
  const a = b.dataset.action;

  if (a === "history-tab") {
    state.historyTab = b.dataset.value;
    return render();
  }
  if (a === "native-filter") {
    state.filter = state.filter === b.dataset.value ? "All" : b.dataset.value;
    return render();
  }
  if (a === "date-filter")
    return modal(
      "Date",
      ["All dates", ...transactionDates()]
        .map(
          (x) =>
            `<button class="filter-choice ${state.dateFilter === x ? "selected" : ""}" data-action="set-date" data-value="${x}">${x}${state.dateFilter === x ? icon("check") : ""}</button>`,
        )
        .join(""),
    );
  if (a === "set-date") {
    state.dateFilter = b.dataset.value;
    closeModal();
    return render();
  }
  if (a === "category-filter")
    return modal(
      "Categories",
      ["All", ...new Set(transactions.map((t) => t.type))]
        .map(
          (x) =>
            `<button class="filter-choice ${state.categoryFilter === x ? "selected" : ""}" data-action="set-category" data-value="${escapeHtml(x)}">${escapeHtml(x)}${state.categoryFilter === x ? icon("check") : ""}</button>`,
        )
        .join(""),
    );
  if (a === "set-category") {
    state.categoryFilter = b.dataset.value;
    closeModal();
    return render();
  }
  if (a === "clear-native-filter") {
    state.filter = "All";
    state.dateFilter = "All dates";
    state.categoryFilter = "All";
    return render();
  }
  if (a === "statement")
    return modal(
      "Account Statement",
      `${detail("Period", statementPeriod())}${detail("Transactions", String(transactions.length))}<p class="muted">Download your sample transaction history.</p>`,
      btn("Download demo statement", "save-statement"),
    );
  if (a === "save-statement") {
    downloadText(
      "jazzcash-demo-statement.csv",
      "text/csv",
      "DEMO ONLY - NOT A BANK STATEMENT\nDate,Description,Amount,Reference\n" +
        transactions
          .map((t) =>
            [t.date, t.name, t.amount, t.id || "DEMO"]
              .map((v) => '"' + String(v).replaceAll('"', '""') + '"')
              .join(","),
          )
          .join("\n"),
    );
    closeModal();
    return toast("Sample statement saved.");
  }
  if (a === "repeat-transaction" || a === "repeat-selected") {
    const t =
      a === "repeat-selected"
        ? state.selectedTransaction
        : transactions[Number(b.dataset.index)];
    state.method = "JazzCash";
    return startAmount(
      "send",
      t.name,
      t.account || "03000000001",
      Math.abs(t.amount),
    );
  }
  if (a === "save-receipt") return saveReceipt();
  if (a === "share-receipt") {
    const t = state.selectedTransaction;
    return copy(
      `DEMO ONLY — NOT A REAL PAYMENT\nSample amount: Rs. ${money(Math.abs(t.amount))}\nTo: ${t.name}\nReference: ${t.id}`,
    );
  }
  if (a === "yeylo")
    return info(
      "Yeylo",
      "Browse shopping categories and offers in this frontend preview. Choose Marketplace from All Services to explore more.",
    );
  if (a === "sehat")
    return info(
      "Sehat +",
      "Your health, your priority. Explore the health service preview. No consultation or subscription is created.",
    );
  if (a === "corporate") {
    state.method = "Corporate payment";
    return startAmount("bill", "Demo Corporate Payment", "DEMO-CORPORATE", 100);
  }
  if (a === "committee")
    return info(
      "Committee",
      "Set a savings goal with friends. This is a screen preview; no money is collected.",
    );
  if (a === "tbills")
    return info(
      "T-Bills",
      "Explore the treasury bills screen. This portfolio demo does not offer investment products or execute trades.",
    );
  if (a === "locator")
    return info(
      "Find an Agent",
      "Agent locator preview. Location access is not required for this demo.",
    );
  if (a === "favourites")
    return modal(
      "Favourites",
      row("Ali Ahmed", "0300 000 0001", "user", "quick-ali") +
        row("Sara Khan", "0300 000 0002", "user", "quick-sara"),
    );

  if (a === "history") return openHistory();
  if (a === "history-refresh") return openHistory();
  if (a === "history-search-toggle") {
    state.showHistorySearch = !state.showHistorySearch;
    render({ keepScroll: true });
    if (state.showHistorySearch) $("#history-search").focus();
    return;
  }
  if (views[a]) {
    closeModal();
    return go(a);
  }
  if (a === "back") return back();
  if (a === "close") return closeModal();
  if (a === "hide") {
    state.hidden = !state.hidden;
    return render({ keepScroll: true });
  }
  if (a === "refresh") return refreshBalance();
  if (a === "splash") return splash();
  if (a === "enter-demo")
    return loading(() => go("home"), "Opening your demo account…");
  if (a === "quick-ali") return contact("Ali Ahmed", "03000000001");
  if (a === "quick-sara") return contact("Sara Khan", "03000000002");
  if (a.startsWith("method-")) {
    state.method = {
      "method-jazz": "JazzCash",
      "method-bank": "Bank Account",
      "method-wallet": "Mobile Wallet",
      "method-raast": "Raast",
    }[a];
    state.recipientNumber = "";
    return go("recipient");
  }
  if (a === "amount-preset") {
    $("#amount").value = b.dataset.value;
    return;
  }
  if (a === "confirm") return commitDemo();
  if (a === "add")
    return modal(
      "Add Money",
      `<p class="muted">Choose a way to top up your demo wallet.</p>${row("Bank transfer", "Simulate an incoming bank transfer", "bank", "add-bank")}${row("JazzCash agent", "Simulate a cash deposit", "user", "add-agent")}`,
    );
  if (a === "add-bank" || a === "add-agent") {
    closeModal();
    state.method = a === "add-bank" ? "Bank transfer" : "Cash deposit";
    return startAmount("add", "My JazzCash Wallet");
  }
  if (a === "loan") {
    state.method = "ReadyCash demo";
    return startAmount("loan", "My JazzCash Wallet", "", 1000);
  }
  if (a.startsWith("utility-")) {
    state.utility = {
      "utility-electric": "Electricity",
      "utility-gas": "Gas",
      "utility-internet": "Internet",
      "utility-water": "Water",
      "utility-phone": "Telephone",
    }[a];
    return go("bill-details");
  }
  if (a === "saved-bill") {
    state.method = "Electricity";
    return startAmount("bill", "LESCO", "12345678901234", 2840);
  }
  if (a === "load-tab") return go("load");
  if (a === "package") {
    state.method = "Jazz";
    return startAmount(
      "load",
      b.dataset.name,
      "03000000000",
      Number(b.dataset.price),
    );
  }
  if (a === "filter") {
    state.filter = b.dataset.value;
    return render();
  }
  if (a === "clear-filter") {
    state.filter = "All";
    state.search = "";
    return render();
  }
  if (a === "transaction") {
    state.selectedTransaction = transactions[Number(b.dataset.index)];
    return loading(
      () => go("transaction-details"),
      "Loading transaction details",
    );
  }
  if (a === "qr-scan" || a === "qr-receive") {
    state.qrReceive = a === "qr-receive";
    return render();
  }
  if (a === "scan-demo")
    return loading(() => {
      state.method = "QR payment";
      startAmount("send", "Demo Corner Store", "DEMO-MERCHANT", 250);
    }, "Reading demo QR…");
  if (a === "copy-demo")
    return copy("DEMO ACCOUNT — 03000000000 — not a real payment account");
  if (a === "card-tab") {
    state.tab = b.dataset.value;
    return render();
  }
  if (a === "virtual" || a === "women") {
    state.tab = a === "virtual" ? "Virtual" : "Women";
    return go("cards");
  }
  if (a === "card-details") {
    state.cardVisible = !state.cardVisible;
    return render();
  }
  if (a === "freeze") {
    state.frozen = !state.frozen;
    render();
    return toast(state.frozen ? "Demo card frozen." : "Demo card unfrozen.");
  }
  if (a === "card-limit")
    return info(
      "Card Limits",
      "Demo daily spending limit: Rs. 50,000. ATM withdrawal limit: Rs. 25,000. These are illustrative amounts, not official product terms.",
    );
  if (a === "card-settings")
    return modal(
      "Card Preferences",
      `<label class="toggle-row">Online payments<input type="checkbox" id="online-payments" ${state.onlinePayments === false ? "" : "checked"}><span></span></label><label class="toggle-row">Contactless payments<input type="checkbox" id="contactless" ${state.contactless === false ? "" : "checked"}><span></span></label><p class="sample-note">Preferences apply to this demo session only.</p>`,
      btn("Save preferences", "save-card-settings"),
    );
  if (a === "save-card-settings") {
    state.onlinePayments = $("#online-payments").checked;
    state.contactless = $("#contactless").checked;
    closeModal();
    return toast("Demo card preferences saved.");
  }
  if (a === "card-info")
    return info(
      "Demo Card Details",
      "Card number: 0000 0000 0000 2026. Expiry: 12/30. This is a fictional display card. No real card credentials are stored or requested.",
    );
  if (a === "offer-filter") {
    state.offerFilter = b.dataset.value;
    return render();
  }
  if (a === "food-offers" || a === "travel-offers") {
    state.offerFilter = a === "food-offers" ? "Food" : "Travel";
    return go("offers");
  }
  if (a === "offer") {
    state.offerTitle = b.dataset.title;
    return modal(
      escapeHtml(state.offerTitle),
      '<p class="muted">A sample offer for the portfolio experience. No live discount or redemption is available.</p>',
      btn(
        (state.savedOffers || []).includes(state.offerTitle)
          ? "Saved to favourites"
          : "Save offer",
        "save-offer",
      ),
    );
  }
  if (a === "save-offer") {
    state.savedOffers = [
      ...new Set([...(state.savedOffers || []), state.offerTitle]),
    ];
    closeModal();
    return toast("Offer saved for this demo session.");
  }
  if (a === "account-details")
    return modal(
      "Account Details",
      `${detail("Account name", "Muhammad Mohsin")}${detail("Mobile number", "0300 000 0000")}${detail("Account type", "Demo wallet")}${detail("Balance", "Rs. " + money(state.balance))}<p class="sample-note">All account information is fictional.</p>`,
      btn("Done", "close"),
    );
  if (a === "notifications")
    return modal(
      "Notifications",
      `<div class="notification">${icon("gift")}<div><b>Welcome to your demo!</b><p>Explore your wallet, cards and rewards.</p><small>Just now</small></div></div><div class="notification">${icon("shield")}<div><b>Your privacy comes first</b><p>This demo never asks for OTPs or MPINs.</p></div></div>`,
      btn("Mark all as read", "read-notifications"),
    );
  if (a === "read-notifications") {
    closeModal();
    return toast("All notifications marked as read.");
  }
  if (a === "reset")
    return modal(
      "Reset the demo?",
      '<p class="muted">Restore the sample balance and history. Your demo payments and preferences will be cleared.</p>',
      btn("Reset demo", "reset-confirm") +
        btn("Keep exploring", "close", "text-button"),
    );
  if (a === "reset-confirm") {
    closeModal();
    Object.assign(state, {
      balance: initialBalance,
      hidden: false,
      filter: "All",
      dateFilter: "All dates",
      categoryFilter: "All",
      historyTab: "All Payments",
      search: "",
      frozen: false,
      cardVisible: false,
      savedOffers: [],
      onlinePayments: true,
      contactless: true,
      last: null,
    });
    transactions = [...initialTransactions];
    go("home");
    return toast("Demo restored to its starting state.");
  }
  if (a === "about")
    return modal(
      "About this project",
      '<p>An independent, frontend-only recreation of the JazzCash Android experience for a developer portfolio.</p><p class="muted">Based on public app-store and brand references. Secondary screens and loading motion are approximations; this is not an exact or official release.</p><p class="muted">All balances, numbers, packages and transactions are fictional. No backend, credentials or real payments.</p><p><a href="https://play.google.com/store/apps/details?id=com.techlogix.mobilinkcustomer" target="_blank" rel="noopener noreferrer">Official Android app reference</a></p>',
      btn("Explore the demo", "close"),
    );
  if (a === "recent")
    return modal(
      "Recent Screens",
      `<div class="list-card">${
        [...new Set(state.history)]
          .slice(-4)
          .reverse()
          .map((v) =>
            row(
              v[0].toUpperCase() + v.slice(1),
              "Return to this screen",
              "history",
              v,
            ),
          )
          .join("") ||
        '<p class="muted">Your recently opened screens will appear here.</p>'
      }</div>`,
    );
  if (a === "tap")
    return info(
      "Tap Pay",
      "Tap-to-pay interface preview. NFC and real card payments are not enabled in this web demo. You can explore the QR payment demo from the bottom navigation.",
    );
  if (a === "edit")
    return modal(
      "Customise Home",
      '<p class="muted">Choose the first service in your home grid.</p>' +
        services
          .slice(0, 8)
          .map(([label, ic], i) =>
            row(label, "Set as your first shortcut", ic, "pin-" + i),
          )
          .join(""),
    );
  if (a.startsWith("pin-")) {
    const i = Number(a.slice(4));
    const item = services.splice(i, 1)[0];
    services.unshift(item);
    closeModal();
    render();
    return toast("Home shortcut order updated.");
  }
  if (a === "edit-favourites")
    return modal(
      "Favourite Contacts",
      row("Ali Ahmed", "0300 000 0001", "user", "quick-ali") +
        row("Sara Khan", "0300 000 0002", "user", "quick-sara") +
        '<p class="muted">Choose a favourite to start a demo transfer.</p>',
    );
  if (a === "readyload")
    return info(
      "ReadyLoad",
      "Preview buying a mobile package and paying later. Choose Packages to explore sample bundles. This demo does not offer credit.",
    );
  if (a === "savings")
    return modal(
      "Savings Plans",
      '<p class="muted">Explore a sample savings goal.</p><label for="goal">Your goal name</label><input id="goal" placeholder="e.g. New laptop" maxlength="50"><label for="goal-amount">Target amount (Rs.)</label><input id="goal-amount" type="number" min="1" placeholder="50000">',
      btn("Create demo goal", "save-goal"),
    );
  if (a === "save-goal") {
    const goal = $("#goal").value.trim(),
      amount = Number($("#goal-amount").value);
    if (!goal || !Number.isFinite(amount) || amount <= 0)
      return toast("Enter a goal name and a positive target amount.");
    state.goal = { name: goal, amount };
    return modal(
      "Your Savings Goal",
      `<h3>${escapeHtml(goal)}</h3>${detail("Target", "Rs. " + money(amount))}${detail("Saved", "Rs. 0.00")}<div class="progress-track"><span style="width:0"></span></div><p class="sample-note">Sample goal created. No funds were moved.</p>`,
      btn("Done", "close"),
    );
  }
  if (a === "insurance")
    return info(
      "Insurance",
      "Browse health, life and mobile protection in the official app. This portfolio screen is a non-purchasable preview; no policy is issued.",
    );
  if (a === "gift-hub")
    return info(
      "Gift Hub",
      "Send a little happiness. Gift card browsing is represented in this demo through the Rewards screen. No gift cards can be purchased or redeemed.",
    );
  if (a === "gov-bill" || a === "education" || a === "donation") {
    state.method = "Demo payment";
    return startAmount(
      "bill",
      a === "education"
        ? "Demo Education Fee"
        : a === "donation"
          ? "Demo Donation"
          : "Demo Government Payment",
      "SAMPLE-REFERENCE",
      500,
    );
  }
  if (a === "bus" || a === "train")
    return modal(
      a === "bus" ? "Bus Tickets" : "Railway Tickets",
      '<p class="muted">Sample route: Lahore to Islamabad</p>' +
        detail("Departure", "09:00 AM") +
        detail("Fare", "Rs. 2,500.00") +
        '<p class="sample-note">Illustrative route and fare. No booking is issued.</p>',
      btn("Preview payment", "travel-pay"),
    );
  if (a === "travel-pay") {
    closeModal();
    state.method = "Travel";
    return startAmount("bill", "Demo Travel Ticket", "LAH-ISB-DEMO", 2500);
  }
  if (a === "invite")
    return copy(
      "Explore this unofficial JazzCash Android UI portfolio demo. No real payments or sign-in.",
    );
});
async function copy(value) {
  try {
    await navigator.clipboard.writeText(value);
    toast("Demo information copied.");
  } catch {
    info("Demo information", value);
  }
}
document.addEventListener("submit", (e) => {
  e.preventDefault();
  const error = $("#form-error");
  if (e.target.id === "recipient-form") {
    const number = $("#recipient").value.trim();
    const valid =
      state.method === "Bank Account"
        ? /^\d{10,24}$/.test(number)
        : /^03\d{9}$/.test(number);
    if (!valid) {
      error.textContent =
        state.method === "Bank Account"
          ? "Enter a 10–24 digit sample account number."
          : "Enter an 11-digit number starting with 03.";
      return;
    }
    const method = state.method;
    startAmount(
      "send",
      number === "03000000001"
        ? "Ali Ahmed"
        : number === "03000000002"
          ? "Sara Khan"
          : method === "Bank Account"
            ? `${$("#bank").value} Demo Account`
            : "Demo Recipient",
      number,
    );
  }
  if (e.target.id === "amount-form") {
    const amount = Number($("#amount").value);
    const incoming = ["add", "loan"].includes(state.type);
    if (!Number.isFinite(amount) || amount < 1 || amount > 50000) {
      error.textContent = "Enter an amount between Rs. 1 and Rs. 50,000.";
      return;
    }
    if (!incoming && amount > state.balance) {
      error.textContent = "This amount exceeds your available demo balance.";
      return;
    }
    state.amount = Math.round(amount * 100) / 100;
    state.note = $("#note").value.trim();
    go("review");
  }
  if (e.target.id === "bill-form") {
    const reference = $("#reference").value.trim();
    if (!/^\d{8,20}$/.test(reference)) {
      error.textContent = "Enter an 8–20 digit sample reference number.";
      return;
    }
    const provider = $("#provider").value;
    state.method = state.utility;
    loading(
      () => startAmount("bill", provider, reference, 2840),
      "Fetching demo bill…",
    );
  }
  if (e.target.id === "load-form") {
    const number = $("#mobile").value.trim();
    if (!/^03\d{9}$/.test(number)) {
      error.textContent = "Enter an 11-digit number starting with 03.";
      return;
    }
    state.network = document.querySelector('[name="network"]:checked').value;
    state.method = state.network;
    startAmount("load", `${state.network} Mobile Load`, number, 100);
  }
});
document.addEventListener("input", (e) => {
  if (e.target.id === "history-search") {
    const pos = e.target.selectionStart;
    state.search = e.target.value;
    render();
    $("#history-search").focus();
    try {
      $("#history-search").setSelectionRange(pos, pos);
    } catch {}
  }
  if (e.target.id === "service-search") {
    const term = e.target.value.toLowerCase();
    $("#all-services").innerHTML = serviceGrid(
      [
        ...services.slice(0, 8),
        ["My Debit Cards", "card", "cards"],
        ["Rewards", "gift", "offers"],
        ["QR Payments", "scan", "scan"],
        ["ReadyCash", "hand", "loan"],
      ].filter((s) => s[0].toLowerCase().includes(term)),
    );
  }
});
history.replaceState({ view: "home" }, "", "#home");
render();
splash();
if (document.modelContext?.registerTool) {
  const lifecycle = new AbortController();
  try {
    Promise.resolve(
      document.modelContext.registerTool(
        {
          name: "navigate_demo_screen",
          description:
            "Open a screen in this frontend portfolio demo. Does not complete any payment.",
          inputSchema: {
            type: "object",
            properties: {
              screen: {
                type: "string",
                enum: [
                  "home",
                  "transfer",
                  "bills",
                  "load",
                  "history",
                  "cards",
                  "offers",
                  "profile",
                ],
              },
            },
            required: ["screen"],
            additionalProperties: false,
          },
          annotations: { readOnlyHint: false },
          execute(input) {
            const allowed = [
              "home",
              "transfer",
              "bills",
              "load",
              "history",
              "cards",
              "offers",
              "profile",
            ];
            if (!input || !allowed.includes(input.screen))
              throw new Error("Unsupported demo screen");
            go(input.screen);
            return { screen: state.view, demo: true };
          },
        },
        { signal: lifecycle.signal },
      ),
    ).catch(() => {});
  } catch {}
  window.addEventListener("pagehide", () => lifecycle.abort(), { once: true });
}

function downloadText(name, type, content) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function saveReceipt() {
  const t = state.selectedTransaction;
  const c = document.createElement("canvas");
  c.width = 760;
  c.height = 980;
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, 760, 980);
  ctx.textAlign = "center";
  ctx.fillStyle = "#842a39";
  ctx.font = "bold 34px Arial";
  ctx.fillText("JazzCash · Portfolio Demo", 380, 90);
  ctx.fillStyle = "#c21f30";
  ctx.font = "bold 24px Arial";
  ctx.fillText("DEMO — NOT A REAL PAYMENT", 380, 150);
  ctx.fillStyle = "#242424";
  ctx.font = "bold 54px Arial";
  ctx.fillText("Rs. " + money(Math.abs(t.amount)), 380, 260);
  ctx.font = "28px Arial";
  ctx.fillText(t.name, 380, 330);
  ctx.fillStyle = "#777";
  ctx.font = "20px Arial";
  ctx.fillText(t.date, 380, 390);
  ctx.fillText(t.id || "DEMO-SAMPLE", 380, 440);
  ctx.fillText("No funds were transferred.", 380, 540);
  ctx.fillText("Not valid as proof of payment.", 380, 580);
  ctx.save();
  ctx.translate(380, 780);
  ctx.rotate(-0.25);
  ctx.fillStyle = "#ed1c2420";
  ctx.font = "bold 100px Arial";
  ctx.fillText("SAMPLE ONLY", 0, 0);
  ctx.restore();
  c.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "jazzcash-demo-receipt.png";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  toast("Sample receipt saved.");
}
