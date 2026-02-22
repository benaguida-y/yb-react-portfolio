// import { useParams } from "react-router-dom";
// import { projects } from "@/lib/projects";

// export default function ProjectDetails() {
//     const { slug } = useParams();

//     const project = projects.find(p => p.slug === slug);

//     if (!project) return <div>Project not found</div>;

//     return (
//         <div className="min-h-screen text-[#1e293b] p-10 flex flex-wrap justify-center">

//             <div>
//                 <h1 className="text-4xl font-bold text-[#1e293b] mb-6 border-b-2 ">
//                     {project.title}
//                 </h1>
//             </div>

//             <div className="flex flex-wrap w-full">
//                 <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full max-w-3xl rounded-lg mb-6"
//                 />
//             </div>
//             <div className="flex ">
//                 <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full rounded-lg"
//                 />
//                 <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full rounded-lg"
//                 />
//                 <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full rounded-lg"
//                 />
//             </div>

//             <div className="flex flex-wrap w-full">
//                 <p className="text-muted-foreground">
//                     {project.fullDescription}
//                 </p>
//             </div>

//         </div>
//     );
// }

import { useParams } from "react-router-dom";
import { projects } from "@/lib/projects";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function ProjectDetails() {
    const { slug } = useParams<{ slug: string }>();

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white text-[#1e293b]">
                Project not found
            </div>
        );
    }

    // Main image state (for gallery switching)
    const [selectedImage, setSelectedImage] = useState(
        project.images[0]
    );

    return (
        <div className="min-h-screen bg-white text-[#1e293b] px-6 py-16">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
                {project.title}
            </h1>


            {/* Main Image */}
            <div className="max-w-5xl mx-auto mb-8">
                <img
                    src={selectedImage}
                    alt={project.title}
                    className="w-full shadow-lg"
                />
            </div>

            {/* Thumbnails */}
            <div className="max-w-5xl mx-auto flex gap-4 overflow-x-auto mb-12">
                {project.images.map((img) => (
                    <img
                        key={img}
                        src={img}
                        onClick={() => setSelectedImage(img)}
                        className={`h-24 cursor-pointer border-2 transition 
                            ${selectedImage === img
                                ? "border-white"
                                : "border-transparent opacity-70 hover:opacity-100"
                            }`}
                    />
                ))}
            </div>

            {/* Description */}
            <div className=" max-w-5xl mx-auto mt-4">

                {/* Technologies */}
                <div className="">
                    {/* Links */}
                    <div className="flex gap-4 mb-4">
                        {project.githubUrl && (
                            <div className="flex gap-3">
                                <a href={project.githubUrl} target="_blank" className="w-full">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="cursor-pointer w-42 text-white bg-[#1e293b] hover:bg-white"
                                    >
                                        <Github className="h-4 w-4 mr-2" />
                                        Code
                                    </Button>
                                </a>
                            </div>
                        )}
                    </div>

                    <hr />

                    <h3 className="text-xl font-semibold my-3 ">
                        Technologies
                    </h3>

                    <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs bg-gray-200 text-[#0f1720] hover:bg-[#0f1720] hover:text-white transition-colors">{tech}</Badge>
                        ))}
                    </div>
                </div>

                <h3 className="text-xl font-semibold mt-8">
                    Description
                </h3>
                <p className="whitespace-pre-line text-foreground-muted">
                    {project.fullDescription}
                </p>

            </div>
        </div>
    );
}
