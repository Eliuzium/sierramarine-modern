import { LangProvider } from "@/i18n/LangContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DigitalPublications from "@/components/DigitalPublications";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-[#0a1929] text-white antialiased selection:bg-cyan-500/30 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <DigitalPublications />
          <About />
          <Partners />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}

export default App;
