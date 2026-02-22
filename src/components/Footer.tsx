// import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";
import SocialLinks from './SocialLinks';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t-2 bg-linear-to-r from-[#0f1720] to-[#1e293b] text-white pt-10 pb-4">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex text-2xl font-bold text-white mb-8 gap-4 items-center">
                            <div className="shrink-0 flex items-center">
                                <a href="#home">
                                    <img
                                        src={logo}
                                        alt="YB Logo"
                                        className="h-10 w-auto border"
                                    />
                                </a>
                            </div>
                            YB Dev
                        </div>
                        <p className="text-muted-foreground mb-4">
                            Building digital experiences that make a difference. Let's create something amazing together.
                        </p>
                        <SocialLinks />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2 text-muted-foreground">
                            <div><a href="#home" className="hover:text-white transition-colors">Home</a></div>
                            <div><a href="#about" className="hover:text-white transition-colors">About</a></div>
                            <div><a href="#skills" className="hover:text-white transition-colors">Skills</a></div>
                            <div><a href="#projects" className="hover:text-white transition-colors">Projects</a></div>
                            <div><a href="#contact" className="hover:text-white transition-colors">Contact</a></div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <div className="space-y-2 text-muted-foreground">
                            <div>Web Development</div>
                            <div>Mobile Apps</div>
                            <div>UI/UX Design</div>
                            <div>Consulting</div>
                            <div>Code Review</div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-muted-foreground text-sm">
                        © {currentYear} YB Dev. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;