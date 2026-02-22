import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen px-6 py-20 bg-[url('https://www.material-tailwind.com/logos/pattern-lines.png')] bg-cover bg-no-repeat">

            {/* Page Header */}
            <div className="text-center mb-20">
                <h1 className="text-5xl font-bold text-[#0f1720] mb-6">
                    My <span className="text-[#1e293b]">Projects</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    A collection of projects showcasing my experience in full-stack development, software engineering, and problem-solving through real-world applications and innovative solutions.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>

        </div>
    );
}
