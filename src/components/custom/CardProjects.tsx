"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FaGithub } from "react-icons/fa"



const CARD_PROJECTS = [
    {
        title: "Brender Studio",
        description: "Desktop application for creating and managing Blender render farms on AWS, providing an efficient solution for cloud-based rendering.",
        image: "https://avatars.githubusercontent.com/u/164741409?s=48&v=4",
        badge: "Prod",
        github_url: "https://github.com/Brender-Studio/brender-studio-app",
    },
    {
        title: "Brender Studio CDK",
        description: "This repository contains the AWS infrastructure (CDK), Docker image, and logic related to rendering jobs for Brender Studio. It also includes a shell script for compiling and pushing Docker images.",
        icon: <FaGithub size={24} />,
        badge: "Prod",
        github_url: "https://github.com/Brender-Studio/brender-studio-cdk",
    },
    {
        title: "Brender Studio Website",
        description: "The official website for Brender Studio and documentation for the Brender Studio App, built with Next.js and ShadCn-UI (Tailwind CSS).",
        image: "https://avatars.githubusercontent.com/u/164741409?s=48&v=4",
        badge: "Prod",
    },
    {
        title: "Brender Studio DevContainer",
        description: "Docker-based local development environment for Brender Studio. Mirrors AWS Batch setup for testing Blender rendering workflows before cloud deployment.",
        image: "https://avatars.githubusercontent.com/u/164741409?s=48&v=4",
        badge: "Prod",
        github_url: "https://github.com/Brender-Studio/brender-studio-devcontainer",
    },
    {
        title: "Brender Snippets",
        description: "Open Source repository of custom Python scripts designed to extend and enhance the functionality of Brender Studio, a cloud-based rendering platform for Blender.",
        image: "https://avatars.githubusercontent.com/u/164741409?s=48&v=4",
        badge: "Prod",
        github_url: "https://github.com/Brender-Studio/brender-snippets",
    },
    {
        title: "Demo Api Crud CDK",
        description: "This project demonstrates a serverless CRUD (Create, Read, Update, Delete) API backend using AWS services and Infrastructure as Code (IaC) with AWS CDK and TypeScript.",
        icon: <FaGithub size={24} />,
        badge: "Demo",
        github_url: "https://github.com/david-blg/api-crud-serverless-cdk",
    }
]





const CardProjects = () => {

    const router = useRouter()

    const handleNavigate = (url: string) => {
        router.push(url)
    }

    return (
        <div className="grid grid-cols-3 items-center gap-4">
            {CARD_PROJECTS.map((project, index) => (
                <Card key={index} className="bg-transparent border-none">
                    <CardHeader >
                        <CardTitle className="flex items-center gap-2">
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt="Dave B Logo"
                                    width={26}
                                    height={26}
                                />
                            ) : (
                                <>
                                    {project.icon}
                                </>
                            )}
                            {project.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            {project.description}
                        </CardDescription>
                    </CardContent>
                    <CardFooter>
                        <button>View</button>
                    </CardFooter>
                </Card>

            ))}


            {/* <Card>
                <CardHeader >
                    <CardTitle className="flex items-center gap-2">
                        <Image
                            src="https://avatars.githubusercontent.com/u/164741409?s=48&v=4"
                            alt="Dave B Logo"
                            width={26}
                            height={26}
                        />
                        Brender Studio
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        posuere erat a ante.
                    </CardDescription>
                </CardContent>
                <CardFooter>
                    <button>View</button>
                </CardFooter>
            </Card> */}


        </div>
    )
}

export default CardProjects

