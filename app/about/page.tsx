import Link from 'next/link';
import Image from 'next/image';
import { Target, Heart, Shield, Users, Award, Calendar, BadgeCheck } from 'lucide-react';
import { FadeIn, ScaleIn } from '@/components/ui/MotionWrapper';

export default function About() {
    const stats = [
        { label: 'Years Experience', value: '8+' },
        { label: 'Happy Customers', value: '1500+' },
        { label: 'Technicians', value: '12' },
        { label: 'Service Areas', value: '25+' },
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-blue-50 py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

                <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display">About A&N Enterprise</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Your trusted local partners in cooling solutions. We believe in honesty, quality, and speed.
                    </p>
                </FadeIn>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <FadeIn delay={0.2} className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                                <Calendar size={14} />
                                <span>Since 2015</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Dedicated to Comfort for Over a Decade</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Founded by <span className="font-semibold text-gray-900">Mr. Neyaj</span>, A&N Enterprise started with a simple mission in Patna: to provide reliable and affordable AC repair services where customers are treated like family.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                We noticed a gap in the market—technicians who would overcharge or do shoddy work. We promised to be different. Today, we are proud to be one of Patna's most trusted AC service providers.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 mt-8">
                                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                                    <Heart className="text-blue-600 mb-4" size={28} />
                                    <h3 className="font-bold text-gray-900">Customer First</h3>
                                    <p className="text-sm text-gray-500 mt-2">We treat your home like our own.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                                    <Shield className="text-blue-600 mb-4" size={28} />
                                    <h3 className="font-bold text-gray-900">Quality Parts</h3>
                                    <p className="text-sm text-gray-500 mt-2">Only genuine spares used.</p>
                                </div>
                            </div>
                        </FadeIn>

                        <ScaleIn delay={0.4} className="relative">
                            <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10"></div>
                            <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Neighbors Trust Us</h3>
                                <ul className="space-y-6">
                                    {[
                                        { title: 'Honest Pricing', desc: 'No surprise bills. We quote before we fix.' },
                                        { title: 'Expert Team', desc: 'Trained by Mr. Neyaj personally for quality assurance.' },
                                        { title: 'Wide Coverage', desc: 'Serving all major residential and commercial areas in Patna.' },
                                        { title: 'After-Service Support', desc: 'We don’t disappear. We are here if issues persist.' }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-4">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0 mt-1">
                                                <BadgeCheck size={16} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">{item.title}</h4>
                                                <p className="text-gray-600 text-sm">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScaleIn>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-blue-600 py-16 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                                <div className="text-blue-200 font-medium">{stat.label}</div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
                {/* Abstract shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[100px]"></div>
                </div>

                <FadeIn className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <Target className="mx-auto text-blue-500 mb-6" size={48} />
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-xl text-gray-300 leading-relaxed italic">
                        "To ensure every home and office in Patna stays cool and comfortable through honest, fast, and affordable air conditioning services, building lasting relationships one repair at a time."
                    </p>
                    <div className="mt-10">
                        <p className="font-semibold text-blue-400 text-lg">- Mr. Neyaj, Founder</p>
                    </div>
                </FadeIn>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white text-center">
                <FadeIn>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Need Expert Help?</h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-200 transform hover:-translate-y-1"
                    >
                        Contact Us Today
                    </Link>
                </FadeIn>
            </section>
        </div>
    );
}
