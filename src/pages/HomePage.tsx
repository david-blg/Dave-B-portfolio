"use client"
import CardProjects from "@/components/custom/CardProjects"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import daveLogo from "@/assets/logos/dave-b-logo.png"

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


    const handleNavigate = (url: string) => {
        window.open(url, "_blank")
    }


    return (
        <div className="flex-col justify-between">
             {/* p-4 pt-8 sm:p-8 md:p-16 lg:px-12 sticky */}
          <div className="flex justify-between p-t4 sm:pt-8">
                <div className="">
                    <Image
                        src={daveLogo}
                        alt="Dave B Logo"
                        width={50}
                        height={50}
                    />
                    <div className="mt-2 flex">
                        <h1 className="text-muted-foreground">Software Developer</h1>
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

            <div className="flex flex-col items-center mt-2 w-full pt-16">
                <div className="text-center mb-6">
                    <h2 className="text-4xl font-semibold">Projects</h2>
                    <p className="text-muted-foreground">Here are some of the projects I have worked on</p>
                </div>
                    <CardProjects />
            </div>
        </div>
    )
}

export default HomePage