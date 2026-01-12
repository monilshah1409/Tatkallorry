import React from 'react';
import Image from 'next/image';
import Reveal from "@/components/ui/Reveal";
import { Play, ExternalLink } from "lucide-react";

// Types for the award data
interface Award {
    id: string;
    title: string;
    year: string;
    description: string[];
    imageSrc: string;
}

interface Video {
    id: string;
    title: string;
    channel: string;
    url: string;
    videoId: string;
}

const awardsData: Award[] = [
    {
        id: '1',
        title: 'Interaction with PM Shri Narendra Modi',
        year: '2022',
        description: [
            'Co-founder Nikita Maheshwari traveled with PM Modi on the Vande Bharat Express from Mahatma Mandir to Kalupur.',
            'Discussed Tatkalorry and its potential on a national level during the journey.',
            'Received souvenir tickets and shared the journey with esteemed officers and engineers.'
        ],
        imageSrc: '/placeholder-award.jpg',
    },
    {
        id: '2',
        title: '50 Inspiring Women - Gujarat Edition',
        year: '2022',
        description: [
            'Nikita Maheshwari was featured in the "50 Inspiring Women - Gujarat Edition" coffee table book.',
            'The book was launched by Smt. Smriti Irani, who facilitated the awardees.'
        ],
        imageSrc: '/placeholder-award.jpg',
    },
    {
        id: '3',
        title: 'Representation on Sansad TV',
        year: '2022',
        description: [
            'Represented the Gujarat Startup Ecosystem on the "Perspective" program.',
            'Panel discussion alongside Mr. M. Nagarajan and Mr. Yashas Karanam on Gujarat as a leading startup state.'
        ],
        imageSrc: '/placeholder-award.jpg',
    },
    {
        id: '4',
        title: 'Interaction with MoS Smt. Vibhavariben Dave',
        year: '2021',
        description: [
            'Participated in a special interaction and podcast regarding women in startups.',
            'The discussion focused on Tatkalorry performing in a male-dominated industry.'
        ],
        imageSrc: '/placeholder-award.jpg',
    },
    {
        id: '5',
        title: 'Udyami: Successful Women Entrepreneurs',
        year: '2021',
        description: [
            'Recognized in the book "Udyami Successful Women Entrepreneurs of Gujarat".',
            'Launched by the Gujarat Chambers of Commerce and Smt. Vibhavariben Dave.'
        ],
        imageSrc: '/placeholder-award.jpg',
    },
    {
        id: '6',
        title: 'SSIP & I-Hub Recognition',
        year: '2021',
        description: [
            'Recognized in a Coffee Table Book by SSIP-Gujarat in association with I-Hub and the Department of Education, Gujarat Government.'
        ],
        imageSrc: '/placeholder-award.jpg',
    },
    {
        id: '7',
        title: 'National Entrepreneurship Award (NEA)',
        year: '2019',
        description: [
            'Winner of the NEA 2019 in the A3 Category for Logistics, Transportation, E-commerce & Other Services.',
            'Presented by the Ministry of Skills, Development, and Entrepreneurship.'
        ],
        imageSrc: '/startupindia.png',
    },
    {
        id: '8',
        title: 'SSIP Prashansha Award',
        year: '2019',
        description: [
            'Awarded the "State Entrepreneurship Award - Growth Stage Student Startup" by the Govt of Gujarat.',
            'The recognition included an award of ₹1,00,000.'
        ],
        imageSrc: '/placeholder-award.jpg',
    },
    {
        id: '9',
        title: 'Women Digital Awards',
        year: '2019',
        description: [
            'Shortlisted for the Women Digital Awards 2019 by She The People Magazine.'
        ],
        imageSrc: '/placeholder-award.jpg',
    },
    {
        id: '10',
        title: 'Start Smart Jury Award - West Zone',
        year: '2018',
        description: [
            'Received in December 2018 in association with NITI Aayog and NUJS.'
        ],
        imageSrc: '/placeholder-award.jpg',
    },
    {
        id: '11',
        title: 'Women Transforming India (WTI)',
        year: '2018',
        description: [
            'Listed in the Top 200 of "Women Transforming India".',
            'Organized by the Women Entrepreneurship Platform (WEP) under NITI Aayog.'
        ],
        imageSrc: '/placeholder-award.jpg',
    },
    {
        id: '12',
        title: 'WED Certificate of Recognition',
        year: '2017',
        description: [
            'Received from Women\'s Entrepreneurship Day (WED) in the "Emerging E-Commerce Entrepreneur Category".',
            'Recognized outstanding performance in the e-commerce industry.'
        ],
        imageSrc: '/placeholder-award.jpg',
    },
    {
        id: '13',
        title: 'DIPP Recognition',
        year: '2017',
        description: [
            'Officially recognized as a startup by the Department of Industrial Policy and Promotion (DIPP) on July 27, 2017.'
        ],
        imageSrc: '/digitalindia.png',
    }
];

