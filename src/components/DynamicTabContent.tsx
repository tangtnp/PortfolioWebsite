import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechStackCard from "@/components/TechStackCard";
import FeatureCard from "@/components/FeatureCard";
import Gallery from "@/components/Gallery";
import TechnicalDetailsCard from "@/components/TechnicalDetailsCard";

interface DynamicTabContentProps {
    activeTab: string;
    project: {
        name : string ;
        timeline: string;
        role: string;
        explain: string;
        techStack: {
            technologies: { icon: string; title: string }[];
            technicalDetails: { icon: string; title: string; description: string }[];
        };
        features: { title: string; description: string; tag: string; status: string }[];
        galleryImages: string[];
    };
}

const tabVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
};

const DynamicTabContent: React.FC<DynamicTabContentProps> = ({ activeTab, project }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="mt-6">
            <AnimatePresence mode="wait">
                {activeTab === "Overview" && (
                    <motion.div
                        key="overview"
                        variants={tabVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Project Description */}
                        <div>
                            <h2 className="text-3xl font-bold text-white text-center md:text-left">{project.name}</h2>
                            <p className="text-gray-400 mt-2 text-center md:text-left">{project.explain}</p>
                        </div>

                        {/* Cards Section */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Timeline Card */}
                            <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center text-center shadow-md transition transform hover:scale-105 hover:bg-gray-700">
                                <div className="text-blue-500 mb-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <h3 className="text-md font-semibold text-white">Timeline</h3>
                                <p className="text-gray-400 text-sm">{project.timeline}</p>
                            </div>

                            {/* Role Card */}
                            <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center text-center shadow-md transition transform hover:scale-105 hover:bg-gray-700">
                                <div className="text-blue-500 mb-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <h3 className="text-md font-semibold text-white">Role</h3>
                                <p className="text-gray-400 text-sm">{project.role}</p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === "Tech Stack" && (
                    <motion.div
                        key="tech-stack"
                        variants={tabVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <h2 className="text-xl font-bold mb-4 text-center md:text-left">Technologies</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            {project.techStack.technologies.map((tech, index) => (
                                <TechStackCard key={index} icon={tech.icon} title={tech.title} />
                            ))}
                        </div>

                        {project.techStack.technicalDetails?.length > 0 && (
                            <>
                                <h2 className="text-xl font-bold mb-4 text-center md:text-left">Technical Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.techStack.technicalDetails.map((detail, index) => (
                                        <TechnicalDetailsCard
                                            key={index}
                                            icon={detail.icon}
                                            title={detail.title}
                                            description={detail.description}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </motion.div>
                )}


                {activeTab === "Features" && (
                    <motion.div
                        key="features"
                        variants={tabVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                        {project.features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </motion.div>
                )}

                {activeTab === "Gallery" && (
                    <motion.div
                        key="gallery"
                        variants={tabVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {project.galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative cursor-pointer"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="rounded-lg shadow-md hover:opacity-80 transition-opacity"
                                />
                            </div>
                        ))}

                        {selectedImage && (
                            <div
                                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                                onClick={() => setSelectedImage(null)}
                            >
                                <div
                                    className="relative w-3/4 max-w-4xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        className="absolute top-2 right-2 bg-white text-black rounded-full p-2 hover:bg-gray-300 transition-colors"
                                        onClick={() => setSelectedImage(null)}
                                        aria-label="Close image"
                                    >
                                        ✕
                                    </button>
                                    <img
                                        src={selectedImage}
                                        alt="Selected in gallery"
                                        className="w-full max-h-[60vh] rounded-lg"
                                    />
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DynamicTabContent;
