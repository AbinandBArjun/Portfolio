import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Brain, Cloud, Cpu, Database, Eye, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const BentoAbout = () => {
  const { personal } = portfolioData;
  const focusAreas = [
    {
      title: 'LLM & Generative AI',
      description: 'Fine-tuning language models and building generative AI applications.',
      icon: Brain
    },
    {
      title: 'Retrieval & RAG',
      description: 'Combining vector search and retrieval workflows to ground AI responses.',
      icon: Database
    },
    {
      title: 'Computer Vision',
      description: 'Working with image understanding, object detection, and vision models.',
      icon: Eye
    },
    {
      title: 'Model Training',
      description: 'Adapting models with LoRA, QLoRA, and distributed training tools.',
      icon: Layers
    },
    {
      title: 'Inference & Serving',
      description: 'Building model-serving workflows with vLLM, Triton, and FastAPI.',
      icon: Cpu
    },
    {
      title: 'MLOps & Cloud',
      description: 'Using containers and cloud infrastructure to run AI workloads.',
      icon: Cloud
    }
  ];
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
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                About
              </h2>

              <div className="max-w-2xl space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Hey, I'm {personal.name}, an AI engineer focused on deep learning, large language models,
                  generative AI, and distributed training. I enjoy building AI systems that move beyond
                  experiments and solve practical problems.
                </p>
                <p>
                  My work includes fine-tuning models, developing autonomous agents and retrieval-augmented
                  generation pipelines, and turning research ideas into scalable, low-latency applications.
                  I'm especially interested in connecting AI research with systems people can use in
                  production.
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
              <div className="mb-6">
                <div>
                  <p className="text-xs font-mono tracking-widest text-slate-500">AREAS_OF_FOCUS.SYS</p>
                  <h3 className="text-lg font-bold text-white mt-1">AI engineering capabilities</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusAreas.map(({ title, description, icon: Icon }) => (
                  <article
                    key={title}
                    className="min-w-0 rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5 transition-colors hover:border-sky-400/30"
                  >
                    <Icon className="w-5 h-5 text-sky-400 mb-4" aria-hidden="true" />
                    <h4 className="text-sm font-semibold text-slate-100 mb-1.5">{title}</h4>
                    <p className="text-sm leading-relaxed text-slate-400">{description}</p>
                  </article>
                ))}
              </div>
            </aside>
        </div>
      </div>
    </section>
  );
};
