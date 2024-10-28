"use client";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin
} from "react-icons/ai";

const Footer = () => {
    return (
        <div className="flex flex-row bg-grey px-2 items-center justify-between bg-white bg-opacity-10">
            <div className="flex-1">
                <p>Developed by Brian Najera</p>
            </div>
            <div className="flex-1 flex justify-end">
                <ul className="flex space-x-4">
                    <li className="social-icons">
                        <a
                            href="https://github.com/Brian121301"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons text-2xl hover:text-blue-500"
                        >
                            <AiFillGithub />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/brian-najera-923279192"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons text-2xl hover:text-blue-500"
                        >
                            <AiFillLinkedin />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://www.instagram.com/brian_najera/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons text-2xl hover:text-blue-500"
                        >
                            <AiFillInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;