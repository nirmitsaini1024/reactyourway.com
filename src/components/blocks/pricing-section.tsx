'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Check, Star } from 'lucide-react'
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

const maintenancePlans = [
    {
        name: "Basic",
        title: "Essential Care Plan",
        price: "₹9,999",
        period: "/month",
        description: "Perfect for small websites that need basic maintenance and updates.",
        features: [
            "Fix up to 5 bugs each week",
            "Add 1 small feature every 2 months", 
            "Monthly website speed improvements",
            "Email help (24-hour response)",
            "Basic website security checks",
            "Updates for new browser versions",
            "Monthly progress summaries"
        ],
        popular: false,
        cta: "Get Started"
    },
    {
        name: "Standard",
        title: "Most Popular Plan",
        price: "₹24,999",
        period: "/month",
        description: "Ideal for growing businesses that need regular updates and support.",
        features: [
            "Fix up to 10 bugs each week",
            "Add 2 new features each month",
            "Speed improvements every two weeks",
            "Urgent help within 6 hours",
            "Monthly security check-ups",
            "Monthly planning call",
            "Quarterly security deep dive",
            "Priority support when you need help"
        ],
        popular: true,
        cta: "Get Started"
    },
    {
        name: "Premium",
        title: "Complete Care Package",
        price: "₹39,999",
        period: "/month",
        description: "Comprehensive solution for businesses that need constant attention and growth.",
        features: [
            "Unlimited bug fixes anytime",
            "Custom feature roadmap for your growth",
            "Weekly speed and performance updates",
            "Round-the-clock help (2-hour response)",
            "Advanced monthly security reviews",
            "Your own personal tech manager",
            "First-in-line for feature requests",
            "Detailed website health reports",
            "Long-term website growth planning"
        ],
        popular: false,
        cta: "Get Started"
    }
]

const developmentPlans = [
    {
        name: "Basic Website Package",
        title: "Frontend Development",
        price: "₹9,999",
        period: "one-time",
        description: "Professional website for your business",
        features: [
            "Converting your design into working website",
            "Connecting to external services",
            "Smooth animations and transitions",
            "Help when you need it",
            "10-30 Day Delivery",
            "Unlimited changes until you are happy"
        ],
        popular: false,
        cta: "Start Your Project"
    },
    {
        name: "Complete Starter Package",
        title: "MVP Development",
        price: "₹19,999",
        period: "one-time",
        description: "Website plus admin dashboard",
        features: [
            "Custom design for your brand",
            "Converting designs into working website",
            "Building your website's backend system",
            "1-3 Month Delivery",
            "Getting your website live and optimized",
            "Testing everything works perfectly",
            "Unlimited changes until you are happy"
        ],
        popular: true,
        cta: "Start Your Project"
    },
    {
        name: "Everything You Need",
        title: "Full-Cycle Website Development",
        price: "₹29,999",
        period: "one-time",
        description: "Complete website with admin dashboard",
        features: [
            "Premium design customized for your brand",
            "Converting designs into working website",
            "Complete backend system built for growth",
            "2-4 Month Delivery",
            "Publishing and hosting setup",
            "Thorough testing for flawless performance",
            "Full control with admin dashboard",
            "Unlimited changes until you are happy"
        ],
        popular: false,
        cta: "Start Your Project"
    }
]

export function PricingSection() {
    const [activeTab, setActiveTab] = useState<'maintenance' | 'development'>('development')
    
    const currentPlans = activeTab === 'maintenance' ? maintenancePlans : developmentPlans
    const tabTitle = activeTab === 'maintenance' ? 'Existing Website Maintenance' : 'New Website Development'

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6">
                <AnimatedGroup variants={transitionVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Simple Pricing
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                        {activeTab === 'maintenance' ? 'React Your Way Maintenance Plans' : 'React Your Way Development Plans'}
                    </p>
                    <p className="text-muted-foreground max-w-4xl mx-auto mb-8">
                        {activeTab === 'maintenance' 
                            ? 'Keep your website running smoothly with our affordable monthly plans'
                            : 'Build your dream website with our comprehensive development packages'
                        }
                    </p>
                    
                    {/* Tabs */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-muted p-1 rounded-lg flex">
                            <button
                                onClick={() => setActiveTab('development')}
                                className={cn(
                                    "px-6 py-3 rounded-md text-sm font-medium transition-all duration-200",
                                    activeTab === 'development'
                                        ? "bg-background text-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                New Website Development
                            </button>
                            <button
                                onClick={() => setActiveTab('maintenance')}
                                className={cn(
                                    "px-6 py-3 rounded-md text-sm font-medium transition-all duration-200",
                                    activeTab === 'maintenance'
                                        ? "bg-background text-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                Existing Website Maintenance
                            </button>
                        </div>
                    </div>
                </AnimatedGroup>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {currentPlans.map((plan, index) => (
                        <AnimatedGroup 
                            key={index}
                            variants={transitionVariants}
                            className="group"
                        >
                            <div className={cn(
                                "relative bg-card border rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
                                plan.popular && "border-primary shadow-lg scale-105"
                            )}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                                            <Star className="w-4 h-4 mr-1" />
                                            {activeTab === 'development' ? 'Recommended' : 'Most Popular'}
                                        </div>
                                    </div>
                                )}
                                
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-muted-foreground mb-4">{plan.title}</p>
                                    <div className="mb-4">
                                        <span className="text-4xl font-bold">{plan.price}</span>
                                        <span className="text-muted-foreground ml-2">{plan.period}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button 
                                    className={cn(
                                        "w-full",
                                        plan.popular 
                                            ? "bg-primary hover:bg-primary/90" 
                                            : "bg-secondary hover:bg-secondary/90"
                                    )}
                                    size="lg"
                                >
                                    {plan.cta}
                                </Button>
                            </div>
                        </AnimatedGroup>
                    ))}
                </div>

                <AnimatedGroup variants={transitionVariants} className="text-center mt-12">
                    <p className="text-muted-foreground">
                        Need a custom solution? <span className="text-primary font-medium">Contact us for personalized pricing.</span>
                    </p>
                </AnimatedGroup>
            </div>
        </section>
    )
}