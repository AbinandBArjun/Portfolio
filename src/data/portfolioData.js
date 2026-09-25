export const portfolioData = {
  personal: {
    name: "Abinand B Arjun",
    title: "AI Engineer & Machine Learning Architect",
    tagline: "Building autonomous AI agents, fine-tuning state-of-the-art LLMs, and crafting production-grade RAG pipelines.",
    location: "Pathanamthitta, Kerala, India (UTC +5:30)",
    status: "Available for AI Engineering & Consulting",
    bio: "Passionate AI Engineer specializing in Deep Learning, Large Language Models (LLMs), Generative AI, and Distributed Training. I bridge the gap between cutting-edge AI research and scalable, low-latency production applications.",
    email: "abinandbarjun7@gmail.com", // updateable by user
    github: "https://github.com/AbinandBArjun",
    linkedin: "https://www.linkedin.com/in/abinand-b-arjun",
    twitter: "https://x.com/Abinandbarjun",
    huggingface: "",
    resumeUrl: ""
  },

  stats: [
    { label: "AI Models Deployed", value: "35+", icon: "Brain" },
    { label: "Token Processing / Sec", value: "12.4k", icon: "Zap" },
    { label: "Vector Search Accuracy", value: "99.4%", icon: "Target" },
    { label: "Code Commits", value: "2,400+", icon: "GitCommit" }
  ],

  techStack: [
    {
      category: "LLM & Generative AI",
      skills: ["PyTorch", "HuggingFace Transformers", "LangChain", "LlamaIndex", "vLLM", "LoRA / QLoRA", "DeepSpeed", "Ollama"]
    },
    {
      category: "Vector DBs & Retrieval",
      skills: ["Pinecone", "Qdrant", "ChromaDB", "Milvus", "FAISS", "Hybrid RAG", "BM25 Re-ranking"]
    },
    {
      category: "Computer Vision & Audio",
      skills: ["OpenCV", "YOLOv8", "Segment Anything (SAM)", "Stable Diffusion", "Whisper", "TorchVision"]
    },
    {
      category: "MLOps & Cloud Infrastructure",
      skills: ["Docker & K8s", "AWS SageMaker", "Triton Server", "Weights & Biases", "Ray Serve", "CUDA", "FastAPI"]
    }
  ],

  projects: [
    {
      id: "vita-ai-depression-detection",
      title: "VITA AI",
      category: "Machine Learning",
      shortDesc: "A real-time AI framework for depression detection, prediction, and prevention using multimodal data streams. Analyzes mobile behavioral patterns, facial emotion recognition (FER), text sentiment, and physiological HRV indicators. Features Explainable AI (XAI) and autonomous intervention recommendations.",
      tags: ["FastAPI", "Flutter", "PyTorch", "Multimodal AI", "XAI"],
      highlights: [
        "Multimodal telemetry fusion combining mobile behavior analytics, night usage patterns, and digital unlock routines.",
        "Real-time Facial Emotion Recognition (FER) and text sentiment analysis analyzing micro-expressions and emotional tone.",
        "Heart Rate Variability (HRV) physiological signal analysis to derive a unified, clinical-grade depression-risk score.",
        "Explainable AI (XAI) engine providing transparent risk factor interpretability and agentic wellness recommendations."
      ],
      demoUrl: "",
      githubUrl: "https://github.com/AbinandBArjun/VITA-AI-Intelligent-Depression-Detection-Prediction-and-Prevention-System"
    },
    {
      id: "my-ai-knowledge-rag",
      title: "MyAI Assistant",
      category: "Machine Learning",
      shortDesc: "Full-stack personal AI knowledge assistant integrating document ingestion, vector embeddings, and RAG-driven contextual synthesis. Queries notes, articles, and live news feeds with sub-second semantic retrieval and interactive chat streaming.",
      tags: ["FastAPI", "React", "TypeScript", "LangChain", "RAG"],
      highlights: [
        "End-to-end vector embeddings pipeline for semantic document chunking, indexing, and high-precision similarity retrieval.",
        "Context-aware conversational RAG interface delivering sub-second response times across personal notes, web articles, and live feeds.",
        "Asynchronous FastAPI backend with typed Pydantic models, CORS streaming middleware, and automated test coverage.",
        "Modern React + TypeScript frontend with Vite HMR, custom prompt controls, and interactive chat streaming."
      ],
      demoUrl: "",
      githubUrl: "https://github.com/AbinandBArjun/MyAI"
    },
    {
      id: "cyber-shield-security",
      title: "CyberShield",
      category: "Cybersecurity",
      shortDesc: "An advanced cybersecurity and access control platform engineered with dynamic IP whitelisting, automated brute-force threat defense, and passwordless FIDO2/WebAuthn passkey authentication. Includes MongoDB threat logging and live telemetry charts.",
      tags: ["Node.js", "Express", "MongoDB", "WebAuthn", "Security"],
      highlights: [
        "Dynamic IP Whitelisting & automated threat detection blocking malicious actors after failed authentication thresholds.",
        "Passwordless passkey authentication integrating modern FIDO2 / WebAuthn security standards.",
        "Live security threat telemetry dashboard with Chart.js analytics for real-time anomaly monitoring.",
        "Granular role-based access control (RBAC) with MongoDB-backed audit logging and security event feeds."
      ],
      demoUrl: "",
      githubUrl: "https://github.com/AbinandBArjun/Cyber-Shield"
    },
    {
      id: "expense-tracker-system",
      title: "Expense Tracker",
      category: "Web Development",
      shortDesc: "A lightweight full-stack personal finance application with dynamic transaction management, categorical filtering, real-time expenditure calculations, and monthly analytical breakdowns. Built with optimized DOM manipulation and zero dependency overhead.",
      tags: ["Node.js", "Express", "SQLite", "JavaScript", "REST API"],
      highlights: [
        "Lightweight, zero-config relational SQLite backend with high-speed query execution for transaction logs.",
        "Intuitive transaction lifecycle management supporting real-time addition, editing, categorization, and deletion.",
        "Dynamic summary analytics providing monthly spending trends, category distributions, and budget tracking.",
        "Clean, responsive vanilla JavaScript and CSS frontend with optimized DOM manipulation and zero dependency overhead."
      ],
      demoUrl: "",
      githubUrl: "https://github.com/AbinandBArjun/Expense_Tracker"
    },
    {
      id: "portfolio-developer-suite",
      title: "Developer Portfolio",
      category: "Web Development",
      shortDesc: "A high-performance AI engineer developer portfolio with interactive terminal emulator, GitHub telemetry tracking, Spotlight shaders, Framer Motion animations, and modern glassmorphic interface.",
      tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "GitHub API"],
      highlights: [
        "Interactive Spotlight card mechanics, smooth Framer Motion transitions, and glassmorphic UI aesthetics.",
        "Custom interactive developer terminal emulator with command parser and system telemetry.",
        "Live GitHub activity tracker fetching repository stats, commit frequencies, and language distributions in real time.",
        "Fully responsive layout optimized for lighthouse performance and modern mobile viewports."
      ],
      demoUrl: "",
      githubUrl: "https://github.com/AbinandBArjun/Portfolio"
    }
  ],

  experiences: [
    {
      role: "Lead AI Engineer",
      company: "Synthetix AI Labs",
      period: "2024 - Present",
      location: "Bengaluru, India",
      description: "Leading the development of core generative AI engines, multimodal RAG architectures, and custom LLM fine-tuning workflows for enterprise clients.",
      bulletPoints: [
        "Architected an enterprise RAG pipeline serving 500k daily queries with 99.9% uptime.",
        "Reduced LLM inference latency by 3.5x using vLLM speculative decoding & FP8 quantization.",
        "Mentored a team of 6 ML engineers on PyTorch optimization, CUDA profiling, and evaluation frameworks."
      ]
    },
    {
      role: "Senior ML Engineer",
      company: "Neural Edge Tech",
      period: "2022 - 2024",
      location: "Remote",
      description: "Designed computer vision algorithms and automated MLOps infrastructure for edge device deployments.",
      bulletPoints: [
        "Developed custom YOLOv8 object detection pipelines deployed on NVIDIA Jetson devices.",
        "Built automated CI/CD model validation pipeline testing model accuracy against test suites before release."
      ]
    },
    {
      role: "AI Research Assistant",
      company: "Cognitive AI Research Group",
      period: "2021 - 2022",
      location: "Bengaluru, India",
      description: "Researched Transformer model compression techniques and knowledge distillation algorithms.",
      bulletPoints: [
        "Co-authored research paper on pruning BERT models for mobile device deployment.",
        "Implemented custom PyTorch attention layers achieving 20% speedup."
      ]
    }
  ],

  terminalCommands: {
    help: "Available commands: bio, skills, models, projects, contact, clear",
    bio: "Abinand B Arjun - AI Engineer specializing in LLMs, RAG, Computer Vision, & Deep Learning.",
    skills: "PyTorch | HuggingFace | LangChain | Qdrant | CUDA | vLLM | FastAPI | Docker",
    models: "Fine-tuned models: Llama-3-8B-RAG, Mistral-7B-LoRA, YOLOv8-Custom-CV, Whisper-Hindi",
    projects: "Type 'projects' or scroll to Projects section to explore interactive demos!",
    contact: "Email: abinandbarjun7@gmail.com | GitHub: github.com/AbinandBArjun | LinkedIn: linkedin.com/in/abinand-b-arjun"
  }
};
