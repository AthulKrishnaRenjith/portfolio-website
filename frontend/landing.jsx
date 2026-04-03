import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import strideDemo from './assets/stride_demo.mp4';
import uhRacingDemo from './assets/uh_racing_demo.mp4';
import osuBeatmapDemo from './assets/osu_beatmap_demo.mp4';
import profileImage from './assets/photo_formal.jpg';

/* ─────────────────────────────────────────────
   STYLES
   Injected once into <head> — keeps JSX clean
   and avoids a separate CSS module dependency.
───────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500&display=swap');
 
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
 
  :root {
    --ink:        #1a1714;
    --paper:      #f5f0e8;
    --paper-mid:  #ede7d9;
    --paper-dark: #d4cbba;
    --amber:      #c47a1e;
    --amber-light:#f5e4c0;
    --muted:      #6b6258;
    --serif:      'Playfair Display', Georgia, serif;
    --mono:       'IBM Plex Mono', monospace;
    --sans:       'IBM Plex Sans', system-ui, sans-serif;
  }
 
  html { scroll-behavior: smooth; }
 
  body {
    background: var(--paper);
    color: var(--ink);
    font-family: var(--sans);
    font-weight: 300;
    line-height: 1.6;
    overflow-x: hidden;
  }
 
  /* ── scrollbar ── */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--paper); }
  ::-webkit-scrollbar-thumb { background: var(--paper-dark); }
 
  /* ── NAV ── */
  .p-nav {
    position: fixed;
    top: 0; left: 0;
    width: 220px; height: 100vh;
    border-right: 1px solid var(--paper-dark);
    background: var(--paper);
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    z-index: 100;
  }
  .p-nav__name {
    font-family: var(--serif);
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 0.4rem;
    letter-spacing: -0.01em;
  }
  .p-nav__title {
    font-family: var(--mono);
    font-size: 0.6rem;
    color: var(--amber);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 2.5rem;
  }
  .p-nav__links {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .p-nav__link {
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--muted);
    text-decoration: none;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.6rem 0;
    border-bottom: 1px solid var(--paper-mid);
    transition: color 0.2s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .p-nav__link::before {
    content: '';
    width: 0;
    height: 1px;
    background: var(--amber);
    transition: width 0.25s;
    flex-shrink: 0;
  }
  .p-nav__link:hover { color: var(--ink); }
  .p-nav__link:hover::before { width: 14px; }
  .p-nav__link--active { color: var(--ink); }
  .p-nav__link--active::before { width: 14px; }
 
  .p-nav__contacts {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .p-nav__contact {
    font-family: var(--mono);
    font-size: 0.6rem;
    color: var(--muted);
    text-decoration: none;
    letter-spacing: 0.05em;
    transition: color 0.2s;
    word-break: break-all;
  }
  .p-nav__contact:hover { color: var(--amber); }
  .p-nav__contact-icon {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }
 
  /* ── MOBILE NAV ── */
  .p-mobile-nav {
    display: none;
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--paper);
    border-bottom: 1px solid var(--paper-dark);
    padding: 1rem 1.5rem;
    justify-content: space-between;
    align-items: center;
  }
  .p-mobile-nav__name {
    font-family: var(--serif);
    font-size: 0.95rem;
    font-weight: 700;
  }
  .p-mobile-nav__links {
    display: flex;
    gap: 1.25rem;
  }
  .p-mobile-nav__link {
    font-family: var(--mono);
    font-size: 0.6rem;
    color: var(--muted);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
 
  /* ── MAIN ── */
  .p-main {
    margin-left: 220px;
    min-height: 100vh;
  }
 
  /* ── HERO ── */
  .p-hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid var(--paper-dark);
  }
  .p-hero__left {
    padding: 5rem 4rem 4rem;
    border-right: 1px solid var(--paper-dark);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .p-hero__eyebrow {
    font-family: var(--mono);
    font-size: 0.65rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 1.5rem;
  }
  .p-hero__name {
    font-family: var(--serif);
    font-size: clamp(3rem, 4.5vw, 4.5rem);
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: -0.03em;
    margin-bottom: 1.5rem;
  }
  .p-hero__name em {
    font-style: italic;
    color: var(--amber);
  }
  .p-hero__lede {
    font-size: 1rem;
    color: var(--muted);
    max-width: 380px;
    line-height: 1.7;
    border-left: 2px solid var(--amber);
    padding-left: 1rem;
    margin-bottom: 2.5rem;
  }
  .p-hero__ctas {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .p-hero__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--mono);
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.6rem 1.1rem;
    border: 1px solid var(--ink);
    color: var(--ink);
    transition: background 0.15s, color 0.15s;
  }
  .p-hero__cta:hover {
    background: var(--ink);
    color: var(--paper);
  }
  .p-hero__cta--amber {
    background: var(--amber);
    border-color: var(--amber);
    color: var(--paper);
  }
  .p-hero__cta--amber:hover {
    background: var(--ink);
    border-color: var(--ink);
  }
 
  .p-hero__right {
    display: flex;
    flex-direction: column;
  }
  .p-hero__photo {
    flex: 1;
    border-bottom: 1px solid var(--paper-dark);
    overflow: hidden;
    position: relative;
    background: var(--paper-mid);
  }
  .p-hero__photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    filter: grayscale(15%) contrast(1.05);
    opacity: 0.9;
    display: block;
  }
  .p-hero__stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .p-hero__stat {
    padding: 1.5rem;
    border-right: 1px solid var(--paper-dark);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .p-hero__stat:last-child { border-right: none; }
  .p-stat__num {
    font-family: var(--serif);
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1;
    color: var(--ink);
  }
  .p-stat__label {
    font-family: var(--mono);
    font-size: 0.55rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--muted);
    margin-top: 0.3rem;
  }
 
  /* ── SECTION ── */
  .p-section {
    border-bottom: 1px solid var(--paper-dark);
  }
  .p-section__header {
    padding: 2rem 4rem 1.5rem;
    border-bottom: 1px solid var(--paper-mid);
    display: flex;
    align-items: baseline;
    gap: 1.5rem;
  }
  .p-section__num {
    font-family: var(--mono);
    font-size: 0.6rem;
    color: var(--amber);
    letter-spacing: 0.12em;
  }
  .p-section__title {
    font-family: var(--serif);
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }
  .p-section__body {
    padding: 3rem 4rem;
  }
 
  /* ── SKILLS ── */
  .p-skills {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .p-skill {
    padding: 2rem;
    border-right: 1px solid var(--paper-mid);
    border-bottom: 1px solid var(--paper-mid);
  }
  .p-skill:nth-child(2n) { border-right: none; }
  .p-skill:nth-last-child(-n+2) { border-bottom: none; }
  .p-skill__cat {
    font-family: var(--mono);
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--amber);
    margin-bottom: 0.75rem;
  }
  .p-skill__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  .p-tag {
    font-family: var(--mono);
    font-size: 0.65rem;
    padding: 0.2rem 0.55rem;
    border: 1px solid var(--paper-dark);
    color: var(--ink);
    letter-spacing: 0.03em;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
    cursor: default;
  }
  .p-tag:hover {
    background: var(--ink);
    color: var(--paper);
    border-color: var(--ink);
  }
 
  /* ── EXPERIENCE ── */
  .p-exp {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 2rem;
    padding: 2.5rem 0;
    border-bottom: 1px solid var(--paper-mid);
  }
  .p-exp:last-child { border-bottom: none; }
  .p-exp__period {
    font-family: var(--mono);
    font-size: 0.6rem;
    color: var(--muted);
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
    padding-top: 0.15rem;
  }
  .p-exp__org {
    font-family: var(--mono);
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--amber);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .p-exp__loc {
    font-family: var(--mono);
    font-size: 0.58rem;
    color: var(--muted);
    margin-top: 0.3rem;
  }
  .p-exp__role {
    font-family: var(--serif);
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    letter-spacing: -0.02em;
  }
  .p-exp__bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }
  .p-exp__bullets li {
    font-size: 0.85rem;
    color: var(--muted);
    padding-left: 1.2rem;
    position: relative;
    line-height: 1.6;
  }
  .p-exp__bullets li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--paper-dark);
  }
 
  /* ── PROJECTS ── */
  .p-projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .p-project {
    padding: 2.5rem;
    border-right: 1px solid var(--paper-mid);
    border-bottom: 1px solid var(--paper-mid);
    display: flex;
    flex-direction: column;
  }
  .p-project:nth-child(2n) { border-right: none; }
  .p-project:last-child { border-bottom: none; }
  .p-project--featured {
    grid-column: 1 / -1;
    border-right: none;
  }
  .p-project--video {
    padding: 0;
    overflow: hidden;
  }
  .p-project--video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    min-height: 260px;
  }
  .p-project__num {
    font-family: var(--serif);
    font-size: 3rem;
    font-weight: 700;
    color: var(--paper-mid);
    line-height: 1;
    margin-bottom: 0.75rem;
  }
  .p-project__name {
    font-family: var(--serif);
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 0.3rem;
  }
  .p-project__date {
    font-family: var(--mono);
    font-size: 0.58rem;
    color: var(--muted);
    letter-spacing: 0.08em;
    margin-bottom: 0.75rem;
  }
  .p-project__stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-bottom: 1rem;
  }
  .p-project__tag {
    font-family: var(--mono);
    font-size: 0.58rem;
    padding: 0.15rem 0.5rem;
    background: var(--paper-mid);
    color: var(--muted);
    letter-spacing: 0.05em;
  }
  .p-project__desc {
    font-size: 0.85rem;
    color: var(--muted);
    line-height: 1.65;
    margin-bottom: 1rem;
    flex: 1;
  }
  .p-project__bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    margin-bottom: 1rem;
  }
  .p-project__bullets li {
    font-size: 0.8rem;
    color: var(--muted);
    padding-left: 1.1rem;
    position: relative;
    line-height: 1.5;
  }
  .p-project__bullets li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--amber);
    font-size: 0.7rem;
  }
  .p-project__link {
    font-family: var(--mono);
    font-size: 0.62rem;
    color: var(--amber);
    text-decoration: none;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-top: auto;
    align-self: flex-start;
  }
  .p-project__link:hover { text-decoration: underline; }
 
  /* ── EDUCATION ── */
  .p-edu {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .p-edu__block {
    padding: 2.5rem;
    border-right: 1px solid var(--paper-mid);
  }
  .p-edu__block:last-child { border-right: none; }
  .p-edu__degree {
    font-family: var(--serif);
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
    line-height: 1.3;
  }
  .p-edu__school {
    font-family: var(--mono);
    font-size: 0.65rem;
    color: var(--amber);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.4rem;
  }
  .p-edu__period {
    font-family: var(--mono);
    font-size: 0.6rem;
    color: var(--muted);
    margin-bottom: 0.75rem;
  }
  .p-edu__badge {
    display: inline-block;
    font-family: var(--mono);
    font-size: 0.58rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.2rem 0.6rem;
    border: 1px solid var(--amber);
    color: var(--amber);
  }
  .p-edu__thesis {
    font-size: 0.78rem;
    color: var(--muted);
    margin-top: 0.75rem;
    font-style: italic;
    line-height: 1.5;
  }
  .p-edu__spacer { margin-top: 2rem; }
  .p-edu__cat {
    font-family: var(--mono);
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--amber);
    margin-bottom: 1rem;
  }
  .p-certs {
    list-style: none;
    display: flex;
    flex-direction: column;
  }
  .p-cert {
    padding: 0.7rem 0;
    border-bottom: 1px solid var(--paper-mid);
    font-size: 0.82rem;
    color: var(--muted);
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    line-height: 1.4;
  }
  .p-cert:last-child { border-bottom: none; }
  .p-cert::before {
    content: '✓';
    font-family: var(--mono);
    font-size: 0.65rem;
    color: var(--amber);
    flex-shrink: 0;
  }
 
  /* ── FOOTER ── */
  .p-footer {
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--paper-dark);
  }
  .p-footer__copy {
    font-family: var(--mono);
    font-size: 0.6rem;
    color: var(--muted);
    letter-spacing: 0.08em;
  }
  .p-footer__tagline {
    font-family: var(--serif);
    font-style: italic;
    font-size: 0.85rem;
    color: var(--paper-dark);
  }
 
  /* ── RESPONSIVE ── */
  @media (max-width: 960px) {
    .p-nav { display: none; }
    .p-mobile-nav { display: flex; }
    .p-main { margin-left: 0; }
    .p-hero { grid-template-columns: 1fr; min-height: auto; }
    .p-hero__right { display: none; }
    .p-hero__left { padding: 4rem 1.75rem 3rem; min-height: 90vh; }
    .p-section__header { padding: 1.5rem 1.75rem 1.25rem; }
    .p-section__body { padding: 2rem 1.75rem; }
    .p-skills { grid-template-columns: 1fr; }
    .p-skill { border-right: none !important; }
    .p-skill:nth-last-child(-n+2) { border-bottom: 1px solid var(--paper-mid); }
    .p-skill:last-child { border-bottom: none; }
    .p-exp { grid-template-columns: 1fr; gap: 0.5rem; }
    .p-projects { grid-template-columns: 1fr; }
    .p-project--featured { grid-column: 1; }
    .p-project { border-right: none !important; }
    .p-project--video { display: none; }
    .p-edu { grid-template-columns: 1fr; }
    .p-edu__block { border-right: none; border-bottom: 1px solid var(--paper-mid); padding: 2rem 1.75rem; }
    .p-edu__block:last-child { border-bottom: none; }
    .p-footer { flex-direction: column; gap: 0.5rem; text-align: center; padding: 1.5rem; }
  }
