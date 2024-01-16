import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Me",
    description: "횩미에게 메일 보내기",
};

const LINKS = [
    { icon: <AiFillGithub />, url: "https://github.com/hminiKwon" },
    { icon: <AiFillLinkedin />, url: "https://www.linkedin.com/in/hmini/" },
    {
        icon: <AiFillYoutube />,
        url: "https://www.youtube.com/@hyoekmiLife",
    },
];

export default function ContactPage() {
    return (
        <section className="flex flex-col items-center">
            <h2 className="text-3xl font-bold my-2">Contact Me</h2>
            <p>jao970622@gmail.com</p>
            <ul className="flex gap-4 my-2">
                {LINKS.map((link, index) => (
                    <a
                        className="text-5xl hover:text-yellow-400"
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {link.icon}
                    </a>
                ))}
            </ul>
            <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
            <ContactForm />
        </section>
    );
}
