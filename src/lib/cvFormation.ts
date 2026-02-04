// src/lib/cvEducation.ts
export type CVFormation = {
  title: {
    en: string
    fr: string
  }
  institution: {
    en: string,
    fr: string
  }
  period: {
    en: string
    fr: string
  }
  description?: {
    en: string
    fr: string
  }
}

export const cvFormations: CVFormation[] = [
  {
    title: {
      en: "High School Diploma",
      fr: "Diplôme de Baccalauréat"
    },
    institution: {
        en : "Baccalaureate in Physical Sciences",
        fr : "Baccalauréat en Sciences Physiques"
    },
    period: {
      en: "2017–2018",
      fr: "2017–2018"
    }
  },
  {
    title: {
      en: "Professional Military Service",
      fr: "Service Militaire Professionnel"
    },
    institution: {
        en : "Gendarmerie Royale – Special Forces (Voluntary Enlistment)",
        fr : "Gendarmerie Royale – Forces Spéciales (Volontariat)"
    },
    period: {
      en: "2018–2023",
      fr: "2018–2023"
    },
    description: {
      en: "Completed voluntary service, developing discipline, leadership, teamwork, and problem-solving skills. Gained time management and organizational experience applicable to IT projects.",
      fr: "Service volontaire accompli, développant la discipline, le leadership, le travail d’équipe et la résolution de problèmes. Acquisition de compétences en gestion du temps et en organisation applicables aux projets informatiques."
    }
  },
  {
    title: {
      en: "Higher Education",
      fr: "Enseignement Supérieur"
    },
    institution: {
        en: "SUPEMIR – Superior School of IT & Management",
        fr: "SUPEMIR – École Supérieure d’Informatique & Management"
    },
    period: {
      en: "2023–Present",
      fr: "2023–Présent"
    },
    description: {
      en: "3rd Year – Computer Science Development, Networks & Cybersecurity",
      fr: "3ᵉ Année – Développement Informatique, Réseaux & Cybersécurité"
    }
  }
]
