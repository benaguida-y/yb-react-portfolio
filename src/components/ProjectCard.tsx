import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Project } from "@/lib/projects";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";

type Props = {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    return (
        <Card className="overflow-hidden hover:shadow-2xl  group hover:scale-[1.02] transition-transform duration-300">

            {/* Image */}
            <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <CardContent className="p-4 space-y-3">

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-[#1e293b]">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-sm">
                            {tech}
                        </Badge>
                    ))}
                </div>

            </CardContent>

            <CardFooter className="p-4 pt-0 flex gap-2">
                <div className="w-full">

                    {/* Details Page */}
                    <NavLink to={`/projects/${project.slug}`} className="w-full">
                        <Button
                            size="sm"
                            className="w-full cursor-pointer mb-4 text-black bg-white hover:bg-[#1e293b] hover:text-white border"
                        >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Full Details
                        </Button>
                    </NavLink>

                    {/* GitHub */}
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" className="w-full">
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full cursor-pointer text-white bg-[#1e293b] hover:bg-white"
                            >
                                <Github className="h-6 w-4 mr-2" />
                                Code
                            </Button>
                        </a>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}
