"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Wrench, Wind, BadgeCheck, PenTool, CheckCircle2, ArrowRight, ClipboardCheck, Settings, ThumbsUp } from 'lucide-react';
import { FadeIn, ScaleIn } from '@/components/ui/MotionWrapper';
import FAQItem from '@/components/ui/Accordion';

export default function Services() {
    const serviceList = [
        {
            id: 'installation',
            title: 'AC Installation',
            icon: Wrench,
            description: 'Professional installation for all brands of Split and Window ACs. We ensure zero leakage and optimal cooling.',
            features: [
                'Wall drilling & mounting',
                'Copper pipe connection',
                'Vacuum & leak testing',
                'Demonstration of features'
            ],
            image: '/images/split-ac-indoor.png'
        },
        {
            id: 'repair',
            title: 'AC Repair & Troubleshooting',
            icon: PenTool,
            description: 'Fixing all major and minor AC issues. From strange noises to cooling failures, we handle it all.',
            features: [
                'Water leakage repair',
                'PCB repair',
                'Noise issue resolution',
                'Compressor checking'
            ],
            image: '/images/window-ac.png'
        },
        {
            id: 'gas',
            title: 'Gas Refilling',
            icon: Wind,
            description: 'Top-up or full refill of refrigerant gas (R32, R410A, R22). We create a vacuum before filling to ensure efficiency.',
            features: [
                'Leakage detection',
                'Vacuum creation',
                'Gas pressure check',
                'Cooling verification'
            ],
            image: '/images/ac-outdoor.png'
        },
        {
            id: 'maintenance',
            title: 'Annual Maintenance Service (AMC)',
            icon: BadgeCheck,
            description: 'Regular cleaning and servicing to extend your AC’s life and save on electricity bills.',
            features: [
                'Jet pump cleaning',
                'Filter cleaning',
                'Coil washing',
                'Performance checkup'
            ],
            image: '/images/ac-cleaning.png'
        }
    ];

    const faqs = [
        { q: "How much do you charge for a visit?", a: "Our visiting charge is nominal and is waived off if you avail of any service." },
        { q: "Do you provide a warranty on repairs?", a: "Yes, we provide a 30-day warranty on all repair works and a 90-day warranty on spare parts replaced by us." },
        { q: "How long does gas filling take?", a: "Usually, it takes about 30 to 45 minutes, including vacuuming and leak testing." },
        { q: "Do you repair Inverter ACs?", a: "Yes, our technicians are trained to handle both non-inverter and modern inverter AC models." }
    ];

    const steps = [
        { icon: ClipboardCheck, title: "Book Service", desc: "Call or WhatsApp us to schedule a visit." },
        { icon: Wrench, title: "Diagnosis", desc: "Our expert checks the issue and gives a quote." },
        { icon: Settings, title: "Repair", desc: "We fix the issue using genuine parts." },
        { icon: ThumbsUp, title: "Testing", desc: "We test cooling before leaving." },
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-blue-50 py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Premium Services</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive cooling solutions tailored to your needs. Residential or Commercial, we've got you covered in Patna.
                    </p>
                </FadeIn>
            </section>

            {/* Process Steps */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-gray-900">How We Work</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {steps.map((step, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                        <step.icon size={32} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-500">{step.desc}</p>
                                    {idx < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 left-1/2 w-full h-0.5 bg-gray-200 -z-10 translate-x-1/2"></div>
                                        // Note: connector lines are tricky in grid without absolute positioning context, skipping for simplicity/cleanliness in this quick iteration
                                    )}
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    {serviceList.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-row-dense' : ''}`}
                        >
                            {/* Content */}
                            <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                                    <service.icon size={28} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8 hover:shadow-md transition-shadow">
                                    <h3 className="font-semibold text-gray-900 mb-4">What's Included:</h3>
                                    <ul className="grid sm:grid-cols-2 gap-3">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-gray-600">
                                                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:gap-3"
                                >
                                    Book This Service <ArrowRight size={18} />
                                </Link>
                            </div>

                            {/* Visual */}
                            <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                                <div className="aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-2xl relative group">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute bottom-6 left-6 text-white font-medium flex items-center gap-2">
                                        <BadgeCheck className="text-blue-400" />
                                        Expert {service.title}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Common questions from our customers in Patna.</p>
                    </FadeIn>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <FAQItem question={faq.q} answer={faq.a} />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div className="text-white">
                        <h2 className="text-2xl font-bold mb-2">Not sure what's wrong?</h2>
                        <p className="text-blue-100">Call us for a quick consultation and diagnosis.</p>
                    </div>
                    <a href="tel:+917050207867" className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap transform hover:scale-105 active:scale-95 duration-200">
                        Call Now: +91 70502 07867
                    </a>
                </div>
            </section>
        </div>
    );
}
