import { motion } from 'framer-motion';
import { resumeData } from '../../data/resume';

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`min-h-screen w-full flex flex-col justify-center items-start p-10 md:p-20 ${className}`}>
    {children}
  </section>
);

const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-black/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl ${className}`}>
    {children}
  </div>
);

export default function Overlay() {
  return (
    <div className="w-full text-white">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-9xl font-bold font-mono mb-4 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              {resumeData.personalInfo.name}
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-gray-200 mb-8 tracking-wide">
            {resumeData.personalInfo.role}
          </h2>
          <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg inline-block border border-cyan-500/30">
            <p className="text-xl text-cyan-400 font-mono">
              {'>'} Initializing Agent... <span className="animate-pulse">_</span><br />
              <span className="text-green-400 text-sm mt-2 block">
                {'>'} System Status: ONLINE
              </span>
            </p>
          </div>
        </motion.div>
      </Section>

      <Section className="items-end text-right">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl"
        >
          <GlassCard>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-cyan-400">System Architecture</h2>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
              {resumeData.summary}
            </p>
            <div className="mt-8 flex flex-wrap justify-end gap-4">
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category} className="text-right">
                  <h3 className="text-sm font-mono text-purple-400 uppercase mb-2 tracking-widest">{category.replace('_', ' ')}</h3>
                  <div className="flex flex-wrap justify-end gap-2">
                    {skills.slice(0, 5).map(skill => (
                      <span key={skill} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white hover:bg-cyan-500/20 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full max-w-5xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-purple-500 pl-8">Processing Data</h2>
          <div className="space-y-8 border-l-2 border-purple-500/30 pl-8 ml-4">
            {resumeData.experience.map((job, index) => (
              <GlassCard key={index} className="relative hover:border-purple-500/50 transition-colors group">
                <span className="absolute -left-[49px] top-8 w-5 h-5 bg-black border-2 border-purple-500 rounded-full group-hover:bg-purple-500 transition-colors" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{job.role}</h3>
                <div className="flex flex-col md:flex-row justify-between text-gray-400 mb-4 font-mono text-sm">
                  <span className="text-purple-300">{job.company}</span>
                  <span>{job.period}</span>
                </div>
                <p className="text-gray-200 mb-4 text-lg">{job.description}</p>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                  {job.achievements.slice(0, 2).map((ach, i) => (
                    <li key={i} className="leading-relaxed">{ach}</li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section className="items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-cyan-400">Output Generated</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
            {resumeData.projects.map((project, index) => (
              <GlassCard key={index} className="text-left hover:border-cyan-400/50 transition-colors group">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded text-xs text-cyan-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section className="justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center"
        >
          <GlassCard className="px-12 py-12">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Establish Connection</h2>
            <div className="flex flex-wrap gap-8 justify-center">
              <a href={`mailto:${resumeData.personalInfo.email}`} className="text-xl md:text-2xl hover:text-cyan-400 transition-colors font-light">Email</a>
              <a href={resumeData.personalInfo.links.linkedin} target="_blank" rel="noreferrer" className="text-xl md:text-2xl hover:text-cyan-400 transition-colors font-light">LinkedIn</a>
              <a href={resumeData.personalInfo.links.github} target="_blank" rel="noreferrer" className="text-xl md:text-2xl hover:text-cyan-400 transition-colors font-light">GitHub</a>
            </div>
            <p className="mt-12 text-gray-600 font-mono text-sm">
              © 2025 {resumeData.personalInfo.name} // All Systems Nominal
            </p>
          </GlassCard>
        </motion.div>
      </Section>
    </div>
  );
}
