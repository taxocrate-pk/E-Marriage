export const serviceGroups = {
  "court-marriage": {
    name: "Court Marriage",
    intro:
      "Court Marriage services in Pakistan for local and overseas couples.",
  },
  "online-nikah": {
    name: "Online Nikah",
    intro:
      "Online Nikah services for couples worldwide, covering the ceremony, Nikahnama, registration and later use.",
  },
};

const countryList = [
  ["united-kingdom", "United Kingdom", "UK"],
  ["united-states", "United States", "US"],
  ["canada", "Canada", "Canadian"],
  ["europe", "Europe", "European"],
  ["australia", "Australia", "Australian"],
  ["uae-middle-east", "UAE & Middle East", "UAE and Middle Eastern"],
  ["pakistan", "Pakistan", "Pakistani"],
];

export const serviceCountries = Object.fromEntries(
  countryList.map(([slug, name, adjective]) => [
    slug,
    { slug, name, adjective },
  ]),
);
export const serviceCountrySlugs = Object.keys(serviceCountries);
export const serviceSlugs = Object.keys(serviceGroups);
export const serviceCountryRoutes = [
  { service: "court-marriage", country: "pakistan" },
  ...serviceCountrySlugs.map((country) => ({
    service: "online-nikah",
    country,
  })),
];

export function getCountriesForService(serviceSlug) {
  if (serviceSlug === "court-marriage") return [serviceCountries.pakistan];
  if (serviceSlug === "online-nikah") return Object.values(serviceCountries);
  return [];
}

export function getServiceCountryPage(serviceSlug, countrySlug) {
  const service = serviceGroups[serviceSlug];
  const country = serviceCountries[countrySlug];
  if (!service || !country) return null;
  const isCourt = serviceSlug === "court-marriage";
  if (isCourt && countrySlug !== "pakistan") return null;
  return {
    serviceSlug,
    countrySlug,
    service,
    country,
    title: `${service.name} Services for ${country.name} | E-Marriages`,
    description: `${service.name} services for couples connected with ${country.name}, including requirements, documents, registration and official marriage records.`,
    heading: `${service.name} services for couples connected with ${country.name}.`,
    intro: isCourt
      ? "Arrange a lawful, lawyer-assisted Court Marriage in Pakistan with free consent, Nikah, witnesses, accurate Nikahnama preparation and official registration in focus."
      : `Plan an Online Nikah with attention to consent, witnesses, representation, Nikahnama or marriage records, civil registration and use of the documents in ${country.name}.`,
    issues: isCourt
      ? [
          [
            "Meaning of court marriage",
            "The phrase may refer to a civil ceremony, registrar process or lawyer-assisted consensual marriage depending on the country.",
          ],
          [
            "Capacity and free consent",
            "Age, current marital status, identity and voluntary consent must satisfy the applicable law.",
          ],
          [
            "Civil registration",
            "The competent authority and official certificate should be identified before the process begins.",
          ],
          [
            `Use in ${country.name}`,
            `Recognition, immigration and local civil-record requirements require a separate ${country.adjective} review.`,
          ],
        ]
      : [
          [
            "Nikah requirements",
            "Identity, free consent, witnesses, offer and acceptance should be addressed through a properly planned process.",
          ],
          [
            "Remote participation",
            "Video attendance or representation should be assessed under the procedure connected with the Nikah.",
          ],
          [
            "Nikahnama and registration",
            "Accurate recording and the route to a civil or official certificate should be planned separately.",
          ],
          [
            `Use in ${country.name}`,
            `Religious validity does not automatically determine civil, immigration or documentary recognition in ${country.name}.`,
          ],
        ],
  };
}
