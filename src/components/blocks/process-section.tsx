'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { ArrowRight, MessageCircle, Palette, Code, TestTube, Rocket } from 'lucide-react'
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

const processSteps = [
    {
        icon: MessageCircle,
        step: "01",
        title: "Discovery Call",
        description: "We start with understanding your vision, requirements, and business goals. This initial consultation helps us map out the perfect strategy for your website project.",
        symbol: "✧"
    },
    {
        icon: Palette,
        step: "02", 
        title: "Design",
        description: "Our UI/UX experts create intuitive wireframes and high-fidelity prototypes that capture your brand identity while ensuring exceptional user experience.",
        symbol: "○"
    },
    {
        icon: Code,
        step: "03",
        title: "Development", 
        description: "Our skilled developers bring the designs to life using clean, scalable code. We follow industry best practices to ensure your website is robust and future-proof.",
        symbol: "◇"
    },
    {
        icon: TestTube,
        step: "04",
        title: "Testing",
        description: "Rigorous quality assurance across multiple devices and browsers ensures your website is bug-free, responsive, and delivers a seamless experience.",
        symbol: "□"
    },
    {
        icon: Rocket,
        step: "05",
        title: "Deployment",
        description: "We handle the entire hosting setup and domain configuration to make your website live, followed by continuous support and maintenance.",
        symbol: "△"
    }
]

export function ProcessSection() {
    return (
        <section className="py-16 md:py-24 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6">
                <AnimatedGroup variants={transitionVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Our Process
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                        How It Works
                    </p>
                </AnimatedGroup>

                <div className="space-y-12">
                    {processSteps.map((step, index) => (
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
                            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                                    <step.icon className="w-8 h-8 text-primary" />
                                </div>
                                <div className="text-center lg:text-left">
                                    <div className="text-6xl font-bold text-primary/20 mb-2">
                                        {step.symbol}
                                    </div>
                                    <div className="text-sm font-medium text-primary">
                                        Step {step.step}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {step.description}
                                </p>
                            </div>
                        </AnimatedGroup>
                    ))}
                </div>

                <AnimatedGroup variants={transitionVariants} className="text-center mt-16">
                    <Button size="lg" className="rounded-xl px-8 py-6 text-lg">
                        Start your project
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="text-muted-foreground mt-4">
                        Let's transform your ideas into reality
                    </p>
                </AnimatedGroup>
            </div>
        </section>
    )
}
