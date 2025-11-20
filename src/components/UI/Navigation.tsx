import { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'mission', label: 'About' },
    { id: 'journey', label: 'Experience' },
    { id: 'innovations', label: 'Projects' },
    { id: 'connect', label: 'Contact' },
];

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('hero');

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="font-bold text-lg">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                        Saikiran Gonugunta
                    </span>
                </div>

                <div className="hidden md:flex gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`font-mono text-sm transition-colors ${activeSection === item.id
                                ? 'text-cyan-400'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden text-cyan-400">☰</button>
            </div>
        </motion.nav>
    );
}
