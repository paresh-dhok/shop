import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import FeatureSections from './components/sections/FeatureSections';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <ThemeProvider defaultTheme="light" storageKey="shop-mins-theme">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <FeatureSections 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;