export type CVSummary = {
    firstName: string
    lastName: string
    title: {
        en: string
        fr: string
    }
    description: {
        en: string
        fr: string
    }
}

export const cvSummaries: CVSummary[] = [
    {
        firstName: "YOUNESS",
        lastName: "BENAGUIDA",
        title: {
            en: "COMPUTER SCIENCE STUDENT",
            fr: "ÉTUDIANT EN INFORMATIQUE"
        },
        description: {
            en: "Computer science student specialized in web development, networking, and cybersecurity, with experience in network supervision and IT security. Motivated, disciplined, and problem-solving oriented.",
            fr: "Étudiant en informatique spécialisé en développement web, réseaux et cybersécurité, avec une expérience en supervision réseau et sécurité informatique.Motivé, discipliné et orienté résolution de problèmes."
        }
    },
]