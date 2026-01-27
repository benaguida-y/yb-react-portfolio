import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CodeXml, Palette, Database, ToolCase, Settings, ChevronsLeftRightEllipsis, FolderCode, MonitorCog } from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            icon: CodeXml,
            title: 'Frontend Development',
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
            skills: [
                'Next.js'
            ],
            color: 'text-indigo-500'
        },
        {
            icon: Database,
            title: 'Database',
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
            skills: [
                'WordPress'
            ],
            color: 'text-cyan-500'
        },
        {
            icon: MonitorCog,
            title: 'Software Development',
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
        <section id="skills" className="py-20 border-t bg-[url('https://www.material-tailwind.com/logos/pattern-lines.png')] bg-cover bg-no-repeat">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0f1720]">
                        My <span className=" text-[#1e293b]">Skills</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        A comprehensive toolkit for building modern, scalable applications across various platforms.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <Card key={index} className="p-6 shadow-card hover:shadow-[#0f1720] border-2 transition-shadow duration-300 group">
                                <CardContent className="p-0">
                                    <div className="flex items-center mb-4">
                                        <div className={`p-3  rounded-lg border mr-4 group-hover:scale-110 transition-transform`}>
                                            <IconComponent className={`h-6 w-6 ${category.color}`} />
                                        </div>
                                        <h3 className="text-lg text-[#0f1720] font-semibold">{category.title}</h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <Badge
                                                key={skillIndex}
                                                variant="outline"
                                                className="text-xs bg-gray-200 text-[#0f1720] hover:bg-[#0f1720] hover:text-white transition-colors"
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
        </section>
    );
};

export default Skills;