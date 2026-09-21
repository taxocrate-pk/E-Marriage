const relatedPages = {
  'international-marriage': 'International Marriage',
  'cross-border-marriage': 'Cross-Border Marriage',
  'foreign-national-marriage': 'Foreign National Marriage',
  'marriage-recognition': 'Marriage Recognition Abroad',
  'online-marriage': 'Online Marriage',
  'remote-marriage': 'Remote Marriage',
  'proxy-marriage': 'Proxy Marriage',
  'online-nikah': 'Online Nikah',
  'marriage-by-video-conference': 'Marriage by Video Conference',
  'court-marriage': 'Court Marriage',
  'court-marriage-in-pakistan': 'Court Marriage in Pakistan',
  'court-marriage-for-overseas-pakistanis': 'Court Marriage for Overseas Pakistanis',
  'marriage-documentation': 'International Marriage Documentation',
  'marriage-certificate': 'Marriage Certificate Guidance',
  'apostille-attestation': 'Apostille and Attestation',
}

const commonSteps = [
  ['Review the countries involved', 'Identify where each party lives, their nationality and the jurisdiction connected with the proposed marriage.'],
  ['Assess the intended route', 'Consider attendance, consent, witnesses, identity checks, ceremony format and the available registration route.'],
  ['Prepare the evidence', 'Create a case-specific document checklist rather than relying on a generic list found online.'],
  ['Plan registration and later use', 'Consider the certificate, translation, attestation and recognition questions before the documents are needed abroad.'],
]

const commonDocuments = [
  'Valid identity and nationality evidence for both parties',
  'Proof of current address or residence where relevant',
  'Evidence of present marital status and any prior divorce or death',
  'Photographs, declarations, authority documents or witness details where required',
  'Marriage record or certificate issued through the relevant procedure',
  'Certified translation, apostille, legalisation or consular attestation where applicable',
]

function createPage({ slug, shortTitle, eyebrow, heading, intro, overviewTitle, overview, considerations, faqFocus, related }) {
  const title = `${shortTitle} | International Guidance | e-Marriages.com`
  const description = `${intro} Learn the procedure, documents, registration and international recognition questions that may apply.`
  return {
    slug, shortTitle, eyebrow, heading, intro, title, description, overviewTitle, overview, considerations,
    startWith: ['Both parties’ present countries and nationalities', 'Current marital status and ability to attend in person', 'The country where the marriage documents will be used'],
    steps: commonSteps,
    documents: commonDocuments,
    related,
    relatedPages,
    faqs: [
      [`Is ${faqFocus} legally valid?`, `There is no universal answer. Validity depends on the law connected with the ceremony or registration, the legal capacity and consent of both parties, compliance with required formalities and the jurisdiction where recognition is later requested.`],
      [`Can ${faqFocus} be used for immigration?`, `Immigration acceptance is a separate assessment. The relevant authority may examine the validity of the marriage, the way it was completed, registration, supporting evidence and whether the relationship satisfies its immigration rules.`],
      ['Do both parties have to be physically present?', 'Physical presence rules vary. Some procedures require both parties, some may permit a representative or remote participation, and others may not recognise those methods. The proposed jurisdiction must be checked before proceeding.'],
      ['Which documents are normally required?', 'Identity, nationality, address and marital-status evidence are commonly requested, but the exact list depends on the parties, the chosen procedure, previous marriages and the intended use of the final documents.'],
      ['Will the marriage be recognised in every country?', 'No responsible service should promise universal recognition. A marriage may be valid where completed yet still require registration, evidence, translation, legalisation or a separate recognition analysis elsewhere.'],
      ['How long does the process take?', 'Timing depends on document readiness, local appointments, identity verification, witnesses, registration and any later attestation or translation. A case-specific review is needed before giving a realistic estimate.'],
    ]
  }
}

