export type Project = {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    githubUrl: string;
    image: string;
    tech: string[];
    featured: boolean;
};

export const projects: Project[] = [
    {
        id: "1",
        slug: "vehicle_rental_management_system_desktop",
        title: "Vehicle Rental Management System Desktop",
        shortDescription: 'The Vehicle Rental Management System is a desktop application developed to automate and optimize vehicle rental operations. It enables administrators to manage vehicles, customers, and rental transactions efficiently through an intuitive interface. The system helps reduce manual workload, improve accuracy, and streamline business workflows for rental companies.',
        fullDescription: "Full detailed explanation here...",
        githubUrl:"https://github.com/benaguida-y/JavaFX-YBVRMS-App",
        image: "src/assets/Vehicle_Rental_Management_System/2.png",
        tech: ['Java', 'JavaFX', 'MySQL'],
        featured: true,
    },
    {
        id: "2",
        slug: "parking_rfid_system",
        title: "Smart Parking RFID",
        shortDescription: 'A comprehensive solution for managing vehicle access and parking operations using RFID technology. This system handles vehicle identification, access control, payment processing, and parking space management with real-time monitoring capabilities.',
        fullDescription: "Full detailed explanation here...",
        githubUrl:"",
        image: "src/assets/Vehicle_Rental_Management_System/2.png",
        tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Next.js', 'Vercel'],
        featured: true,
    },
    {
        id: "3",
        slug: "vehicle_rental_management_system_web",
        title: "Vehicle Rental Management System Web",
        shortDescription: 'The Vehicle Rental Management System is an application developed to automate and optimize vehicle rental operations. It enables administrators to manage vehicles, customers, and rental transactions efficiently through an intuitive interface. The system helps reduce manual workload, improve accuracy, and streamline business workflows for rental companies.',
        fullDescription: "Full detailed explanation here...",
        githubUrl:"https://github.com/benaguida-y/vehicle-rental-management-system-app",
        image: "src/assets/Vehicle_Rental_Management_System/2.png",
        tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Next.js', 'Vercel'],
        featured: true,
    },
]