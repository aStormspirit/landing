import type { SiteMessages } from "./en";

export const ruMessages: SiteMessages = {
  meta: {
    title: "Shinka.DEV — Разработка сайтов и веб-приложений",
    description: "Разработка сайтов, веб-приложений, Telegram Mini Apps и ботов.",
  },
  navbar: {
    brand: "Shinka.DEV",
    about: "Обо мне",
    projects: "Проекты",
    stack: "Стек",
    contact: "Контакты",
    hireMe: "Связаться со мной",
    toggleMenuAria: "Открыть меню",
    languageLabel: "Язык",
  },
  hero: {
    scroll: "Скролл",
    status: "СИСТЕМА: АКТИВНА",
    titleLine1: "АРХИТЕКТУРА",
    titleLine2: "ЦИФРОВЫХ ЭКОСИСТЕМ",
    description:
      "Шинкаренко Владимир - Senior IT Specialist и Full-Stack Engineer. Специализируюсь на высокопроизводительной инфраструктуре, cloud-native решениях и программных системах с инженерной точностью.",
    viewProjects: "СМОТРЕТЬ_ПРОЕКТЫ",
    downloadResume: "СКАЧАТЬ_РЕЗЮМЕ",
  },
  about: {
    sectionIndex: "01/",
    sectionTitle: "ИНЖЕНЕР",
    yearsOfExperience: "ЛЕТ\nОПЫТА",
    description:
      "Я соединяю сложную техническую инфраструктуру и бесшовный пользовательский опыт. Мой подход построен на эстетике CAD-чертежей: каждая строка кода и каждый серверный узел размещаются осознанно и точно.",
    specializationLabel: "// СПЕЦИАЛИЗАЦИЯ",
    specializationValue: "Облачная архитектура и DevOps-автоматизация",
    philosophyLabel: "// ФИЛОСОФИЯ",
    philosophyValue: "Производительность - не опция, а фундамент.",
  },
  projects: {
    heading: "КЛЮЧЕВЫЕ_РАБОТЫ",
    subheading: "РАЗВЕРНУТЫЕ_РЕШЕНИЯ_v4.2",
    viewAllRepos: "ВСЕ_РЕПОЗИТОРИИ",
    viewAllHref: "https://github.com/aStormspirit",
    featured: {
      title: "SERVICE_DESK",
      description:
        "Cloud-native helpdesk: FastAPI backend, TypeScript frontend, PostgreSQL и Kubernetes на AWS EKS — заявки, роли и интеграции с мессенджерами.",
      caseStudy: "ОТКРЫТЬ_ДЕМО",
      liveUrl: "https://helpdesk.vov4ik-lab.online",
      repoUrl: "https://github.com/aStormspirit/service-desk",
      tags: ["PYTHON", "TYPESCRIPT", "K8S"],
    },
    second: {
      label: "ПРОЕКТ_02",
      title: "AI_TICKET_RESOLVE",
      description:
        "LLM-агент, который классифицирует обращения поддержки, решает типовые проблемы через инструменты и эскалирует сложные случаи операторам с контекстом.",
      tech: "AI / PYTHON",
      liveUrl: "https://ticket-bot.vov4ik-lab.online",
      repoUrl: "https://github.com/aStormspirit/AI-ticket-resolve",
    },
    third: {
      label: "ПРОЕКТ_03",
      title: "COMING_SOON",
      description: "Следующий деплой в пайплайне. Слот зарезервирован под будущую production-систему.",
      tech: "TBD",
      liveUrl: "#",
      repoUrl: "#",
    },
  },
  techStack: {
    heading: "ТЕХ_СТЕК",
  },
  contact: {
    titleLine1: "СВЯЗАТЬСЯ",
    titleLine2: "СО МНОЙ.",
    description:
      "Открыт к технически сложным проектам, системным аудитам и архитектурному консалтингу.",
    email: "vladimir@shinkadev.org",
    location: "SFO // HUB_NORTH",
    fullNameLabel: "ИМЯ",
    fullNamePlaceholder: "ПРЕДСТАВЬТЕСЬ",
    emailLabel: "EMAIL",
    emailPlaceholder: "КАНАЛ_СВЯЗИ",
    messageLabel: "СООБЩЕНИЕ",
    messagePlaceholder: "ОПИШИТЕ_ЗАДАЧУ...",
    submit: "ОТПРАВИТЬ_СООБЩЕНИЕ",
  },
  footer: {
    copyright: "© 2024 ARCHITECT_PORTFOLIO // SYSTEM_STABLE",
    links: [
      { label: "GITHUB", href: "https://github.com/aStormspirit"},
      { label: "LINKEDIN", href: "https://www.linkedin.com/in/vladimir-shinkarenko-87b9b3278/" },
      { label: "TELEGRAM", href: "https://t.me/shinkadev" },
      { label: "RESUME", href: "/resume.pdf" },
    ],
  },
  bottomNav: {
    home: "ГЛАВНАЯ",
    projects: "ПРОЕКТЫ",
    stack: "СТЕК",
    contact: "КОНТАКТЫ",
  },
};
