import InfoPage from '@/components/info-page'
export const metadata = { title: 'Terms of Use | e-Marriages.com', description: 'Website terms of use for e-Marriages.com.', alternates: { canonical: 'https://e-marriages.com/terms' } }
export default function TermsPage(){return <InfoPage eyebrow="Website policy" title="Terms of Use" intro="By using e-Marriages.com, you agree to use its information responsibly and understand the limits of general cross-border marriage guidance." sections={[
  ['General information only', 'Website material is provided for general information and cannot replace advice based on the law, documents and facts of an individual case.'],
  ['No automatic professional relationship', 'Visiting the website, sending an enquiry or receiving general information does not by itself create a lawyer-client or other professional relationship.'],
  ['No guarantee', 'No outcome, validity, registration, immigration acceptance, processing time or recognition in another country is guaranteed. Decisions remain with competent authorities.'],
  ['Responsible use', ['Do not use the website for unlawful, fraudulent or coercive purposes.','Do not misrepresent identity, age, marital status or consent.','Do not attempt to interfere with website security or availability.']],
  ['Third-party authorities and links', 'Government, consular, translation, registration and immigration processes are controlled by third parties. Their requirements and availability may change independently.'],
  ['Intellectual property', 'Unless stated otherwise, website text, branding and original design elements may not be reproduced commercially without permission.']
]} />}
