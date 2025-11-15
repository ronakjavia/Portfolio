import SkillsTitle from "../components/UI/SkillsTitle";
import c from "../assets/c2.svg";
import cpp from "../assets/cpp.svg";
import javascript from "../assets/javascript2.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import bootstrap from "../assets/bootstrap.svg";
import node from "../assets/node.svg";
import express from "../assets/express.svg";
import mongodb from "../assets/mongodb.svg";
import sql from "../assets/sql2.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import postman from "../assets/postman.svg";
import vs from "../assets/vs.svg";
import vscode from "../assets/vscode.svg";

import SkillIcon from "../components/UI/SkillIcon";

export default function SkillsContent() {
    return (
        <>
            <div className="h-[18rem]">
                <SkillsTitle title="Tech Stack" />
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-between">
                        <SkillIcon icon={c} title="C" />
                        <SkillIcon icon={cpp} title="C++" />
                        <SkillIcon icon={node} title="NodeJS" />
                        <SkillIcon icon={express} title="ExpressJS" />
                        <SkillIcon icon={mongodb} title="MongoDB" />
                    </div>
                    <div className="flex flex-row items-center justify-between mb-6">
                        <SkillIcon icon={sql} title="MySQL" />
                        <SkillIcon icon={javascript} title="JS" />
                        <SkillIcon icon={html} title="HTML" />
                        <SkillIcon icon={css} title="CSS" />
                        <SkillIcon icon={bootstrap} title="Bootstrap" />
                    </div>
                </div>
                <SkillsTitle title="Dev Tools" />
                <div className="flex flex-row items-center justify-between mb-4">
                    <SkillIcon icon={git} title="Git" />
                    <SkillIcon icon={github} title="Github" />
                    <SkillIcon icon={postman} title="Postman" />
                    <SkillIcon icon={vs} title="Visual Studio" />
                    <SkillIcon icon={vscode} title="VS Code" />
                </div>
            </div>
        </>
    );
}
