export function maskedAccount(account) {
  const digits = String(account || "").replace(/\D/g, "");
  return "*******" + (digits.slice(-4) || "0000");
}

export function transactionPresentation(t) {
  const type = t.type.toLowerCase();
  const received = t.amount > 0;
  const transfer = type === "money transfer";
  const repayment = type === "readycash" && !received;
  const method = t.method || (t.name === "RAAST Credit" ? "Raast" : "JazzCash");
  const raast = method === "Raast";
  let subtitle = t.name;
  let channel = "Payment completed";
  let purpose = "Others";
  let direction = "paid to";
  let recipient = t.name;

  if (received) {
    channel = raast ? "Received via RAAST" : "Received in JazzCash";
    direction = "received from";
    if (raast) subtitle = "RAAST Credit";
  } else if (transfer) {
    subtitle = raast
      ? `RAAST ID - ${maskedAccount(t.account)}`
      : `${method} - ${t.name.toUpperCase()}`;
    channel = raast ? "Transferred via RAAST" : `Transferred to ${method}`;
    direction = "transferred to";
  } else if (repayment) {
    subtitle = "Total Repayment";
    channel = "ReadyCash Repayment";
    purpose = "Loan Repayment";
    direction = "repaid to";
    recipient = "ReadyCash";
  } else if (type === "mobile load") {
    channel = "Mobile Load & Packages";
    purpose = "Mobile Load";
    direction = "loaded to";
  } else if (type === "bill payment") {
    channel = "Bill Payment";
    purpose = "Bill Payment";
  } else if (type === "merchant payment") {
    channel = "Merchant Payment";
    purpose = "Shopping";
    subtitle = `QR Payment - ${t.name}`;
  } else if (type === "education") {
    channel = "Education Payment";
    purpose = "Education";
  }

  return {
    subtitle: t.subtitle || subtitle,
    channel: t.receiptChannel || channel,
    purpose: t.purpose || purpose,
    direction,
    recipient,
    account: maskedAccount(t.account),
    canRepeat: !received && !repayment,
  };
}
