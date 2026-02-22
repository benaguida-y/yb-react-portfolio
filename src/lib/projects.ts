import vrmsd_img1 from "@/assets/Vehicle_Rental_Management_System_Desktop/1.png"
import vrmsd_img2 from "@/assets/Vehicle_Rental_Management_System_Desktop/2.png"
import vrmsd_img3 from "@/assets/Vehicle_Rental_Management_System_Desktop/3.png"
import vrmsd_img4 from "@/assets/Vehicle_Rental_Management_System_Desktop/4.png"
import vrmsd_img5 from "@/assets/Vehicle_Rental_Management_System_Desktop/5.png"

import vrmsw_img1 from "@/assets/Vehicle_Rental_Management_System_Web/1.png"
import vrmsw_img2 from "@/assets/Vehicle_Rental_Management_System_Web/2.png"
import vrmsw_img3 from "@/assets/Vehicle_Rental_Management_System_Web/3.png"
import vrmsw_img4 from "@/assets/Vehicle_Rental_Management_System_Web/4.png"
import vrmsw_img5 from "@/assets/Vehicle_Rental_Management_System_Web/5.png"
import vrmsw_img6 from "@/assets/Vehicle_Rental_Management_System_Web/6.png"
import vrmsw_img7 from "@/assets/Vehicle_Rental_Management_System_Web/7.png"
import vrmsw_img8 from "@/assets/Vehicle_Rental_Management_System_Web/8.png"
import vrmsw_img9 from "@/assets/Vehicle_Rental_Management_System_Web/9.png"
import vrmsw_img10 from "@/assets/Vehicle_Rental_Management_System_Web/10.png"
import vrmsw_img11 from "@/assets/Vehicle_Rental_Management_System_Web/11.png"

export type Project = {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    githubUrl: string;
    images: string[];
    tech: string[];
    featured: boolean;
};

