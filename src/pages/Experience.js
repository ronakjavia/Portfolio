import PageTitle from "../components/UI/PageTitle";
import { NavLink } from "react-router-dom";
import Button from "../components/UI/Button";
import ExperienceContent from "../data/Experience";

export default function ExperiencePage() {
    return (
        <div className="px-20 pt-16 flex flex-col">
            <PageTitle title="Work Experience" />
            <ExperienceContent
                company="TatvaSoft"
                title="Associate Software Engineer"
                timeline="September 2024 - Present"
            >
                <ul id="work-experience-points" className="list-disc ml-4 mt-2">
                    <li>
                        Working as an Associate Software Engineer specializing
                        in .NET Core Web API and .NET MVC, focusing on designing
                        and maintaining scalable backend services using C#,
                        Entity Framework, LINQ, and SQL.
                    </li>
                    <li>
                        Implementing N-tier architecture for backend
                        development, ensuring modular, maintainable, and
                        efficient application structure.
                    </li>
                    <li>
                        Building and optimizing RESTful APIs, improving
                        performance and database access patterns across SQL
                        Server and PostgreSQL.
                    </li>
                    <li>
                        Integrating secure authentication and authorization
                        workflows using Keycloak.
                    </li>
                    <li>
                        Containerizing services using Docker to improve
                        deployment and scalability.
                    </li>
                    <li>
                        Collaborating on code reviews and following best coding
                        practices to maintain high-quality, reliable backend
                        systems.
                    </li>
                </ul>
            </ExperienceContent>

            <ExperienceContent
                company="TatvaSoft"
                title="Software Developer Intern"
                timeline="January 2024 - September 2024"
            >
                <ul id="work-experience-points" className="list-disc ml-4 mt-2">
                    <li>
                        Worked on .NET Core MVC during internship, developing
                        backend functionality and implementing database
                        operations using Entity Framework and LINQ.
                    </li>
                    <li>
                        Built RESTful APIs and handled data processing across
                        SQL Server and MySQL.
                    </li>
                    <li>
                        Contributed to project modules including authentication,
                        user management, and workflow features.
                    </li>
                    <li>
                        Participated in debugging, testing, and enhancing
                        existing modules to improve performance and reliability.
                    </li>
                    <li>
                        Gained hands-on experience with tools such as Git, VS
                        Code, Postman, Docker, and Keycloak.
                    </li>
                </ul>
            </ExperienceContent>
            <div className="flex flex-row justify-end mt-[12rem]">
                <NavLink to="/skills" end>
                    <Button buttonText="Skills" />
                </NavLink>
            </div>
        </div>
    );
}
