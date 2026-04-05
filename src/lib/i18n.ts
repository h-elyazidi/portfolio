export type Lang = "en" | "fr";

const translations = {
  nav: {
    about: { en: "About", fr: "À propos" },
    experience: { en: "Experience", fr: "Expérience" },
    projects: { en: "Projects", fr: "Projets" },
    education: { en: "Education", fr: "Educations" },
  },
  hero: {
    greeting: { en: "", fr: "" },
    name: { en: "Habib EL YAZIDI", fr: "Habib EL YAZIDI" },
    roles: {
      en: ["Software Engineering", "AI & Intelligent Systems", "Startup Operations", "Keynote Speaking & Training | 1.3K+ Minds Impacted | 17+ Institutions"],
      fr: ["Ingénierie Logicielle", "IA & Systèmes Intelligents", "Opérations Startup", "Keynote Speaking & Formation | 1300+ Esprits Impactés | 17+ Institutions"],
    },
    saveContact: { en: "Save Contact", fr: "Enregistrer le Contact" },
    connectLinkedIn: { en: "Connect on LinkedIn", fr: "Se connecter sur LinkedIn" },
  },
  about: {
    title: { en: "About Me", fr: "À Propos" },
    subtitle: { en: "", fr: "" },
    p1: {
      en: "Future Software Engineer and former Managing Director, I specialize in architecting high-performance systems and leading cross-functional teams. At LSTA Technologies, I scaled operations to 15 collaborators across 5 divisions, securing the 'Best Regional Startup' award. I don't just build software; I build business-driven solutions that dominate markets.",
      fr: "Futur Ingénieur en Génie Informatique et ancien Directeur Général, je me spécialise dans l'architecture de systèmes haute performance et le pilotage d'équipes pluridisciplinaires. Chez LSTA Technologies, j'ai structuré une équipe de 15 collaborateurs répartis en 5 pôles, menant l'entreprise au prix de la Meilleure Startup Régionale. Je ne développe pas seulement du logiciel ; je conçois des solutions business stratégiques.",
    },
    p2: {
      en: "Beyond the code, I am a catalyst for growth and high-level networking. Passionate about exchanging on Business, Tech, and Soft Skills, I've impacted over 1,300+ minds across 17+ institutions as a speaker and trainer.",
      fr: "Au-delà du code, je suis un catalyseur de croissance et de networking de haut niveau. Passionné par le partage et l'échange sur le Business, la Tech et les Soft Skills, j'ai impacté plus de 1300 esprits à travers 17+ institutions en tant que conférencier et formateur.",
    },
  },
  experience: {
    title: { en: "Experience", fr: "Expérience" },
    subtitle: { en: "Proven leadership in High-Growth environments", fr: "Leadership éprouvé en environnements à haute croissance" },
    roles: [
      {
        title: { en: "Deputy CEO | Managing Director", fr: "Directeur Général" },
        company: { en: "LSTA Technologies", fr: "LSTA Technologies" },
        period: { en: "Feb. 2024 — Jun. 2025", fr: "Fév. 2024 — Juin 2025" },
        description: {
          en: "Directed a multidisciplinary team of 15 collaborators organized into 5 divisions. Led the company to win the 'Best Regional Startup' award. Spearheaded fundraising strategies and institutional partnerships, steering C-level board decisions.",
          fr: "Pilotage de la croissance : Dirigé et structuré une équipe pluridisciplinaire de 15 collaborateurs répartis en 5 pôles, menant l'entreprise à remporter le prix de la Meilleure Startup de la région de l'Oriental. Déploiement d'une stratégie de levée de fonds et de partenariats institutionnels.",
        },
      },
      {
        title: { en: "Team Lead", fr: "Responsable d'Équipe" },
        company: { en: "LSTA Technologies", fr: "LSTA Technologies" },
        period: { en: "Jul. 2023 — Feb. 2024", fr: "Juil. 2023 — Fév. 2024" },
        description: {
          en: "Managed recruitment, onboarding, and daily performance of a 15-person team. Implemented KPI frameworks to align technical velocity with the startup's objectives.",
          fr: "Management & structuration : Piloté le recrutement, l'intégration et la performance quotidienne de l'équipe de 15 collaborateurs. Instauration de KPIs pour aligner la vélocité technique sur les objectifs de la startup.",
        },
      },
    ],
  },
  projects: {
    title: { en: "Projects & Engineering", fr: "Projets & Ingénierie" },
    subtitle: { en: "Software Architecture & AI Solutions", fr: "Architecture Logicielle & Solutions d'IA" },
    items: [
      {
        title: { en: "School Transport Management SaaS Platform", fr: "Plateforme SaaS de Gestion de Transport Scolaire" },
        description: {
          en: "Microservices architecture and automation of school administration, driver assignment, and parent account generation. Integrated AI algorithms for dynamic routing and inter-company billing automation.",
          fr: "Architecture Microservices et automatisation de l'administration scolaire, assignation des chauffeurs et génération des comptes parents. Intégration d'algorithmes d'IA pour le calcul dynamique des itinéraires et automatisation de la facturation."
        },
        tags: ["Infrastructure", ".NET", "IA"],
      },
      {
        title: { en: "Pharmaceutical Inventory Management System", fr: "Système de Gestion de Stock Pharmaceutique" },
        description: {
          en: "Modular and scalable architecture ensuring complete digitization and security of the pharmacy lifecycle. High-efficiency UX design drastically reducing task execution time for daily operations.",
          fr: "Architecture modulaire évolutive garantissant la digitalisation complète et sécurisée du cycle de vie des stocks en officine. Interface ergonomique réduisant de manière drastique le temps d'exécution des tâches de gestion quotidiennes."
        },
        tags: ["Software Dev", "Security", "Scale"],
      },
      {
        title: { en: "Precious Metals Investment Mobile App", fr: "Application Mobile d'Investissement & Métaux Précieux" },
        description: {
          en: "Fintech solution featuring a local investment wallet with a real-time alert engine. Implemented predictive AI analyzing global trends to generate highly personalized investment strategies.",
          fr: "Solution Fintech dotée d'un Wallet local d'investissement avec un moteur d'alertes en temps réel. Implémentation d'une IA prédictive analysant les tendances mondiales pour générer des stratégies d'investissement personnalisées."
        },
        tags: ["Fintech", "Predictive IA", "Strategy"],
      },
    ],
  },
  education: {
    title: { en: "Education", fr: "Educations" },
    subtitle: { en: "", fr: "" },
    degree: { en: "Computer Engineering - State Engineer's Degree", fr: "Diplôme d'Ingénieur d'État en Génie Informatique" },
    school: { en: "School of Advanced Engineering Studies Oujda, EHEI", fr: "École des Hautes Études d'Ingénierie Oujda, EHEI" },
    period: { en: "2022 — 2027 (Expected Completion)", fr: "2022 — 2027 (Fin Prévue)" },
    description: {
      en: "Advanced studies in Software Engineering, AI, and Cloud Infrastructure. Active leadership as President of the Student Board (BDE) since 2023.",
      fr: "Études approfondies en Génie Logiciel, IA et Infrastructure Cloud. Leadership actif en tant que Président du Bureau des Étudiants (BDE) depuis 2023.",
    },
  },
  footer: {
    rights: { en: "All rights reserved.", fr: "Tous droits réservés." },
  },
} as const;

export function t(path: string, lang: Lang): string {
  const keys = path.split(".");
  let current: any = translations;
  for (const key of keys) {
    current = current?.[key];
  }
  if (current && typeof current === "object" && lang in current) {
    return current[lang];
  }
  return path;
}

export function tArray(path: string, lang: Lang): string[] {
  const keys = path.split(".");
  let current: any = translations;
  for (const key of keys) {
    current = current?.[key];
  }
  if (current && typeof current === "object" && lang in current) {
    return current[lang];
  }
  return [];
}

export function tExperience(lang: Lang) {
  return translations.experience.roles.map((role) => ({
    title: role.title[lang],
    company: role.company[lang],
    period: role.period[lang],
    description: role.description[lang],
  }));
}

export function tProjects(lang: Lang) {
  return translations.projects.items.map((item) => ({
    title: item.title[lang],
    description: item.description[lang],
    tags: item.tags,
  }));
}

export default translations;