export const projects: Project[] = [
    {
        id: "1",
        slug: "vehicle_rental_management_system_desktop",
        title: "Vehicle Rental Management System Desktop",
        shortDescription: 'The Vehicle Rental Management System is a desktop application developed to automate and optimize vehicle rental operations. It enables administrators to manage vehicles, customers, and rental transactions efficiently through an intuitive interface. The system helps reduce manual workload, improve accuracy, and streamline business workflows for rental companies.',
        fullDescription: `
            ▶ Vehicle Rental Management System
            This application is a desktop software solution designed to streamline and automate the operations of a car rental company. It replaces traditional, error-prone paper-based or spreadsheet methods with a centralized, efficient, and user-friendly system.

            ▶ Core Objective
            The primary goal is to manage two main entities: Vehicles and Customers, and the dynamic process that connects them: Bookings. The application ensures that the entire lifecycle of a rental—from vehicle availability check to final return and billing—is tracked seamlessly.

            ▶ Technology Stack
            ▷ Backend & Logic : Java - For the robust business logic, data processing, and connecting the different parts of the application.

            ▷ Frontend & GUI : JavaFX - To create a modern, responsive, and visually appealing user interface with features like tables, forms, charts, and scene navigation.

            ▷ Database : SQL (MySQL/PostgreSQL/SQLite) - To persistently store all critical data, including vehicles, customers, reservations, and user information.

            • Designed and developed a desktop application to automate and optimize the operations of a vehicle rental agency.
            • Engineered a complete management system for Vehicles, Customers, and Reservations, including full rental lifecycle tracking (availability, booking, return, and status updates).
            • Implemented robust business logic in Java to handle data processing, validation rules, and reservation workflows.
            • Built a modern and interactive user interface using JavaFX, incorporating dynamic tables, structured forms, and multi-scene navigation.
            • Integrated a relational SQL database to ensure secure, reliable, and persistent data storage.          
        `,

        githubUrl: "https://github.com/benaguida-y/JavaFX-YBVRMS-App",
        images: [
            vrmsd_img1,
            vrmsd_img2,
            vrmsd_img3,
            vrmsd_img4,
            vrmsd_img5,
        ],
        tech: ['Java', 'JavaFX', 'MySQL'],
        featured: true,
    },
    {
        id: "2",
        slug: "parking_rfid_system",
        title: "Smart Parking RFID",
        shortDescription: 'A comprehensive solution for managing vehicle access and parking operations using RFID technology. This system handles vehicle identification, access control, payment processing, and parking space management with real-time monitoring capabilities.',
        fullDescription: "Full detailed explanation here...",
        githubUrl: "",
        images: [

        ],
        tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Next.js', 'Vercel'],
        featured: true,
    },
    {
        id: "3",
        slug: "vehicle_rental_management_system_web",
        title: "Vehicle Rental Management System Web",
        shortDescription: 'The Vehicle Rental Management System is an application developed to automate and optimize vehicle rental operations. It enables administrators to manage vehicles, customers, and rental transactions efficiently through an intuitive interface. The system helps reduce manual workload, improve accuracy, and streamline business workflows for rental companies.',
        fullDescription: 
        `
            ▶ Vehicle Rental Management System
            A comprehensive vehicle rental management system built with React, TypeScript, and local database storage using IndexedDB.
            
            ▶ Features
            ▷ Authentication
            • User registration and login
            • Password recovery
            • Role-based access (Admin/Employee)
            • Secure session management

            ▷ Vehicle Management
            • Add, edit, delete vehicles
            • Vehicle status tracking (Available, Rented, Maintenance, Retired)
            • Vehicle details including make, model, year, license plate, VIN, mileage, daily rate
            • Fuel type and transmission options
            • Vehicle features management
            • Image support

            ▷ Client Management
            • Complete client database
            • Personal information management
            • Address and contact details
            • License information tracking
            • Emergency contact management

            ▷ Rental Management
            • Create and manage rentals
            • Vehicle and client selection
            • Date range management
            • Automatic total calculation
            • Rental status tracking (Active, Completed, Cancelled, Overdue)
            • Payment tracking

            ▷ Dashboard & Reports
            • Real-time statistics
            • Vehicle availability overview
            • Active rentals monitoring
            • Revenue tracking
            • Overdue rental alerts
            • Recent activity feed

            ▷ Technology Stack
            • Frontend : React 18 with TypeScript
            • Styling : Tailwind CSS
            • Database : IndexedDB (via Dexie.js)
            • Forms : React Hook Form with Yup validation
            • Routing : React Router v6
            • Icons : Lucide React
            • Build Tool : Create React App

            ▶ Key Features
            ▷ Dashboard
            • Overview of your rental business
            • Key metrics and statistics
            • Recent activity feed
            • Alerts for overdue rentals

            ▷ Vehicle Management
            • Add vehicles with complete specifications
            • Track vehicle status and availability
            • Manage vehicle features and pricing
            • View vehicle utilization

            ▷ Client Management
            • Maintain comprehensive client database
            • Track client information and preferences
            • Manage emergency contacts
            • License verification

            ▷ Rental Management
            • Create new rentals with automatic calculations
            • Track rental status and payments
            • Monitor overdue rentals
            • Generate rental reports

            ▷ Database Schema
            The application uses IndexedDB for local storage with the following main entities:

            ▷ Users : Authentication and user management
            • Vehicles : Fleet management
            • Clients : Customer database
            • Rentals : Rental transactions

            ▷ Security Features
            • Password-based authentication
            • Role-based access control
            • Secure data storage
            • Form validation and sanitization
            
            ▷ Responsive Design
            • The application is fully responsive and works on:

            ▷ Desktop computers
            • Tablets
            • Mobile devices

            ▷ Browser Support
            • Chrome (recommended)
            • Firefox
            • Safari
            • Edge
        `,
        githubUrl: "https://github.com/benaguida-y/vehicle-rental-management-system-app",
        images: [
            vrmsw_img1,
            vrmsw_img2,
            vrmsw_img3,
            vrmsw_img4,
            vrmsw_img5,
            vrmsw_img6,
            vrmsw_img7,
            vrmsw_img8,
            vrmsw_img9,
            vrmsw_img10,
            vrmsw_img11,
        ],
        tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Next.js', 'Vercel', 'IndexedDB','Lucid React'],
        featured: true,
    },
    //Filler examples
    {
        id: "6",
        slug: "task_management_app",
        title: "Task Management Application",
        shortDescription: "A productivity web app for organizing tasks, tracking deadlines, and managing team collaboration.",
        fullDescription: "The Task Management Application helps individuals and teams organize daily work efficiently. Users can create tasks, assign priorities, track deadlines, and collaborate with team members. The app features authentication, real-time updates, and data persistence.",
        githubUrl: "https://github.com/example/task-manager",
        images: [
            
        ],
        tech: ['Next.js', 'Firebase', 'Tailwind CSS'],
        featured: false,
    },
    {
        id: "7",
        slug: "portfolio_website",
        title: "Developer Portfolio Website",
        shortDescription: "A personal portfolio website showcasing projects, skills, certifications, and professional experience.",
        fullDescription: "This portfolio website was built to present projects, technical skills, and certifications in a modern and interactive interface. It includes project filtering, responsive design, and reusable components. The site focuses on performance, clean UI/UX, and scalability.",
        githubUrl: "https://github.com/example/portfolio",
        images: [
            
        ],
        tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        featured: false,
    },


]