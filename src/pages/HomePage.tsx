import Hero from "../components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

const HomePage = () => {

    return (
        <div> {/* Account for fixed navbar */}
            <Hero
                title="YB Dev"
                subtitle="Full-Stack Developer & UI/UX Designer creating beautiful, functional digital experiences"
                btnText1="Get in Touch"
                btnText2="View Projects"
            />
            <About />
            <Skills />
            <Projects onlyFeatured/>
            <Contact />
        </div>
    )
}

export default HomePage