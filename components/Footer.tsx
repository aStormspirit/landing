import type { SiteMessages } from "@/messages/en";

type FooterProps = {
  messages: SiteMessages["footer"];
};

export default function Footer({ messages }: FooterProps) {
  return (
    <footer className="hidden md:block bg-black border-t border-white/10 py-[48px]">
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[12px] text-[#f59e0b] tracking-[0.1em] uppercase">
          {messages.copyright}
        </span>
        <div className="flex gap-8">
          {messages.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-space-grotesk)] text-[12px] text-white/40 tracking-[0.1em] uppercase hover:text-white/70 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
