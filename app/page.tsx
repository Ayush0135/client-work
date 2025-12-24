import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, Clock, Shield, Wrench, ThermometerSun, Wind, PenTool, CheckCircle2, Phone, Star, Quote } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';

export default function Home() {
  const services = [
    {
      title: 'AC Installation',
      description: 'Expert installation of Split and Window ACs with proper vacuum and leak testing.',
      icon: Wrench,
      href: '/services#installation',
    },
    {
      title: 'AC Repair',
      description: 'Quick diagnosis and repair for cooling issues, noise, water leakage, and more.',
      icon: PenTool,
      href: '/services#repair',
    },
    {
      title: 'Gas Refilling',
      description: 'Genuine refrigerant gas top-up and refilling for optimal cooling performance.',
      icon: Wind,
      href: '/services#gas',
    },
    {
      title: 'Deep Cleaning',
      description: 'Comprehensive jet pump cleaning for healthier air and better efficiency.',
      icon: BadgeCheck, // Changed from Sparkles to BadgeCheck which is more standard or I can use another valid icon if Sparkles isn't exported. Lucide usually has Sparkles. Let's use BadgeCheck to be safe or Sparkles. Sparkles is in lucide-react. I'll trust Sparkles exists but I used BadgeCheck in import. Let me stick to imports.
      href: '/services#maintenance',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-10 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                <BadgeCheck size={16} />
                <span>#1 Trusted AC Service in Town</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Reliable AC Repair & <span className="text-blue-600">Installation</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Fast, affordable, and expert air conditioner services at your doorstep.
                We bring cool comfort back to your home and office.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+917050207867"
                  className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 transform hover:-translate-y-1"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all hover:border-blue-300"
                >
                  Book Online
                </Link>
              </div>

              <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-gray-500 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>Verified Pros</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>90-Day Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>No Hidden Costs</span>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[600px] w-full flex items-center justify-center">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/hero-bg.png"
                  alt="AC Repair Technician"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Shield size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">100% Satisfaction</p>
                    <p className="text-xs text-gray-500">Guaranteed Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              From installation to maintenance, we handle everything to keep your AC running smoothly all year round.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center md:text-left">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 mx-auto md:mx-0">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Response</h3>
              <p className="text-gray-600">
                We understand the urgency of a broken AC. Our team reaches you within hours of booking.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 mx-auto md:mx-0">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Technicians</h3>
              <p className="text-gray-600">
                Our team consists of certified professionals with years of experience in AC handling.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 mx-auto md:mx-0">
                <BadgeCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">
                Transparent pricing with no hidden charges. We value your money and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Kya Kehte Hain Humare Customers?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Real feedback from real people across Patna.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative flex flex-col h-full">
                <Quote className="absolute top-6 right-6 text-blue-100" size={48} />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 relative z-10 leading-relaxed flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl shrink-0">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center justify-center px-8 py-3 border border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
            >
              View More Reviews
            </Link>
          </div>

        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Serving Across Town</h2>
          <p className="text-gray-600 mb-10">
            We are currently serving in the following locations and nearby areas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Boring Road', 'Kankarbagh', 'Bailey Road', 'Raja Bazar', 'Patliputra', 'Danapur', 'Fraser Road', 'Rajendra Nagar'].map((area) => (
              <span key={area} className="px-6 py-2 bg-gray-100 rounded-full text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer-ish */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to fix your AC?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Don't let the heat get to you. Contact Mr. Neyaj today for a quick and reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917050207867"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Call +91 70502 07867
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all"
            >
              Contact via WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
