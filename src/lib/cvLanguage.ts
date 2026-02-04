export type CVLanguage = {
    id: string;
    name: {
        en: string;
        fr: string;
    };
    level: {
        en: string;
        fr: string;
    };
};



export const cvLanguages: CVLanguage[] = [
    {
        id: "1",
        name: {
            en: "Arabic",
            fr: "Arabe"

        },
        level: {
            en: "Native",
            fr: "Langue maternelle"

        }
    },
    {
        id: "2",
        name: {
            en: "English",
            fr: "Anglais"

        },
        level: {
            en: "Advanced",
            fr: "Avancé"

        }
    },
    {
        id: "3",
        name: {
            en: "French",
            fr: "Français"

        },
        level: {
            en: "Intermediate",
            fr: "Intermédiaire"

        }
    },
    {
        id: "4",
        name: {
            en: "Russian",
            fr: "Russe"

        },
        level: {
            en: "Beginner",
            fr: "Débutant"

        }
    }
]