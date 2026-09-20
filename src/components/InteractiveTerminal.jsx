import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const InteractiveTerminal = () => {
  const { terminalCommands } = portfolioData;

  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: '🤖 Abinand AI CLI Terminal v3.2.0 [Type "help" for commands or "ask-ai <question>" to query system prompt]'
    }
  ]);

  const bottomRef = useRef(null);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${input}` }];

    if (cmd === 'clear') {
      setHistory([
        {
          type: 'system',
          text: '🤖 Terminal cleared. Type "help" to list available commands.'
        }
      ]);
      setInput('');
      return;
    }

    if (cmd.startsWith('ask-ai')) {
      const question = input.substring(6).trim();
      newHistory.push({
        type: 'ai-stream',
        text: `[REASONING AGENT]: Processing query "${question || 'Who is Abinand?'}" ...\n[RETRIEVAL]: Found 3 context embeddings in Qdrant vector store.\n[LLM RESPONSE]: Abinand is a specialized AI Engineer expert in LLM fine-tuning, RAG pipelines, and PyTorch optimization!`
      });
    } else if (terminalCommands[cmd]) {
      newHistory.push({
        type: 'response',
        text: terminalCommands[cmd]
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${cmd}". Type "help" for options.`
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="playground" className="py-24 relative z-10">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive AI Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            AI CLI <span className="text-gradient-cyan">Playground</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Test commands or type <code className="text-sky-400 font-mono">ask-ai &lt;question&gt;</code> to interact with the simulated knowledge retrieval system.
          </p>
        </div>

        {/* Terminal Window Card */}
        <div className="max-w-3xl mx-auto glass-panel overflow-hidden border border-sky-500/30 shadow-[0_0_40px_rgba(56,189,248,0.15)] rounded-2xl bg-[#090d16]">
          {/* Terminal Window Header Bar */}
          <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>abinand-ai-cli ~ bash</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              {['bio', 'skills', 'models', 'contact'].map((quickCmd) => (
                <button
                  key={quickCmd}
                  onClick={() => setInput(quickCmd)}
                  className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800 hover:bg-slate-700 text-sky-300 border border-white/5 transition-colors"
                >
                  {quickCmd}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Output Log Area */}
          <div className="p-6 font-mono text-xs sm:text-sm h-80 overflow-y-auto space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'system' && (
                  <div className="text-sky-400 font-semibold">{item.text}</div>
                )}
                {item.type === 'user' && (
                  <div className="text-emerald-400 font-semibold">{item.text}</div>
                )}
                {item.type === 'response' && (
                  <div className="text-slate-300 pl-4 border-l-2 border-sky-500/40">{item.text}</div>
                )}
                {item.type === 'ai-stream' && (
                  <div className="text-purple-300 bg-purple-500/10 p-3 rounded-lg border border-purple-500/20 whitespace-pre-line">
                    {item.text}
                  </div>
                )}
                {item.type === 'error' && (
                  <div className="text-red-400 font-semibold">{item.text}</div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Form */}
          <form onSubmit={handleCommandSubmit} className="p-3 bg-slate-900/90 border-t border-white/10 flex items-center gap-2">
            <span className="text-emerald-400 font-mono pl-2 text-sm">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help' or 'ask-ai How do you train RAG?'"
              className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-white placeholder-slate-500"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
