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

                <div className="relative mx-auto max-w-4xl">
                    <div className="pointer-events-none absolute left-9 top-0 hidden h-full w-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent lg:block" />

                    <div className="space-y-10">
                        {processSteps.map((step, index) => (
                            <AnimatedGroup
                                key={index}
                                variants={transitionVariants}
                                className="group flex items-start gap-4 lg:gap-6"
                            >
                                {/* Timeline badge */}
                                <div className="relative z-[1]">
                                    <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-b from-primary/15 to-primary/5 ring-1 ring-primary/20 shadow-sm">
                                        <div className="grid size-10 place-items-center rounded-xl bg-background ring-1 ring-primary/30">
                                            <step.icon className="size-5 text-primary" />
                                        </div>
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="flex-1 rounded-2xl border bg-card/50 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/60 transition-all duration-300 hover:shadow-md">
                                    <div className="flex items-center justify-between">
                                        <div className="text-xs font-medium text-primary">Step {step.step}</div>
                                        <div className="text-xl leading-none text-primary/20">{step.symbol}</div>
                                    </div>
                                    <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                                        {step.description}
                                    </p>
                                </div>
                            </AnimatedGroup>
                        ))}
                    </div>
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
