export const serviceGroups = {
  'court-marriage': {
    name: 'Court Marriage',
    intro: 'Country-focused court and civil marriage guidance for international couples.',
  },
  'online-nikah': {
    name: 'Online Nikah',
    intro: 'Country-focused Online Nikah guidance covering ceremony, registration and later use.',
  },
}

const countryList = [
  ['united-kingdom','United Kingdom','UK'],
  ['united-states','United States','US'],
  ['canada','Canada','Canadian'],
  ['europe','Europe','European'],
  ['australia','Australia','Australian'],
  ['uae-middle-east','UAE & Middle East','UAE and Middle Eastern'],
  ['pakistan','Pakistan','Pakistani'],
]

export const serviceCountries = Object.fromEntries(countryList.map(([slug,name,adjective]) => [slug,{ slug,name,adjective }]))
export const serviceCountrySlugs = Object.keys(serviceCountries)
export const serviceSlugs = Object.keys(serviceGroups)

export function getServiceCountryPage(serviceSlug, countrySlug) {
  const service = serviceGroups[serviceSlug]
  const country = serviceCountries[countrySlug]
  if (!service || !country) return null
  const isCourt = serviceSlug === 'court-marriage'
  return {
    serviceSlug, countrySlug, service, country,
    title: `${service.name} for ${country.name} | International Guidance`,
    description: `${service.name} guidance for couples connected with ${country.name}, including requirements, documents, registration and recognition.`,
    heading: `${service.name} guidance for couples connected with ${country.name}.`,
    intro: isCourt
      ? `Understand which civil or legally recognised marriage route may apply, what “court marriage” means in the relevant jurisdiction and how the resulting documents may be used in ${country.name}.`
      : `Plan an Online Nikah with attention to consent, witnesses, representation, Nikahnama or marriage records, civil registration and use of the documents in ${country.name}.`,
    issues: isCourt ? [
      ['Meaning of court marriage', 'The phrase may refer to a civil ceremony, registrar process or lawyer-assisted consensual marriage depending on the country.'],
      ['Capacity and free consent', 'Age, current marital status, identity and voluntary consent must satisfy the applicable law.'],
      ['Civil registration', 'The competent authority and official certificate should be identified before the process begins.'],
      [`Use in ${country.name}`, `Recognition, immigration and local civil-record requirements require a separate ${country.adjective} review.`],
    ] : [
      ['Nikah requirements', 'Identity, free consent, witnesses, offer and acceptance should be addressed through a properly planned process.'],
      ['Remote participation', 'Video attendance or representation should be assessed under the procedure connected with the Nikah.'],
      ['Nikahnama and registration', 'Accurate recording and the route to a civil or official certificate should be planned separately.'],
      [`Use in ${country.name}`, `Religious validity does not automatically determine civil, immigration or documentary recognition in ${country.name}.`],
    ],
  }
}
