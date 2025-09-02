// components/Footer/index.jsx
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="border-t border-gray-300 py-4 flex flex-col items-center gap-2 text-gray-700">
            <p>Made by Ayush Pratap Singh</p>
            <div className="flex gap-4 text-xl">
                <a
                href="https://github.com/ayushthakur13/notepad-react"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-950 transition-colors"
                >
                <FaGithub />
                </a>
                <a
                href="https://www.linkedin.com/in/ayush-pratap-singh-8b8958284/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-950 transition-colors"
                >
                <FaLinkedin />
                </a>
                <a
                href="https://www.instagram.com/ayushthakur.13"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-950 transition-colors"
                >
                <FaInstagram />
                </a>
            </div>
        </footer>
    );
};
