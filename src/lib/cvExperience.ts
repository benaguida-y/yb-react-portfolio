// src/lib/cvExperience.ts
export type CVExperience = {
  role: {
    en: string
    fr: string
  }
  company: string
  location: string
  period: {
    en: string
    fr: string
  }
  responsibilities: {
    en: string[]
    fr: string[]
  }
}

export const cvExperiences: CVExperience[] = [
  {
    role: {
      en: "Intern",
      fr: "Stagiaire"
    },
    company: "Circet Maroc",
    location: "Casablanca, MA",
    period: {
      en: "August 2025 – September 2025",
      fr: "Août 2025 – Septembre 2025"
    },
    responsibilities: {
      en: [
        "Configured and maintained Zabbix dashboards to monitor servers and network devices.",
        "Implemented alerting rules to detect outages and performance issues in real time.",
        "Used Nessus to perform vulnerability scans and assess security risks.",
        "Collaborated with the IT team to troubleshoot incidents and apply remediation.",
        "Gained hands-on experience in network monitoring and IT operations."
      ],
      fr: [
        "Configuration et maintenance de tableaux de bord Zabbix pour surveiller les serveurs et équipements réseau.",
        "Mise en place de règles d’alerte pour détecter les pannes et problèmes de performance en temps réel.",
        "Utilisation de Nessus pour effectuer des analyses de vulnérabilités et évaluer les risques de sécurité.",
        "Collaboration avec l’équipe IT pour diagnostiquer les incidents et appliquer des actions correctives.",
        "Acquisition d’une expérience pratique en supervision réseau et opérations IT."
      ]
    }
  }
]
