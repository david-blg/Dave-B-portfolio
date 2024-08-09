"use client"
import CardProjects from "@/components/custom/CardProjects"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"


const SOCIALS = [
    {
        name: "GitHub",
        url: "https://github.com/david-blg",
        icon: <FaGithub size={22} />,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/david-blg/",
        icon: <FaLinkedin size={22} />,
    },
    {
        name: "Twitter",
        url: "https://x.com/davidblg_",
        icon: <FaXTwitter size={22} />,
    },
    {
        name: "Email",
        url: "mailto:david.info.dev@gmail.com",
        icon: <FaEnvelope size={22} />,
    }
]


const HomePage = () => {
    const router = useRouter()


    const handleNavigate = (url: string) => {
        router.push(url)
    }


    return (
        <div className="flex-col justify-between">
            <div className="flex justify-between p-24 pt-8 sticky">
                <div className="">
                    <Image
                        src="/vercel.svg"
                        alt="Dave B Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                        priority
                    />
                    <div className="mt-2 flex">
                        <h1 className="text-muted-foreground">Full Stack Developer</h1>
                    </div>
                </div>
                <div className="flex items-center">
                    {SOCIALS.map((social, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            size="icon"
                            onClick={() => handleNavigate(social.url)}
                        >
                            {social.icon}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center mt-2 w-full p-24 pt-4">
                <div className="text-center mb-6">
                    <h2 className="text-4xl font-semibold">Projects</h2>
                    <p className="text-muted-foreground">Here are some of the projects I have worked on</p>
                </div>
                <div className="mt-4">
                    <CardProjects />
                </div>
            </div>
        </div>
    )
}

export default HomePage