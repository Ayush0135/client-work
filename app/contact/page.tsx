"use client";

import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'repair',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle submitting logic here, e.g., send to API or WhatsApp
        const message = `Hi, I need help with ${formData.service}. My name is ${formData.name}. Details: ${formData.message}`;
        const whatsappUrl = `https://wa.me/917050207867?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-blue-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Book a service or ask a question. We are here to help you 24/7.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Fill up the form and our team will get back to you within 24 hours. For urgent matters, please call or WhatsApp us directly.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                                        <p className="text-gray-600 text-sm mb-2">Mon-Sat from 8am to 8pm</p>
                                        <a href="tel:+917050207867" className="text-blue-600 font-semibold text-lg hover:underline">+91 70502 07867</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                                        <p className="text-gray-600 text-sm mb-2">Shop No. 5, Market Road, Near City Center, Patna, Bihar - 800025</p>
                                        <a
                                            href="https://maps.app.goo.gl/vBE1pQMkzwwopPq18?g_st=awb"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 font-semibold hover:underline"
                                        >
                                            View on Google Maps
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600 text-sm mb-2">For business inquiries</p>
                                        <a href="mailto:Im.neyaj15@gmail.com" className="text-blue-600 font-semibold hover:underline">Im.neyaj15@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Service</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        placeholder="+91 70502 07867"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                                    <select
                                        id="service"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option value="installation">AC Installation</option>
                                        <option value="repair">AC Repair</option>
                                        <option value="gas">Gas Refilling</option>
                                        <option value="maintenance">Maintenance Service</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        placeholder="Tell us about the issue..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-200 flex items-center justify-center gap-2"
                                >
                                    <Send size={20} />
                                    Send Message via WhatsApp
                                </button>
                                <p className="text-xs text-gray-500 text-center mt-4">
                                    Clicking send will open WhatsApp with your pre-filled message.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
