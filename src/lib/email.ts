import { Order } from "./orders";

// Sends an order-notification email via Resend.
// Requires env vars: RESEND_API_KEY and ORDER_EMAIL_TO (your inbox).
// If not configured, it silently does nothing (so the site never crashes).
export async function sendOrderEmail(order: Order): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ORDER_EMAIL_TO;
  if (!apiKey || !to) {
    console.log("Email non configuré (RESEND_API_KEY / ORDER_EMAIL_TO manquant).");
    return;
  }

  const c = order.config;
  const isDuo = c.type === "duo";
  const athletes = isDuo
    ? `${c.p1FirstName} ${c.p1LastName} & ${c.p2FirstName} ${c.p2LastName}`
    : `${c.firstName} ${c.lastName}`;

  const rows: [string, string][] = [
    ["Référence", order.id],
    ["Modèle", isDuo ? "Cadre Duo" : "Cadre Solo"],
    ["Temps", c.time],
    ["Athlète(s)", athletes],
    ["Pays", "FRA — France"],
    ["Classement général (#OV)", c.rankingOverall],
    ["Classement catégorie (#AG)", c.rankingAge],
    ["Montant", `${order.amount.toFixed(2)} €`],
    ["— Livraison —", ""],
    ["Nom", order.shipping.name],
    ["Email client", order.shipping.email],
    ["Adresse", order.shipping.address],
    ["Ville", `${order.shipping.postalCode} ${order.shipping.city}`],
    ["Pays", order.shipping.country],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto">
      <h2 style="color:#c9a24b">Nouvelle commande TrophyFrames</h2>
      <p>Une commande vient d'être payée. Détails ci-dessous :</p>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:6px 8px;border-bottom:1px solid #eee;color:#666;font-size:13px">${k}</td>
                 <td style="padding:6px 8px;border-bottom:1px solid #eee;font-weight:600;font-size:13px">${v}</td>
               </tr>`
          )
          .join("")}
      </table>
      <p style="color:#999;font-size:12px;margin-top:20px">
        Rappel : le patch est collé par le client à réception (zone velcro).
      </p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "TrophyFrames <onboarding@resend.dev>",
        to: [to],
        subject: `🖼️ Nouvelle commande ${order.id} — ${athletes}`,
        html,
      }),
    });
    if (!res.ok) {
      console.error("Resend erreur:", await res.text());
    }
  } catch (e) {
    console.error("Envoi email échoué:", e);
  }
}
