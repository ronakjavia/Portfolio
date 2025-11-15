import TimelineBadge from "../components/UI/TimelineBadge";

export default function ExperienceContent({
    company,
    title,
    timeline,
    children,
}) {
    return (
        <>
            <div className="h-[23rem]">
                <TimelineBadge timeline={timeline} />
                <p className="mt-3  text-cyan-900">
                    <span className="text-[1.5rem] font-bold">{company}</span>
                    <span> - </span>
                    <span className="text-[1.25rem] font-semibold">
                        {title}
                    </span>
                </p>
                {children}
            </div>
        </>
    );
}
