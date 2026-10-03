import type { Metadata } from "next";
import { notFound } from "next/navigation";
import About from "@/components/About";
import BottomNavBar from "@/components/BottomNavBar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import { getMessages, isLocale, locales } from "@/lib/i18n";

type LangPageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const messages = getMessages(lang);
  const title = messages.meta.title;
  const description = messages.meta.description;
  const url = `/${lang}`;
  const image = {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: title,
  };

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "/en",
        ru: "/ru",
      },
    },
    openGraph: {
      type: "website",
      siteName: "Shinka.DEV",
      title,
      url,
      description,
      locale: lang === "ru" ? "ru_RU" : "en_US",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

export default async function LocalizedHome({ params }: LangPageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const messages = getMessages(lang);

  return (
    <>
      <Navbar lang={lang} messages={messages.navbar} />
      <main className="pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
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
