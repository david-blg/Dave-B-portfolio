import React from 'react'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

interface CardProjectProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    textSize?: string;
    index: number;
    image?: StaticImageData;
    children?: React.ReactNode;
    onClick?: () => void;
    github_url?: string;
    website_url?: string;
}

const CardProject = ({ icon, description, index, title, website_url, github_url, image }: CardProjectProps) => {

    const router = useRouter()

    const handleNavigate = (url: string) => {
        router.push(url)
    }

    return (
        <Card key={index} className="bg-transparent border-none h-full transition-all duration-200 ease-out hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-[0.1rem]">
            <CardHeader>
                <CardTitle className="flex items-start gap-2 text-xl">
                    {image && (
                        <Image
                            src={image}
                            alt={title}
                            width={24}
                            height={24}
                            className="rounded-md"
                        />
                    )}
                    {icon && icon}
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className='h-fit'>
                    {description}
                </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-start gap-2 ">
                {github_url && (
                    <Button size='sm' variant='default' onClick={() => handleNavigate(github_url)} className='gap-2'>
                        <FaGithub size={16} />
                        GitHub
                    </Button>
                )}
                {website_url && (
                    <Button size='sm' variant='outline' onClick={() => handleNavigate(website_url)} className='gap-2'>
                        <Globe size={16} />
                        Website
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}

export default CardProject