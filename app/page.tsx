import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TopicsSection from "@/components/TopicsSection";
import HowItWorks from "@/components/HowItWorks";
import SecurityChecklist from "@/components/SecurityChecklist";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TopicsSection />
        <HowItWorks />
        <SecurityChecklist />
        <Resources />
      </main>
      <Footer />
    </>
  );
}
