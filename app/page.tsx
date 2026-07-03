'use client'

import { createStudioExperience, type ExperienceConfig } from '@/lib/experience-engine'

const CHAPTERS = [
  {
    id: 'story',
    marker: '01',
    title: 'The <i>Origin</i> Story',
    subtitle: 'Where It All Began',
    summary: 'From a single terminal window to a full-service digital studio.',
    detail: 'DigitalStudioz started the way all good things do: with a problem to solve.',
  },
  {
    id: 'services',
    marker: '02',
    title: '<i>Services</i> & Expertise',
    subtitle: 'What We Build',
    summary: '3D web experiences, AI-powered applications, full-stack platforms, automation pipelines, and premium UI/UX design.',
    detail: 'DigitalStudioz offers a comprehensive range of digital services.',
  },
  {
    id: 'work',
    marker: '03',
    title: '<i>Featured</i> Work',
    subtitle: 'Projects That Speak',
    summary: 'VaderLabz, MyStudioChannel, Profile Jedi — each project is a proof point.',
    detail: 'VaderLabz — A 3D scroll-driven experience built with React Three Fiber, GSAP, and Lenis.',
  },
  {
    id: 'process',
    marker: '04',
    title: 'The <i>Process</i>',
    subtitle: 'How We Build',
    summary: 'Concept → Design → Build → Deploy → Iterate.',
    detail: 'The DigitalStudioz process is built on a repeatable methodology.',
  },
  {
    id: 'contact',
    marker: '05',
    title: 'Let\'s <i>Build</i> Together',
    subtitle: 'Start Your Project',
    summary: 'Have a project in mind? Reach out and let\'s create something bold.',
    detail: 'Every project starts with a conversation.',
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
