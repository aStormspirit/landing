export const enMessages = {
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
    status: "SYSTEM_STATUS: OPERATIONAL",
    titleLine1: "ARCHITECTING",
    titleLine2: "DIGITAL ECOSYSTEMS",
    description:
      "Shinkarenko Vladimir - Senior IT Specialist & Full-Stack Engineer. Specializing in high-performance infrastructure, cloud-native solutions, and precision-engineered software.",
    viewProjects: "VIEW_PROJECTS",
    downloadResume: "DOWNLOAD_RESUME",
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
    featured: {
      title: "NEURAL_SHIELD INFRASTRUCTURE",
      description:
        "A high-performance security monitoring dashboard capable of processing 2.4 million events per second with zero-latency visualization.",
      caseStudy: "CASE_STUDY",
    },
    second: {
      label: "PROJECT_02",
      title: "CLOUD_STRATOS",
      description: "Automated multi-region AWS deployment pipeline reducing lead time by 75%.",
      tech: "TERRAFORM",
    },
    third: {
      label: "PROJECT_03",
      title: "KUBE_MESH",
      description: "Service mesh orchestration for microservices environment with Istio.",
      tech: "KUBERNETES",
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
    email: "ALEX@RIVERA.DEV",
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
      { label: "LINKEDIN", href: "https://linkedin.com/in/your_username" },
      { label: "TWITTER", href: "https://x.com/your_username" },
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
