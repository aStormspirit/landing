"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import type { SiteMessages } from "@/messages/en";

type HeroProps = {
  messages: SiteMessages["hero"];
};

const TELEGRAM_BLOG_HREF = "https://t.me/shinkadev1";
const VK_BLOG_HREF = "https://vk.ru/club239644217";
const TELEGRAM_HREF = "https://t.me/shinka_dev";
const VK_HREF = "https://vk.ru/vladimiraiengineer";

export default function Hero({ messages }: HeroProps) {
  return (
    <section className="hero-radial-bg relative flex flex-col min-h-[calc(100svh-5rem)]">
      <div className="flex-1 flex items-center py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 mb-6 font-[family-name:var(--font-jetbrains-mono)] text-xs tracking-wider text-[#F5A623] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-status-dot inline-block" />
                <span className="font-bold">{messages.status}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] mb-6">
                <span className="block text-white">{messages.titleLine1}</span>
                <span className="block text-[#F5A623]">{messages.titleLine2}</span>
              </h1>

              <p className="text-neutral-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed mb-10">
                {messages.description}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto">
                <WriteButton messages={messages} />
                <a
                  href="#projects"
                  className="w-full sm:w-auto text-center font-[family-name:var(--font-jetbrains-mono)] text-sm font-semibold tracking-wider px-7 py-3.5 border border-[#F5A623]/80 text-[#F5A623] bg-black/40 hover:bg-[#F5A623]/10 hover:border-[#F5A623] hover:text-white transition-all duration-200"
                >
                  {messages.viewProjects}
                </a>
              </div>
            </div>

            <aside className="lg:col-span-4 flex lg:justify-end w-full">
              <div className="w-full max-w-md bg-neutral-900/60 backdrop-blur-md border border-neutral-800/80 p-5 rounded-lg shadow-2xl">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800/70">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold text-neutral-400 tracking-wider">
                    {messages.mediaTitle}
                  </span>
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#F5A623] bg-[#F5A623]/10 px-2 py-0.5 rounded border border-[#F5A623]/25">
                    {messages.online}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <SocialCard
                    href={TELEGRAM_BLOG_HREF}
                    badge="TG"
                    name={messages.telegramName}
                    handle={messages.telegramBlogHandle}
                    icon={<TelegramIcon />}
                  />
                  <SocialCard
                    href={VK_BLOG_HREF}
                    badge="VK"
                    name={messages.vkName}
                    handle={messages.vkBlogHandle}
                    icon={<VkIcon />}
                  />
                </div>

                <p className="mt-4 pt-3 border-t border-neutral-800/50 font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-neutral-500 text-center">
                  {messages.mediaCaption}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden md:flex group flex-col items-center pb-8 pt-4 text-neutral-500 hover:text-[#F5A623] transition-colors duration-200"
      >
        <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs tracking-[0.25em] uppercase font-medium mb-3 group-hover:tracking-[0.3em] transition-all">
          {messages.scroll}
        </span>
        <div className="w-px h-9 bg-neutral-800 overflow-hidden relative">
          <div className="w-full h-4 bg-[#F5A623] scroll-indicator-line" />
        </div>
      </a>
    </section>
  );
}

