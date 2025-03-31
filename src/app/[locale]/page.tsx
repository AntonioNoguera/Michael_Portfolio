import { useTranslations } from 'next-intl';
import { Link } from '@i18n/navigation';
import Footer from '@/components/Footer';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <>
      <section id="about" className="h-[calc(100vh-62px)] p-8">
        <h2 className="text-3xl font-semibold mb-4">{t('about_title')}</h2>
        <p>{t('about_content')}</p>
      </section>

      <section id="projects" className="h-[calc(100vh-62px)] p-8">
        <h2 className="text-3xl font-semibold mb-4">{t('projects_title')}</h2>
        <p>{t('projects_content')}</p>
      </section>

      <section id="contact" className="h-[calc(100vh-62px)] pt-20 flex flex-col">
        <div className="flex-grow">
          <h2 className="text-3xl font-semibold mb-4">{t('contact_title')}</h2>
          <p>{t('contact_content')}</p>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </section>
    </>
  )
}