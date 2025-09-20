import TiltedCard from "@/react-bits-comp/tilted_card";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    image: "/projects/darkest_coder.png",
    title: "Darkest Coder",
    description:
      "A coding platform built for developers to share, learn and grow. Includes curated resources, challenges, and community support.",
  },
  {
    image: "/projects/devsthana.png",
    title: "Devsthana - Devotional",
    description:
      "A devotional website providing daily prayers, spiritual articles, and AI-assisted guidance to help users connect with their faith easily.",
  },
  {
    image: "/projects/blackensys.png",
    title: "Blackensys File Storage",
    description:
      "A smart file storage system with AI-powered assistant, secure folders, drag-and-drop uploads, and advanced search features.",
  },
  {
    image: "/projects/funky-design.png",
    title: "Funky Design - Portfolio",
    description:
      "A creative portfolio website showcasing innovative designs, projects, and UI/UX experiments for designers and developers.",
  },
];

const ProjectSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-20 min-h-screen relative py-20 px-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-10 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Image with Tilt */}
          <TiltedCard
            imageSrc={project.image}
            altText={project.title}
            captionText={project.title}
            containerHeight="400px"
            containerWidth="600px"
            imageHeight="400px"
            imageWidth="600px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />

          {/* Content */}
          <div className="text-left max-w-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-bricolage-grotesque">
              {project.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {project.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectSection;
