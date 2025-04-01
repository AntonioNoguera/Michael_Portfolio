import { useTranslations } from 'next-intl';
import { Link } from '@i18n/navigation';
import Footer from '@/components/Footer';
import AboutMe from './sections/about_me';
import MobileDev from './sections/mobile/mobile_dev';

export default function HomePage() { 

  return (
    <>
      <AboutMe/>

      <MobileDev/>

      <section id="web" className="h-screen bg-gray pt-20">
        <h2 className="text-3xl font-semibold mb-4">projects_title</h2>
        <p>projects_content</p>
      </section>

      <section id="contact" className="h-screen  flex flex-col pt-20">
        <div className="flex-grow">
          <h2 className="text-3xl font-semibold mb-4">contact_title</h2>
          <p>contact_content</p>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </section>
    </>
  )
}