import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaRobot, FaBrain, FaCode, FaMicrochip, FaDownload, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import { SiRos, SiOpencv, SiPytorch, SiDocker, SiNvidia, SiCplusplus, SiPython, SiCheckmarx } from 'react-icons/si';
import { motion } from 'framer-motion';
import strideDemo from './assets/stride_demo.mp4';
import uhRacingDemo from './assets/uh_racing_demo.mp4';
import osuBeatmapDemo from './assets/osu_beatmap_demo.mp4';
import profileImage from './assets/photo_formal.jpg';

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

const Section = ({ title, children, className = "" }) => (
    <section className={`py-16 px-4 sm:px-8 max-w-7xl mx-auto ${className}`}>
        <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl font-bold mb-12 text-slate-100 flex items-center gap-3"
        >
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
            {title}
        </motion.h2>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
        >
            {children}
        </motion.div>
    </section>
);

const Card = ({ children, className = "" }) => (
    <motion.div
        variants={fadeInUp}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-xl hover:bg-slate-800/80 transition-colors duration-300 ${className}`}
    >
        {children}
    </motion.div>
);

const Badge = ({ text, icon: Icon }) => (
    <motion.span
        whileHover={{ scale: 1.05 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full hover:bg-blue-500/20 transition-colors cursor-default"
    >
        {Icon && <Icon className="w-3.5 h-3.5" />}
        {text}
    </motion.span>
);

const Landing = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">

            {/* Hero Section */}
            <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-slate-950 to-slate-950" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="relative z-10 text-center px-4 max-w-4xl mx-auto"
                >
                    {/* Animated Ring */}
                    <motion.div variants={scaleIn} className="relative mx-auto w-32 h-32 mb-8 group">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-blue-500 rounded-full blur-xl"
                        ></motion.div>
                        <div className="relative w-full h-full bg-slate-900 rounded-full border-2 border-blue-500/30 flex items-center justify-center shadow-2xl overflow-hidden">
                            <img
                                src={profileImage}
                                alt="Athul Krishna Renjith"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
                        Athul Krishna Renjith
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-blue-400 mb-8 font-light">
                        Robotics & AI Engineer
                    </motion.p>
                    <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
                        Robotics & AI Engineer delivering real time autonomy on embedded hardware.
                        Turning perception and SLAM research into production ready systems.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="mailto:renjith.athul.krishna@gmail.com" className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium shadow-lg shadow-blue-900/20 block">
                            <FaEnvelope /> Email Me
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://github.com/AthulKrishnaRenjith" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium border border-slate-700 block">
                            <FaGithub /> GitHub
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/athulkrishnarenjith" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium border border-slate-700 block">
                            <FaLinkedin /> LinkedIn
                        </motion.a>

                    </motion.div>
                </motion.div>
            </header>



            {/* Skills Section */}
            <Section title="Technical Arsenal" className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                            <FaCode className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-3">Languages & Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'C++', 'C', 'SQL', 'Git', 'MLOps', 'Agile (Jira)'].map(s => (
                                <Badge key={s} text={s} />
                            ))}
                        </div>
                    </Card>
                    <Card>
                        <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                            <SiNvidia className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-3">Edge AI & Deployment</h3>
                        <div className="flex flex-wrap gap-2">
                            {['TensorRT', 'OpenVINO', 'Jetson', 'Docker', 'ONNX'].map(s => (
                                <Badge key={s} text={s} />
                            ))}
                        </div>
                    </Card>
                    <Card>
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                            <SiOpencv className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-3">Computer Vision</h3>
                        <div className="flex flex-wrap gap-2">
                            {['YOLO (v5/v9)', 'PyTorch', 'OpenCV', 'Semantic Seg.', 'Latent Diffusion'].map(s => (
                                <Badge key={s} text={s} />
                            ))}
                        </div>
                    </Card>
                    <Card>
                        <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                            <SiRos className="w-6 h-6 text-orange-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-3">Robotics & Control</h3>
                        <div className="flex flex-wrap gap-2">
                            {['ROS2 (Foxy/Jazzy)', 'Gazebo', 'SLAM', 'Kinematics', 'Planning', 'MuJoCo', 'Locomotion', 'Learning Based Humanoid'].map(s => (
                                <Badge key={s} text={s} />
                            ))}
                        </div>
                    </Card>
                </div>
            </Section>

            {/* Experience Section */}
            <Section title="Professional Experience" className="bg-slate-900/50">
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">

                    {/* ISE Research */}
                    <motion.div variants={fadeInUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-[.is-active]:border-emerald-500 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                            <FaLaptopCode className="text-emerald-500 w-5 h-5" />
                        </div>
                        <div className="w-full md:w-[calc(50%-2.5rem)] pl-8 md:pl-0 md:pr-14 md:group-even:pl-14">
                            <Card className="hover:border-emerald-500/30 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Research Engineer</h3>
                                        <div className="text-emerald-400 font-medium">University of Hertfordshire</div>
                                    </div>
                                    <span className="text-xs font-mono bg-slate-700 px-2 py-1 rounded text-slate-300">May 2025 – Present</span>
                                </div>
                                <div className="text-sm text-slate-400 mb-4 font-mono">Hatfield, UK</div>
                                <ul className="space-y-2 text-slate-300 list-disc list-inside marker:text-emerald-500">
                                    <li>Conducting research on perception and localisation for surface vessels, focusing on real-time geo-localisation and visual SLAM.</li>
                                    <li>Developing camera-based mapping and localisation methods tailored for challenging marine environments.</li>
                                    <li>Designed and evaluated shoreline detection and isolation techniques in simulation.</li>
                                    <li>Implementing semantic segmentation models to identify coastal structures.</li>
                                </ul>
                            </Card>
                        </div>
                    </motion.div>

                    {/* UH Racing */}
                    <motion.div variants={fadeInUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <SiRos className="text-blue-500 w-5 h-5" />
                        </div>
                        <div className="w-full md:w-[calc(50%-2.5rem)] pl-8 md:pl-0 md:pr-14 md:group-even:pl-14">
                            <Card>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Robotics Engineer</h3>
                                        <div className="text-blue-400 font-medium">UH Racing Autonomous</div>
                                    </div>
                                    <span className="text-xs font-mono bg-slate-700 px-2 py-1 rounded text-slate-300">Sep 2024 – Aug 2025</span>
                                </div>
                                <div className="text-sm text-slate-400 mb-4 font-mono">Hatfield, UK</div>
                                <ul className="space-y-2 text-slate-300 list-disc list-inside marker:text-blue-500">
                                    <li>Upgraded YOLOv7 to YOLOv9, trained on HPC clusters, and deployed on Jetson AGX Orin with TensorRT (52 FPS, 27 ms latency).</li>
                                    <li>Improved object detection precision by 20 percent, achieving 92 percent precision.</li>
                                    <li>Applied augmentations (Mosaic, HSV Jitter) to improve robustness in rain, low light, and occluded conditions.</li>
                                    <li>Integrated stereo depth sensing and validated performance in Gazebo simulation and live autonomous runs.</li>
                                    <li>Contributed to GraphSLAM for localisation, PID tuning for control, and Pure Pursuit for planning.</li>
                                </ul>
                            </Card>
                        </div>
                    </motion.div>

                    {/* Robotics Club */}
                    <motion.div variants={fadeInUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <FaMicrochip className="text-amber-500 w-5 h-5" />
                        </div>
                        <div className="w-full md:w-[calc(50%-2.5rem)] pl-8 md:pl-0 md:pr-14 md:group-even:pl-14">
                            <Card>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Robotics Engineer</h3>
                                        <div className="text-amber-400 font-medium">Robotics Club</div>
                                    </div>
                                    <span className="text-xs font-mono bg-slate-700 px-2 py-1 rounded text-slate-300">Aug 2021 – Jun 2023</span>
                                </div>
                                <div className="text-sm text-slate-400 mb-4 font-mono">Kerala, India</div>
                                <ul className="space-y-2 text-slate-300 list-disc list-inside marker:text-amber-500">
                                    <li>Led and contributed to embedded systems and autonomous navigation projects.</li>
                                    <li>Built a Bluetooth-controlled car (Arduino + custom Android app) showcased to 150+ visitors.</li>
                                    <li>Developed a Python-based IoT assistant (NodeMCU) enabling control of 5+ smart devices.</li>
                                    <li>Designed a C++ IR line-following robot with 95% tracking accuracy.</li>
                                </ul>
                            </Card>
                        </div>
                    </motion.div>

                    {/* Torc Infotech */}
                    <motion.div variants={fadeInUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <SiCheckmarx className="text-red-500 w-5 h-5" />
                        </div>
                        <div className="w-full md:w-[calc(50%-2.5rem)] pl-8 md:pl-0 md:pr-14 md:group-even:pl-14">
                            <Card>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Ethical Hacking Intern</h3>
                                        <div className="text-red-400 font-medium">Torc Infotech</div>
                                    </div>
                                    <span className="text-xs font-mono bg-slate-700 px-2 py-1 rounded text-slate-300">Nov 2019 – Nov 2019</span>
                                </div>
                                <div className="text-sm text-slate-400 mb-4 font-mono">Kerala, India</div>
                                <ul className="space-y-2 text-slate-300 list-disc list-inside marker:text-red-500">
                                    <li>Analysed malware and RATs, identifying attack vectors and mitigation strategies.</li>
                                    <li>Applied ethical hacking tools (USB Rubber Ducky, Flipper Zero) and penetration testing.</li>
                                    <li>Used machine learning for anomaly detection in network traffic.</li>
                                    <li>Strengthened skills in network security, social engineering awareness, and ethical red teaming.</li>
                                </ul>
                            </Card>
                        </div>
                    </motion.div>

                </div>
            </Section>

            {/* Projects Section */}
            <Section title="Featured Projects" className="">
                <div className="space-y-12">
                    {/* MARVIS */}
                    <div className="grid grid-cols-1 gap-6">
                        <Card className="h-full flex flex-col p-8">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">MARVIS - Maritime Localisation</h3>
                                <p className="text-blue-400 text-sm mb-4">May 2025 - Present</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge text="ROS2 Jazzy" />
                                    <Badge text="YOLOv5" />
                                    <Badge text="ORB-SLAM3" />
                                    <Badge text="DINOv3" />
                                </div>
                                <p className="text-slate-300 mb-4 italic">
                                    Developing a robust perception and localisation system for ships operating in dynamic sea conditions and GNSS-denied environments.
                                </p>
                            </div>
                            <ul className="text-slate-400 space-y-2 flex-grow list-disc list-inside text-sm">
                                <li>Integrated YOLOv5 with ORB-SLAM3, improving localisation accuracy by 25% in ROS2 Jazzy.</li>
                                <li>Built a DINOv3 (ViT) based satellite feature extraction model, raising matching accuracy by 18%.</li>
                                <li>Implemented cross-view ground to satellite matching achieving 85% top-1 accuracy.</li>
                                <li>Designed semantic segmentation for shoreline isolation and dynamic object feature extraction.</li>
                                <li>Modular real-time pipeline in ROS2 with sensor fusion and on-board processing.</li>
                                <li>Validated using maritime simulation and real shoreline datasets for deployment readiness.</li>
                            </ul>
                        </Card>
                    </div>

                    {/* Kidsize */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        <Card className="h-full flex flex-col p-8 order-2 lg:order-1">
                            <div className="mb-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-bold text-white mb-2">Kidsize Soccer Robots</h3>
                                    <a href="https://github.com/AthulKrishnaRenjith/stride-op3" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white"><FaGithub className="w-6 h-6" /></a>
                                </div>
                                <p className="text-blue-400 text-sm mb-4">Apr 2025 - Present</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge text="OpenVINO" />
                                    <Badge text="OAK-D" />
                                    <Badge text="YOLOv5" />
                                    <Badge text="MuJoCo" />
                                </div>
                                <p className="text-slate-300 mb-4 italic">
                                    Developing a real time perception and control stack for the ROBOTIS OP3 humanoid used by STRIDE in RoboCup KidSize football.
                                </p>
                            </div>
                            <ul className="text-slate-400 space-y-2 flex-grow list-disc list-inside text-sm">
                                <li>Built a low latency perception pipeline using an OAK D Lite and Myriad X VPU.</li>
                                <li>Trained and deployed a YOLOv5 model for 6 object classes, achieving 95% precision and 96% mAP@0.5.</li>
                                <li>Optimised deployment using ONNX and OpenVINO INT8, reducing inference latency from ~70 ms to ~10 ms.</li>
                                <li>Improved visual robustness during walking and turning through motion blur and camera shake dataset augmentation.</li>
                                <li>Preparing MuJoCo based simulation and reinforcement learning pipelines for humanoid locomotion.</li>
                            </ul>
                        </Card>
                        <div className="aspect-video bg-slate-900/80 rounded-xl border border-slate-700/50 flex items-center justify-center order-1 lg:order-2 overflow-hidden">
                            <video
                                src={strideDemo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Racing */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        <div className="aspect-video bg-slate-900/80 rounded-xl border border-slate-700/50 flex items-center justify-center overflow-hidden">
                            <video
                                src={uhRacingDemo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <Card className="h-full flex flex-col p-8">
                            <div className="mb-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-bold text-white mb-2">Autonomous Racing Perception</h3>
                                    <a href="https://github.com/AthulKrishnaRenjith/UH-Racing-Yolov9-custom" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white"><FaGithub className="w-6 h-6" /></a>
                                </div>
                                <p className="text-blue-400 text-sm mb-4">Jan 2025 - May 2025</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge text="Jetson Orin" />
                                    <Badge text="TensorRT" />
                                    <Badge text="YOLOv9" />
                                    <Badge text="ROS2 Foxy" />
                                </div>
                                <p className="text-slate-300 mb-4 italic">
                                    Designed and deployed a low latency object detection pipeline for Formula Student autonomous race cars.
                                </p>
                            </div>
                            <ul className="text-slate-400 space-y-2 flex-grow list-disc list-inside text-sm">
                                <li>Achieved 27 ms end to end latency on Jetson AGX Orin.</li>
                                <li>Fine tuned YOLOv9 with a GELAN C backbone reaching 92% precision, 89% recall and 91% mAP@0.5.</li>
                                <li>Deployed with TensorRT maintaining 52 FPS in track conditions.</li>
                                <li>Integrated with ROS2 Foxy for real time cone detection and localisation.</li>
                            </ul>
                        </Card>
                    </div>

                    {/* Beatgenie */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        <Card className="h-full flex flex-col p-8 order-2 lg:order-1">
                            <div className="mb-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-bold text-white mb-2">Beatgenie</h3>
                                    <a href="https://github.com/AthulKrishnaRenjith/Osu-Beatmap" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white"><FaGithub className="w-6 h-6" /></a>
                                </div>
                                <p className="text-blue-400 text-sm mb-4">Dec 2024 - Mar 2025</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge text="PyTorch Lightning" />
                                    <Badge text="Diffusion Models" />
                                    <Badge text="Generative AI" />
                                </div>
                                <p className="text-slate-300 mb-4 italic">
                                    Beatgenie is a generative ML system that creates osu!standard beatmaps from raw audio using latent diffusion models.
                                </p>
                            </div>
                            <ul className="text-slate-400 space-y-2 flex-grow list-disc list-inside text-sm">
                                <li>Generates beatmaps in &lt;30s per track using latent diffusion.</li>
                                <li>Trained on a large dataset of osu! maps, it automates beatmapping with 92% alignment accuracy.</li>
                                <li>CLI tool + visual validation with spectrograms.</li>
                                <li>Developed in collaboration with <a href="https://artiom.me/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">Artiom Cebotari</a></li>
                            </ul>
                        </Card>
                        <div className="aspect-video bg-slate-900/80 rounded-xl border border-slate-700/50 flex items-center justify-center order-1 lg:order-2 overflow-hidden">
                            <video
                                src={osuBeatmapDemo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </Section>

            {/* Education & Certs */}
            <Section title="Education & Certifications" className="bg-slate-900/50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                            <FaGraduationCap className="text-blue-500" /> Education
                        </h3>
                        <Card>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="text-lg font-bold text-white">MSc in Artificial Intelligence and Robotics</h4>
                                    <p className="text-blue-400">University of Hertfordshire</p>
                                </div>
                                <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded text-sm border border-emerald-500/20">Distinction</span>
                            </div>
                            <p className="text-xs text-slate-500 mb-3 ml-1">Jan 2024 - May 2025</p>
                            <p className="text-sm text-slate-400">
                                <strong>Thesis:</strong> Optimised Perception System for Real-Time Object Detection in Autonomous Racing Vehicles using YOLOv9 and TensorRT
                            </p>
                        </Card>
                        <Card>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="text-lg font-bold text-white">B.Tech. in Computer Science and Engineering</h4>
                                    <p className="text-blue-400">APJ Abdul Kalam Technological University</p>
                                </div>
                                <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded text-sm border border-emerald-500/20">Distinction</span>
                            </div>
                            <p className="text-xs text-slate-500 ml-1">Aug 2019 - Aug 2023</p>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                            <FaBrain className="text-purple-500" /> Certifications
                        </h3>
                        <Card>
                            <ul className="space-y-4">
                                {[
                                    'Agile Project Management with Jira Cloud',
                                    'Applications of AI for Predictive Maintenance',
                                    'Introduction to Deep Learning with OpenCV',
                                    'Microsoft Certified: Azure AI Fundamentals',
                                    'Microsoft Applied Skills: Implement a Data Science and Machine Learning Solution with Microsoft Fabric'
                                ].map((cert, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                        <span className="text-white font-medium">{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </motion.div>
                </div>
            </Section>

            <footer className="py-8 text-center text-slate-600 bg-slate-950 border-t border-slate-900">
                <p>© {new Date().getFullYear()} Athul Krishna Renjith. Built with React & Tailwind CSS.</p>
            </footer>
        </div>
    );
};

export default Landing;