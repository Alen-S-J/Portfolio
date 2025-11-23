'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    date: 'Jun 2025 – Present',
    title: 'AI Engineer (Part-time)',
    company: 'Raftel Technologies Pvt. Ltd.',
    location: 'Kochi (Remote)',
    details: [
      'Architected and deployed production-grade Retrieval-Augmented Generation (RAG) pipelines integrating OpenAI GPT-4, Claude, and open-source LLMs (Llama 2, Mistral) for enterprise applications',
      'Designed and implemented Agentic RAG systems utilizing agentic models and Modular Code Planning (MCP) protocols for autonomous task execution, dynamic tool orchestration, and multi-step reasoning workflows',
      'Engineered advanced multimodal RAG systems that seamlessly combine text, images, and tabular data sources, enabling sophisticated cross-modal question answering and information retrieval',
      'Built scalable conversational AI agents using LangChain, LlamaIndex, and FastAPI with advanced features including context compression, memory continuity, and chat-aware conversation management',
      'Optimized retrieval systems through domain-specific tuning, implementing advanced embedding strategies, hybrid search (dense + sparse), and reranking techniques to improve accuracy and relevance',
      'Developed sophisticated prompt-engineering frameworks with chain-of-thought reasoning, few-shot learning, and structured output generation for consistent and reliable AI responses',
      'Integrated vector databases (ChromaDB, FAISS, Pinecone) and implemented semantic search capabilities with metadata filtering for efficient knowledge retrieval at scale',
      'Created comprehensive evaluation frameworks using custom metrics, human feedback loops, and A/B testing to continuously improve model performance and user satisfaction',
      'Deployed containerized AI services using Docker and orchestrated microservices architecture for high availability and scalability',
      'Collaborated closely with leadership team on technical strategy, AI product roadmap development, and client engagement in fast-paced startup environment',
      'Documented technical specifications, API documentation, and best practices for team knowledge sharing and onboarding',
    ],
  },
  {
    date: 'Aug 2024 – Dec 2024',
    title: 'Project Associate',
    company: 'National Institute of Technology Calicut',
    location: 'Kozhikode (Onsite)',
    details: [
      'Contributed to COEAI (SAMUDRA), a prestigious Ministry of Education (GOI) research initiative focused on AI applications for smart cities and infrastructure resilience',
      'Spearheaded development of AI-powered inspection systems for civil infrastructure using state-of-the-art computer vision techniques including YOLO object detection models for structural defect identification',
      'Implemented photogrammetry pipelines for 3D reconstruction of infrastructure assets, enabling accurate digital twin creation and structural analysis',
      'Engineered end-to-end OCR pipelines using Tesseract and custom preprocessing techniques to digitize engineering documents, blueprints, and technical drawings, significantly improving data retrieval efficiency',
      'Developed a generative AI prototype leveraging fine-tuned language models to assist civil engineers in automatically generating comprehensive structural assessment reports from inspection data',
      'Fine-tuned transformer-based LLMs (BERT, GPT variants) on domain-specific civil engineering datasets, achieving improved accuracy for technical Q&A and document understanding tasks',
      'Created custom validation sets and evaluation metrics specifically tailored for civil engineering use cases, ensuring model reliability in critical infrastructure applications',
      'Collaborated with cross-functional team of researchers, civil engineers, and data scientists to integrate AI solutions into existing infrastructure management workflows',
      'Conducted extensive literature review and research on AI applications in civil engineering, contributing to academic publications and technical documentation',
      'Worked under the guidance of Dr. Prateek Negi; the project was recognized as a Nationally Important Initiative and became part of the AI Centre of Excellence (Sustainable Cities) at IIT Kanpur',
      'Presented research findings and technical solutions at internal review meetings and contributed to project deliverables for government stakeholders',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 bg-black relative overflow-hidden border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-network opacity-5" />
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {Array.from({ length: 8 }).map((_, i) => {
          const x = 20 + (i * 10)
          return (
            <line
              key={i}
              x1={`${x}%`}
              y1="0%"
              x2={`${x}%`}
              y2="100%"
              stroke="white"
              strokeWidth="0.5"
              strokeDasharray="5,5"
            />
          )
        })}
      </svg>

      <div className="max-w-5xl mx-auto px-10 relative z-10">
        <motion.h2
          className="text-6xl md:text-7xl font-black text-white mb-20 tracking-tighter uppercase text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-12 border-l-2 border-white/30 hover:border-white/60 transition-colors"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2.5 w-5 h-5 bg-black border-2 border-white rounded-full group-hover:bg-white transition-colors" />
              
              {/* Content Card */}
              <div className="border border-white/20 bg-white/5 backdrop-blur-sm p-8 hover:border-white/40 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider font-mono mb-2">
                      {exp.date}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-tight">
                      {exp.title}
                    </h3>
                    <h4 className="text-base md:text-lg text-white/80 font-semibold mb-1">
                      {exp.company}
                    </h4>
                    <p className="text-sm text-white/60 font-mono">
                      {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mt-6">
                  {exp.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="text-sm text-white/70 leading-relaxed pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-white/40"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
