export type CVCertification = {
    title: {
        en: string,
        fr: string
    }
    items: {
        name: string
        link?: string
    }[]
}

export const cvCertifications: CVCertification[] = [
    {
        title: {
            en: "Programming",
            fr: "Programmation"
        },
        items: [
            {
                name: "CISCO JavaScript Essentials I",
                link: "https://www.credly.com/badges/400e64ee-c1e6-465c-8b88-9e2928ed7c69/linked_in_profile"
            },
            {
                name: "CISCO JavaScript Essentials II",
                link: "https://www.credly.com/badges/3b609b7d-9486-4838-b28f-5c0fd6fb81a6/linked_in_profile"
            },
            { name: "CLA Programming Essentials in C" }
        ]
    },
    {
        title: {
            en: "Operating Systems",
            fr: "Systèmes d'Exploitation"
        },
        items: [
            { name: "NDG Linux Unhatched Linux I Essentials" },
            { name: "NDG Linux Unhatched Linux II Essentials" }
        ]
    },
    {
        title: {
            en: "Cloud / DevOps",
            fr: "Cloud / DevOps"
        },
        items: [
            { 
                name: "AWS Academy Cloud Foundations", 
                link: "https://www.credly.com/badges/44b93d4c-2300-4718-befe-5b2acca1dc2a/linked_in_profile"
            }
        ]
    },
    {
        title: {
            en: "Artificial Intelligence",
            fr: "Intelligence Artificielle"
        },
        items: [
            { 
                name: "IBM Fundamentals of Artificial Intelligence",
                link: "https://www.credly.com/badges/62ec38a6-520c-4aec-84ce-d49fbb1045e3/linked_in_profile"
            },
            { 
                name: "IBM AI Fundamentals with IBM SkillsBuild", 
                link: "https://www.credly.com/badges/1167a628-f214-4f33-ae05-35c8963dce76/linked_in_profile"
            }
        ]
    },
    {
        title: {
            en: "Networks / Cybersecurity",
            fr: "Réseaux / Cybersécurité"
        },
        items: [
            { 
                name: "CISCO Introduction to Cybersecurity", 
                link: "https://www.credly.com/badges/66327383-9a3b-4cf6-8f37-2a6d24f8c792/linked_in_profile"
            }
        ]
    },
    {
        title: {
            en: "Data Science",
            fr: "Data Science"
        },
        items: [
            { 
                name: "CISCO Introduction to Data Science", 
                link: "https://www.credly.com/badges/1b6c960f-5a64-4f16-9d9b-6c1b018e24a4/linked_in_profile"
            }
        ]
    },
    {
        title: {
            en: "Microsoft 365",
            fr: "Microsoft 365"
        },
        items: [
            { name: "Word" },
            { name: "Excel" },
            { name: "PowerPoint" }
        ]
    }
]