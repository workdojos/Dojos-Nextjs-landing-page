"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Features",
    id: "features",
    content: (
      <ul className="list-disc pl-2">
        <li>Industry-Specific Insights (ISI)</li>
        <li>Workmates hiring hives</li>
        <li>Job scraping</li>
        <li>AI content creation</li>
        <li>AI cover letter generation</li>
        <li>Templates (Next.js, React, Hugo, and more)</li>
        <li>Automation</li>
        <li>Chat</li>
        <li>Docker containerization</li>
        <li>Blog</li>

        <li>Community collaboration</li>
      </ul>
    ),
  },
  {
    title: "use-cases",
    id: "use-cases",
    content: (
      <ul className="list-disc pl-2">
        <li>Build a website</li>
        <li>Start a blog (for free!)</li>
        <li>Set up a family media server</li>
        <li>Start a social network</li>
        <li>Create a development environment</li>
        <li>Automate content creation with AI</li>
        <li>Spin up a dashboard</li>
        <li>Organize notes</li>
        <li>Deliver online courses</li>
        <li>Share files securely</li>
        <li>Recruit teammates</li>


      </ul>
    ),
  
    
  
  },
  {
    title: "Apps",
    id: "apps",
    content: (
      <ul className="list-disc pl-2">
        <li>Mastodon</li>
        <li>Rocket.chat</li>
        <li>Ghost</li>
        <li>Wordpress</li>
        <li>Flame</li>
        <li>Organizr</li>
        <li>Databag</li>
        <li>Obsidian</li>
        <li>Moodle</li>
        <li>Nextcloud</li>
        <li>and more</li>
      </ul>
    ),
  },

];

const AboutSection = () => {
  const [tab, setTab] = useState("use-cases");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image style={{ borderRadius: 16}}src="/images/spark.gif" width={500} height={500}   />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Dojos </h2>
          <p className="text-base lg:text-lg">
            A digital home away from home.
          <br></br>
          <br></br>
          </p>


          <p className="text-base lg:text-lg">
            Back to roots digital bliss.  Host your own server with a little help.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("features")}
              active={tab === "features"}
            >
              {" "}
              Features{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("apps")}
              active={tab === "apps"}
            >
              {" "}
              Apps{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("use-cases")}
              active={tab === "use-cases"}
            >
              {" "}
              Use-cases{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
