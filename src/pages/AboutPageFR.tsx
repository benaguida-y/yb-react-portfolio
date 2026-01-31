import { Globe, Linkedin, Mail, MapPin, Phone, SquareArrowOutUpRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cvExperiences } from "@/lib/cvExperience";
import logo from "../assets/logo.png";



const AboutPageFR = () => {
    const lang = "fr"
    return (
        <div className="bg-[url('https://www.material-tailwind.com/logos/pattern-lines.png')] bg-cover bg-no-repeat min-h-screen pt-26 pb-14">
            <div className="flex justify-center items-center mb-4">
                <NavLink to="/about-en">
                    <Button size="sm" className=" cursor-pointer text-black hover:text-white bg-white hover:bg-[#1e293b] hover:opacity-90 transition-opacity border">
                        {/* <ExternalLink className="h-4 w-4 mr-2" /> */}
                        CV - English
                    </Button>
                </NavLink>
            </div>
            <div className="flex bg-white shadow-2xl border border-black mx-auto  text-base leading-relaxed relative"
                style={{
                    width: '210mm',
                }}>

                {/* Section Bleue Gauche */}
                <div className="basis-1/3 bg-[#163853] flex flex-col items-center ">
                    {/* Image */}
                    <div className="flex justify-center py-12 w-auto">
                        <img
                            src={logo}
                            alt="YB Logo"
                            className="h-24  border"
                        />
                    </div>

                    <div className="flex justify-center px-6">
                        <Accordion type="multiple">
                            {/* Contact */}
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-2xl font-bold text-white"><span className="border-b-3 border-white">CONTACT</span></AccordionTrigger>
                                <AccordionContent>
                                    <div className=" border-l-2 border-[#163853] flex flex-col">
                                        <a href="tel:+212607292997" target="_blank" rel="noopener noreferrer" className="pb-1 inline-flex items-center">
                                            <p className="text-white flex items-center gap-1">
                                                <Phone className="w-4 h-4 mr-1" />
                                                +212 6 07 29 29 97
                                            </p>
                                        </a>
                                        <a href="mailto:yns.benaguida@gmail.com" target="_blank" rel="noopener noreferrer" className="pb-1 inline-flex items-center">
                                            <p className="text-white flex items-center gap-1">
                                                <Mail className="w-4 h-4 mr-1" />
                                                yns.benaguida@gmail.com
                                            </p>
                                        </a>
                                        <a href="https://www.linkedin.com/in/youness-benaguida-ynsben" target="_blank" rel="noopener noreferrer" className="pb-1 inline-flex items-center">
                                            <p className="text-white flex items-center gap-1">
                                                <Linkedin className="w-4 h-4 mr-1" />
                                                Youness Benaguida
                                            </p>
                                        </a>
                                        <a href="" target="_blank" rel="noopener noreferrer" className="pb-1 inline-flex items-center">
                                            <p className="text-white flex items-center gap-1">
                                                <Globe className="w-4 h-4 mr-1" />
                                                xxxxxxx
                                            </p>
                                        </a>
                                        <a href="https://www.google.com/maps/place/Casablanca/@33.5718505,-7.9166631,10z/data=!3m1!4b1!4m6!3m5!1s0xda7cd4778aa113b:0xb06c1d84f310fd3!8m2!3d33.5731104!4d-7.5898434!16zL20vMDIyYl8?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="pb-1 inline-flex items-center">
                                            <p className="text-white flex items-center gap-1">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                Casablanca, MA
                                            </p>
                                        </a>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Langues */}
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-2xl font-bold text-white"><span className="border-b-3 border-white">LANGUES</span> </AccordionTrigger>
                                <AccordionContent>
                                    <div className=" border-l-2 border-[#163853] flex flex-col">
                                        <p className="text-white flex items-center gap-1">• Arabe – Langue Maternelle</p>
                                        <p className="text-white flex items-center gap-1">• Anglais – Avancé</p>
                                        <p className="text-white flex items-center gap-1">• Français – Intermédiaire</p>
                                        <p className="text-white flex items-center gap-1">• Russe – Débutant</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Compétences Personnelles */}
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-2xl font-bold text-white"><span className="border-b-3 border-white">COMPÉTENCES</span> </AccordionTrigger>
                                <AccordionContent>
                                    <div className=" border-l-2 border-[#163853] flex flex-col">
                                        <p className="text-white flex items-center gap-1">• Sens du Détail</p>
                                        <p className="text-white flex items-center gap-1">• Travail d’Équipe</p>
                                        <p className="text-white flex items-center gap-1">• Résolution de Problèmes</p>
                                        <p className="text-white flex items-center gap-1">• Gestion du Temps</p>
                                        <p className="text-white flex items-center gap-1">• Communication Efficace</p>
                                        <p className="text-white flex items-center gap-1">• Esprit Critique</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Centres d’Intérêt */}
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-2xl font-bold text-white"><span className="border-b-3 border-white">CENTRES D’INTÉRÊT</span> </AccordionTrigger>
                                <AccordionContent>
                                    <div className=" border-l-2 border-[#163853] flex flex-col">
                                        <p className="text-white flex items-center gap-1">• Programmation</p>
                                        <p className="text-white flex items-center gap-1">• Développement de Projets</p>
                                        <p className="text-white flex items-center gap-1">• Jeux Vidéo</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                {/* Section Blanche Droite */}
                <div className="basis-2/3 px-6 py-12">

                    {/* Nom & Fonction */}
                    <div className="mb-10">
                        <h1 className="text-5xl tracking-tighter  text-gray-600 mb-2">YOUNESS <span className="font-bold text-[#1e293b]">BENAGUIDA</span></h1>
                        <p className="text-2xl text-muted-foreground w-max border-b-6 border-[#163853] pb-2">ÉTUDIANT EN INFORMATIQUE</p>
                    </div>

                    {/* Contenu */}
                    <div className="">
                        <Accordion type="multiple">

                            {/* Formations */}
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-2xl font-bold text-[#163853]"><span className="border-b-3 border-[#1e293b]">FORMATIONS</span> </AccordionTrigger>
                                <AccordionContent>
                                    {/* Lycée */}
                                    <div className="pb-6 border-l-2 border-[#163853]">
                                        <h1 className="text-l font-bold">
                                            <span className="text-[#163853]">•</span> Diplôme de Baccalauréat
                                        </h1>
                                        <p className="pl-4">Baccalauréat en Sciences Physiques</p>
                                        <p className="pl-4 text-muted-foreground italic font-light text-xs">2017–2018</p>
                                    </div>

                                    {/* Service Militaire */}
                                    <div className="pb-6 border-l-2 border-[#163853]">
                                        <h1 className="text-l font-bold">
                                            <span className="text-[#163853]">•</span> Service Militaire Professionnel
                                        </h1>
                                        <p className="pl-4">Gendarmerie Royale – Forces Spéciales (Volontariat)</p>
                                        <p className="pl-4 text-muted-foreground italic font-light text-xs">2018–2023</p>
                                        <p className="pl-4 text-muted-foreground italic font-light">
                                            Service volontaire accompli, développant la discipline, le leadership, le travail d'équipe et les compétences en résolution de problèmes. Acquisition d'expérience en gestion du temps et organisation applicable aux projets informatiques.
                                        </p>
                                    </div>

                                    {/* Enseignement Supérieur */}
                                    <div className="pb-6 border-l-2 border-[#163853]">
                                        <h1 className="text-l font-bold">
                                            <span className="text-[#163853]">•</span> Enseignement Supérieur
                                        </h1>
                                        <p className="pl-4">SUPEMIR – École Supérieure d’Informatique & Management</p>
                                        <p className="pl-4 text-muted-foreground italic font-light text-xs">2023–Présent</p>
                                        <p className="pl-4 text-muted-foreground italic font-light">
                                            3ᵉ Année – Développement Informatique, Réseaux & Cybersécurité
                                        </p>
                                    </div>
                                </AccordionContent>

                            </AccordionItem>

                            {/* Expérience */}
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-2xl font-bold text-[#163853]"><span className="border-b-3 border-[#1e293b]">EXPÉRIENCE</span> </AccordionTrigger>
                                <AccordionContent>
                                    {cvExperiences.map((exp, index) => (
                                        <div key={index} className="pb-6 border-l-2 border-[#163853]">
                                            <h1 className="text-l font-bold">
                                                <span className="text-[#163853]">•</span>{" "}
                                                {exp.role[lang]} – {exp.company}
                                            </h1>

                                            <p className="pl-4 text-muted-foreground italic font-light">
                                                {exp.location} — {exp.period[lang]}
                                            </p>

                                            {exp.responsibilities[lang].map((item, i) => (
                                                <p className="pl-6 font-light" key={i}>• {item}</p>
                                            ))}
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>

                            {/* Compétences Techniques */}
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-2xl font-bold text-[#163853]"><span className="border-b-3 border-[#1e293b]">COMPÉTENCES TECHNIQUES</span> </AccordionTrigger>
                                <AccordionContent>
                                    {/* Frontend & Web */}
                                    <div className="pb-6 border-l-2 border-[#163853]">
                                        <h1 className="text-l font-bold">
                                            <span className="text-[#163853]">•</span> Développement Frontend & Web
                                        </h1>

                                        <p className="pl-4 ">Langages de Programmation</p>
                                        <p className="pl-8 text-muted-foreground">HTML</p>
                                        <p className="pl-8 text-muted-foreground">CSS</p>
                                        <p className="pl-8 text-muted-foreground">JavaScript (JS)</p>
                                        <p className="pl-8 text-muted-foreground">TypeScript (TS)</p>
                                        <p className="pl-8 text-muted-foreground">PHP</p>

                                        <p className="pl-4 ">Bibliothèques & Frameworks Frontend</p>
                                        <p className="pl-8 text-muted-foreground">React.js</p>
                                        <p className="pl-8 text-muted-foreground">Next.js</p>
                                        <p className="pl-8 text-muted-foreground">Tailwind CSS</p>
                                        <p className="pl-8 text-muted-foreground">Bootstrap</p>
                                    </div>

                                    {/* Backend & Full-Stack */}
                                    <div className="pb-6 border-l-2 border-[#163853]">
                                        <h1 className="text-l font-bold">
                                            <span className="text-[#163853]">•</span> Backend & Full-Stack
                                        </h1>

                                        <p className="pl-4 ">Langages & Frameworks Backend</p>
                                        <p className="pl-8 text-muted-foreground">Node.js</p>
                                        <p className="pl-8 text-muted-foreground">Express.js</p>
                                        <p className="pl-8 text-muted-foreground">PHP</p>
                                        <p className="pl-8 text-muted-foreground">Java EE</p>

                                        <p className="pl-4 ">Bases de Données</p>
                                        <p className="pl-8 text-muted-foreground">Oracle</p>
                                        <p className="pl-8 text-muted-foreground">PostgreSQL</p>
                                        <p className="pl-8 text-muted-foreground">MySQL</p>

                                        <p className="pl-4 ">CMS & Plateformes Web</p>
                                        <p className="pl-8 text-muted-foreground">WordPress</p>
                                    </div>

                                    {/* Développement logiciel */}
                                    <div className="pb-6 border-l-2 border-[#163853]">
                                        <h1 className="text-l font-bold">
                                            <span className="text-[#163853]">•</span> Développement Logiciel
                                        </h1>

                                        <p className="pl-4 ">Langages de Programmation</p>
                                        <p className="pl-8 text-muted-foreground">Java</p>
                                        <p className="pl-8 text-muted-foreground">C</p>
                                        <p className="pl-8 text-muted-foreground">Python</p>

                                        <p className="pl-4 ">Frameworks</p>
                                        <p className="pl-8 text-muted-foreground">JavaFX</p>
                                    </div>

                                    {/* UI/UX & Design */}
                                    <div className="pb-6 border-l-2 border-[#163853]">
                                        <h1 className="text-l font-bold">
                                            <span className="text-[#163853]">•</span> UI/UX & Design
                                        </h1>

                                        <p className="pl-4 ">Design & Édition</p>
                                        <p className="pl-8 text-muted-foreground">Figma</p>
                                        <p className="pl-8 text-muted-foreground">Adobe XD</p>
                                        <p className="pl-8 text-muted-foreground">Photoshop</p>
                                        <p className="pl-8 text-muted-foreground">Illustrator</p>
                                        <p className="pl-8 text-muted-foreground">After Effects</p>
                                        <p className="pl-8 text-muted-foreground">Canva</p>
                                    </div>

                                    {/* Réseaux */}
                                    <div className="pb-6 border-l-2 border-[#163853]">
                                        <h1 className="text-l font-bold">
                                            <span className="text-[#163853]">•</span> Réseaux
                                        </h1>
                                        <p className="pl-4 text-muted-foreground">Cisco CCNA 1, 2, 3, 4</p>
                                    </div>

                                    {/* Outils & Workflow */}
                                    <div className="pb-6 border-l-2 border-[#163853]">
                                        <h1 className="text-l font-bold">
                                            <span className="text-[#163853]">•</span> Outils & Workflow
                                        </h1>

                                        <p className="pl-4 ">Outils de Développement</p>
                                        <p className="pl-8 text-muted-foreground">VS Code</p>
                                        <p className="pl-8 text-muted-foreground">Git</p>
                                        <p className="pl-8 text-muted-foreground">GitHub</p>

                                        <p className="pl-4 ">Outils de Collaboration</p>
                                        <p className="pl-8 text-muted-foreground">Microsoft Teams</p>
                                        <p className="pl-8 text-muted-foreground">Slack</p>
                                    </div>

                                </AccordionContent>
                            </AccordionItem>

                            {/* Certifications */}
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-2xl font-bold text-[#163853]"><span className="border-b-3 border-[#1e293b]">CERTIFICATIONS</span> </AccordionTrigger>
                                <AccordionContent>
                                    <div className="pb-6 border-l-2 border-[#163853]">
                                        <h1 className="text-l font-bold"><span className="text-[#163853]">•</span> Programmation</h1>
                                        <p className="pl-8 text-muted-foreground flex items-center gap-1">CISCO Javascript Essentials I
                                            <a href="https://www.credly.com/badges/400e64ee-c1e6-465c-8b88-9e2928ed7c69/linked_in_profile" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                                <SquareArrowOutUpRight className="w-4 h-4 ml-1" />
                                            </a>
                                        </p>
                                        <p className="pl-8 text-muted-foreground flex items-center gap-1">CISCO Javascript Essentials II
                                            <a href="https://www.credly.com/badges/3b609b7d-9486-4838-b28f-5c0fd6fb81a6/linked_in_profile" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                                <SquareArrowOutUpRight className="w-4 h-4 ml-1" />
                                            </a>
                                        </p>
                                        <p className="pl-8 text-muted-foreground">CLA Programming Essentials en C</p>
                                    </div>

                                    <div className="pb-6 border-l-2 border-[#163853]">
                                        <h1 className="text-l font-bold"><span className="text-[#163853]">•</span> Systèmes d’Exploitation</h1>
                                        <p className="pl-8 text-muted-foreground">NDG Linux Unhatched Linux I Essentials</p>
                                        <p className="pl-8 text-muted-foreground">NDG Linux Unhatched Linux II Essentials</p>
                                    </div>

                                    <div className="pb-6 border-l-2 border-[#163853]">
                                        <h1 className="text-l font-bold"><span className="text-[#163853]">•</span> Cloud/DevOps</h1>
                                        <p className="pl-8 text-muted-foreground flex items-center gap-1">AWS Academy Cloud Foundations
                                            <a href="https://www.credly.com/badges/44b93d4c-2300-4718-befe-5b2acca1dc2a/linked_in_profile" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                                <SquareArrowOutUpRight className="w-4 h-4 ml-1" />
                                            </a>
                                        </p>
                                    </div>

                                    <div className="pb-6 border-l-2 border-[#163853]">
                                        <h1 className="text-l font-bold"><span className="text-[#163853]">•</span> IA</h1>
                                        <p className="pl-8 text-muted-foreground flex items-center gap-1">IBM Fondamentaux en Intelligence Artificielle
                                            <a href="https://www.credly.com/badges/62ec38a6-520c-4aec-84ce-d49fbb1045e3/linked_in_profilee" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                                <SquareArrowOutUpRight className="w-4 h-4 ml-1" />
                                            </a>
                                        </p>
                                        <p className="pl-8 text-muted-foreground flex items-center gap-1">IBM IA Fondamentaux avec IBM SkillsBuild
                                            <a href="https://www.credly.com/badges/1167a628-f214-4f33-ae05-35c8963dce76/linked_in_profile" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                                <SquareArrowOutUpRight className="w-4 h-4 ml-1" />
                                            </a>
                                        </p>
                                    </div>

                                    <div className="pb-6 border-l-2 border-[#163853]">
                                        <h1 className="text-l font-bold"><span className="text-[#163853]">•</span> Réseaux/Cybersécurité</h1>
                                        <p className="pl-8 text-muted-foreground flex items-center gap-1">CISCO Introduction à la Cybersécurité
                                            <a href="https://www.credly.com/badges/66327383-9a3b-4cf6-8f37-2a6d24f8c792/linked_in_profile" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                                <SquareArrowOutUpRight className="w-4 h-4 ml-1" />
                                            </a>
                                        </p>
                                    </div>

                                    <div className="pb-6 border-l-2 border-[#163853]">
                                        <h1 className="text-l font-bold"><span className="text-[#163853]">•</span> Data Science</h1>
                                        <p className="pl-8 text-muted-foreground flex items-center gap-1">CISCO Introduction à la Data Science
                                            <a href="https://www.credly.com/badges/1b6c960f-5a64-4f16-9d9b-6c1b018e24a4/linked_in_profile" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                                <SquareArrowOutUpRight className="w-4 h-4 ml-1" />
                                            </a>
                                        </p>
                                    </div>

                                    <div className="pb-6 border-l-2 border-[#163853]">
                                        <h1 className="text-l font-bold"><span className="text-[#163853]">•</span> Microsoft 365</h1>
                                        <p className="pl-8 text-muted-foreground">Word</p>
                                        <p className="pl-8 text-muted-foreground">Excel</p>
                                        <p className="pl-8 text-muted-foreground">PowerPoint</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutPageFR