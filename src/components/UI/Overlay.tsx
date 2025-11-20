import { motion } from 'framer-motion';
import { resumeData } from '../../data/resume';

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`min-h-[60vh] md:min-h-screen w-full flex flex-col justify-center p-8 md:p-20 ${className}`}>
    {children}
  </section>
);

const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-xl hover:bg-white/10 transition-colors duration-500 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`px-4 py-1.5 rounded-full text-sm font-medium tracking-wide border ${className}`}>
    {children}
  </span>
);

export default function Overlay() {
  return (
    <div className="w-full text-white/90 font-sans selection:bg-rose-500/30">
      {/* HERO SECTION */}
      <div id="hero" />
      <Section className="items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1.5 w-1.5 bg-rose-400 rounded-full animate-pulse" />
            <span className="font-['Playfair_Display'] italic text-lg text-rose-200/80">Available for new visions</span>
          </div>

          <h1 className="text-6xl md:text-9xl font-['Playfair_Display'] font-medium leading-[0.9] tracking-tight mb-8">
            I don't just write code.<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-rose-200">
              I cultivate ecosystems.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed font-light">
            Hi, I'm <span className="text-white font-medium">{resumeData.personalInfo.name}</span>.
            An engineer bridging the gap between <span className="text-indigo-300">robust systems</span> and <span className="text-rose-300">organic intelligence</span>.
          </p>
        </motion.div>
      </Section>

      {/* ORIGIN STORY */}
      <div id="mission" />
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
              <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-medium mb-8 text-white">The Mission</h2>
              <GlassCard className="text-left relative overflow-hidden group">
                <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-6">
                  Software engineering isn't just about solving problems—it's about <strong>creating possibilities</strong>.
                  From building robust services that power applications to training AI models that "see" the world,
                  I love the thrill of turning abstract logic into tangible impact.
                </p>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                  {resumeData.summary}
                </p>
              </GlassCard>
            </div>

            <div className="w-full md:w-1/3 order-1 md:order-2 flex flex-col gap-6 items-end">
              <div className="text-right">
                <h3 className="text-sm font-['Playfair_Display'] italic text-indigo-200 mb-4">My Toolkit</h3>
                <div className="flex flex-wrap justify-end gap-2">
                  {resumeData.skills.programming.map((skill: string) => (
                    <Badge key={skill} className="bg-white/5 border-white/10 text-indigo-100 hover:bg-white/10 transition-colors cursor-default">
                      {skill}
                    </Badge>
                  ))}
                  {resumeData.skills.cloud.slice(0, 3).map((skill: string) => (
                    <Badge key={skill} className="bg-white/5 border-white/10 text-rose-100 hover:bg-white/10 transition-colors cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* EXPERIENCE */}
      <div id="journey" />
      <Section>
        <div className="w-full max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-['Playfair_Display'] font-medium mb-20 text-white/90"
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
                <div className="absolute -left-[5px] md:-left-[5px] top-0 w-2.5 h-2.5 bg-white/50 rounded-full" />

                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 items-start">
                  <div className="font-sans text-sm text-white/50 sticky top-24">
                    <div className="text-indigo-300 text-xl mb-1 font-['Playfair_Display'] italic">{job.period}</div>
                    <div className="text-white text-lg font-medium">{job.company}</div>
                    <div className="text-white/40 mt-2">{job.role}</div>
                  </div>

                  <GlassCard className="hover:bg-white/10 transition-all duration-300 group">
                    <p className="text-white/80 mb-6 text-lg leading-relaxed border-l-2 border-indigo-500/30 pl-4 italic font-['Playfair_Display']">
                      "{job.description}"
                    </p>
                    <ul className="space-y-3">
                      {job.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                          <span className="mt-2 w-1 h-1 bg-rose-400 rounded-full shrink-0" />
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

      {/* PROJECTS */}
      <div id="innovations" />
      <Section className="items-center">
        <div className="w-full max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-['Playfair_Display'] font-medium mb-20 text-center text-white"
          >
            Selected Works
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
                <GlassCard className="h-full flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-500">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-['Playfair_Display'] font-medium group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                    </div>
                    <p className="text-white/60 mb-8 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <Badge key={t} className="bg-white/5 border-white/5 text-white/50 group-hover:text-white/80 transition-colors">
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

      {/* CONTACT */}
      <div id="connect" />
      <Section className="justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-4xl"
        >
          <div className="relative inline-block">
            <h2 className="relative text-6xl md:text-9xl font-['Playfair_Display'] font-medium mb-12 tracking-tight text-white">
              Let's Create<br />
              <span className="italic text-white/50">Together</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { label: 'Email', value: 'Say Hello', href: `mailto:${resumeData.personalInfo.email}` },
              { label: 'LinkedIn', value: 'Connect', href: resumeData.personalInfo.links.linkedin },
              { label: 'GitHub', value: 'Explore', href: resumeData.personalInfo.links.github }
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:bg-white/10 hover:border-white/20"
              >
                <div className="relative z-10">
                  <div className="text-white/40 text-xs font-sans mb-2 uppercase tracking-widest">{link.label}</div>
                  <div className="text-2xl font-['Playfair_Display'] italic text-white group-hover:text-indigo-200 transition-colors">{link.value} ↗</div>
                </div>
              </a>
            ))}
          </div>

          <footer className="text-white/20 font-sans text-xs uppercase tracking-widest">
            Designed & Engineered by {resumeData.personalInfo.name}
          </footer>
        </motion.div>
      </Section>
    </div>
  );
}
