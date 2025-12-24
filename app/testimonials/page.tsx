import Link from 'next/link';
import { Star, Quote, ArrowLeft } from 'lucide-react';
import { FadeIn } from '@/components/ui/MotionWrapper';

export default function Testimonials() {
    const allTestimonials = [
        {
            name: "Amit Kumar",
            role: "Kankarbagh",
            text: "Bahut badhiya service! AC cooling problem ek dum fix ho gayi. Technician time par aaye aur rates bhi bahut genuine the. Highly recommended!",
            rating: 5
        },
        {
            name: "Priya Sharma",
            role: "Boring Road",
            text: "Maine apne boutique ke liye split AC install karwaya tha. Installation bahut neat and professional tha. Neyaj bhaia ka behavior bahut accha hai.",
            rating: 5
        },
        {
            name: "Rajat Singh",
            role: "Danapur",
            text: "Raat ko AC kharab hua, subah call kiya aur dopehar tak thik ho gaya. Fast service aur koi extra hidden charges nahi. Impressive work!",
            rating: 5
        },
        {
            name: "Sneha Gupta",
            role: "Patliputra",
            text: "AC service ke liye best option Patna mein. Dusre log sirf gas bharne ka charge karte hain, par ye proper cleaning bhi karte hain. Very satisfied.",
            rating: 5
        },
        {
            name: "Mohammad Irfan",
            role: "Phulwari Sharif",
            text: "Mere window AC mein bahut awaaz aa rahi thi. Inhone motor repair kiya aur ab silent chalta hai. Thank you A&N Enterprise.",
            rating: 5
        },
        {
            name: "Vikram Malhotra",
            role: "Rajendra Nagar",
            text: "Urgent basis pe bulaaya tha kyunki guests aane waale the. 2 ghante mein technician aa gaye aur service kar diya. Quick and reliable.",
            rating: 5
        },
        {
            name: "Anjali Verma",
            role: "Bailey Road",
            text: "Maine AMC liya hai inka. Regular service time pe hoti hai aur AC bilkul naya jaisa chalta hai. Staff bhi bahut polite hai.",
            rating: 5
        },
        {
            name: "Rahul Deshmukh",
            role: "Ashiana Digha",
            text: "Deep cleaning service bahut achi thi. AC ke andar se kaafi dhool nikli aur ab cooling double ho gayi hai. Value for money.",
            rating: 5
        },
        {
            name: "Suresh Sinha",
            role: "Kankarbagh",
            text: "Gas refilling karwaya tha. Proper vacuum kiya aur R32 gas daala. Ab room 10 minute mein thanda ho jata hai.",
            rating: 5
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="bg-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeIn>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Customer Stories</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                            See why thousands of families in Patna trust A&N Enterprise for their cooling needs.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 hover:underline"
                        >
                            <ArrowLeft size={20} /> Back to Home
                        </Link>
                    </FadeIn>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allTestimonials.map((testimonial, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-full flex flex-col relative group">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Quote size={64} className="text-blue-600" />
                                    </div>

                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>

                                    <p className="text-gray-700 mb-6 relative z-10 leading-relaxed flex-grow">
                                        "{testimonial.text}"
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl shrink-0">
                                            {testimonial.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-xs text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-600 py-16 text-center text-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Want to experience the same service?</h2>
                    <p className="text-blue-100 mb-8 text-lg">
                        Join our list of happy customers. Book your service today!
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
                    >
                        Book Now
                    </Link>
                </div>
            </section>
        </div>
    );
}
