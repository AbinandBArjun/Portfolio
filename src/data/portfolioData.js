export const portfolioData = {
  personal: {
    name: "Abinand",
    title: "AI Engineer & Machine Learning Architect",
    tagline: "Building autonomous AI agents, fine-tuning state-of-the-art LLMs, and crafting production-grade RAG pipelines.",
    location: "Bengaluru, India (UTC +5:30)",
    status: "Available for AI Engineering & Consulting",
    bio: "Passionate AI Engineer specializing in Deep Learning, Large Language Models (LLMs), Generative AI, and Distributed Training. I bridge the gap between cutting-edge AI research and scalable, low-latency production applications.",
    email: "abinand.ai@example.com", // updateable by user
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    huggingface: "https://huggingface.co",
    resumeUrl: "#resume"
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
      id: "multimodal-rag",
      title: "Nexus RAG: Multimodal Enterprise Knowledge Graph",
      category: "LLMs & RAG",
      shortDesc: "End-to-end RAG system combining dense vector search, BM25 sparse re-ranking, and vision-language models for instant enterprise document querying.",
      image: "/projects/rag-assistant.jpg",
      tags: ["PyTorch", "LlamaIndex", "Qdrant", "vLLM", "FastAPI"],
      highlights: [
        "Sub-150ms query response time with hybrid sparse-dense vector retrieval.",
        "Integrated Vision-LLM parser for querying charts, tables, and PDF diagrams.",
        "Custom LoRA fine-tuned Llama-3 8B model specialized for financial & legal parsing.",
        "Evaluated with Ragas benchmark achieving 94.2% context precision."
      ],
      demoUrl: "https://example.com/demo/rag",
      githubUrl: "https://github.com/abinand/nexus-multimodal-rag"
    },
    {
      id: "ai-agent-orchestrator",
      title: "NeuroFlow: Autonomous AI Agent Workflow Engine",
      category: "AI Agents",
      shortDesc: "Distributed agentic framework executing complex multi-step reasoning, tool usage, and auto-correcting code synthesis.",
      image: "/projects/ai-agent.jpg",
      tags: ["LangGraph", "Python", "GPT-4o / Claude 3.5", "Redis", "Docker"],
      highlights: [
        "Node-based workflow builder supporting dynamic human-in-the-loop validation.",
        "Self-healing agent loop that catches code compilation errors and self-corrects.",
        "Asynchronous parallel tool invocation reducing multi-agent step latency by 45%.",
        "Built-in token streaming telemetry and token budget guardrails."
      ],
      demoUrl: "https://example.com/demo/neuroflow",
      githubUrl: "https://github.com/abinand/neuroflow-agent-engine"
    },
    {
      id: "realtime-cv-pipeline",
      title: "Aether CV: Edge Real-Time Object Detection & Analytics",
      category: "Computer Vision",
      shortDesc: "High-throughput video stream analysis pipeline running TensorRT optimized YOLOv8 and multi-object tracking.",
      image: "/projects/computer-vision.jpg",
      tags: ["OpenCV", "TensorRT", "YOLOv8", "CUDA", "C++", "Python"],
      highlights: [
        "Real-time processing at 60 FPS across 8 concurrent 4K camera feeds.",
        "DeepSORT object tracking with persistent re-identification across camera frames.",
        "TensorRT quantization reducing FP32 models to INT8 with under 1% mAP drop.",
        "Exported live metrics feed via WebSockets for real-time monitoring dashboard."
      ],
      demoUrl: "https://example.com/demo/aether-cv",
      githubUrl: "https://github.com/abinand/aether-cv-analytics"
    },
    {
      id: "neural-fine-tuning-hub",
      title: "NeuralForge: Parameter-Efficient Fine-Tuning Monitor",
      category: "MLOps & Fine-Tuning",
      shortDesc: "Comprehensive web platform for monitoring LoRA/QLoRA training runs, loss curves, VRAM utilization, and model quantizations.",
      image: "/projects/fine-tuning.jpg",
      tags: ["PyTorch", "Unsloth", "Weights & Biases", "React", "Ray Train"],
      highlights: [
        "Interactive hyperparameter tweaking dashboard integrated with W&B logging.",
        "Supports 2x faster LLM fine-tuning speed using Unsloth & Triton kernels.",
        "Automatic GGUF & AWQ quantization export pipeline for local edge inference.",
        "VRAM optimization suite preventing CUDA Out-Of-Memory exceptions."
      ],
      demoUrl: "https://example.com/demo/neuralforge",
      githubUrl: "https://github.com/abinand/neuralforge-mlops"
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
    bio: "Abinand - AI Engineer specializing in LLMs, RAG, Computer Vision, & Deep Learning.",
    skills: "PyTorch | HuggingFace | LangChain | Qdrant | CUDA | vLLM | FastAPI | Docker",
    models: "Fine-tuned models: Llama-3-8B-RAG, Mistral-7B-LoRA, YOLOv8-Custom-CV, Whisper-Hindi",
    projects: "Type 'projects' or scroll to Projects section to explore interactive demos!",
    contact: "Email: abinand.ai@example.com | GitHub: github.com/abinand | LinkedIn: linkedin.com/in/abinand"
  }
};
