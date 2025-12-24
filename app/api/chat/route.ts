import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: `You are an expert AC mechanic with 20 years of experience named "Neyaj Bhai". 
                    Your goal is to diagnose AC issues based on the user's description.
                    RULES:
                    1. Be extremely concise and summarize the issue in 2-3 sentences max.
                    2. Use simple language (Hinglish/English mix is okay if appropriate, but keep it professional).
                    3. Identify the likely part causing the issue (e.g., Capacitor, Compressor, PCB, Gas Leak).
                    4. Always end by suggesting they book a professional service if it involves opening the unit.
                    5. Do not write long paragraphs. Keep tokens low.`
                },
                {
                    role: 'user',
                    content: message
                }
            ],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.5,
            max_tokens: 150, // Strict token limit as requested
        });

        const reply = completion.choices[0]?.message?.content || "Sorry, I couldn't diagnose that. Please try again.";

        return NextResponse.json({ reply });
    } catch (error) {
        console.error('Groq API Error:', JSON.stringify(error, null, 2));
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