function SocialCard({
  href,
  badge,
  name,
  handle,
  icon,
}: {
  href: string;
  badge: string;
  name: string;
  handle: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between p-4 rounded-lg bg-neutral-950/80 border border-neutral-800/90 hover:border-[#F5A623] hover:shadow-[0_0_25px_-4px_rgba(245,166,35,0.45)] transition-all duration-200 overflow-hidden"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#F5A623]/15 text-[#F5A623] border border-[#F5A623]/30 group-hover:bg-[#F5A623] group-hover:text-black transition-all duration-200">
          {icon}
        </div>
        <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] uppercase font-bold text-[#F5A623] bg-[#F5A623]/10 px-1.5 py-0.5 rounded border border-[#F5A623]/30 tracking-wider group-hover:bg-[#F5A623] group-hover:text-black transition-colors">
          {badge}
        </span>
      </div>
      <div>
        <div className="flex items-center justify-between gap-1">
          <span className="text-sm font-bold text-white group-hover:text-[#F5A623] transition-colors">
            {name}
          </span>
          <svg className="w-3.5 h-3.5 shrink-0 text-neutral-500 group-hover:text-[#F5A623] group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
        <div className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-neutral-400 mt-1 truncate">
          {handle}
        </div>
      </div>
    </a>
  );
}

function WriteButton({ messages }: { messages: SiteMessages["hero"] }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      buttonRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(true)}
        className="w-full sm:w-auto text-center font-[family-name:var(--font-jetbrains-mono)] text-sm font-semibold tracking-wider px-7 py-3.5 bg-[#F5A623] text-black shadow-[0_0_25px_-4px_rgba(245,166,35,0.45)] hover:bg-[#FFB834] transition-all duration-200 cursor-pointer"
      >
        {messages.write}
      </button>

      {open && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center px-6">
          <button
            type="button"
            aria-label={messages.closeDialog}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            onClick={() => setOpen(false)}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="dialog-in relative w-full max-w-sm bg-[#141416] border border-neutral-800 rounded-lg p-5 shadow-2xl outline-none"
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h2 id={titleId} className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold tracking-wider text-white">
                  {messages.writeDialogTitle}
                </h2>
                <p className="mt-1 text-sm text-neutral-400">{messages.writeDialogHint}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={messages.closeDialog}
                className="shrink-0 size-11 inline-flex items-center justify-center text-neutral-400 hover:text-white border border-neutral-800 hover:border-[#F5A623] transition-colors cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={TELEGRAM_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 hover:border-[#F5A623] transition-colors"
              >
                <span className="size-10 rounded-lg flex items-center justify-center bg-[#F5A623]/15 text-[#F5A623] border border-[#F5A623]/30 group-hover:bg-[#F5A623] group-hover:text-black transition-colors">
                  <TelegramIcon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-white group-hover:text-[#F5A623] transition-colors">{messages.telegramName}</span>
                  <span className="block font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-neutral-400 truncate">{messages.telegramHandle}</span>
                </span>
                <Chevron />
              </a>
              <a
                href={VK_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 hover:border-[#F5A623] transition-colors"
              >
                <span className="size-10 rounded-lg flex items-center justify-center bg-[#F5A623]/15 text-[#F5A623] border border-[#F5A623]/30 group-hover:bg-[#F5A623] group-hover:text-black transition-colors">
                  <VkIcon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-white group-hover:text-[#F5A623] transition-colors">{messages.vkName}</span>
                  <span className="block font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-neutral-400 truncate">{messages.vkHandle}</span>
                </span>
                <Chevron />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Chevron() {
  return (
    <svg className="w-4 h-4 shrink-0 text-neutral-500 group-hover:text-[#F5A623] group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  );
}

function VkIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden>
      <path d="M15.684 0H8.316C3.724 0 0 3.724 0 8.316v7.368C0 20.276 3.724 24 8.316 24h7.368C20.276 24 24 20.276 24 15.684V8.316C24 3.724 20.276 0 15.684 0zm4.515 17.275h-1.928c-.73 0-.954-.58-2.27-1.895-1.147-1.114-1.656-1.258-1.942-1.258-.4 0-.514.116-.514.67v1.73c0 .463-.148.753-1.37.753-2.023 0-4.267-1.229-5.848-3.518-2.38-3.376-3.04-5.914-3.04-6.43 0-.232.088-.448.514-.448h1.93c.46 0 .633.21.808.704 1.053 2.502 2.378 4.7 2.992 4.7.232 0 .34-.105.34-.683V9.613c-.07-1.233-.726-1.339-.726-1.776 0-.205.17-.41.442-.41h2.775c.37 0 .5.195.5.64v3.54c0 .385.17.514.283.514.232 0 .425-.129.856-.56 1.325-1.488 2.27-3.774 2.27-3.774.124-.268.34-.41.71-.41h1.928c.58 0 .703.29.576.704-.233.99-2.348 4.02-2.454 4.22-.213.364-.298.53 0 .927.213.284.92.898 1.39 1.442 1.08 1.25 1.91 2.298 2.13 2.56.23.27.126.545-.39.545z" />
    </svg>
  );
}
