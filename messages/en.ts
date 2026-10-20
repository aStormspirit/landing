export const enMessages = {
  meta: {
    title: "Shinka.DEV — Website & Web App Development",
    description: "Website development, web applications, Telegram Mini Apps and bots.",
  },
  navbar: {
    brand: "Shinka.DEV",
    about: "About",
    projects: "Projects",
    stack: "Stack",
    contact: "Contact",
    hireMe: "Hire Me",
    toggleMenuAria: "Toggle menu",
    languageLabel: "Language",
  },
  hero: {
    scroll: "Scroll",
    status: "SYSTEM: ACTIVE",
    titleLine1: "ENGINEER OF",
    titleLine2: "DIGITAL SOLUTIONS",
    description:
      "Vladimir Shinkarenko — AI engineer and full-stack developer. I specialize in applications, AI integrations, and cloud-native solutions.",
    write: "WRITE",
    writeDialogTitle: "WRITE",
    writeDialogHint: "Choose a messenger",
    closeDialog: "Close",
    viewProjects: "VIEW_PROJECTS",
    mediaTitle: "MY BLOGS // MEDIA",
    online: "ONLINE",
    telegramName: "Telegram",
    telegramBlogHandle: "@shinkadev1",
    telegramHandle: "@shinka_dev",
    vkName: "VKontakte",
    vkBlogHandle: "vk.ru/club239644217",
    vkHandle: "vk.ru/vladimiraiengineer",
    mediaCaption: "Articles, engineering insights, and fresh releases",
  },
  about: {
    sectionIndex: "01/",
    sectionTitle: "THE_ENGINEER",
    yearsOfExperience: "YEARS_OF\nEXPERIENCE",
    description:
      "I bridge the gap between complex technical infrastructure and seamless user experiences. My approach is rooted in the CAD-drawing aesthetic - every line of code and every server node must be placed with intent and precision.",
    specializationLabel: "// SPECIALIZATION",
    specializationValue: "Cloud Architecture & DevOps Automation",
    philosophyLabel: "// PHILOSOPHY",
    philosophyValue: "Performance is not a feature, it's a foundation.",
  },
  projects: {
    heading: "KEY_WORK",
    subheading: "DEPLOYED_SOLUTIONS_v4.2",
    viewAllRepos: "VIEW_ALL_REPOS",
    viewAllHref: "https://github.com/aStormspirit",
    featured: {
      title: "ANONYMOUS_CHAT",
      description:
        "Anonymous chat with queue-based matchmaking, filters, and topic rooms. WebSockets, a database, FastAPI, and Next.js.",
      caseStudy: "OPEN_SITE",
      liveUrl: "https://chatwithyou.site/",
      repoUrl: "https://github.com/aStormspirit/service-desk",
      tags: ["FASTAPI", "NEXT.JS", "WEBSOCKETS"],
    },
    second: {
      label: "PROJECT_02",
      title: "LLC_BOOSTER",
      description:
        "Online filings and U.S. business formation. Built a document-filing automation engine and a customer support system: FastAPI, Selenium, Celery, React, auth, queues, and AI integrations.",
      tech: "FASTAPI / REACT",
      liveUrl: "https://llcbooster.com/",
      repoUrl: "#",
    },
    third: {
      label: "PROJECT_03",
      title: "COMING_SOON",
      description: "Next deployment in the pipeline. Slot reserved for an upcoming production system.",
      tech: "TBD",
      liveUrl: "#",
      repoUrl: "#",
    },
  },
  techStack: {
    heading: "THE_TECH_STACK",
  },
  contact: {
    titleLine1: "LET'S",
    titleLine2: "CONNECT.",
    description:
      "Available for high-stakes technical projects, system audits, and architectural consulting.",
    email: "vladimir@shinkadev.org",
    location: "SFO // HUB_NORTH",
    fullNameLabel: "FULL_NAME",
    fullNamePlaceholder: "USER_IDENTIFICATION",
    emailLabel: "EMAIL_ADDRESS",
    emailPlaceholder: "COMMS_CHANNEL",
    messageLabel: "MESSAGE_PAYLOAD",
    messagePlaceholder: "DESCRIBE_PROJECT_SCOPE...",
    submit: "SEND_TRANSMISSION",
  },
  footer: {
    copyright: "© 2024 ARCHITECT_PORTFOLIO // SYSTEM_STABLE",
    links: [
      { label: "GITHUB", href: "https://github.com/aStormspirit"},
      { label: "LINKEDIN", href: "https://www.linkedin.com/in/vladimir-shinkarenko-87b9b3278/" },
      { label: "TELEGRAM", href: "https://t.me/shinka_dev" },
      { label: "RESUME", href: "/resume.pdf" },
    ],
  },
  bottomNav: {
    home: "HOME",
    projects: "PROJECTS",
    stack: "STACK",
    contact: "CONTACT",
  },
} as const;

type DeepWidenLiterals<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly DeepWidenLiterals<U>[]
    : T extends object
      ? { [K in keyof T]: DeepWidenLiterals<T[K]> }
      : T;

export type SiteMessages = DeepWidenLiterals<typeof enMessages>;
