import InfoPage from '@/components/info-page'

export const metadata = { title: 'About e-Marriages.com | International Marriage Guidance', description: 'Learn about the international, careful and case-specific approach of e-Marriages.com.', alternates: { canonical: 'https://e-marriages.com/about' } }

export default function AboutPage() {
  return <InfoPage eyebrow="About e-Marriages.com" title="Clearer guidance for couples across borders." intro="e-Marriages.com is an international information and professional-assistance platform focused on online, remote and cross-border marriage matters." sections={[
    ['Our purpose', 'International couples often encounter conflicting information about ceremonies, registration, certificates and recognition. Our purpose is to organise those questions into a clear, responsible pathway.'],
    ['Our approach', ['We begin with the countries, nationalities and present marital status of both parties.','We distinguish religious, ceremonial, civil-registration and immigration questions.','We avoid promises of universal validity or recognition.','We explain documents and next steps in clear international English.']],
    ['International—not one-country-only', 'The platform is designed for couples connected with the United Kingdom, United States, Canada, Europe, Australia, the Middle East, Pakistan and other jurisdictions. Every conclusion remains subject to the particular law and authority involved.'],
    ['Professional boundaries', 'Website information is general. A lawyer-client relationship arises only through an express engagement with an appropriately qualified professional for the relevant matter.']
  ]} />
}
