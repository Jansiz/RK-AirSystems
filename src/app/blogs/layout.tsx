import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'HVAC Blogs | RK Air Systems',
  description: 'Expert insights and tips about HVAC systems, maintenance, and energy efficiency.',
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 bg-gray-50">
        {children}
      </main>
      <Footer />
    </>
  );
} 