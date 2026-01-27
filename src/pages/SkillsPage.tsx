import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeXml, Palette, Database, ToolCase, Settings, ChevronsLeftRightEllipsis, FolderCode, MonitorCog } from "lucide-react";

const SkillsPage = () => {
    const skillCategories = [
        {
            icon: CodeXml,
            title: 'Frontend Development',
            description: 'Building responsive, accessible, and interactive user interfaces for the web.',
            skills: [
                'React.js',
                'TypeScript',
                'JavaScript',
                'Tailwind CSS',
                'Bootstrap'
            ],
            color: 'text-blue-500'
        },
        {
            icon: Settings,
            title: 'Backend Development',
            description: 'Developing server-side logic, APIs, and application business logic.',
            skills: [
                'Node.js',
                'Express.js',
                'PHP',
                'Java EE'
            ],
            color: 'text-green-500'
        },
        {
            icon: FolderCode,
            title: 'Full-Stack Frameworks',
            description: 'Frameworks that handle both frontend rendering and backend logic.',
            skills: [
                'Next.js'
            ],
            color: 'text-indigo-500'
        },
        {
            icon: Database,
            title: 'Database',
            description: 'Designing, querying, and managing relational database systems.',
            skills: [
                'Oracle',
                'PostgreSQL',
                'MySQL'
            ],
            color: 'text-emerald-500'
        },
        {
            icon: ChevronsLeftRightEllipsis,
            title: 'CMS & Web Platforms',
            description: 'Content management systems for building and managing dynamic websites.',
            skills: [
                'WordPress'
            ],
            color: 'text-cyan-500'
        },
        {
            icon: MonitorCog,
            title: 'Software Development',
            description: 'Developing desktop and general-purpose applications using multiple languages.',
            skills: [
                'Java',
                'JavaFX',
                'Python',
                'C'
            ],
            color: 'text-purple-500'
        },
        {
            icon: Palette,
            title: 'UI/UX & Design',
            description: 'Designing user-centered interfaces and visual assets for digital products.',
            skills: [
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
            icon: ToolCase,
            title: 'Tools & Workflow',
            description: 'Tools and practices used for version control, collaboration, and development workflow.',
            skills: [
                'Git',
                'GitHub',
                'VS Code',
                'Microsoft Teams'
            ],
            color: 'text-yellow-500'
        }
    ];


    return (
        <div className="py-20 bg-gray-50 min-h-screen bg-[url('https://www.material-tailwind.com/logos/pattern-lines.png')] bg-cover bg-no-repeat">
            <div className="container mx-auto px-6">
                {/* Page Header */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-bold text-[#0f1720] mb-6">
                        My <span className="text-[#1e293b]">Skills</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Explore my complete skill set across frontend, backend, software
                        development, and design — the tools I use to build reliable and
                        engaging applications.
                    </p>
                </div>


                {/* Skill Categories */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {skillCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <Card
                                key={index}
                                className="p-8 border-2 shadow-lg hover:shadow-[#0f1720] transition-shadow group"
                            >
                                <CardContent className="p-0">
                                    {/* Header */}
                                    <div className="flex items-center mb-6">
                                        <div
                                            className={`p-4 rounded-xl border mr-4 group-hover:scale-110 transition-transform`}
                                        >
                                            <IconComponent
                                                className={`h-8 w-8 ${category.color}`}
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-semibold text-[#0f1720]">
                                                {category.title}
                                            </h2>
                                            <p className="text-sm text-muted-foreground">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Separator */}
                                    <div className="border-t border-gray-200 mb-6"></div>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <Badge
                                                key={skillIndex}
                                                variant="outline"
                                                className="text-sm bg-gray-200 text-[#0f1720] hover:bg-[#0f1720] hover:text-white transition-colors px-3 py-1"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SkillsPage;
