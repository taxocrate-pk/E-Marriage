const countrySource = [
  ['united-kingdom', 'United Kingdom', 'UK', 'UK civil, immigration and document-use requirements'],
  ['united-states', 'United States', 'US', 'state-specific marriage rules and federal immigration use'],
  ['canada', 'Canada', 'Canadian', 'provincial marriage rules and federal immigration use'],
  ['europe', 'Europe', 'European', 'the particular national law within Europe and cross-border document use'],
  ['australia', 'Australia', 'Australian', 'Australian recognition, evidence and immigration considerations'],
  ['uae-middle-east', 'UAE and the Middle East', 'Middle Eastern', 'local personal-status, registration and consular requirements'],
  ['pakistan', 'Pakistan', 'Pakistani', 'Nikah, civil registration and overseas use of Pakistani marriage records'],
]

function makeCountry([slug, name, adjective, focus]) {
  return {
    slug, name,
    title: `Online and International Marriage Guidance for ${name} | e-Marriages.com`,
    description: `Guidance for couples connected with ${name} on online, remote and cross-border marriage, documentation and recognition.`,
    heading: `International and online marriage guidance for couples connected with ${name}.`,
    intro: `Understand how a marriage completed abroad or through a remote arrangement may interact with ${focus}.`,
    focus,
    sections: [
      ['Begin with the exact jurisdiction', `${adjective} cases should be assessed by reference to the specific place, authority and intended purpose involved. Broad statements about online marriage are rarely enough.`],
      ['Separate validity from recognition', `A marriage can be valid where it was celebrated while still requiring evidence, registration or further review before it is accepted for a ${adjective} purpose.`],
      ['Plan the official document route', 'The original marriage record, official certificate, certified translation and authentication steps should be considered before an immigration or civil application is prepared.'],
      ['Expect purpose-specific evidence', 'Immigration, civil registration, inheritance and family-law proceedings may each examine different aspects of the marriage and relationship.'],
    ],
    documents: ['Passports and identity documents for both parties','Evidence of current residence and nationality','Proof of single, divorced or widowed status where required','Official marriage record and government-issued certificate','Certified translation where the document is in another language','Apostille, legalisation or consular attestation where applicable'],
    faqs: [
      [`Is an online marriage recognised in ${name}?`, `Recognition cannot be answered solely from the words “online marriage”. The governing ceremony, legal capacity, physical presence or proxy arrangement, registration and intended use must be reviewed under the relevant ${adjective} rules.`],
      [`Can the marriage be used for immigration in ${name}?`, `Possibly, but immigration authorities apply their own definitions and evidence requirements. A valid marriage certificate alone may not resolve questions about the ceremony, relationship or applicable immigration category.`],
      ['Do we need an apostille or embassy attestation?', 'The answer depends on the issuing country, destination authority, document type and applicable treaty arrangements. Authentication confirms the origin of a document; it does not determine the validity of the marriage.'],
      ['Does one partner need to travel?', 'That depends on the chosen marriage route and the law of the place where it is completed. Remote participation, proxy authority and physical presence are treated differently across jurisdictions.'],
      ['Should documents be translated?', 'If a receiving authority does not accept the original language, it may require a certified translation in a prescribed format. Names and dates should remain consistent across both versions.'],
      ['What should we provide for an initial assessment?', 'Provide both parties’ nationalities, current countries, marital status, preferred ceremony route and the exact authority or purpose for which the marriage documents will be used.'],
    ]
  }
}

export const countries = Object.fromEntries(countrySource.map(item => [item[0], makeCountry(item)]))
export const countrySlugs = Object.keys(countries)
