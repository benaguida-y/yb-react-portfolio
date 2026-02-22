import { Button } from "./ui/button";
import SocialLinks from "./SocialLinks";
import { FolderGit2, MessageCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface HeroProps {
    title?: string;
    subtitle?: string;
    btnText1?: string;
    btnText2?: string;
    backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
    title = "",
    subtitle = "",
    btnText1 = "",
    btnText2 = "",
    backgroundImage
}) => {

    return (
        <section id="home" className="flex items-center h-screen bg-linear-to-r from-[#0f1720] to-[#1e293b] text-white px-4">
            {backgroundImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
            )}
            <div className=" max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6 font-ubuntu">
                    {title}
                </h1>
                <p className="text-xl mb-8 text-muted-foreground">
                    {subtitle}
                </p>
                <div className="flex gap-4 justify-center">
                    <SocialLinks />
                </div>
                <div className="flex justify-center gap-6 pt-8">
                    {/* <NavLink to="#contact">
                        <Button
                            className="text-md cursor-pointer bg-white text-[#0f1720] border border-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0f1720] hover:text-white transition-colors duration-300"
                        >
                            {btnText1}
                            <MessageCircle />
                        </Button>
                    </NavLink> */}
                    <div className="hidden md:flex justify-end">
                        <HashLink smooth to="/#contact">
                            <Button className="text-sm cursor-pointer bg-white text-[#0f1720] border border-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0f1720] hover:text-white transition-colors duration-300">
                                {btnText1}
                                <MessageCircle />
                            </Button>
                        </HashLink>
                    </div>
                    <NavLink to="/projects">
                        <Button
                            className="text-sm cursor-pointer bg-[#0f1720] text-white border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0f1720] transition-colors duration-300"
                        >
                            {btnText2}
                            <FolderGit2 />
                        </Button>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default Hero