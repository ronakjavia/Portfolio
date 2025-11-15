import ProjectButton from "./ProjectButton";

export default function ProjectCard({
    title,
    description,
    techstack,
    codeUrl,
}) {
    return (
        <div className="m-2 h-50 project-card border-4 border-slate-200 w-1/2 bg-light-blue bg-opacity-15">
            <div className="overlay h-60 flex flex-row items-center justify-center">
                <ProjectButton codeUrl={codeUrl} />
            </div>
            <div href="/" className="flex flex-row blur-in">
                <div className="m-3">
                    <p className="font-semibold text-lg underline">{title}</p>
                    <p className="mt-3 text-sm">{description}</p>
                    <p className="mt-3">
                        <span className="font-semibold text-sm text-slate-900 text-opacity-50">
                            Tech Used-
                        </span>{" "}
                        <span className=" font-medium text-xs ">
                            {techstack}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
