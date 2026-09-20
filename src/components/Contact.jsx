import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { SpotlightCard } from './react-bits/SpotlightCard';

export const Contact = () => {
  const { personal } = portfolioData;

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      })
      .catch(() => {});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const socials = [
    { name: 'GitHub', icon: GithubIcon, href: personal.github, color: 'hover:text-white' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: personal.linkedin, color: 'hover:text-sky-400' },
    { name: 'Twitter', icon: TwitterIcon, href: personal.twitter, color: 'hover:text-sky-300' }
  ].filter((social) => social.href);

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Build Intelligent Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Whether you have an exciting AI project, consultation inquiry, or role opening — let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left Column: Direct Contact & Socials */}
          <SpotlightCard className="p-8 flex flex-col justify-between" spotlightColor="rgba(236, 72, 153, 0.15)">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Direct Reach</h3>
              <p className="text-slate-400 text-sm mb-8">
                Feel free to drop an email directly or copy the address to your clipboard.
              </p>

              {/* Copy Email Button Pill */}
              <div className="mb-8">
                <label className="text-xs font-mono text-slate-400 block mb-2">EMAIL ADDRESS</label>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-white/10 hover:border-sky-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-sky-400" />
                    <span className="text-sm font-mono text-white font-medium">{personal.email}</span>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">SOCIAL PROFILES</h4>
              <div className="flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className={`p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-400 ${social.color} transition-all duration-300 hover:border-white/20 hover:scale-105`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </SpotlightCard>

          {/* Right Column: Contact Message Form */}
          <SpotlightCard className="p-8" spotlightColor="rgba(56, 189, 248, 0.15)">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Email Draft Opened</h4>
                <p className="text-slate-400 text-sm">
                  Review the prepared email in your mail app, then send it when you are ready.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="text-xs font-mono text-slate-400 block mb-1">YOUR NAME</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Connor"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm outline-none focus:border-sky-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-xs font-mono text-slate-400 block mb-1">EMAIL ADDRESS</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm outline-none focus:border-sky-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-xs font-mono text-slate-400 block mb-1">PROJECT DETAILS / MESSAGE</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your AI project, timeline, or scope..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm outline-none focus:border-sky-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-purple-600 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-[0_0_20px_rgba(56,189,248,0.25)] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Open Email Draft</span>
                </button>
              </form>
            )}
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
