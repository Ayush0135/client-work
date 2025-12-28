"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Wind, BadgeCheck, PenTool, CheckCircle2, Phone, Zap, Snowflake, Droplets, WashingMachine, ChevronRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/MotionWrapper';
import Link from 'next/link';

export default function Services() {
    // Data from user request and image
    const pricingData = [
        { service: "Visiting Charge", price: "₹350" },
        { service: "Normal Servicing", price: "₹500" },
        { service: "Jet Pump Servicing", price: "₹700" },
        { service: "Window/Split AC Installation", price: "On Request" },
        { service: "Cassette AC Servicing", price: "₹1600" },
        { service: "Ductable AC Servicing", price: "₹1600" },
        { service: "R-22 Gas Refill", price: "₹2800" },
        { service: "Geyser Service", price: "From ₹350" },
        { service: "Washing Machine Repair", price: "From ₹350" },
    ];

    const generalServices = [
        {
            title: "AC Installation",
            icon: Wrench,
            description: "Expert installation for Windows, Split, Cassette, and Ductable AC units.",
            features: ["Professional Mounting", "Vacuum Testing", "Gas Pressure Check"]
        },
        {
            title: "Repair & Diagnosis",
            icon: PenTool,
            description: "Comprehensive repair services for all AC brands and models.",
            features: ["PCB Repair", "Leakage Fixing", "Compressor Replacement"]
        },
        {
            title: "Maintenance & Cleaning",
            icon: Droplets,
            description: "Deep cleaning and preventative maintenance to ensure longevity.",
            features: ["Jet Pump Cleaning", "Filter & Coil Wash", "Anti-bacterial Spray"]
        },
        {
            title: "Gas Refilling",
            icon: Wind,
            description: "Genuine refrigerant gas refilling (R32, R410A, R22) with leak testing.",
            features: ["Leak Detection", "Vacuum Creation", "Optimal Cooling Check"]
        }
    ];

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen pt-24 pb-20 transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <FadeIn>
                    <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-6">
                        Professional Services
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                        Transparent Pricing, <br />
                        <span className="text-blue-600 dark:text-blue-400">Premium Service</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        From basic servicing to complex repairs, we offer clear, upfront pricing for all your cooling and appliance needs in Patna.
                    </p>
                </FadeIn>
            </section>

            {/* Rate Card Section */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <FadeIn delay={0.2}>
                    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                        <div className="bg-gray-900 dark:bg-gray-950 px-8 py-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-1">Standard Rate Card</h2>
                                <p className="text-gray-400 text-sm">Transparent pricing for our most popular services</p>
                            </div>
                            <BadgeCheck className="text-blue-400 w-8 h-8 md:w-10 md:h-10" />
                        </div>

                        <div className="divide-y divide-gray-100 dark:divide-gray-800">
                            {pricingData.map((item, index) => (
                                <div key={index} className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <span className="font-medium text-gray-700 dark:text-gray-200 text-lg group-hover:text-gray-900 dark:group-hover:text-white">{item.service}</span>
                                    </div>
                                    <span className="font-bold text-gray-900 dark:text-white text-lg">{item.price}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 px-8 py-4 text-sm text-gray-500 dark:text-gray-400 text-center border-t border-gray-100 dark:border-gray-800">
                            * Final prices may vary based on spare parts required and machine condition.
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Detailed Services Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Comprehensive Solutions</h2>
                    <p className="text-gray-600 dark:text-gray-400">We handle everything from installation to annual maintenance.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {generalServices.map((service, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="group bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                        <service.icon size={28} />
                                    </div>
                                    <Link href="/contact" className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:border-blue-600 transition-colors">
                                        <ChevronRight size={20} />
                                    </Link>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Additional Categories */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Other Appliances We Service</h2>
                            <p className="text-blue-100 dark:text-blue-200 max-w-xl text-lg">
                                Beyond air conditioning, we provide expert repair services for other home essentials.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                                    <WashingMachine size={24} />
                                    <span className="font-semibold">Washing Machines</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                                    <Zap size={24} />
                                    <span className="font-semibold">Geysers & Heaters</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                                    <Snowflake size={24} />
                                    <span className="font-semibold">Refrigerators</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl w-full md:w-auto min-w-[300px] text-gray-900 dark:text-white text-center">
                            <h3 className="font-bold text-xl mb-2">Need a Quick Fix?</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Our technicians are just a call away.</p>
                            <a href="tel:+917050207867" className="block w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors mb-3">
                                Call +91 70502 07867
                            </a>
                            <Link href="/contact" className="block w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                Book Online
                            </Link>
                        </div>
                    </div>

                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
                </div>
            </section>
        </div>
    );
}

