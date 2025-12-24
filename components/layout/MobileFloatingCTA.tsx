"use client";

import { Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const MobileFloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 100px
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:hidden flex gap-3 pb-8" // Extra padding bottom for safe areas on iPhone
                >
                    <a
                        href="tel:+917050207867"
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg active:scale-95 transition-transform"
                    >
                        <Phone size={20} />
                        Call Now
                    </a>
                    <a
                        href="https://wa.me/917050207867"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 rounded-xl shadow-lg active:scale-95 transition-transform"
                    >
                        <MessageCircle size={20} />
                        WhatsApp
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileFloatingCTA;
