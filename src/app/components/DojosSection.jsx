"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dojosData = [
  {
    id: 1,
    title: "Academic",
    description: "Create an open-source virtual classroom platform that empowers academic faculty to engage students in interactive and immersive learning experiences, fostering collaboration and knowledge sharing.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://academies.workdojos.com/",
    previewUrl: "https://www.aza.org/",
  },
  {
    id: 2,
    title: "IMATA",
    description: "2. International Marine Animal Trainers Association (IMATA) - IMATA offers resources specifically for those interested in animal training. Their website provides access to publications, training techniques, and networking opportunities.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://www.imata.org/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "AAZK",
    description: "3. American Association of Zoo Keepers (AAZK) - AAZK offers professional development opportunities, including conferences, workshops, and certifications, to help zookeepers enhance their skills in various areas, such as animal behavior and husbandry.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://aazk.org/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "WCS",
    description: "4. Wildlife Conservation Society (WCS) - The WCS website provides valuable information on wildlife management and conservation. Additionally, they offer training courses and job opportunities for those interested in working in this field.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://www.wcs.org/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "ZooBiology",
    description: "5. ZooBiology - This online resource features numerous articles, webinars, and forums focused on various aspects of zookeeping, including animal nutrition, veterinary medicine, and environmental enrichment.",
    image: "images/projects/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://onlinelibrary.wiley.com/journal/10982361",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "ZAA",
    description: "6. Zoo and Aquarium Association (ZAA) - ZAA offers educational programs, workshops, and networking events for zookeepers interested in learning about different species and advancing their career in the industry.",
    image: "/images/projects/6.jpg",
    tag: ["All"],
    gitUrl: "https://www.zooaquarium.org.au/",
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
        Dojos
      </h2>
      <div className="text-white flex flex-flow justify-center items-center gap-2 pb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
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
