
import { FaGithub } from "react-icons/fa"
import CardProject from "./CardProject"
import logo from '../../assets/logos/logo-brender-studio.svg'
import readmeStack from '../../assets/logos/readmestack.svg'



const CARD_PROJECTS = [
    {
        title: "Brender Studio",
        description: "Desktop application for creating and managing Blender render farms on AWS, providing an efficient solution for cloud-based rendering.",
        image: logo,
        badge: "Prod",
        github_url: "https://github.com/Brender-Studio/brender-studio-app",
        website_url: "https://brenderstudio.com/download",
    },
    {
        title: "Brender Studio CDK",
        description: "This repository contains the AWS infrastructure (CDK), Docker image, and logic related to rendering jobs for Brender Studio. It also includes a shell script for compiling and pushing Docker images.",
        image: logo,
        badge: "Prod",
        github_url: "https://github.com/Brender-Studio/brender-studio-cdk",
    },

    {
        title: "Brender Studio DevContainer",
        description: "Docker-based local development environment for Brender Studio. Mirrors AWS Batch setup for testing Blender rendering workflows before cloud deployment.",
        image: logo,
        badge: "Prod",
        github_url: "https://github.com/Brender-Studio/brender-studio-devcontainer",
    },
    {
        title: "Brender Snippets",
        description: "Open Source repository of custom Python scripts designed to extend and enhance the functionality of Brender Studio, a cloud-based rendering platform for Blender.",
        image: logo,
        badge: "Prod",
        github_url: "https://github.com/Brender-Studio/brender-snippets",
    },
    {
        title: "Demo Api Crud CDK",
        description: "This project demonstrates a serverless CRUD (Create, Read, Update, Delete) API backend using AWS services and Infrastructure as Code (IaC) with AWS CDK and TypeScript.",
        icon: <FaGithub size={24} />,
        badge: "Demo",
        github_url: "https://github.com/david-blg/api-crud-serverless-cdk",
    },
    {
        title: "ReadmeStack",
        description: "Markdown-based web application for creating and sharing interactive, responsive, and visually appealing README files for GitHub repositories.",
        image:readmeStack,
        badge: "Prod",
        website_url: "https://readmestack.com",
    },
]





const CardProjects = () => {


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4'>
            {CARD_PROJECTS.map((project, index) => (
                <div key={index} className="h-full">
                    <CardProject
                        title={project.title}
                        description={project.description}
                        index={index}
                        github_url={project.github_url}
                        website_url={project.website_url}
                        image={project.image}
                        icon={project.icon}
                    />
                </div>
            ))}
        </div>
    )
}

export default CardProjects

