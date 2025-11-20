import { motion } from 'framer-motion';
import { resumeData } from '../../data/resume';

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`min-h-screen w-full flex flex-col justify-center p-8 md:p-20 ${className}`}>
    {children}
  </section>
);

const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-zinc-950/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl hover:border-cyan-500/30 transition-colors duration-500 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-mono tracking-wider border ${className}`}>
    {children}
  </span>
);

export default function Overlay() {
  return (
    <div className="w-full text-white font-sans selection:bg-cyan-500/30">
      {/* HERO SECTION: The Hook */}
      <Section className="items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="mb-6 flex items-center gap-3">
             <div className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#06b6d4]" />
             <span className="font-mono text-sm text-cyan-400 tracking-widest uppercase">System Online</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-8">
            I don't just write code.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              I build ecosystems.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light">
            Hi, I'm <span className="text-white font-bold">{resumeData.personalInfo.name}</span>. 
            I'm an engineer obsessed with the intersection of <span className="text-cyan-400">Distributed Systems</span> and <span className="text-purple-400">Artificial Intelligence</span>.
          </p>
        </motion.div>
      </Section>

      {/* ORIGIN STORY: The "Why" */}
      <Section className="items-end">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start">
             <div className="flex-1 order-2 md:order-1 text-right">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white/90">The Mission</h2>
                <GlassCard className="text-left relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600" />
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-6">
                      Software engineering isn't just about solving problems—it's about <strong>creating possibilities</strong>. 
                      From architecting microservices that handle millions of requests to training AI models that "see" the world, 
                      I love the thrill of turning abstract logic into tangible impact.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                      {resumeData.summary}
                    </p>
                </GlassCard>
             </div>
             
             <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col gap-6 items-end">
                <div className="text-right">
                    <h3 className="text-xs font-mono text-cyan-400 uppercase mb-3 tracking-[0.2em]">My Toolkit</h3>
                    <div className="flex flex-wrap justify-end gap-2">
                        {resumeData.skills.languages.map(skill => (
                            <Badge key={skill} className="bg-cyan-950/30 border-cyan-500/20 text-cyan-100 hover:bg-cyan-500/20 transition-colors cursor-default">
                                {skill}
                            </Badge>
                        ))}
                        {resumeData.skills.cloud_and_devops.slice(0,3).map(skill => (
                            <Badge key={skill} className="bg-purple-950/30 border-purple-500/20 text-purple-100 hover:bg-purple-500/20 transition-colors cursor-default">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
             </div>
          </div>
        </motion.div>
      </Section>

      {/* EXPERIENCE: The Journey */}
      <Section>
        <div className="w-full max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-800"
          >
            The Journey
          </motion.h2>
          
          <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-24">
            {resumeData.experience.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] md:-left-[5px] top-0 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_15px_#06b6d4]" />
                
                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 items-start">
                    <div className="font-mono text-sm text-gray-400 sticky top-24">
                        <div className="text-cyan-400 text-xl mb-1">{job.period}</div>
                        <div className="text-white text-lg font-bold">{job.company}</div>
                        <div className="text-gray-500 mt-2">{job.role}</div>
                    </div>
                    
                    <GlassCard className="hover:bg-white/5 transition-all duration-300 group">
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed border-l-2 border-cyan-500/20 pl-4 italic">
                            "{job.description}"
                        </p>
                        <ul className="space-y-3">
                            {job.achievements.map((ach, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0 group-hover:bg-cyan-400 transition-colors" />
                                    <span className="leading-relaxed">{ach}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* PROJECTS: The Innovations */}
      <Section className="items-center">
        <div className="w-full max-w-7xl">
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-8xl font-bold mb-20 text-center text-white"
            >
                Innovations
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resumeData.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <GlassCard className="h-full flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-br from-white/5 to-transparent">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-3xl font-bold group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                    <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">BUILD</span>
                                </div>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <Badge key={t} className="bg-black/40 border-gray-800 text-gray-400 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </div>
      </Section>

      {/* CONTACT: The Future */}
      <Section className="justify-center items-center">
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center w-full max-w-4xl"
         >
            <div className="relative inline-block">
                <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 blur-3xl animate-pulse" />
                <h2 className="relative text-6xl md:text-9xl font-black mb-12 tracking-tighter">
                    LET'S BUILD<br/>THE FUTURE
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                {[
                    { label: 'Email', value: 'Send Message', href: `mailto:${resumeData.personalInfo.email}`, color: 'hover:bg-cyan-500' },
                    { label: 'LinkedIn', value: 'Connect', href: resumeData.personalInfo.links.linkedin, color: 'hover:bg-blue-600' },
                    { label: 'GitHub', value: 'Follow', href: resumeData.personalInfo.links.github, color: 'hover:bg-purple-600' }
                ].map((link, i) => (
                    <a 
                        key={i} 
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`group relative overflow-hidden bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-300 ${link.color} hover:border-transparent`}
                    >
                        <div className="relative z-10">
                            <div className="text-gray-500 text-sm font-mono mb-2 uppercase tracking-widest">{link.label}</div>
                            <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform origin-left">{link.value} ↗</div>
                        </div>
                    </a>
                ))}
            </div>
            
            <footer className="text-gray-600 font-mono text-xs uppercase tracking-[0.2em]">
                System ID: {resumeData.personalInfo.name.replace(' ', '_').toUpperCase()} // v2.0.25
            </footer>
         </motion.div>
      </Section>
    </div>
  );
}
