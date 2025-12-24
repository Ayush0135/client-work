"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Wrench, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export default function Diagnosis() {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Namaste! I am your AI AC Helper. Tell me what problem you are facing with your AC? (Example: 'AC is not cooling', 'Water dripping from indoor unit')" }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();

            if (data.reply) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I am having trouble connecting. Please try again later." }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: "Network error. Please check your connection." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-blue-600 p-4 text-white shadow-md sticky top-0 z-20">
                <div className="max-w-3xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-full">
                            <Bot size={24} />
                        </div>
                        <div>
                            <h1 className="font-bold text-lg leading-tight">AI Mechanic</h1>
                            <p className="text-xs text-blue-100">Instant Issue Diagnosis</p>
                        </div>
                    </div>
                    <Link href="/" className="text-sm bg-white/10 px-3 py-1.5 rounded-lg hover:bg-white/20 transition-colors">
                        Back Home
                    </Link>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 max-w-3xl w-full mx-auto p-4 flex flex-col gap-4">
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3 text-sm text-blue-800">
                    <AlertCircle size={20} className="shrink-0" />
                    <p>
                        <strong>Note:</strong> This is an AI diagnosis. For correct repair, always consult a professional.
                        Do not attempt dangerous repairs yourself.
                    </p>
                </div>

                <div className="flex-1 space-y-4 pb-24">
                    <AnimatePresence>
                        {messages.map((msg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {msg.role === 'assistant' && (
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 mt-1">
                                        <Wrench size={14} />
                                    </div>
                                )}

                                <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-tr-none'
                                        : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                                    }`}>
                                    {msg.content}
                                </div>

                                {msg.role === 'user' && (
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 shrink-0 mt-1">
                                        <User size={14} />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {loading && (
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                                <Wrench size={14} />
                            </div>
                            <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-2">
                                <Loader2 size={16} className="animate-spin text-blue-600" />
                                <span className="text-gray-400 text-xs">Analyzing issue...</span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input Area */}
            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4">
                <div className="max-w-3xl mx-auto">
                    <form onSubmit={sendMessage} className="relative flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your AC problem here..."
                            className="w-full pl-5 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-sm"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || loading}
                            className="absolute right-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors shadow-sm"
                        >
                            <Send size={20} />
                        </button>
                    </form>
                    <div className="mt-2 text-center">
                        <p className="text-xs text-gray-400">
                            Powered by AI. Accuracy may vary.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
