import { Globe, Languages, Linkedin, Mail, MapPin, Phone, SquareArrowOutUpRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cvFormations } from "@/lib/cvFormation";
import { cvExperiences } from "@/lib/cvExperience";
import { cvTechnicalSkills } from "@/lib/cvTechnicalSkills";
import { cvCertifications } from "@/lib/cvCertifications";
import { cvSummaries } from "@/lib/cvSummary";
import { cvContacts } from "@/lib/cvContact";
import { cvLanguages } from "@/lib/cvLanguage";
import { cvSkills } from "@/lib/cvSkill";
import { cvInterests } from "@/lib/cvInterest";
// import logo from "../assets/logo.png";



const AboutPageFR = () => {
    const lang = "fr"
    return (
        <div className="bg-[url('https://www.material-tailwind.com/logos/pattern-lines.png')] bg-cover bg-no-repeat min-h-screen pt-26 pb-14">
            {/* CV Switch Button */}
            <div className="flex justify-center items-center mb-4">
                <NavLink to="/about-en">
                    <Button size="sm" className=" cursor-pointer text-black hover:text-white bg-white hover:bg-[#1e293b] hover:opacity-90 transition-opacity border border-black">
                        <Languages className="h-4 w-4" />
                        English
                    </Button>
                </NavLink>
            </div>

            {/* Main */}
            <div className="flex bg-white shadow-2xl border border-black mx-auto  text-base leading-relaxed relative"
                style={{
                    width: '210mm',
                }}>

                {/* Left Blue Section */}
                <div className="basis-1/3 bg-[#163853] flex flex-col items-center ">

                    {/* Image */}
                    <div className="flex justify-center py-12 w-auto mb-1">
                        <img
                            // src={logo}
                            alt="YB Logo"
                            className="h-36 w-36 border"
                        />
                    </div>

                    {/* Contenue */}
                    <div className="flex justify-center px-6">
                        <Accordion type="multiple">
                            {/* Contact */}
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-2xl font-bold text-white"><span className="border-b-3 border-white">CONTACT</span></AccordionTrigger>
                                <AccordionContent>
                                    <div className=" border-l-2 border-[#163853] flex flex-col">
                                        <a href={`tel:${cvContacts.phone}`} target="_blank" rel="noopener noreferrer" className="pb-1 inline-flex items-center">
                                            <p className="text-white flex items-center gap-1">
                                                <Phone className="w-4 h-4 mr-1" />
                                                {cvContacts.phone}
                                            </p>
                                        </a>
                                        <a href={`mailto:${cvContacts.email}`} target="_blank" rel="noopener noreferrer" className="pb-1 inline-flex items-center">
                                            <p className="text-white flex items-center gap-1">
                                                <Mail className="w-4 h-4 mr-1" />
                                                {cvContacts.email}
                                            </p>
                                        </a>
                                        <a href={cvContacts.linkedin.value} target="_blank" rel="noopener noreferrer" className="pb-1 inline-flex items-center">
                                            <p className="text-white flex items-center gap-1">
                                                <Linkedin className="w-4 h-4 mr-1" />
                                                {cvContacts.linkedin.display}
                                            </p>
                                        </a>
                                        <a href={cvContacts.website.value} target="_blank" rel="noopener noreferrer" className="pb-1 inline-flex items-center">
                                            <p className="text-white flex items-center gap-1">
                                                <Globe className="w-4 h-4 mr-1" />
                                                {cvContacts.website.display}
                                            </p>
                                        </a>
                                        <a href={cvContacts.location.value} target="_blank" rel="noopener noreferrer" className="pb-1 inline-flex items-center">
                                            <p className="text-white flex items-center gap-1">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {cvContacts.location.label.fr}
                                            </p>
                                        </a>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Langues */}
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-2xl font-bold text-white"><span className="border-b-3 border-white">LANGUES</span> </AccordionTrigger>
                                <AccordionContent>
                                    {cvLanguages.map((lan, index) => (
                                        <div key={index} className=" border-l-2 border-[#163853] flex flex-col">
                                            <p className="text-white flex items-center gap-1">• {lan.name.fr} – {lan.level.fr}</p>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>

                            {/* Compétences Personnelles */}
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-2xl font-bold text-white"><span className="border-b-3 border-white">COMPÉTENCES</span> </AccordionTrigger>
                                <AccordionContent>
                                    {cvSkills.map((skill, index) => (
                                        <div key={index} className=" border-l-2 border-[#163853] flex flex-col">
                                            <p className="text-white flex items-center gap-1">• {skill.name.fr}</p>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>

                            {/* Centres d’Intérêt */}
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-2xl font-bold text-white"><span className="border-b-3 border-white">CENTRES D’INTÉRÊT</span> </AccordionTrigger>
                                <AccordionContent>
                                    {cvInterests.map((inter, index) => (
                                        <div key={index} className=" border-l-2 border-[#163853] flex flex-col">
                                            <p className="text-white flex items-center gap-1">• {inter.name.fr}</p>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                {/* Right White Section */}
                <div className="basis-2/3 px-6 py-12">

                    {/* Nom & Fonction & Description */}
                    {cvSummaries.map((inf, index) => (
                        <div key={index} className="mb-10">
                            <h1 className="text-5xl tracking-tighter  text-gray-600 mb-2">{inf.firstName} <span className="font-bold text-[#1e293b]">{inf.lastName}</span></h1>
                            <p className="text-2xl text-muted-foreground w-max pb-2">{inf.title.fr}</p>
                            <p className="text-xs text-muted-foreground italic pl-4 pb-2">{inf.description.fr}</p>
                            <p className="border-b-4 border-[#163853] w-50"></p>
                        </div>
                    ))}

                    {/* Contenu */}
                    <div className="">
                        <Accordion type="multiple">
                            {/* Formations */}
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-2xl font-bold text-[#163853]"><span className="border-b-3 border-[#1e293b]">FORMATIONS</span> </AccordionTrigger>
                                <AccordionContent>
                                    {/* Lycée */}
                                    {cvFormations.map((edu, index) => (
                                        <div key={index} className="pb-6 border-l-2 border-[#163853]">
                                            <h1 className="text-l font-bold">
                                                <span className="text-[#163853]">•</span> {edu.title.fr}
                                            </h1>
                                            <p className="pl-4">{edu.institution.fr}</p>
                                            <p className="pl-4 text-muted-foreground italic font-light text-xs">{edu.period.fr}</p>
                                            {edu.description && (
                                                <p className="pl-4 text-muted-foreground italic font-light">
                                                    {edu.description.fr}
                                                </p>
                                            )}                                        </div>
                                    ))}
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

                            {/* Compétences Personnelles */}
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-2xl font-bold text-[#163853]"><span className="border-b-3 border-[#1e293b]">COMPÉTENCES TECHNIQUES</span> </AccordionTrigger>
                                <AccordionContent>
                                    {cvTechnicalSkills.map((category, index) => (
                                        <div key={index} className="pb-6 border-l-2 border-[#163853]">
                                            <h1 className="text-l font-bold">
                                                <span className="text-[#163853]">•</span> {category.title.fr}
                                            </h1>

                                            {category.sections.map((section, i) => (
                                                <div key={i}>
                                                    {section.title && (
                                                        <p className="pl-4">{section.title.fr}</p>
                                                    )}

                                                    {section.items.map((item, j) => (
                                                        <p key={j} className="pl-8 text-muted-foreground italic"><span>•</span> {item}</p>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>

                            {/* Certifications */}
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-2xl font-bold text-[#163853]"><span className="border-b-3 border-[#1e293b]">CERTIFICATIONS</span> </AccordionTrigger>
                                <AccordionContent>
                                    {cvCertifications.map((category, index) => (
                                        <div key={index} className="pb-6 border-l-2 border-[#163853]">
                                            <h1 className="text-l font-bold">
                                                <span className="text-[#163853]">•</span> {category.title.fr}
                                            </h1>
                                            {category.items.map((cert, i) => (
                                                <p key={i} className="pl-8 text-muted-foreground flex items-center gap-1">{cert.name}
                                                    {cert.link && (
                                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                                            <SquareArrowOutUpRight className="w-4 h-4 ml-1" />
                                                        </a>
                                                    )}
                                                </p>
                                            ))}
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default AboutPageFR