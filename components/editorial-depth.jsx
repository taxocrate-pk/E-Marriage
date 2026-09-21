const content = {
  services: [
    [
      "How we organise an international enquiry",
      "A useful assessment begins with the facts that connect the couple to different legal systems. We look at nationality, residence, physical location, previous marital status, the proposed place and form of marriage, and the country where the resulting record will be used. Those details help separate the ceremony from registration, document preparation and later recognition. The aim is to give couples a route they can understand and verify, rather than a package built around an attractive label. Where another authority or locally qualified professional must decide an issue, that boundary is identified clearly.",
    ],
    [
      "Court marriage and Online Nikah are not interchangeable",
      "Court marriage usually refers to a civil, registrar-led or lawyer-assisted route, but the meaning differs by jurisdiction. Online Nikah refers to a religious marriage process that may involve remote communication, witnesses and an authorised Nikah officiant. Neither phrase proves civil registration or acceptance abroad. Our country pages explain the questions couples should ask about capacity, consent, attendance, representation, witnesses, registration and the official certificate. Couples can then compare the available route with the requirements of the authority that will receive their documents.",
    ],
    [
      "Documentation planned for its final purpose",
      "A marriage document may be intended for a spouse visa, civil-status update, name change, inheritance matter, employer benefit or family record. Each use can create different requirements. Certified copies, translations, apostilles and consular legalisation are evidential steps; they do not repair a ceremony or registration that was invalid or incomplete. We therefore work backwards from the destination authority, identify the primary marriage record and arrange additional document steps only where they are relevant.",
    ],
    [
      "A careful, case-specific standard",
      "International couples deserve realistic explanations of timing, cost and uncertainty. Processing can depend on document availability, appointments, government offices, witnesses and third-party review. E-Marriages does not promise universal validity, guaranteed immigration approval or recognition in every country. We provide structured information, help couples identify missing facts and explain when confirmation from a registrar, embassy, immigration authority or locally qualified lawyer is appropriate.",
    ],
  ],
  blog: [
    [
      "Start with the place of celebration",
      "Online discussions often focus on where each person was sitting during a call. The more important legal question is where the marriage is treated as having been celebrated and under which authorised procedure. That answer can affect capacity, witnesses, registration and the form of certificate issued. A useful guide should identify that legal foundation before discussing whether another country may recognise the marriage.",
    ],
    [
      "Read validity, evidence and recognition separately",
      "A marriage may be valid where it occurred, yet the couple may still need an official extract, certified translation or authentication before using the record elsewhere. Recognition can also be purpose-specific. A civil registry, immigration department and court may ask different questions. Our articles separate these stages so readers do not mistake an apostille for proof of substantive validity or a certificate for a guaranteed visa outcome.",
    ],
    [
      "Use every guide as a preparation tool",
      "The guides are designed to help couples prepare better questions. Note the nationalities and current countries of both parties, any previous marriages, the preferred ceremony route and the exact destination use of the certificate. Then compare the general explanation with current instructions from the competent authority. Requirements change, and a short online article cannot replace review of the couple’s documents and circumstances.",
    ],
    [
      "Responsible information for international couples",
      "We avoid claims that one online process works everywhere. Remote participation, proxy authority, religious validity and civil registration are treated differently across jurisdictions. Where an answer depends on foreign law or immigration policy, the guide explains the limitation and points towards appropriate confirmation. This approach may feel more cautious, but it gives couples a stronger basis for decisions involving family status and official records.",
    ],
  ],
  contact: [
    [
      "What to include in your first message",
      "Tell us the nationality and present country of both parties, whether either person was previously married, the service being considered and where the final certificate will be used. If there is a deadline, explain what creates it. A short factual timeline is more useful than sending a large collection of documents at the first stage. Do not omit an earlier marriage or an uncertainty about identity records, because those details can change the appropriate route.",
    ],
    [
      "What happens after an enquiry",
      "The initial information is reviewed to identify the countries, authorities and document questions involved. We may ask for clarification before explaining possible next steps. An enquiry does not guarantee that a particular marriage route is available, and it does not create a professional relationship by itself. Where specialist local or immigration advice is necessary, that should be arranged with an appropriately qualified professional.",
    ],
    [
      "Protect personal and sensitive information",
      "Please do not send original passports, bank details, passwords or unrequested sensitive records by ordinary email. Begin with a description of the situation. If documents later need to be reviewed, use the method specifically provided for that purpose and redact information that is not required. Couples should retain their originals and keep a clear record of every document shared with a professional or authority.",
    ],
    [
      "Questions we can help you organise",
      "Enquiries may concern court marriage, Online Nikah, remote participation, witnesses, powers of attorney, marriage registration, certificates, certified translation, apostille or legalisation, and the use of a record abroad. Immigration approval remains the responsibility of the relevant authority. The goal of the first conversation is to identify the correct questions and a realistic sequence, not to make a universal promise before the facts are known.",
    ],
  ],
};

export default function EditorialDepth({ type }) {
  return (
    <section className="bg-[#e9e4d9] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.22em] text-champagne">
          Helpful context
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
          Understand the process before choosing the next step.
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-navy/10 md:grid-cols-2">
          {content[type].map(([title, text]) => (
            <article key={title} className="bg-[#e9e4d9] p-8 lg:p-10">
              <h3 className="font-serif text-3xl">{title}</h3>
              <p className="mt-5 text-sm leading-7 text-navy/60">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
