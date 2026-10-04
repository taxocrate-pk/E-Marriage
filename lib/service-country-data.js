export const serviceGroups = {
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


const countryCopy = {
  "united-kingdom": {
    heading: "Online Nikah for Couples Connected With the United Kingdom",
    intro: "Arrange an Online Nikah with careful attention to consent, witnesses, Nikah Nama records and the way your documents may later be used in the United Kingdom.",
    keyTitle: "Planning an Online Nikah for UK-Based Couples",
    detailsTitle: "Documents and Decisions to Prepare Before Your Nikah",
    faqTitle: "Online Nikah Questions for Couples in the United Kingdom",
    ctaTitle: "Plan Your UK-Connected Online Nikah With Clarity",
    issues: [
      ["Consent and Identity Checks","Confirm both parties’ identity, marital status and free consent before fixing ceremony arrangements."],
      ["Witness and Participation Planning","Settle witness availability and how each person will participate where the couple is in different locations."],
      ["Nikah Nama and Registration","Plan accurate Nikah Nama entries and any Pakistan-side registration step separately from the ceremony."],
      ["Using Documents in the United Kingdom","Check the receiving UK authority’s requirements for translations, evidence and recognition."]
    ]
  },
  "united-states": {
    heading: "Online Nikah Services for Couples in the United States",
    intro: "Prepare an Online Nikah route that separates the religious ceremony, Pakistan-side documentation and any later use of the marriage record in the United States.",
    keyTitle: "A Practical Online Nikah Route for US-Based Couples",
    detailsTitle: "What to Organise Before the Remote Nikah Process",
    faqTitle: "Online Nikah Questions for Couples in the United States",
    ctaTitle: "Start Your US-Connected Nikah Planning",
    issues: [
      ["Identity and Marital Status","Review passports, identity records and any previous-marriage documents before proceeding."],
      ["Remote Ceremony Arrangements","Confirm how consent, witnesses and remote participation will be handled for the ceremony."],
      ["Marriage Record Preparation","Keep names, dates and personal details consistent across the Nikah Nama and related documents."],
      ["Later Use in the United States","Treat immigration, civil recognition and document authentication as separate destination-country questions."]
    ]
  },
  "canada": {
    heading: "Online Nikah Guidance for Couples Connected With Canada",
    intro: "Build a clear Online Nikah plan around identity, witnesses, documentation and the intended use of your marriage record in Canada.",
    keyTitle: "Online Nikah Planning for Couples Living in Canada",
    detailsTitle: "Prepare the Right Information Before the Nikah Is Scheduled",
    faqTitle: "Online Nikah Questions for Couples in Canada",
    ctaTitle: "Discuss Your Canada-Connected Nikah Route",
    issues: [
      ["Eligibility and Free Consent","Review identity, age, marital status and voluntary consent before setting the ceremony date."],
      ["Witness Coordination","Confirm the witnesses and how each participant will join where locations differ."],
      ["Nikah Nama Accuracy","Record names, identification details, Mahr and other particulars carefully from the beginning."],
      ["Document Use in Canada","Check translation, authentication and receiving-authority requirements for the purpose you have in mind."]
    ]
  },
  "europe": {
    heading: "Online Nikah Services for Couples Across Europe",
    intro: "Plan an Online Nikah with a country-specific view of the ceremony, documents, registration and the later use of marriage records across European jurisdictions.",
    keyTitle: "Cross-Border Online Nikah Planning Across Europe",
    detailsTitle: "Core Information to Settle Before the Ceremony",
    faqTitle: "Online Nikah Questions for Couples Across Europe",
    ctaTitle: "Build the Right European Nikah Document Path",
    issues: [
      ["Country-Specific Requirements","Identify the particular European country and authority that may later receive the marriage documents."],
      ["Consent and Witness Structure","Confirm free consent, witness participation and any representation needed for the chosen route."],
      ["Registration and Translation","Plan the marriage record, registration and certified translation as distinct stages."],
      ["Cross-Border Document Use","Check whether apostille, legalisation or additional civil-registration steps may be required."]
    ]
  },
  "australia": {
    heading: "Online Nikah Services for Couples Connected With Australia",
    intro: "Organise your Online Nikah around clear consent, reliable documents, witness arrangements and realistic expectations about later use in Australia.",
    keyTitle: "A Clear Online Nikah Process for Australian-Based Couples",
    detailsTitle: "Information and Documents to Prepare Before Proceeding",
    faqTitle: "Online Nikah Questions for Couples in Australia",
    ctaTitle: "Plan Your Australia-Connected Online Nikah",
    issues: [
      ["Identity and Consent","Verify both parties’ identity, current marital status and voluntary instructions."],
      ["Remote Participation","Plan time zones, witnesses and attendance so the ceremony is organised properly."],
      ["Nikah Documentation","Keep Nikah Nama and registration information accurate and consistent."],
      ["Use of Records in Australia","Check the Australian authority’s own evidential and recognition requirements for your intended purpose."]
    ]
  },
  "uae-middle-east": {
    heading: "Online Nikah Services for Couples in the UAE and Middle East",
    intro: "Coordinate an Online Nikah around travel constraints, remote participation, witnesses, authority documents and later document use in the UAE or another Middle Eastern jurisdiction.",
    keyTitle: "Remote Nikah Planning for the UAE and Middle East",
    detailsTitle: "What to Confirm Before Fixing the Nikah Date",
    faqTitle: "Online Nikah Questions for the UAE and Middle East",
    ctaTitle: "Discuss Your UAE or Middle East Nikah Arrangement",
    issues: [
      ["Current Location and Identity","Confirm where each party is living and which identity documents will be used."],
      ["Witnesses and Representation","Settle witness participation and any attorney or proxy authority required for the chosen route."],
      ["Nikah Nama and Registration","Plan the ceremony record and Pakistan-side registration requirements separately."],
      ["Attestation and Overseas Use","Check whether translation, attestation or consular steps are required for the final destination."]
    ]
  },
  "pakistan": {
    heading: "Online Nikah Services and Registration Support in Pakistan",
    intro: "Arrange an Online Nikah with a clear Pakistan-side plan for consent, witnesses, Nikah Nama preparation, registration and any later overseas use of the documents.",
    keyTitle: "Online Nikah and Registration Planning in Pakistan",
    detailsTitle: "What We Review Before the Nikah Is Arranged",
    faqTitle: "Online Nikah Questions for Couples in Pakistan",
    ctaTitle: "Start Your Online Nikah Matter in Pakistan",
    issues: [
      ["Eligibility and Consent","Review identity, age, marital status and free consent before ceremony arrangements are confirmed."],
      ["Witness and Participation Details","Settle witness requirements and how each intended spouse will participate."],
      ["Nikah Nama and Registration","Prepare the Nikah Nama carefully and plan the applicable registration process."],
      ["Overseas Use of Documents","Where documents will be used abroad, identify translation, attestation or destination-authority requirements early."]
    ]
  }
};

export const serviceCountries = Object.fromEntries(
  countryList.map(([slug, name, adjective]) => [
    slug,
    { slug, name, adjective },
  ]),
);
export const serviceCountrySlugs = Object.keys(serviceCountries);
export const serviceSlugs = Object.keys(serviceGroups);
export const serviceCountryRoutes = serviceCountrySlugs.map((country) => ({
  service: "online-nikah",
  country,
}));

export function getCountriesForService(serviceSlug) {
  if (serviceSlug === "court-marriage") return [];
  if (serviceSlug === "online-nikah") return Object.values(serviceCountries);
  return [];
}

export function getServiceCountryPage(serviceSlug, countrySlug) {
  const service = serviceGroups[serviceSlug];
  const country = serviceCountries[countrySlug];
  if (!service || !country) return null;
  const copy = countryCopy[countrySlug];
  return {
    serviceSlug,
    countrySlug,
    service,
    country,
    title: `${service.name} Services for ${country.name} | E-Marriages`,
    description: `${service.name} services for couples connected with ${country.name}, including requirements, documents, registration and official marriage records.`,
    heading: copy.heading,
    intro: copy.intro,
    keyTitle: copy.keyTitle,
    detailsTitle: copy.detailsTitle,
    faqTitle: copy.faqTitle,
    ctaTitle: copy.ctaTitle,
    issues: copy.issues,
  };
}
