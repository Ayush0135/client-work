import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <span className="font-bold text-2xl text-white">A&N</span>
                            <span className="text-sm font-medium text-blue-400 tracking-wider">ENTERPRISE</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Your trusted partner for expert AC repair, installation, and maintenance services. We ensure your comfort directly at your doorstep with professional care.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Our Services', href: '/services' },
                                { name: 'Contact Us', href: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
                        <ul className="space-y-3">
                            {[
                                'AC Installation',
                                'AC Repair',
                                'Gas Refilling',
                                'Annual Maintenance',
                                'Commercial AC',
                            ].map((service) => (
                                <li key={service} className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-blue-500 shrink-0 mt-1" size={20} />
                                <span>Shop No. 5, Market Road, Near City Center, Patna, Bihar - 800025</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-blue-500 shrink-0" size={20} />
                                <a href="tel:+917050207867" className="hover:text-white transition-colors">+91 70502 07867</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-blue-500 shrink-0" size={20} />
                                <a href="mailto:Im.neyaj15@gmail.com" className="hover:text-white transition-colors">Im.neyaj15@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} A&N Enterprise. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
