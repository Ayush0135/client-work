import Image from 'next/image';

export default function Gallery() {
    // In a real app, these would be real paths
    const works = [
        { type: 'Service', src: '/images/jet-pump-clean.png', caption: 'Jet Pump Deep Cleaning' },
        { type: 'Repair', src: '/images/ac-dirty.png', caption: 'Deep Cleaning: Before' },
        { type: 'Maintenance', src: '/images/ac-cleaning.png', caption: 'Deep Cleaning: In Progress' },
        { type: 'Installation', src: '/images/split-ac-indoor.png', caption: 'Perfect Split AC Installation' },
        { type: 'Commercial', src: '/images/cassette-ac.png', caption: 'Cassette AC Service' },
        { type: 'Commercial', src: '/images/ductable-ac.png', caption: 'Ductable AC Installation' },
        { type: 'Equipment', src: '/images/ac-outdoor.png', caption: 'Outdoor Unit Setup (Patna)' },
        { type: 'Repair', src: '/images/window-ac.png', caption: 'Window AC Service' },
        { type: 'Appliance', src: '/images/geyser-repair.png', caption: 'Geyser Repair Service' },
        { type: 'Appliance', src: '/images/washing-machine.png', caption: 'Washing Machine Repair' },
        { type: 'Tools', src: '/images/ac-tools.png', caption: 'Professional Tools Used' },
    ];

    return (
        <div className="bg-white">
            <section className="bg-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Work Gallery</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        See the difference we make. Real photos from real sites.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {works.map((work, idx) => (
                            <div key={idx} className="group relative aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                                <Image
                                    src={work.src}
                                    alt={work.caption}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2">
                                        {work.type}
                                    </span>
                                    <p className="text-white font-medium">{work.caption}</p>
                                </div>
                            </div>
                        ))}

                        {/* Placeholders for user to add more */}
                        {[1, 2, 3, 4].map((i) => (
                            <div key={`placeholder-${i}`} className="flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl aspect-square">
                                <p className="text-gray-400 font-medium">Coming Soon</p>
                                <p className="text-xs text-gray-400 mt-1">Project Photo {i}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
