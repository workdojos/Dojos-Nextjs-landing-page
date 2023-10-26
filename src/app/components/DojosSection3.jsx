"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 1,
    title: "Growers",
    description: "As an Account Executive, leverage open-source CRM software to seamlessly manage client relationships, track sales activities, and analyze data, enhancing sales effectiveness and productivity.",
    image: "/images/projects/growers.jpg",
    tag: ["All", "Health & Wellness"],
    gitUrl: "https://og.admins.live/#Growers",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Doctors",
    description: "Open-source technology can be used by administrators to create a collaborative task management platform, allowing teams to efficiently coordinate and track their progress while fostering a sense of shared responsibility and engagement.",
    image: "/images/projects/clinician.jpg",
    tag: ["All", "Health & Wellness"],
    gitUrl: "https://og.admins.live/#Doctors",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Explorers",
    description: "Use open-source technology to create a virtual reality showroom for car dealers, allowing customers to explore and customize vehicles from the comfort of their homes.",
    image: "/images/projects/explorers.jpg",
    tag: ["All", "Travel"],
    gitUrl: "https://og.admins.live/#Explorers",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Life Coaches",
    description: "As a clerk, you can utilize open-source technology to automate document management and streamline administrative tasks, improving efficiency and reducing manual workload.",
    image: "/images/projects/lifecoaches.jpg",
    tag: ["All", "Health & Wellness"],
    gitUrl: "https://og.admins.live/#Life-Coaches",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Neighbors",
    description: "Utilizing open-source social media analytics tools, digital marketers can gain valuable insights on audience behavior, optimize campaigns, and measure the impact of their strategies, all while saving costs and fostering collaboration within the marketing team.",
    image: "images/projects/neighborly.jpg",
    tag: ["All", "Public Services"],
    gitUrl: "https://og.admins.live/#Neighbors",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Park Rangers",
    description: "Open-source technology can be used by lead generators to build a customizable chatbot that automates lead qualification and captures valuable customer information, enhancing efficiency and improving lead generation efforts.",
    image: "/images/projects/parkranger.jpg",
    tag: ["All", "Public Services"],
    gitUrl: "https://og.admins.live/#Park-Rangers",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Pharmacists",
    description: "Open-source technology can be utilized by news correspondents to create an AI-powered fact-checking tool that automatically verifies information in real-time, enabling accurate reporting and combating misinformation.",
    image: "/images/projects/pharmacists.jpg",
    tag: ["All", "Health & Wellness"],
    gitUrl: "https://og.admins.live/#Pharmacists",
    previewUrl: "/images/projects/academies.jpg",
  },
  {
    id: 8,
    title: "Physical Therapists",
    description: "PR Representative: Utilizing open-source technology, create a dynamic media monitoring dashboard that consolidates real-time news mentions and social media analytics, enabling PR representatives to track and analyze brand sentiment and campaign effectiveness more efficiently.",
    image: "/images/projects/physicaltherapist.jpg",
    tag: ["All", "Health & Wellness"],
    gitUrl: "https://og.admins.live/#Physical-Therapists",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Nurses",
    description: "Open-source project management software provides collaborative task tracking and real-time updates, empowering project managers to efficiently coordinate teams and streamline project workflows.",
    image: "/images/projects/registerednurse.jpg",
    tag: ["All", "Health & Wellness"],
    gitUrl: "https://og.admins.live/#Nurses",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Social Workers",
    description: "Open-source technology can be used by retailers to create personalized shopping experiences through AI-powered recommendation systems, enhancing customer satisfaction and boosting sales.",
    image: "/images/projects/socialworker.jpg",
    tag: ["All", "Public Services"],
    gitUrl: "https://og.admins.live/#Social-Workers",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Travel Agents",
    description: "Create an open-source virtual sales training platform that combines interactive simulations and AI-powered coaching to enhance sales coaching effectiveness, empowering sales coaches to train and mentor their teams remotely with engaging, personalized experiences.",
    image: "images/projects/travelagents.jpg",
    tag: ["All", "Travel"],
    gitUrl: "https://og.admins.live/#Travel-Agents",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Yoga Instructors",
    description: "Open-source technology can be utilized by telemarketers to create a personalized voice-bot assistant that dynamically adapts its responses based on caller preferences, enhancing customer engagement and satisfaction. This intelligent system can be further integrated with CRM platforms and analytics tools to optimize lead conversion rates and improve overall telemarketing performance.",
    image: "/images/projects/yogainstructor.jpg",
    tag: ["All", "Health & Wellness"],
    gitUrl: "https://og.admins.live/#Yoga-Instructors",
    previewUrl: "/",
  },
];

const DojosSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = dojosData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="dojos">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Health & Happiness
      </h2>
      <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="Health & Wellness"
          isSelected={tag === "Marketing"}
        />
        </div>
        <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">
        
        <ProjectTag
          onClick={handleTagChange}
          name="Travel"
          isSelected={tag === "Travel"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Public Services"
          isSelected={tag === "Public Services"}
        />
        </div>
  
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>

  );
};

export default DojosSection;
