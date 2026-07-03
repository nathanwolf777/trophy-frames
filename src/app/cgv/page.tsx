import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description: "Conditions générales de vente de TrophyFrames.",
};

export default function CGVPage() {
  return (
    <LegalLayout
      title="Conditions Générales de Vente"
      updated="Janvier 2026"
      sections={[
        {
          h: "1. Objet",
          p: "Les présentes conditions régissent les ventes de cadres souvenirs personnalisés proposés par TrophyFrames sur son site. Toute commande implique l'acceptation sans réserve des présentes conditions.",
        },
        {
          h: "2. Produits",
          p: "TrophyFrames propose des cadres personnalisés (modèles Solo et Duo) fabriqués à la demande selon les informations fournies par le client via le configurateur. Les produits étant personnalisés, ils ne bénéficient pas du droit de rétractation prévu à l'article L221-28 du Code de la consommation.",
        },
        {
          h: "3. Prix",
          p: "Le prix de chaque cadre est de 29,99 € TTC, livraison incluse. Les prix sont indiqués en euros toutes taxes comprises. TrophyFrames se réserve le droit de modifier ses prix à tout moment, le prix appliqué étant celui en vigueur au moment de la commande.",
        },
        {
          h: "4. Commande et paiement",
          p: "La commande est validée après paiement intégral via Stripe. Le paiement est sécurisé et TrophyFrames n'a jamais accès aux données bancaires du client. Une confirmation de commande est affichée et envoyée par email.",
        },
        {
          h: "5. Livraison",
          p: "La livraison est gratuite. Le délai indicatif est de 5 à 10 jours ouvrés à compter de la validation de la commande. TrophyFrames ne saurait être tenue responsable des retards imputables au transporteur.",
        },
        {
          h: "6. Personnalisation",
          p: "Le client est seul responsable de l'exactitude des informations et du visuel transmis. Le client garantit disposer des droits sur toute image téléchargée. TrophyFrames se réserve le droit de refuser tout contenu illicite.",
        },
        {
          h: "7. Garanties et réclamations",
          p: "En cas de produit défectueux ou non conforme à la commande, le client dispose d'un délai de 14 jours pour effectuer une réclamation via la page Contact. Un remplacement sera proposé.",
        },
        {
          h: "8. Droit applicable",
          p: "Les présentes conditions sont soumises au droit français. Tout litige relève de la compétence des tribunaux français à défaut de résolution amiable.",
        },
      ]}
    />
  );
}
