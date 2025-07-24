import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { HeroSection } from './HeroSection';

type PageLayoutProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  heroImage?: string;
};

export const PageLayout = ({
  title,
  subtitle = '',
  children,
  heroImage = '/images/hero/services-bg.jpg',
}: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection
        title={title}
        subtitle={subtitle}
        backgroundImage={heroImage}
        minHeight="30vh"
        className="bg-blue-900/90"
      />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};
