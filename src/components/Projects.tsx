import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, FolderGit2, Github } from 'lucide-react';
// import project1 from '@/assets/project1.jpg';
// import project2 from '@/assets/project2.jpg';
// import project3 from '@/assets/project3.jpg';

const Projects = () => {
    const projects = [
        {
            title: 'Vehicle Rental Management System',
            description: 'The Vehicle Rental Management System is a desktop application developed to automate and optimize vehicle rental operations. It enables administrators to manage vehicles, customers, and rental transactions efficiently through an intuitive interface. The system helps reduce manual workload, improve accuracy, and streamline business workflows for rental companies.',
            //   image: project1,
            technologies: ['Java', 'JavaFX', 'MySQL'],
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            title: 'Smart Parking RFID',
            description: 'A comprehensive solution for managing vehicle access and parking operations using RFID technology. This system handles vehicle identification, access control, payment processing, and parking space management with real-time monitoring capabilities.',
            //   image: project2,
            technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Next.js', 'Vercel'],
            liveUrl: '#',
            githubUrl: '#'
        }
    ];

    return (
        <section id="projects" className="py-20 border-t bg-[url('https://www.material-tailwind.com/logos/pattern-lines.png')] bg-cover bg-no-repeat">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0f1720]">
                        My <span className=" text-[#1e293b]">Projects</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Here are some of my recent projects that showcase my skills and passion for creating impactful solutions.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 group">
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </div>

                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <Badge key={techIndex} variant="secondary" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <Button size="sm" className="cursor-pointer bg-[#0f1720] hover:bg-[#1e293b] hover:opacity-90 transition-opacity">
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        Live Demo
                                    </Button>
                                    <Button variant="outline" size="sm" className='cursor-pointer hover:bg-[#1e293b] hover:text-white'>
                                        <Github className="h-4 w-4 mr-2" />
                                        Code
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12 ">
                    <Button size="lg" className="text-white cursor-pointer bg-[#0f1720] hover:bg-[#1e293b] hover:opacity-90 transition-opacity py-6">
                        View All Projects
                        <FolderGit2 />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Projects;