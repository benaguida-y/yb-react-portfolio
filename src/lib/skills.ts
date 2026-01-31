import { CodeXml, Palette, Database, ToolCase, Settings, ChevronsLeftRightEllipsis, FolderCode, MonitorCog } from "lucide-react";

export type SkillCategory = {
    id: string;
    icon: any;
    title: string;
    skill: string[];
    color: string;
}

export const skillCategories: SkillCategory[] = [
    {
        id:'1',
        icon: CodeXml,
        title: 'Frontend Development',
        skill: [
            'React.js',
            'TypeScript',
            'JavaScript',
            'Tailwind CSS',
            'Bootstrap'
        ],
        color: 'text-blue-500'
    },
    {
        id:'2',
        icon: Settings,
        title: 'Backend Development',
        skill: [
            'Node.js',
            'Express.js',
            'PHP',
            'Java EE'
        ],
        color: 'text-green-500'
    },
    {
        id:'3',
        icon: FolderCode,
        title: 'Full-Stack Frameworks',
        skill: [
            'Next.js'
        ],
        color: 'text-indigo-500'
    },
    {
        id:'4',
        icon: Database,
        title: 'Database',
        skill: [
            'Oracle',
            'PostgreSQL',
            'MySQL'
        ],
        color: 'text-emerald-500'
    },
    {
        id:'5',
        icon: ChevronsLeftRightEllipsis,
        title: 'CMS & Web Platforms',
        skill: [
            'WordPress'
        ],
        color: 'text-cyan-500'
    },
    {
        id:'6',
        icon: MonitorCog,
        title: 'Software Development',
        skill: [
            'Java',
            'JavaFX',
            'Python',
            'C'
        ],
        color: 'text-purple-500'
    },
    {
        id:'7',
        icon: Palette,
        title: 'UI/UX & Design',
        skill: [
            'Figma',
            'Adobe XD',
            'Photoshop',
            'Illustrator',
            'After Effects',
            'Canva'
        ],
        color: 'text-pink-500'
    },
    {
        id:'8',
        icon: ToolCase,
        title: 'Tools & Workflow',
        skill: [
            'Git',
            'GitHub',
            'VS Code',
            'Microsoft Teams'
        ],
        color: 'text-yellow-500'
    }
]