`;

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const NAV_LINKS = [
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
];

const SKILLS = [
    {
        cat: 'Languages & Tools',
        tags: ['Python', 'C++', 'C', 'SQL', 'Git', 'MLOps', 'Jira'],
    },
    {
        cat: 'Edge AI & Deployment',
        tags: ['TensorRT', 'OpenVINO', 'Jetson', 'Docker', 'ONNX'],
    },
    {
        cat: 'Computer Vision',
        tags: ['YOLOv5/9', 'PyTorch', 'OpenCV', 'Semantic Seg.', 'Diffusion'],
    },
    {
        cat: 'Robotics & Control',
        tags: ['ROS2 (Foxy/Jazzy)', 'Gazebo', 'MuJoCo', 'SLAM', 'Kinematics', 'RL Locomotion'],
    },
];

const EXPERIENCE = [
    {
        period: 'May 2025 — Present',
        org: 'Univ. of Hertfordshire',
        loc: 'Hatfield, UK',
        role: 'Research Engineer',
        bullets: [
            'Conducting research on perception and localisation for surface vessels in GNSS-denied environments.',
            'Developing camera-based mapping and localisation methods for challenging marine conditions.',
            'Designed shoreline detection and semantic segmentation for coastal structures in simulation.',
        ],
    },
    {
        period: 'Sep 2024 — Aug 2025',
        org: 'UH Racing Autonomous',
        loc: 'Hatfield, UK',
        role: 'Robotics Engineer',
        bullets: [
            'Upgraded YOLOv7 → YOLOv9; deployed on Jetson AGX Orin with TensorRT at 52 FPS / 27 ms latency.',
            'Improved detection precision by 20%, reaching 92% with Mosaic and HSV-Jitter augmentation.',
            'Integrated stereo depth sensing; contributed to GraphSLAM, PID tuning, and Pure Pursuit planning.',
        ],
    },
    {
        period: 'Aug 2021 — Jun 2023',
        org: 'Robotics Club',
        loc: 'Kerala, India',
        role: 'Robotics Engineer',
        bullets: [
            'Built a Bluetooth-controlled car (Arduino + custom Android app) showcased to 150+ visitors.',
            'Developed a Python-based IoT assistant (NodeMCU) controlling 5+ smart devices.',
            'Designed a C++ IR line-following robot achieving 95% tracking accuracy.',
        ],
    },
    {
        period: 'Nov 2019',
        org: 'Torc Infotech',
        loc: 'Kerala, India',
        role: 'Ethical Hacking Intern',
        bullets: [
            'Malware and RAT analysis; penetration testing with USB Rubber Ducky and Flipper Zero.',
            'Applied ML-based anomaly detection in network traffic for threat identification.',
        ],
    },
];

const PROJECTS = [
    {
        num: '01',
        name: 'MARVIS — Maritime Localisation',
        date: 'May 2025 — Present',
        stack: ['ROS2 Jazzy', 'YOLOv5', 'ORB-SLAM3', 'DINOv3'],
        desc: 'Robust perception and localisation for ships operating in dynamic sea conditions and GNSS-denied environments. Integrates cross-view ground-to-satellite matching with visual SLAM.',
        bullets: [
            'YOLOv5 + ORB-SLAM3 integration, improving localisation accuracy by 25%',
            'DINOv3 ViT satellite feature extraction — 18% improvement in matching accuracy',
            'Cross-view ground-to-satellite matching achieving 85% top-1 accuracy',
            'Modular real-time ROS2 pipeline with sensor fusion and on-board processing',
        ],
        featured: true,
    },
    {
        num: '02',
        name: 'Stride OP3 — Humanoid Locomotion',
        date: 'Apr 2025 — Present',
        stack: ['MuJoCo', 'JAX/PPO', 'ROS2', 'ONNX', 'Webots'],
        desc: 'Sim-to-real RL locomotion for the ROBOTIS OP3 humanoid. Full pipeline: MuJoCo Playground training → Webots sim-to-sim validation → ROS2 deployment.',
        bullets: [
            '147-dim observation space, 50 Hz policy rate, 4×128 MLP network',
            'C++ ROS2 controller with ONNX Runtime for on-robot inference',
            'YOLOv5 perception: 95% precision, ~10 ms latency via OpenVINO INT8',
        ],
        github: 'https://github.com/AthulKrishnaRenjith/stride-op3',
        video: strideDemo,
    },
    {
        num: '03',
        name: 'Autonomous Racing Perception',
        date: 'Jan 2025 — May 2025',
        stack: ['YOLOv9', 'TensorRT', 'Jetson Orin', 'ROS2 Foxy'],
        desc: 'Low-latency object detection pipeline for Formula Student autonomous race cars — 27 ms end-to-end at 52 FPS on Jetson AGX Orin.',
        bullets: [
            'YOLOv9 GELAN-C: 92% precision, 89% recall, 91% mAP@0.5',
            'TensorRT INT8 deployment maintaining real-time track performance',
            'Integrated with ROS2 Foxy for live cone detection and localisation',
        ],
        github: 'https://github.com/AthulKrishnaRenjith/UH-Racing-Yolov9-custom',
        video: uhRacingDemo,
    },
    {
        num: '04',
        name: 'Beatgenie',
        date: 'Dec 2024 — Mar 2025',
        stack: ['PyTorch Lightning', 'Diffusion Models', 'Generative AI'],
        desc: 'Generative ML system that creates osu! standard beatmaps from raw audio using latent diffusion. Generates complete beatmaps in under 30 seconds per track.',
        bullets: [
            '92% alignment accuracy on held-out test tracks',
            'CLI tool with spectrogram visual validation output',
            'Developed in collaboration with Artiom Cebotari',
        ],
        github: 'https://github.com/AthulKrishnaRenjith/Osu-Beatmap',
        video: osuBeatmapDemo,
    },
];

const CERTS = [
    'Agile Project Management with Jira Cloud',
    'Applications of AI for Predictive Maintenance',
    'Introduction to Deep Learning with OpenCV',
    'Microsoft Certified: Azure AI Fundamentals',
    'Microsoft Applied Skills: Data Science & ML with Microsoft Fabric',
];

/* ─────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────── */

/** Injects the stylesheet once */
function GlobalStyles() {
    useEffect(() => {
        const id = 'portfolio-styles';
        if (document.getElementById(id)) return;
        const el = document.createElement('style');
        el.id = id;
        el.textContent = STYLES;
        document.head.appendChild(el);
        return () => {
            const s = document.getElementById(id);
            if (s) s.remove();
        };
    }, []);
    return null;
}

/** Left-rail fixed navigation */
function Nav({ activeSection }) {
    return (
        <nav className="p-nav">
            <div className="p-nav__name">Athul Krishna<br />Renjith</div>
            <div className="p-nav__title">Robotics &amp; AI Engineer</div>
            <div className="p-nav__links">
                {NAV_LINKS.map(({ href, label }) => (
                    <a
                        key={href}
                        href={href}
                        className={`p-nav__link${activeSection === href.slice(1) ? ' p-nav__link--active' : ''}`}
                    >
                        {label}
                    </a>
                ))}
            </div>
            <div className="p-nav__contacts">
                <a href="mailto:renjith.athul.krishna@gmail.com" className="p-nav__contact p-nav__contact-icon">
                    <FaEnvelope style={{ fontSize: 10 }} /> renjith.athul.krishna@gmail.com
                </a>
                <a href="https://github.com/AthulKrishnaRenjith" target="_blank" rel="noopener noreferrer" className="p-nav__contact p-nav__contact-icon">
                    <FaGithub style={{ fontSize: 10 }} /> AthulKrishnaRenjith
                </a>
                <a href="https://www.linkedin.com/in/athulkrishnarenjith" target="_blank" rel="noopener noreferrer" className="p-nav__contact p-nav__contact-icon">
                    <FaLinkedin style={{ fontSize: 10 }} /> athulkrishnarenjith
                </a>
            </div>
        </nav>
    );
}

/** Mobile sticky top bar */
function MobileNav() {
    return (
        <div className="p-mobile-nav">
            <div className="p-mobile-nav__name">Athul Krishna Renjith</div>
            <div className="p-mobile-nav__links">
                {NAV_LINKS.map(({ href, label }) => (
                    <a key={href} href={href} className="p-mobile-nav__link">{label}</a>
                ))}
            </div>
        </div>
    );
}

/** Section wrapper */
function Section({ id, num, title, children, noPadBody = false }) {
    return (
        <section id={id} className="p-section">
            <div className="p-section__header">
                <span className="p-section__num">{num}</span>
                <h2 className="p-section__title">{title}</h2>
            </div>
            {noPadBody ? children : <div className="p-section__body">{children}</div>}
        </section>
    );
}

/* ── Hero ── */
function Hero() {
    return (
        <header id="hero" className="p-hero">
            <div className="p-hero__left">
                <p className="p-hero__eyebrow">Robotics &amp; AI — Hatfield, UK</p>
                <h1 className="p-hero__name">
                    Athul<br /><em>Krishna</em><br />Renjith
                </h1>
                <p className="p-hero__lede">
                    Delivering real-time autonomy on embedded hardware.
                    Turning perception and SLAM research into production-ready systems.
                </p>
                <div className="p-hero__ctas">
                    <a href="mailto:renjith.athul.krishna@gmail.com" className="p-hero__cta p-hero__cta--amber">
                        <FaEnvelope style={{ fontSize: 11 }} /> Email Me
                    </a>
                    <a href="https://github.com/AthulKrishnaRenjith" target="_blank" rel="noopener noreferrer" className="p-hero__cta">
                        <FaGithub style={{ fontSize: 11 }} /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/athulkrishnarenjith" target="_blank" rel="noopener noreferrer" className="p-hero__cta">
                        <FaLinkedin style={{ fontSize: 11 }} /> LinkedIn
                    </a>
                </div>
            </div>
            <div className="p-hero__right">
                <div className="p-hero__photo">
                    <img src={profileImage} alt="Athul Krishna Renjith" />
                </div>
                <div className="p-hero__stats">
                    <div className="p-hero__stat">
                        <div className="p-stat__num">92%</div>
                        <div className="p-stat__label">Detection Precision</div>
                    </div>
                    <div className="p-hero__stat">
                        <div className="p-stat__num">27ms</div>
                        <div className="p-stat__label">Inference Latency</div>
                    </div>
                    <div className="p-hero__stat">
                        <div className="p-stat__num">52fps</div>
                        <div className="p-stat__label">Track Performance</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

/* ── Skills ── */
function Skills() {
    return (
        <Section id="skills" num="01" title="Technical Skills" noPadBody>
            <div className="p-skills">
                {SKILLS.map(({ cat, tags }) => (
                    <div key={cat} className="p-skill">
                        <div className="p-skill__cat">{cat}</div>
                        <div className="p-skill__tags">
                            {tags.map(t => <span key={t} className="p-tag">{t}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ── Experience ── */
function Experience() {
    return (
        <Section id="experience" num="02" title="Experience">
            {EXPERIENCE.map(({ period, org, loc, role, bullets }) => (
                <div key={org + period} className="p-exp">
                    <div>
                        <div className="p-exp__period">{period}</div>
                        <div className="p-exp__org">{org}</div>
                        <div className="p-exp__loc">{loc}</div>
                    </div>
                    <div>
                        <div className="p-exp__role">{role}</div>
                        <ul className="p-exp__bullets">
                            {bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                    </div>
                </div>
            ))}
        </Section>
    );
}

/* ── Projects ── */
function Projects() {
    const featured = PROJECTS.filter(p => p.featured);
    const rest = PROJECTS.filter(p => !p.featured);

    return (
        <Section id="projects" num="03" title="Projects" noPadBody>
            <div className="p-projects">

                {/* Featured (full-width) */}
                {featured.map(p => (
                    <div key={p.num} className="p-project p-project--featured">
                        <div className="p-project__num">{p.num}</div>
                        <div className="p-project__name">{p.name}</div>
                        <div className="p-project__date">{p.date}</div>
                        <div className="p-project__stack">
                            {p.stack.map(s => <span key={s} className="p-project__tag">{s}</span>)}
                        </div>
                        <p className="p-project__desc">{p.desc}</p>
                        <ul className="p-project__bullets">
                            {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                        {p.github && (
                            <a href={p.github} target="_blank" rel="noopener noreferrer" className="p-project__link">
                                github →
                            </a>
                        )}
                    </div>
                ))}

                {/* Remaining projects: card + video pairs */}
                {rest.map((p, i) => {
                    const isEven = i % 2 === 0;
                    const card = (
                        <div key={`card-${p.num}`} className="p-project">
                            <div className="p-project__num">{p.num}</div>
                            <div className="p-project__name">{p.name}</div>
                            <div className="p-project__date">{p.date}</div>
                            <div className="p-project__stack">
                                {p.stack.map(s => <span key={s} className="p-project__tag">{s}</span>)}
                            </div>
                            <p className="p-project__desc">{p.desc}</p>
                            <ul className="p-project__bullets">
                                {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                            </ul>
                            {p.github && (
                                <a href={p.github} target="_blank" rel="noopener noreferrer" className="p-project__link">
                                    github →
                                </a>
                            )}
                        </div>
                    );
                    const videoCell = p.video ? (
                        <div key={`vid-${p.num}`} className="p-project p-project--video">
                            <video src={p.video} autoPlay muted loop playsInline />
                        </div>
                    ) : (
                        <div key={`empty-${p.num}`} className="p-project" style={{ background: 'var(--paper-mid)' }} />
                    );

                    return isEven ? [card, videoCell] : [videoCell, card];
                })}

            </div>
        </Section>
    );
}

/* ── Education ── */
function Education() {
    return (
        <Section id="education" num="04" title="Education &amp; Certifications" noPadBody>
            <div className="p-edu">
                <div className="p-edu__block">
                    <div className="p-edu__degree">MSc, Artificial Intelligence and Robotics</div>
                    <div className="p-edu__school">University of Hertfordshire</div>
                    <div className="p-edu__period">Jan 2024 — May 2025</div>
                    <span className="p-edu__badge">Distinction</span>
                    <p className="p-edu__thesis">
                        Thesis: Optimised Perception System for Real-Time Object Detection in Autonomous Racing Vehicles using YOLOv9 and TensorRT
                    </p>

                    <div className="p-edu__spacer">
                        <div className="p-edu__degree">B.Tech., Computer Science and Engineering</div>
                        <div className="p-edu__school">APJ Abdul Kalam Technological University</div>
                        <div className="p-edu__period">Aug 2019 — Aug 2023</div>
                        <span className="p-edu__badge">Distinction</span>
                    </div>
                </div>
                <div className="p-edu__block">
                    <div className="p-edu__cat">Certifications</div>
                    <ul className="p-certs">
                        {CERTS.map(c => <li key={c} className="p-cert">{c}</li>)}
                    </ul>
                </div>
            </div>
        </Section>
    );
}

/* ── Footer ── */
function Footer() {
    return (
        <footer className="p-footer">
            <span className="p-footer__copy">
                © {new Date().getFullYear()} Athul Krishna Renjith — Built with React &amp; Tailwind CSS
            </span>
            <span className="p-footer__tagline">Perception · Locomotion · Autonomy</span>
        </footer>
    );
}

/* ─────────────────────────────────────────────
   ACTIVE SECTION TRACKER
   Highlights the nav link for the section
   currently in view.
───────────────────────────────────────────── */
function useActiveSection(sectionIds) {
    const [active, setActive] = useState('');

    useEffect(() => {
        const observers = sectionIds.map(id => {
            const el = document.getElementById(id);
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActive(id); },
                { threshold: 0.3 }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach(o => o && o.disconnect());
    }, [sectionIds]);

    return active;
}

/* ─────────────────────────────────────────────
   ROOT
───────────────────────────────────────────── */
const SECTION_IDS = ['hero', 'skills', 'experience', 'projects', 'education'];

export default function Landing() {
    const activeSection = useActiveSection(SECTION_IDS);

    return (
        <>
            <GlobalStyles />
            <Nav activeSection={activeSection} />
            <div className="p-main">
                <MobileNav />
                <Hero />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Footer />
            </div>
        </>
    );
}