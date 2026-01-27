import Hero from "../components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

const HomePage = () => {

    const handleGetStarted = () => {
        // Handle CTA click
        console.log('Get Started clicked!')
    }

    const handleContact = () => {
        // Handle CTA click
        console.log('Contact Us clicked!')
    }

    return (
        <div className=""> {/* Account for fixed navbar */}
            <Hero
                title="YB Dev"
                subtitle="Full-Stack Developer & UI/UX Designer creating beautiful, functional digital experiences"
                btnText1="Get in Touch"
                btnText2="View Projects"
                onBtn1Click={handleGetStarted}
                onBtn2Click={handleContact}
            />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default HomePage