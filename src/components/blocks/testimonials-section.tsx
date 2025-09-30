'use client'
import React from 'react'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Variants } from 'framer-motion'

const transitionVariants: { item: Variants } = {
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
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

const testimonials = [
    {
        name: "Matthew West",
        role: "CEO - EcoTech Solutions",
        company: "EcoTech Solutions",
        rating: 5.0,
        content: "I appreciate the hard work and dedication your team has done for our website. You guys delivered an outstanding product and made the process seamless.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
        name: "Ashish Sharma",
        role: "CTO - AgroFinance",
        company: "AgroFinance",
        rating: 4.8,
        content: "I had the pleasure of working closely with React Your Way on our AgroFinance website. Their seamless integration of payment gateways and user dashboards contributed to advanced features. Their innovative mindset, commitment to quality, and effective communication make them an asset to any project.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
        name: "Anurag Bezboruah",
        role: "CEO - Finixia Digital",
        company: "Finixia Digital",
        rating: 5.0,
        content: "Absolute win for my team, only possible because of the high-end website delivered by React Your Way. Very, very satisfied with their work. Would highly recommend them for freelance projects as well as for team participation.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
        name: "Wolf Technologies",
        role: "Company",
        company: "Wolf Technologies",
        rating: 5.0,
        content: "We've completed 3 projects with React Your Way, and they've always delivered exceptional results. Their expertise, attention to detail, and excellent communication make them a top choice for website development. Highly recommend!",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    },
    {
        name: "Simranpreet Singh",
        role: "CEO - FoodieHub",
        company: "FoodieHub",
        rating: 5.0,
        content: "The team is incredibly skilled and professional. They delivered our restaurant website on time and within budget. We appreciated their clear communication and dedication to our project's success.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
        name: "Praveen Soni",
        role: "CEO - StudentLife",
        company: "StudentLife",
        rating: 4.7,
        content: "Working with this team was a game-changer for our startup. They took our idea and turned it into a fully functional website in no time. Their expertise in modern web technologies is top-notch, and they really understood our vision.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
]

export function TestimonialsSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6">
                <AnimatedGroup variants={transitionVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        CLIENTS ARE SAYING
                    </h2>
                </AnimatedGroup>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
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
                            <div className="bg-card border rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <img 
                                        src={testimonial.avatar} 
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{testimonial.name}</h4>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center mb-4">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star 
                                                key={i} 
                                                className={cn(
                                                    "w-4 h-4",
                                                    i < Math.floor(testimonial.rating) 
                                                        ? "text-yellow-400 fill-current" 
                                                        : "text-gray-300"
                                                )} 
                                            />
                                        ))}
                                    </div>
                                    <span className="ml-2 text-sm font-medium">{testimonial.rating}</span>
                                </div>
                                
                                <p className="text-muted-foreground leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                            </div>
                        </AnimatedGroup>
                    ))}
                </div>
            </div>
        </section>
    )
}
