import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa';
import { Globe } from 'lucide-react';
import { Badge } from '../ui/badge';

interface CardProjectProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    index: number;
    image?: StaticImageData;
    children?: React.ReactNode;
    onClick?: () => void;
    github_url?: string;
    website_url?: string;
    badge?: string;
}

const CardProject = ({ icon, description, index, title, website_url, github_url, image, badge }: CardProjectProps) => {


    const handleNavigate = (url: string) => {
        window.open(url, "_blank")
    }

    const webSiteBtnVariant = github_url ? 'outline' : 'default'

    return (
        <Card key={index} className="bg-transparent border-none h-full transition-all duration-200 ease-out hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-[0.1rem]">
            <CardHeader>
                <CardTitle className="flex  justify-between gap-2 text-xl">
                    <div className='flex gap-2 '>
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
                    </div>
                    <Badge variant={badge == 'Prod' ? 'prod' : 'demo'}>
                      {badge}
                    </Badge>
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
                    <Button size='sm' variant={webSiteBtnVariant} onClick={() => handleNavigate(website_url)} className='gap-2'>
                        <Globe size={16} />
                        Website
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}

export default CardProject