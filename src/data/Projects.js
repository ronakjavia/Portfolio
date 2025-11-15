import ProjectCard from "../components/UI/ProjectCard";
export default function ProjectsContent() {
    return (
        <div className="h-[18rem]">
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <ProjectCard
                        title="Claim Management System"
                        description="A healthcare claim management platform built with secure, scalable APIs, containerized services, and Keycloak-based authentication and user management."
                        techstack=".NET Web API, C#, Entity Framework, LINQ, PostgreSQL, Docker, Keycloak"
                    />
                    <ProjectCard
                        title="Social-Media"
                        description="A backend social media platform featuring authentication, user profiles, posts, feeds, likes, comments, followers, notifications, and responsive design."
                        techstack="Node.js, Express.js, MongoDB, Mongoose, JWT, Cloudinary, Multer, bcrypt"
                        codeUrl="https://github.com/ronakjavia/Social-Media"
                    />
                </div>
                <div className="flex flex-row">
                    <ProjectCard
                        title="HalloDoc - Hospital Management System"
                        description="A hospital management system designed to streamline administrative and clinical operations, including patient registration, appointments, medical records, staff management, and reporting."
                        techstack=".NET Core MVC, MySQL, HTML, CSS, JavaScript, Bootstrap"
                        codeUrl="https://github.com/ronakjavia/HalloDoc"
                    />
                </div>
            </div>
        </div>
    );
}
