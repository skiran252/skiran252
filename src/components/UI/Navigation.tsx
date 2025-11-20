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
            className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="font-['Playfair_Display'] font-bold text-xl text-white/90 tracking-tight">
                    Saikiran Gonugunta
                </div>

                <div className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-sm font-medium transition-all duration-300 ${activeSection === item.id
                                ? 'text-white'
                                : 'text-white/50 hover:text-white/80'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden text-white/80">☰</button>
            </div>
        </motion.nav>
    );
}
