'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

const projects = [
    {
        title: "Supernal Aero",
        description: "Elegant marketing site showcasing aerospace innovation and product narrative.",
        image: "https://nirmitsaini.10xdevs.in/screenzy-1726210398661.webp",
        category: "Website",
        href: "https://supernalaero.10xdevs.in/"
    },
    {
        title: "Zentry",
        description: "High‑fidelity landing experience with smooth animations and rich interactions.",
        image: "https://nirmitsaini.10xdevs.in/Zentry.webp",
        category: "Website",
        href: "https://zentry.10xdevs.in/"
    },
    {
        title: "Astute AI",
        description: "Product site for an AI tool with crisp sections and performance‑first build.",
        image: "https://nirmitsaini.10xdevs.in/astute.webp",
        category: "Website",
        href: "https://astuteai.10xdevs.in/"
    },
    {
        title: "AKQA Clone",
        description: "Modern agency-style clone focusing on typography, motion, and grid systems.",
        image: "https://nirmitsaini.10xdevs.in/akqa.webp",
        category: "Website",
        href: "https://akqa-five.vercel.app/"
    },
    {
        title: "10xDevs Blog",
        description: "Ultimate blogging SaaS setup — fast to launch, easy to manage.",
        image: "https://nirmitsaini.10xdevs.in/screenzy-1726205184216.webp",
        category: "Blog Platform",
        href: "https://blog.10xdevs.in/"
    }
]

export function FeaturedProjectsSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6">
                <AnimatedGroup variants={transitionVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Our Work
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
                        Featured Projects
                    </p>
                    <p className="text-muted-foreground max-w-4xl mx-auto">
                        We believe in the power of technology to empower businesses. Explore our latest projects and see how we've helped our clients transform their ideas into reality.
                    </p>
                </AnimatedGroup>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <AnimatedGroup 
                            key={index}
                            variants={{
                                ...transitionVariants,
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.2 + (index * 0.1),
                                        },
                                    },
                                },
                            }}
                            className="group"
                        >
                            <div className="bg-card border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                </div>
                                
                                <div className="p-6">
                                    <div className="mb-3">
                                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex gap-3">
                                        <Button variant="ghost" size="sm" asChild>
                                            <Link href={project.href} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                Visit Website
                                                <ExternalLink className="ml-1 w-3 h-3" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                    ))}
                </div>
            </div>
        </section>
    )
}
