import Footer from '@/app/[locale]/(home)/components/Footer';
import Header from '@/app/[locale]/(home)/components/Header';
import Introduce from '@/app/[locale]/(home)/components/Sections/Introduce';

export default function Page() {
  return (
    <>
      <Header />

      <main className="mx-auto px-6 min-h-screen py-8 max-w-7xl">
        <Introduce />
      </main>

      <Footer />
    </>
  );
}
