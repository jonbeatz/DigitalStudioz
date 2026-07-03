'use client'

import { createStudioExperience, type ExperienceConfig } from '@/lib/experience-engine'

const CHAPTERS = [
  {
    id: 'story',
    marker: '01',
    title: 'The <i>Origin</i> Story',
    subtitle: 'Where It All Began',
    summary: 'From a single terminal window to a full-service digital studio — DigitalStudioz was born from the belief that great code and bold design can build anything.',
    detail: "DigitalStudioz started the way all good things do: with a problem to solve. JonBeatz had built websites, apps, and AI tools for years — each one taught him something new. But the real breakthrough came when he realized that the same patterns kept emerging: 3D experiences needed the same scroll engine, AI integrations needed the same MCP wiring, automation pipelines shared the same logic.\n\nSo instead of rebuilding every time, he built a system. The shared-profile-content skeleton became the foundation. The Experience Engine became the canvas. And DigitalStudioz became the studio where all of it comes together.\n\nToday, DigitalStudioz is a full-service digital studio specializing in 3D web experiences, AI integration, full-stack development, and automation. Every project benefits from the accumulated wisdom of everything that came before it.",
  },
  {
    id: 'services',
    marker: '02',
    title: '<i>Services</i> & Expertise',
    subtitle: 'What We Build',
    summary: '3D web experiences, AI-powered applications, full-stack platforms, automation pipelines, and premium UI/UX design — delivered with precision.',
    detail: "DigitalStudioz offers a comprehensive range of digital services:\n\n3D Web Experiences — React Three Fiber, GSAP scroll animations, WebGL visualizations, immersive product showcases, and interactive brand experiences that push the boundaries of what browsers can do.\n\nAI Integration — Custom LLM workflows, Mem0 vector memory systems, RAG pipelines, AI agents with MCP tool access, and intelligent automation that learns from your data.\n\nFull-Stack Development — Next.js platforms, Node.js APIs, database architecture, authentication systems, and scalable cloud deployments. From concept to production, every layer is built to last.\n\nAutomation & DevOps — PowerShell scripting pipelines, CI/CD workflows, backup systems, deployment automation, and infrastructure-as-code that eliminates manual busywork.\n\nUI/UX Design — Premium dark-mode interfaces, glassmorphism design systems, bento grid layouts, custom cursor experiences, and design token architectures that scale.",
  },
  {
    id: 'work',
    marker: '03',
    title: '<i>Featured</i> Work',
    subtitle: 'Projects That Speak',
    summary: 'VaderLabz, MyStudioChannel, Profile Jedi — each project is a proof point of what the DigitalStudioz system can deliver.',
    detail: "VaderLabz — A 3D scroll-driven experience built with React Three Fiber, GSAP, and Lenis. Features a config-driven Experience Engine, customizable lightsaber 3D models, HDR environment switching, bloom effects, and cinematic text reveals via SplitType. The entire site is powered by a single config wrapper.\n\nMyStudioChannel — A Hostinger-hosted platform with automated deployment pipelines, MCP-based tool integrations, and a streamlined content workflow.\n\nProfile Jedi — A profile ecosystem template that bootstraps new projects with shared rules, skills, prompts, and documentation.",
  },
  {
    id: 'process',
    marker: '04',
    title: 'The <i>Process</i>',
    subtitle: 'How We Build',
    summary: 'Concept → Design → Build → Deploy → Iterate. A repeatable system that eliminates guesswork and delivers consistent quality.',
    detail: "The DigitalStudioz process is built on a repeatable methodology that ensures every project is consistent, premium, and scalable.\n\n1. Concept — Define the product, emotion, ritual, environment, and transformation. No code until the story is clear.\n\n2. Design — Choose a visual taste, establish design tokens, and lock the hero section first. Everything inherits from the hero.\n\n3. Build — Scaffold from the shared skeleton. The Experience Engine handles 3D scenes, scroll animations, and glassmorphism UI.\n\n4. Deploy — Automated pipelines handle builds, testing, and deployment.\n\n5. Iterate — Protected hero section means lower sections can be refined without breaking approved work.",
  },
  {
    id: 'contact',
    marker: '05',
    title: 'Let\'s <i>Build</i> Together',
    subtitle: 'Start Your Project',
    summary: 'Have a project in mind? Reach out and let\'s create something bold. DigitalStudioz is ready when you are.',
    detail: "Every project starts with a conversation. Whether you need a 3D brand experience, an AI-powered platform, a full-stack application, or an automation pipeline — DigitalStudioz has the system, the skills, and the experience to deliver.\n\nContact us at jonbeatz@digitalstudioz.dev\n\nFollow the work on GitHub: github.com/jonbeatz\n\nLet's build something extraordinary.",
  },
]

const STATS = [
  { num: '20+', label: 'Projects Delivered' },
  { num: '8', label: 'Technologies Mastered' },
  { num: '3', label: '3D Experiences Built' },
  { num: '100%', label: 'Client Satisfaction' },
]

const config: ExperienceConfig = {
  id: 'main',
  modelPath: '/models/studio_abstract.glb',
  defaultScale: 0.5,
  scaleScrollFactor: 0.1,
  defaultY: 0.2,
  yScrollFactor: -0.3,
  chapters: CHAPTERS,
  stats: STATS,
  defaultHdrIndex: 0,
  defaultBloomIndex: 1,
  defaultRotationIndex: 0,
  defaultCameraIndex: 0,
  defaultMouseEnabled: true,
}

export default createStudioExperience(config)
