import {useTranslations} from 'next-intl';

import {Link} from '@i18n/navigation'; 

export default function HomePage() {
  //onst t = useTranslations('HomePage');

  return (
    <>
      <section id="about" className="min-h-screen p-8 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4">Sobre mí</h2>
        <p>Contenido de la sección Sobre mí...</p>
      </section>

      <section id="projects" className="min-h-screen p-8 bg-white">
        <h2 className="text-3xl font-semibold mb-4">Proyectos</h2>
        <p>Contenido de la sección Proyectos...</p>
      </section>

      <section id="contact" className="min-h-screen p-8 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
        <p>Contenido de la sección Contacto...</p>
      </section>
    </>
  )
}