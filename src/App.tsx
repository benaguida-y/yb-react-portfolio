import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner';
import NavBar from './components/NavBar'
import Home from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import Footer from './components/Footer';
import './App.css'
import NotFoundPage from './pages/NotFoundPage';
import SkillsPage from './pages/SkillsPage';

function App() {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-detailed" element={<AboutPage />} />
                <Route path="/skills-detailed" element={<SkillsPage />} />
                <Route path="/projects-detailed" element={<ProjectsPage />} />
                {/* <Route path="/contact" element={<ContactPage />} /> */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Toaster />
            <Footer />
        </BrowserRouter>
    )
}

export default App
