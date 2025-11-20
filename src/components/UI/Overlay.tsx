import { motion } from 'framer-motion';
import { resumeData } from '../../data/resume';

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <section className={`h-screen w-screen flex flex-col justify-center items-start p-10 md:p-20 ${className}`}>
        {children}
    </section>
);

export default function Overlay() {
    return (
        <div className="w-full text-white">
            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold font-mono mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            {resumeData.personalInfo.name}
                        </span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-8">
                        {resumeData.personalInfo.role}
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        Initializing Agent... <br />
                        <span className="text-primary text-sm font-mono mt-2 block">
                            {'>'} System Status: ONLINE
                        </span>
                    </p>
                </motion.div>
            </Section>

            <Section className="items-end text-right">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl font-bold mb-8 text-primary">System Architecture</h2>
                    <p className="text-xl max-w-2xl text-gray-300 leading-relaxed">
                        {resumeData.summary}
                    </p>
                    <div className="mt-8 flex flex-wrap justify-end gap-4">
                        {Object.entries(resumeData.skills).map(([category, skills]) => (
                            <div key={category} className="text-right">
                                <h3 className="text-sm font-mono text-secondary uppercase mb-2">{category.replace('_', ' ')}</h3>
                                <div className="flex flex-wrap justify-end gap-2">
                                    {skills.slice(0, 5).map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-surface border border-gray-800 rounded-full text-xs text-gray-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-4xl"
                >
                    <h2 className="text-4xl font-bold mb-12 text-secondary">Processing Data</h2>
                    <div className="space-y-12 border-l-2 border-gray-800 pl-8 ml-4">
                        {resumeData.experience.map((job, index) => (
                            <div key={index} className="relative">
                                <span className="absolute -left-[41px] top-0 w-5 h-5 bg-black border-2 border-primary rounded-full" />
                                <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                                <div className="flex justify-between items-center text-gray-400 mb-4 font-mono text-sm">
                                    <span>{job.company}</span>
                                    <span>{job.period}</span>
                                </div>
                                <p className="text-gray-300 mb-4">{job.description}</p>
                                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                                    {job.achievements.slice(0, 2).map((ach, i) => (
                                        <li key={i}>{ach}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            <Section className="items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-12 text-primary">Output Generated</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                        {resumeData.projects.map((project, index) => (
                            <div key={index} className="bg-surface p-8 rounded-xl border border-gray-800 hover:border-primary transition-colors text-left group">
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-2 py-1 bg-black rounded text-xs text-secondary font-mono">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            <Section className="justify-center items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <h2 className="text-5xl font-bold mb-8">Establish Connection</h2>
                    <div className="flex gap-8 justify-center">
                        <a href={`mailto:${resumeData.personalInfo.email}`} className="text-xl hover:text-primary transition-colors">Email</a>
                        <a href={resumeData.personalInfo.links.linkedin} target="_blank" rel="noreferrer" className="text-xl hover:text-primary transition-colors">LinkedIn</a>
                        <a href={resumeData.personalInfo.links.github} target="_blank" rel="noreferrer" className="text-xl hover:text-primary transition-colors">GitHub</a>
                    </div>
                    <p className="mt-12 text-gray-500 font-mono text-sm">
                        © 2025 {resumeData.personalInfo.name} // All Systems Nominal
                    </p>
                </motion.div>
            </Section>
        </div>
    );
}
