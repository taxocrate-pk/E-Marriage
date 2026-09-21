import Image from "next/image";

export default function LongFormGuide({
  subject,
  country = "the relevant country",
  service = subject,
}) {
  const serviceName = service.toLowerCase();
  const image =
    serviceName.includes("nikah") || serviceName.includes("online")
      ? "/images/pages/online-nikah-international.webp"
      : serviceName.includes("court")
        ? "/images/pages/court-marriage-international.webp"
        : serviceName.includes("document") ||
            serviceName.includes("certificate") ||
            serviceName.includes("translation") ||
            serviceName.includes("apostille") ||
            serviceName.includes("registration")
          ? "/images/pages/marriage-documentation-international.webp"
          : "/images/international-couple.png";
  const sections = [
    [
      "Begin with legal capacity and genuine consent",
      `Every ${subject.toLowerCase()} assessment should begin with the legal capacity of both parties. Capacity normally includes age, identity, present marital status and the absence of a legal restriction that prevents the proposed marriage. Free consent is equally important. A remote connection, family involvement or an authorised representative must never hide uncertainty about whether either party is agreeing voluntarily. Names, passport details, dates of birth and marital-status information should be checked before documents are prepared, because an error at the beginning can pass into the marriage record and create difficulty later. Where a previous marriage ended, the relevant divorce order, divorce certificate or death certificate may need review. The applicable rules can come from the place of celebration, nationality, residence or the authority that will later receive the documents.`,
    ],
    [
      "Identify the law behind the ceremony",
      `Terms such as online marriage, court marriage, remote marriage, proxy marriage and Online Nikah are often used as if they describe one universal procedure. They do not. The important question is which recognised legal or religious procedure sits behind the label. A video call may assist communication but does not by itself create a registered marriage. A lawyer’s office may coordinate a consensual marriage, but that does not necessarily mean a judge performs it. A Nikah can meet religious requirements while civil registration remains a separate step. Before proceeding, couples should identify the officiant or registrar, the legal basis of the ceremony, the place at which it is legally treated as occurring and the authority responsible for the official record. This prevents the process from being built around technology or terminology rather than law.`,
    ],
    [
      "Plan identity checks, witnesses and representation",
      `The procedure for ${service.toLowerCase()} may require witnesses, an officiant, a registrar, an authorised representative or a combination of these roles. Their eligibility and physical location may matter. Where one party cannot attend, a special power of attorney or other authority may be considered, but it should be precise about the intended marriage, the parties and the acts the representative may perform. A general authority drafted for unrelated matters may be unsuitable. Identity should be verified through reliable documents, and the spelling of names should remain consistent. If a ceremony takes place through video communication, couples should confirm how identity and consent will be recorded and whether the chosen jurisdiction permits that form of participation. These details are more valuable than a generic promise that the entire process can be completed online.`,
    ],
    [
      "Treat registration as a core part of the plan",
      `The ceremony and the civil record should be planned together. A couple may complete a religious or customary ceremony yet still require registration before an official certificate can be issued. The competent authority might be a registrar, municipality, local council, Union Council or another civil office. The marriage record should correctly state the parties’ names, identity numbers, status, date and place of marriage, witnesses and any other required particulars. Couples should ask which document is the primary record, which document is a certified extract and which certificate is normally accepted by authorities in ${country}. Delayed registration or inconsistent records can complicate immigration, inheritance, spouse benefits and civil-status updates. Translation or authentication cannot safely cure a defective underlying entry, so accuracy at registration deserves careful attention.`,
    ],
    [
      "Prepare documents for their destination purpose",
      `Document requirements should be worked backwards from the authority that will receive them. An immigration department may request different evidence from a civil registry, court, university, employer or insurance provider. Common documents include passports, identity cards, proof of residence, evidence of current marital status, divorce or death records, photographs, witness details, authority documents and the official marriage certificate. Foreign-language records may require certified translation. Some documents require an apostille, while others follow consular legalisation or another attestation route. Authentication usually confirms a signature, seal or official capacity; it does not decide whether the marriage is substantively valid. Couples should confirm the required document type, validity period, certification method and order of translation and authentication before paying for unnecessary steps.`,
    ],
    [
      "Separate marriage validity from immigration acceptance",
      `A valid marriage and a successful immigration application are not the same decision. Immigration authorities may examine whether the marriage was legally created, whether it has been officially recorded and whether the relationship meets the requirements of the relevant visa or residence category. They may also consider physical presence, consummation, previous relationships, genuine intention, continuing contact and other evidence. A certificate is important, but it is not always the only evidence. No service should promise that ${subject.toLowerCase()} will automatically secure a spouse visa or recognition in ${country}. The responsible approach is to review the marriage route and immigration purpose together while respecting that only the competent authority can decide an application. Couples should retain communications, travel history and other genuine relationship evidence where relevant and lawful.`,
    ],
    [
      "Understand recognition across borders",
      `Cross-border recognition usually begins with the validity of the marriage under the law connected with its celebration. The destination country may then apply evidential rules, public-policy limits, registration requirements or its own rules about capacity. Remote and proxy arrangements can receive additional scrutiny because different jurisdictions take different approaches to physical presence and representation. Religious validity may also be distinct from civil recognition. A marriage can therefore be meaningful and valid for one purpose while further formalities remain necessary for another. The correct analysis identifies the country of celebration, the parties’ nationality and residence, the place where recognition is sought and the precise purpose for which the relationship must be proved. Broad statements that a marriage is “internationally valid” should be treated cautiously unless they are tied to those facts.`,
    ],
    [
      "Use a case-specific timeline and checklist",
      `A realistic timeline depends on document readiness, appointments, witness availability, authority documents, the ceremony, registration, certificate issuance, translation and authentication. Couples should avoid fixing travel, visa or family deadlines on the basis of an advertised processing time before the case is reviewed. A useful checklist records each required document, who will obtain it, whether it must be original or certified, its language, expiry or issue-date rules and the authority that will receive it. It should also identify the person responsible for registration and collection of the final certificate. This organised approach reduces duplication and allows problems to be addressed before they affect an application. E-Marriages uses the countries and intended document use as the starting point because those facts determine which steps deserve priority.`,
    ],
    [
      "Review practical risks before committing time or money",
      `Before paying a provider, booking travel or setting an immigration deadline, ask for a written explanation of the proposed route. It should identify the authority involved, where the marriage will legally take place, who performs or registers it, which original documents are required and what the couple will receive at the end. Couples should be cautious when a service relies only on phrases such as internationally valid, guaranteed recognition or instant certificate. They should also confirm refund terms, third-party fees and whether translation, attestation, registration and delivery are included. A professional assessment may reveal that a different route is safer or more useful for ${country}. Taking time to verify the process at the beginning is usually less costly than trying to repair an incomplete ceremony or inaccurate record later.`,
    ],
    [
      "Keep names and personal details consistent",
      `Cross-border cases often involve several versions of the same personal information. A passport may show a full name, a national identity card may use a different order, and a translated record may introduce another spelling. The marriage application, authority document, ceremony record, registration entry, certificate and later immigration forms should be compared carefully. Dates should follow an unambiguous format, and previous-marriage details should match the supporting evidence. If a genuine difference cannot be removed, couples should ask whether an affidavit, declaration or official correction is appropriate. Quietly copying an error into every new document is rarely a good solution. Consistency helps authorities connect the record to the correct people and reduces avoidable questions during recognition, visa, inheritance or civil-status procedures.`,
    ],
    [
      "Plan the steps that follow the certificate",
      `Receiving a marriage certificate is an important milestone, but it may not be the final administrative step. The couple may need certified copies, a computerised extract, a translation, an apostille, consular legalisation or registration with an overseas civil authority. The correct sequence matters because some offices will authenticate only an original or a recently issued certified copy, while a destination authority may require the translation to be completed by an approved professional. Couples should keep secure digital scans and a record of every submission, receipt and reference number. They should also protect original documents from unnecessary circulation. For ${subject.toLowerCase()}, the useful question is not simply whether a certificate exists, but whether the right certificate is ready in the right form for its intended use.`,
    ],
    [
      "Know when separate local advice is needed",
      `One adviser cannot safely replace every authority or professional involved in an international case. Separate advice may be needed on family law, immigration, taxation, inheritance, name changes, religious requirements or the effect of a marital-property regime. This is particularly important where either party has a previous marriage, children, assets in several countries, a pending visa matter or concerns about personal safety and consent. E-Marriages can help organise the marriage and documentation questions, but the final decision may depend on advice from a lawyer qualified in the relevant jurisdiction or confirmation from a registrar, embassy or immigration authority. A coordinated approach gives each issue to the right decision-maker and avoids treating one certificate as an answer to every cross-border question.`,
    ],
  ];
  return (
    <section className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.24em] text-champagne">
            Our service process
          </p>
          <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.03em] md:text-5xl">
            What our team handles for your marriage service.
          </h2>
        </div>
        <div className="relative mt-14 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={`${subject} services by E-Marriages`}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
        <div className="mt-16 space-y-12">
          {sections.map(([title, text], index) => (
            <section
              key={title}
              className="grid gap-5 border-t border-navy/15 pt-8 md:grid-cols-[80px_1fr]"
            >
              <span className="font-serif text-3xl text-champagne">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-serif text-3xl">{title}</h3>
                <p className="mt-5 text-base leading-8 text-navy/65">{text}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