const videosData: Video[] = [
    {
        id: '1',
        title: 'Interaction with Minister Vibhavariben Dave',
        channel: 'i-HUB Gujarat',
        url: 'https://www.youtube.com/watch?v=2wCvm_ofVNw',
        videoId: '2wCvm_ofVNw'
    },
    {
        id: '2',
        title: 'The INDUStry Show with Nikita Maheshwari',
        channel: 'The Industry Show',
        url: 'https://www.youtube.com/watch?v=s2WSIFUlgpc',
        videoId: 's2WSIFUlgpc'
    },
    {
        id: '3',
        title: 'Secrets of Tiles Cartel of Morbi | Vaani with Adwani',
        channel: 'Manoj Adwani',
        url: 'https://www.youtube.com/watch?v=HDvR8-oRe4Q',
        videoId: 'HDvR8-oRe4Q'
    },
    {
        id: '4',
        title: 'Logistics Business India me Kaise Start Kare',
        channel: 'The Curious Sharma',
        url: 'https://www.youtube.com/watch?v=J-c75Ci4UMY',
        videoId: 'J-c75Ci4UMY'
    },
    {
        id: '5',
        title: 'AHMEDABAD NEXT: Business Growth Stories at AMA',
        channel: 'Ahmedabad Management Association',
        url: 'https://youtu.be/uxsJTwIGsnI?si=oTYRUTFMYlTWz-bU',
        videoId: 'uxsJTwIGsnI'
    },
    {
        id: '6',
        title: 'Entrepreneur Talk with Nikita Maheshwari',
        channel: 'tirth.mehta.d',
        url: 'https://www.youtube.com/watch?v=RyX0sKcYyPA',
        videoId: 'RyX0sKcYyPA'
    },
    {
        id: '7',
        title: 'Voice It #12: Ft. Nikita Maheshwari',
        channel: 'IEEE PIE Kerala Section',
        url: 'https://www.youtube.com/watch?v=c8nV9FCSdxY',
        videoId: 'c8nV9FCSdxY'
    },
    {
        id: '8',
        title: 'Tatkal Lorry Startup Story, Struggles & Relations',
        channel: 'Vishal Modi',
        url: 'https://youtu.be/8VkWN1idJ5A?si=ckixLlKEz_2A-a7g',
        videoId: '8VkWN1idJ5A'
    }
];

export const metadata = {
    title: "Awards & Media | Tatkalorry",
    description: "Celebrating our journey of innovation and excellence. View our awards, recognitions and media appearances.",
};

export default function AwardsPage() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                            Awards & <span className="text-primary">Recognitions</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Celebrating our journey of innovation, excellence, and commitment to transforming the logistics industry.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Awards Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <Reveal>
                            <h2 className="text-3xl font-bold font-heading text-secondary mb-3">Our Achievements</h2>
                            <div className="h-1 w-20 bg-primary mx-auto"></div>
                        </Reveal>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {awardsData.map((award, index) => (
                            <Reveal key={award.id} delay={index * 0.1} className="h-full">
                                <div
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full relative group"
                                >
                                    {/* Year Badge */}
                                    <div className="absolute top-4 left-4 z-10 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                                        {award.year}
                                    </div>

                                    {/* Image Container */}
                                    <div className="relative h-64 w-full bg-gray-50 flex items-center justify-center p-4 group-hover:bg-gray-100 transition-colors">
                                        {award.imageSrc.includes('placeholder') ? (
                                            <div className="text-center text-gray-300 flex flex-col items-center">
                                                <span className="mb-2 block transform group-hover:scale-110 transition-transform duration-300">
                                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                    </svg>
                                                </span>
                                                <span className="text-sm font-medium">Image Coming Soon</span>
                                            </div>
                                        ) : (
                                            <div className="relative w-full h-full p-4">
                                                <Image
                                                    src={award.imageSrc}
                                                    alt={award.title}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-6 flex-1 flex flex-col border-t border-gray-50">
                                        <h3 className="text-xl font-bold text-secondary mb-3 font-heading leading-tight group-hover:text-primary transition-colors">
                                            {award.title}
                                        </h3>
                                        <ul className="space-y-3 mt-auto">
                                            {award.description.map((desc, i) => (
                                                <li key={i} className="flex items-start text-gray-600 text-sm leading-relaxed">
                                                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>{desc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media & Podcasts Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <Reveal>
                            <h2 className="text-3xl font-bold font-heading text-secondary mb-3">Media & Podcasts</h2>
                            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">Watch our founders discuss the journey, challenges, and success stories of Tatkalorry on various platforms.</p>
                            <div className="h-1 w-20 bg-primary mx-auto"></div>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {videosData.map((video, index) => (
                            <Reveal key={video.id} delay={index * 0.1}>
                                <a
                                    href={video.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full transform hover:-translate-y-1"
                                >
                                    {/* Thumbnail Container */}
                                    <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                                        <Image
                                            src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                                            alt={video.title}
                                            fill
                                            className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                        />
                                        {/* Play Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <Play fill="white" className="text-white w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-primary transition-colors text-sm md:text-base">
                                            {video.title}
                                        </h3>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
                                                {video.channel}
                                            </span>
                                            <ExternalLink size={14} className="text-gray-400 group-hover:text-primary" />
                                        </div>
                                    </div>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Note */}
            <section className="pb-20">
                <div className="text-center px-4">
                    <Reveal>
                        <div className="inline-block p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                            <p className="text-secondary font-medium">
                                Our commitment to excellence continues.
                                <span className="text-primary ml-1">More achievements coming soon.</span>
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
