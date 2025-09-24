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
        title: "EcoTech Solutions",
        description: "Sustainable technology company website featuring interactive product showcases and client testimonials.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        category: "Corporate Website",
        href: "#ecotech"
    },
    {
        title: "FoodieHub",
        description: "Modern restaurant website with online ordering system, menu management, and customer reviews.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
        category: "Restaurant Website",
        href: "#foodiehub"
    },
    {
        title: "AgroFinance",
        description: "Agricultural investment platform website with secure payment integration and investor dashboard.",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
        category: "FinTech Website",
        href: "#agrofinance"
    },
    {
        title: "ContractPro",
        description: "Legal document automation platform enabling small businesses to create accurate contracts in minutes.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
        category: "SaaS Platform",
        href: "#contractpro"
    },
    {
        title: "StudentLife",
        description: "Comprehensive student portal website for college management with event scheduling and resource sharing.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
        category: "Educational Platform",
        href: "#studentlife"
    },
    {
        title: "ParkSmart",
        description: "Smart parking management website with QR code generation and real-time availability tracking.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        category: "Smart City Solution",
        href: "#parksmart"
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
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href={project.href}>
                                                Case Study
                                            </Link>
                                        </Button>
                                        <Button variant="ghost" size="sm" asChild>
                                            <Link href={project.href} className="flex items-center">
                                                View Details
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
