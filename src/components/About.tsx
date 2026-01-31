import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { NavLink} from 'react-router-dom';
import { FileUser } from 'lucide-react';

const About = () => {
    

    return (
        <section id="about" className="py-20 bg-secondary/30 bg-[url('https://www.material-tailwind.com/logos/pattern-lines.png')] bg-cover bg-no-repeat">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0f1720]">
                        About <span className=" text-[#1e293b]">Me</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        I'm a passionate developer with 5+ years of experience creating digital solutions that make a difference.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            My journey in tech started with curiosity and has evolved into a deep passion for creating
                            beautiful, functional applications that solve real-world problems. I specialize in modern
                            web technologies and love bringing ideas to life through code.
                        </p>

                        <p className="text-lg leading-relaxed text-muted-foreground">
                            When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                            projects, or enjoying the great outdoors. I believe in continuous learning and staying at
                            the forefront of technological innovation.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-4">
                            <Badge variant="secondary" className="bg-gray-200 text-sm">Attention to Details</Badge>
                            <Badge variant="secondary" className="bg-gray-200 text-sm">Teamwork</Badge>
                            <Badge variant="secondary" className="bg-gray-200 text-sm">Problem Solver</Badge>
                            <Badge variant="secondary" className="bg-gray-200 text-sm">Time Management</Badge>
                            <Badge variant="secondary" className="bg-gray-200 text-sm">Effective Communication</Badge>
                            <Badge variant="secondary" className="bg-gray-200 text-sm">Critical Thinking</Badge>
                        </div>
                        <NavLink to="/about-fr">
                            <Button className=" cursor-pointer bg-[#0f1720] hover:bg-[#1e293b] hover:opacity-90 transition-opacity text-sm">
                                Find Out More
                                <FileUser />
                            </Button>
                        </NavLink>
                    </div>

                    <div className="space-y-6">
                        <Card className="p-6 shadow-card">
                            <CardContent className="p-0">
                                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-medium">IT Infrastructure & Security Internship</h4>
                                        <p className="text-sm text-muted-foreground">Circet • Aug 2025 - Sep 2025</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="p-6 shadow-card">
                            <CardContent className="p-0">
                                <h3 className="text-xl font-semibold mb-4">Education</h3>
                                <div>
                                    <h4 className="font-medium">Web Developement</h4>
                                    <p className="text-sm text-muted-foreground">SUPEMIR, Higher School of IT & Management • 2026</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;