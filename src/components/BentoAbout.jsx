import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const BentoAbout = () => {
  const { personal, techStack } = portfolioData;
  const details = [
    { label: 'name', value: personal.name },
    { label: 'city', value: personal.location.split(' (')[0] },
    { label: 'email', value: personal.email, href: `mailto:${personal.email}` },
    {
      label: 'consulting',
      value: personal.status.toLowerCase().startsWith('available') ? 'Available' : personal.status
    }
  ];

  return (
    <section id="about" className="about-intro-section py-16 sm:py-24 relative z-10">
      <div className="container">
        <div className="about-intro-layout">
            <div className="about-intro-about glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col items-start">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                About
              </h2>

              <div className="max-w-2xl space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  I'm {personal.name}, an AI engineer with a builder's mindset. I like understanding a
                  problem end to end—from the data and models behind it to the software and infrastructure
                  that make it useful in the real world.
                </p>
                <p>
                  My work spans deep learning, large language models, generative AI, and distributed
                  training. I build with tools and techniques such as LLM fine-tuning, retrieval-augmented
                  generation, and computer vision, turning promising ideas into scalable, low-latency
                  applications.
                </p>
                <p>
                  I care about more than getting a model to work: I want the complete system to be reliable,
                  practical, and ready for people to use. I'm always exploring better ways to bridge AI
                  research and production, and I'm available for AI engineering and consulting projects.
                </p>
              </div>

              <dl className="mt-7 w-full border-t border-white/10">
                {details.map(({ label, value, href }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 border-b border-white/10 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <dt className="font-mono text-sm font-semibold text-slate-300">{label}</dt>
                    <dd className="text-sm sm:text-right text-slate-200">
                      {href ? (
                        <a className="hover:text-sky-400 transition-colors" href={href}>
                          {value}
                        </a>
                      ) : value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-500/10 border border-sky-500/30 px-5 py-3 text-sm font-semibold text-sky-400 transition-colors hover:bg-sky-500/20"
                >
                  Explore my work
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-sky-500/30 hover:text-sky-400"
                >
                  Get in touch
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <aside className="about-intro-focus glass-panel rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs font-mono tracking-widest text-slate-500">CURRENT_FOCUS.SYS</p>
                  <h3 className="text-xl font-bold text-white mt-1">What I work on</h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  AI ENGINEERING
                </span>
              </div>

              <div className="space-y-3">
                {techStack.map((group, index) => (
                  <div key={group.category} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-mono text-sky-400 pt-0.5">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-slate-200">{group.category}</h4>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {group.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md bg-slate-800/80 px-2 py-1 text-[11px] font-mono text-slate-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
        </div>
      </div>
    </section>
  );
};