export const pages = {
  'international-marriage': createPage({
    slug: 'international-marriage', shortTitle: 'International Marriage', eyebrow: 'International marriage services', heading: 'International marriage guidance for couples whose lives cross borders.',
    intro: 'Understand the ceremony, documentation and recognition questions that arise when nationality, residence and future plans connect more than one country.',
    overviewTitle: 'International marriage begins with jurisdiction—not distance alone.', overview: 'The place of celebration, each party’s legal capacity, local registration and the country where the certificate will be used can all matter. A sound plan considers the complete journey before a ceremony is arranged.',
    considerations: [['Legal capacity', 'Age, consent, marital status and any restrictions must be reviewed for both parties.'],['Place and form', 'The law connected with the ceremony may determine which formalities create a valid marriage.'],['Registration', 'A ceremony and an official civil record are not always the same thing.'],['Recognition abroad', 'Later use may require proof, translation, attestation or further legal analysis.']],
    faqFocus: 'an international marriage', related: ['cross-border-marriage','online-marriage','marriage-documentation']
  }),
  'cross-border-marriage': createPage({
    slug: 'cross-border-marriage', shortTitle: 'Cross-Border Marriage', eyebrow: 'Two countries, one informed plan', heading: 'Cross-border marriage guidance built around both jurisdictions.',
    intro: 'Plan a marriage involving different countries with careful attention to legal capacity, ceremony requirements, registration and later use of the marriage record.',
    overviewTitle: 'A cross-border case has more than one legal touchpoint.', overview: 'Nationality, residence, the place of marriage and the destination of the final documents can create different questions. The aim is to identify conflicts early and build a coherent documentary route.',
    considerations: [['Nationality rules', 'A party’s national law may affect documents or capacity evidence.'],['Residence rules', 'Current residence can affect notices, appointments or documentary requirements.'],['Ceremony jurisdiction', 'The place and method of celebration may determine formal validity.'],['Destination use', 'Immigration, civil registration or family records may apply different standards.']],
    faqFocus: 'a cross-border marriage', related: ['international-marriage','foreign-national-marriage','marriage-recognition']
  }),
  'foreign-national-marriage': createPage({
    slug: 'foreign-national-marriage', shortTitle: 'Foreign National Marriage', eyebrow: 'Marriage involving a foreign national', heading: 'Clear guidance when one or both partners are foreign nationals.',
    intro: 'Identify the additional identity, status, translation and consular-document questions that may apply to a marriage involving a foreign citizen.',
    overviewTitle: 'Foreign nationality can change the evidence—not the need for careful consent.', overview: 'Passports, visa or residence records, single-status evidence, translated civil documents and consular requirements may become relevant. Requirements should be confirmed before travel or ceremony arrangements are fixed.',
    considerations: [['Identity evidence', 'Names, dates and spellings should remain consistent across passports and civil records.'],['Status certificates', 'Some cases require evidence of single, divorced or widowed status.'],['Translations', 'Foreign-language records may need an accepted certified translation.'],['Consular steps', 'Embassy or consular documents depend on nationality and intended use; they are not universal.']],
    faqFocus: 'a foreign national marriage', related: ['international-marriage','cross-border-marriage','marriage-documentation']
  }),
  'marriage-recognition': createPage({
    slug: 'marriage-recognition', shortTitle: 'Marriage Recognition Abroad', eyebrow: 'Using a marriage in another country', heading: 'Marriage recognition abroad requires more than a certificate alone.',
    intro: 'Understand how validity, registration, evidence, translation and public-policy rules may affect the use of a marriage in another jurisdiction.',
    overviewTitle: 'Validity and recognition are connected—but not identical.', overview: 'A marriage valid where celebrated may still face evidential or registration requirements elsewhere. Remote and proxy arrangements can receive additional scrutiny, particularly in immigration or civil-status matters.',
    considerations: [['Underlying validity', 'The marriage should comply with the law governing its celebration.'],['Official evidence', 'Authorities may require an original record, certified copy or verification.'],['Document authentication', 'Apostille or legalisation confirms origin; it does not itself decide validity.'],['Purpose-specific review', 'Immigration, inheritance and civil registration may ask different questions.']],
    faqFocus: 'recognition of a foreign marriage', related: ['international-marriage','marriage-certificate','apostille-attestation']
  }),
  'online-marriage': createPage({
    slug: 'online-marriage', shortTitle: 'Online Marriage', eyebrow: 'Online marriage services', heading: 'Online marriage guidance for couples living in different countries.',
    intro: 'Explore whether a remotely arranged marriage route may suit your circumstances and how ceremony, registration and international use should be planned.',
    overviewTitle: 'Online communication does not create one universal marriage procedure.', overview: 'The legal effect depends on the authorised process behind the video call or remote coordination. Identity, consent, witnesses, representation and registration must be tied to a recognised legal route.',
    considerations: [['Authorised procedure', 'The process must have a legal or recognised registration basis.'],['Identity and consent', 'Both parties should be properly identified and freely consenting.'],['Witnesses and authority', 'Witness, officiant or representative requirements depend on the chosen route.'],['Certificate and use', 'Plan how the official marriage record will be obtained and used abroad.']],
    faqFocus: 'an online marriage', related: ['remote-marriage','marriage-by-video-conference','online-nikah']
  }),
  'remote-marriage': createPage({
    slug: 'remote-marriage', shortTitle: 'Remote Marriage', eyebrow: 'Remote marriage guidance', heading: 'A considered remote marriage route when travel is not practical.',
    intro: 'Review the options available when one or both partners cannot attend the same location, without assuming that every remote method carries the same legal effect.',
    overviewTitle: 'Remote marriage describes a situation—not a single legal category.', overview: 'Depending on the jurisdiction, the route may involve video participation, a proxy, an authorised representative or another procedure. Each option needs its own validity and recognition review.',
    considerations: [['Reason for remote participation', 'Location, travel limits and time constraints help identify suitable options.'],['Permitted method', 'The relevant jurisdiction must allow the proposed form of participation.'],['Consent record', 'Clear proof of identity and free consent is especially important remotely.'],['Recognition planning', 'The destination authority may examine physical presence and consummation separately.']],
    faqFocus: 'a remote marriage', related: ['online-marriage','proxy-marriage','marriage-recognition']
  }),
  'proxy-marriage': createPage({
    slug: 'proxy-marriage', shortTitle: 'Proxy Marriage', eyebrow: 'Marriage through an authorised representative', heading: 'Proxy marriage guidance with careful authority and recognition planning.',
    intro: 'Understand when a representative may act for an absent party, what the authority document should address and how the marriage may be treated elsewhere.',
    overviewTitle: 'The authority of the proxy must be precise and legally effective.', overview: 'A proxy arrangement is not simply an informal permission. The form of authority, identity of the representative, consent to the particular marriage and the law of the place of celebration can all be decisive.',
    considerations: [['Permitted jurisdiction', 'Not every country or procedure allows marriage through a proxy.'],['Special authority', 'The power or authorisation should identify the parties and permitted act clearly.'],['Ceremony compliance', 'Witnesses, officiation and registration must follow the relevant local process.'],['Later scrutiny', 'Immigration and civil authorities may ask about absence, consent and relationship evidence.']],
    faqFocus: 'a proxy marriage', related: ['remote-marriage','online-marriage','court-marriage-for-overseas-pakistanis']
  }),
  'online-nikah': createPage({
    slug: 'online-nikah', shortTitle: 'Online Nikah', eyebrow: 'Online Nikah for international couples', heading: 'Online Nikah guidance with respect for faith, procedure and documentation.',
    intro: 'Plan an online Nikah with attention to identity, consent, witnesses, representation, Nikahnama registration and the country where the record will be used.',
    overviewTitle: 'Religious validity and civil recognition should both be considered.', overview: 'An Online Nikah may address religious requirements, but couples should also plan the official documentary and civil-registration route relevant to their circumstances. One should not be assumed from the other.',
    considerations: [['Free consent', 'The identity and voluntary agreement of both parties should be clear.'],['Witness and representative roles', 'Their requirements should be confirmed for the chosen Nikah route.'],['Nikahnama details', 'Names, status, dower and agreed terms should be recorded accurately.'],['Civil documentation', 'Registration and international use require a separate practical plan.']],
    faqFocus: 'an Online Nikah', related: ['online-marriage','marriage-by-video-conference','marriage-documentation']
  }),
  'marriage-by-video-conference': createPage({
    slug: 'marriage-by-video-conference', shortTitle: 'Marriage by Video Conference', eyebrow: 'Video-conference marriage guidance', heading: 'Marriage by video conference: understand the legal route behind the call.',
    intro: 'A video connection can facilitate communication and participation, but validity depends on the authorised ceremony, representation and registration process.',
    overviewTitle: 'The technology is only one part of the legal arrangement.', overview: 'A video call can help verify communication and consent, yet it does not automatically turn a ceremony into a legally registered marriage. The governing procedure remains central.',
    considerations: [['Live participation', 'Confirm who must attend, where and in what capacity.'],['Identity verification', 'Reliable identity checks and consistent records reduce later difficulties.'],['Recording and privacy', 'Any recording should follow consent, privacy and evidential requirements.'],['Official record', 'The route to an accepted marriage certificate should be established in advance.']],
    faqFocus: 'marriage by video conference', related: ['online-marriage','remote-marriage','online-nikah']
  }),
  'court-marriage': createPage({
    slug: 'court-marriage', shortTitle: 'Court Marriage', eyebrow: 'Court marriage guidance', heading: 'Court marriage guidance for couples seeking a lawful, documented marriage.',
    intro: 'Understand what “court marriage” means in the relevant country, which legal procedure actually applies and how to protect consent and documentation.',
    overviewTitle: 'Court marriage is a popular term, but the legal process varies.', overview: 'In some jurisdictions marriage is solemnised by a civil official; elsewhere the phrase describes a consensual marriage completed under personal law with supporting declarations and legal protection. The correct local route matters.',
    considerations: [['Legal capacity', 'Both parties must satisfy age, marital-status and consent requirements.'],['Applicable marriage law', 'Religion, nationality and location may affect the procedure.'],['Safety and free will', 'Independent consent and protection from coercion are fundamental.'],['Registration and certificate', 'The marriage record should be completed through the competent authority.']],
    faqFocus: 'a court marriage', related: ['court-marriage-in-pakistan','court-marriage-for-overseas-pakistanis','marriage-documentation']
  }),
  'court-marriage-in-pakistan': createPage({
    slug: 'court-marriage-in-pakistan', shortTitle: 'Court Marriage in Pakistan', eyebrow: 'Pakistan court marriage guidance', heading: 'Court marriage in Pakistan with consent, documentation and registration in focus.',
    intro: 'Learn the practical legal route commonly described as court marriage in Pakistan and the roles of Nikah, declarations, witnesses and official registration.',
    overviewTitle: 'In Pakistan, “court marriage” is commonly a lawyer-assisted consensual marriage process.', overview: 'For Muslim couples, the marriage is ordinarily solemnised through Nikah rather than by a judge. Legal declarations or protective proceedings may be relevant depending on the circumstances, while Union Council registration and NADRA documentation are separate stages.',
    considerations: [['Adult free consent', 'The parties’ identity, legal capacity and voluntary decision are central.'],['Nikah requirements', 'Offer, acceptance, witnesses and Nikahnama particulars should be completed carefully.'],['Protective documentation', 'Affidavits or court protection may be considered where there is a genuine safety concern.'],['Official registration', 'The Nikahnama and computerised marriage certificate serve different documentary purposes.']],
    faqFocus: 'court marriage in Pakistan', related: ['court-marriage','court-marriage-for-overseas-pakistanis','online-nikah']
  }),
  'court-marriage-for-overseas-pakistanis': createPage({
    slug: 'court-marriage-for-overseas-pakistanis', shortTitle: 'Court Marriage for Overseas Pakistanis', eyebrow: 'Overseas Pakistani marriage guidance', heading: 'Court marriage planning for overseas Pakistanis and international couples.',
    intro: 'Review attendance, authority, Pakistani registration and overseas-use requirements before arranging a marriage connected with Pakistan.',
    overviewTitle: 'Plan the Pakistan process and the destination-country use together.', overview: 'An overseas Pakistani may need to consider personal attendance, a special power of attorney, Nikah and registration requirements, and later attestation or translation. The intended immigration or civil use should be identified from the outset.',
    considerations: [['Attendance options', 'Confirm whether personal attendance, remote participation or representation is suitable.'],['Authority documents', 'Any power of attorney should be purpose-specific and properly executed.'],['Pakistan registration', 'Nikahnama and local registration details should be accurate and verifiable.'],['Use overseas', 'Destination-country authentication and recognition requirements should be checked separately.']],
    faqFocus: 'court marriage for an overseas Pakistani', related: ['court-marriage-in-pakistan','proxy-marriage','apostille-attestation']
  }),
  'marriage-documentation': createPage({
    slug: 'marriage-documentation', shortTitle: 'International Marriage Documentation', eyebrow: 'Marriage documents for use abroad', heading: 'International marriage documentation from ceremony to use abroad.',
    intro: 'Understand the records, certificates, translations and authentication steps that may be needed when marriage documents cross borders.',
    overviewTitle: 'A complete document journey begins with an accurate primary record.', overview: 'Names, dates, identity details and registration references should be consistent from the beginning. Later translation or legalisation cannot safely correct a defective underlying record.',
    considerations: [['Primary marriage record', 'The original entry should accurately reflect the parties and ceremony.'],['Official certificate', 'Determine which authority issues the certificate needed for the intended purpose.'],['Translation', 'Use an accepted translator and preserve names consistently across languages.'],['Authentication', 'Apostille, legalisation or attestation requirements depend on both countries.']],
    faqFocus: 'international marriage documentation', related: ['marriage-certificate','apostille-attestation','marriage-recognition']
  }),
  'marriage-certificate': createPage({
    slug: 'marriage-certificate', shortTitle: 'Marriage Certificate Guidance', eyebrow: 'Official evidence of marriage', heading: 'Marriage certificate guidance for international and cross-border use.',
    intro: 'Identify the correct marriage record or certificate, verify its details and prepare it for immigration, civil registration or another official purpose.',
    overviewTitle: 'Not every document called a marriage certificate serves the same purpose.', overview: 'A ceremonial document, local register extract and government-issued certificate may have different evidential value. The receiving authority’s requirements should guide which version is obtained.',
    considerations: [['Issuing authority', 'Confirm that the document comes from the competent registration authority.'],['Accurate particulars', 'Names, dates, status and identity references should match other records.'],['Verification', 'Some authorities may require online, consular or issuing-office verification.'],['International preparation', 'Translation and authentication depend on where the certificate will be submitted.']],
    faqFocus: 'an international marriage certificate', related: ['marriage-documentation','apostille-attestation','marriage-recognition']
  }),
  'apostille-attestation': createPage({
    slug: 'apostille-attestation', shortTitle: 'Apostille and Marriage Document Attestation', eyebrow: 'Authenticating marriage documents', heading: 'Apostille, legalisation and attestation guidance for marriage documents.',
    intro: 'Understand which authentication route may apply to your marriage certificate and what that process does—and does not—confirm.',
    overviewTitle: 'Authentication confirms document origin, not the substance of the marriage.', overview: 'An apostille or attestation generally verifies a signature, seal or official capacity. It does not automatically prove that a marriage meets every rule of the destination country or immigration authority.',
    considerations: [['Issuing country', 'The document must follow the authentication process available where it was issued.'],['Destination country', 'Treaty status and local rules determine whether apostille or legalisation applies.'],['Document type', 'Originals, certified copies and translations may be treated differently.'],['Order of steps', 'Translation, certification and attestation often need to occur in a particular sequence.']],
    faqFocus: 'apostille or attestation of a marriage document', related: ['marriage-documentation','marriage-certificate','marriage-recognition']
  }),
}

export const slugs = Object.keys(pages)
