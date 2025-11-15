import { BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function ContactIcons() {
    return (
        <div className="flex flex-row justify-around mt-6 w-[18rem]">
            <a
                href="mailto: ronakjavia1111@gmail.com"
                target="_blank"
                rel="noreferrer"
            >
                <BiLogoGmail className="size-[1.25em] opacity-70 hover:opacity-90" />
            </a>
            <a
                href="https://linkedin.com/in/ronak-javia-bbb0aa222/"
                target="_blank"
                rel="noreferrer"
            >
                <IoLogoLinkedin className="size-[1.25em] opacity-70 hover:opacity-90" />
            </a>
            <a
                href="https://github.com/ronakjavia"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub className="size-[1.10em] opacity-70 hover:opacity-90" />
            </a>
        </div>
    );
}
