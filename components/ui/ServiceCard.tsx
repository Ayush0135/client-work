import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
}

const ServiceCard = ({ title, description, icon: Icon, href }: ServiceCardProps) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Icon className="text-blue-600 group-hover:text-white transition-colors" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
            <Link href={href} className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all group-hover:underline">
                Book Now <ArrowRight size={18} className="ml-1" />
            </Link>
        </div>
    );
};

export default ServiceCard;
