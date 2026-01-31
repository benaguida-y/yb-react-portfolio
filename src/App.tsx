// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Toaster } from 'sonner';
// import NavBar from './components/NavBar'
// import Home from "./pages/HomePage";
// import AboutPage from './pages/AboutPage';
// import ProjectsPage from './pages/ProjectsPage';
// import SkillsPage from './pages/SkillsPage';
// import NotFoundPage from './pages/NotFoundPage';
// import Footer from './components/Footer';
// import './App.css'

// function App() {

//     return (
//         <BrowserRouter>
//             <NavBar />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about-detailed" element={<AboutPage />} />
//                 <Route path="/skills-detailed" element={<SkillsPage />} />
//                 <Route path="/projects-detailed" element={<ProjectsPage />} />
//                 {/* <Route path="/contact" element={<ContactPage />} /> */}

//                 <Route path="*" element={<NotFoundPage />} />
//             </Routes>
//             <Toaster />
//             <Footer />
//         </BrowserRouter>
//     )
// }

// export default App

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import NavBar from './components/NavBar';
import Home from "./pages/HomePage";
import AboutPageEN from './pages/AboutPageEN';
import AboutPageFR from './pages/AboutPageFR';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function AppContent() {
    const location = useLocation();

    // List of routes where NavBar should NOT be displayed
    // const hideNavbarRoutes = ['/404']; // optional: can include more paths if needed
    const isNotFoundPage = location.pathname === '/' ? false : location.pathname === '/404' || location.pathname === location.pathname && !['/', '/about-fr', '/about-en', '/skills', '/projects'].includes(location.pathname)
    const isAboutPage = location.pathname === "/about-fr" || location.pathname === "/about-en";

    return (
        <>
            {/* Render NavBar only if not on NotFound page */}
            {!isNotFoundPage && <NavBar fixed={!isAboutPage} />}

            <div className={isAboutPage ? "" : ""}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-fr" element={<AboutPageFR />} />
                    <Route path="/about-en" element={<AboutPageEN />} />
                    <Route path="/skills" element={<SkillsPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    {/* <Route path="/project_vehicle_rental_management_system_desktop" element={<ProjectsPage1 />} /> */}
                    {/* <Route path="/project_smart_parking_rfid" element={<ProjectsPage2 />} /> */}
                    {/* <Route path="/project_vehicle_rental_management_system_web" element={<ProjectsPage3 />} /> */}

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>

            <Toaster />
            <Footer />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
