import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

const SocialLinks = () => {
    const socialBtnClasses =
    "rounded-full cursor-pointer text-[#0f1720] hover:bg-[#0f1720] hover:text-white border border-white transition-colors duration-300"

    return (
        <div className="flex space-x-4">
            <Tooltip>
                <TooltipTrigger asChild>
                    <a
                        href="https://github.com/benaguida-y"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline" size="icon" className={socialBtnClasses}>
                            <Github className="h-4 w-4" />
                        </Button>
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Github</p>
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <a
                        href="https://www.linkedin.com/in/youness-benaguida-ynsben"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline" size="icon" className={socialBtnClasses}>
                            <Linkedin className="h-4 w-4" />
                        </Button>
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>LinkedIn</p>
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <a
                        href="mailto:yns.benaguida@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline" size="icon" className={socialBtnClasses}>
                            <Mail className="h-4 w-4" />
                        </Button>
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Email</p>
                </TooltipContent>
            </Tooltip>
        </div>
    )
}

export default SocialLinks