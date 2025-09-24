'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight, Code, Palette, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
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

const services = [
    {
        icon: Zap,
        title: "Startup & MVP",
        description: "Quickly validate your concept with a market-ready website that captures your core business idea and attracts early customers.",
        href: "#startup"
    },
    {
        icon: Code,
        title: "Full-Cycle Development",
        description: "End-to-end website creation: design, development, testing, and deployment with ongoing maintenance and support.",
        href: "#full-cycle"
    },
    {
        icon: Palette,
        title: "Custom Solutions",
        description: "Bespoke websites tailored to your unique business challenges, goals, and brand identity for maximum impact.",
        href: "#custom"
    }
]

export function ServicesSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6">
                <AnimatedGroup variants={transitionVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Services We Provide
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        We build robust websites through collaborative development that turns your vision into reality.
                    </p>
                </AnimatedGroup>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
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
                            <div className="bg-card border rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <service.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                                <Link 
                                    href={service.href}
                                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium group/link"
                                >
                                    Learn more
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </AnimatedGroup>
                    ))}
                </div>
            </div>
        </section>
    )
}
