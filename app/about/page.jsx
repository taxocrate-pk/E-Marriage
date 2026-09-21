import InfoPage from "@/components/info-page";

export const metadata = {
  title: "About E-Marriages | International Marriage Guidance",
  description:
    "Learn about the international, careful and case-specific approach of E-Marriages.",
  alternates: { canonical: "https://e-marriages.com/about" },
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="About E-Marriages"
      title="Clearer guidance for couples across borders."
      intro="E-Marriages is an international information and professional-assistance platform focused on online, remote and cross-border marriage matters."
      sections={[
        [
          "Our purpose",
          "International couples often encounter conflicting information about ceremonies, registration, certificates and recognition. Our purpose is to organise those questions into a clear, responsible pathway. We explain the difference between a ceremony, its civil registration, the certificate issued afterwards and the separate decision another country may make about recognition. That structure helps couples understand what has been completed, what still needs attention and which authority can give a definitive answer.",
        ],
        [
          "Our approach",
          [
            "We begin with the countries, nationalities, current locations and present marital status of both parties.",
            "We distinguish religious, ceremonial, civil-registration, document-authentication and immigration questions.",
            "We identify the proposed place of celebration and the authority responsible for the official record.",
            "We avoid promises of universal validity, guaranteed recognition or automatic immigration approval.",
            "We explain documents, practical risks and next steps in clear international English.",
            "We encourage confirmation from the relevant registrar, embassy, immigration body or locally qualified lawyer when a decision falls outside general guidance.",
          ],
        ],
        [
          "International—not one-country-only",
          "The platform is designed for couples connected with the United Kingdom, United States, Canada, Europe, Australia, the Middle East, Pakistan and other jurisdictions. Every conclusion remains subject to the particular law and authority involved. A couple may be connected to several systems at once through nationality, residence, the place of marriage and the country where a certificate will be used. We treat those connections as part of one planning exercise while recognising that each authority keeps its own decision-making role.",
        ],
        [
          "Why terminology matters",
          "Words such as court marriage, online marriage, proxy marriage, remote marriage and Online Nikah are used differently around the world. A familiar label does not prove that the same procedure, officiant or registration system is involved. We look beyond the label to the actual legal or religious process: who gives consent, who witnesses it, whether representation is permitted, where the event is treated as occurring, who registers it and what official document is issued.",
        ],
        [
          "Documents should follow the destination purpose",
          "Couples often ask for an apostille, translation or attestation before confirming what the receiving authority actually requires. We encourage the opposite sequence. First identify the immigration department, civil registry, court, employer or other body that will receive the record. Then confirm which certificate, certification method, language and authentication route it accepts. This avoids paying for steps that do not address the underlying requirement.",
        ],
        [
          "Consent, identity and accuracy",
          "Free consent and reliable identity checks are fundamental. Remote communication or the involvement of relatives and representatives must never create uncertainty about either person’s intention. Names, dates of birth, passport details, previous-marriage records and witness information should remain consistent across applications, authority documents and certificates. Small discrepancies can become significant when the record crosses borders.",
        ],
        [
          "Recognition and immigration are separate questions",
          "A marriage may be valid under the law of its place of celebration without automatically satisfying every immigration or administrative requirement elsewhere. An immigration authority may examine registration, physical presence, the nature of the relationship and category-specific evidence. E-Marriages helps couples frame these questions but never represents a marriage certificate as a guaranteed visa result.",
        ],
        [
          "Professional boundaries",
          "Website information is general and cannot replace advice based on the law, documents and facts of a particular case. A lawyer-client or other professional relationship arises only through an express engagement with an appropriately qualified professional for the relevant matter. Government procedures, fees and forms may change, so current requirements should be verified before the couple commits money, travel or a deadline.",
        ],
        [
          "Our standard for responsible guidance",
          "We aim to be clear about both possibilities and limits. If a proposed route depends on unsettled facts, foreign law or the discretion of an authority, we say so. If a separate professional should review immigration, family-law, inheritance or safety concerns, we identify that need. Responsible international guidance is not a universal promise; it is a careful process of connecting the right facts, documents and questions to the right decision-maker.",
        ],
      ]}
    />
  );
}
