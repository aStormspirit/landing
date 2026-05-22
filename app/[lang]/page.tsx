import { notFound } from "next/navigation";
import About from "@/components/About";
import BottomNavBar from "@/components/BottomNavBar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import { getMessages, isLocale } from "@/lib/i18n";

type LangPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function LocalizedHome({ params }: LangPageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const messages = getMessages(lang);

  return (
    <>
      <Navbar lang={lang} messages={messages.navbar} />
      <main className="pb-16 md:pb-0">
        <Hero messages={messages.hero} />
        <About messages={messages.about} />
        <Projects messages={messages.projects} />
        <TechStack heading={messages.techStack.heading} />
        <Contact messages={messages.contact} />
      </main>
      <Footer messages={messages.footer} />
      <BottomNavBar lang={lang} messages={messages.bottomNav} />
    </>
  );
}
