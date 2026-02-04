export type CVTechnicalSkill = {
    title: {
        en: string
        fr: string
    }
    sections: {
        title?: {
            en: string
            fr: string
        }
        items: string[]
    }[]
}

export const cvTechnicalSkills: CVTechnicalSkill[] = [
    {
        title: {
            en: "Programming Languages",
            fr: "Langages de Programmation"
        },
        sections: [
            {
                items: [
                    "JavaScript",
                    "TypeScript",
                    "Java",
                    "Python",
                    "PHP",
                    "C"
                ]
            }
        ]
    },
    {
        title: {
            en: "Web Developement",
            fr: "Dévelopement Web"
        },
        sections: [
            {
                title: {
                    en: "Frontend",
                    fr: "Frontend"
                },
                items: [
                    "HTML5 / CSS3",
                    "React.js",
                    "Next.js",
                    "Tailwind CSS",
                    "Bootstrap"
                ]
            },
            {
                title: {
                    en: "Backend",
                    fr: "Backend"
                },
                items: [
                    "Node.js",
                    "Express.js",
                    "Java EE"
                ]
            }
        ]
    },

    {
        title: {
            en: "Databases",
            fr: "Bases de Données"
        },
        sections: [
            {
                items: [
                    "Oracle",
                    "PostgreSQL",
                    "MySQL"
                ]
            }
        ]
    },
    {
        title: {
            en: "UI / UX & Design",
            fr: "UI / UX & Design"
        },
        sections: [
            {
                items: [
                    "Figma",
                    "Adobe Photoshop",
                    "Adobe Illustrator",
                    "Adobe After Effects",
                    "Canva"
                ]
            }
        ]
    },
    {
        title: {
            en: "Networking",
            fr: "Réseaux"
        },
        sections: [
            {
                items: [
                    "Cisco CCNA 1, 2, 3, 4"
                ]
            }
        ]
    },
    {
        title: {
            en: "Tools & Workflow",
            fr: "Outils & Workflow"
        },
        sections: [
            {
                title: {
                    en: "Development Tools",
                    fr: "Outils de Développement"
                },
                items: [
                    "Git",
                    "GitHub"
                ]
            },
            {
                title: {
                    en: "Collaboration Tools",
                    fr: "Outils de Collaboration"
                },
                items: [
                    "Microsoft Teams",
                    "Slack"
                ]
            }
        ]
    }
]