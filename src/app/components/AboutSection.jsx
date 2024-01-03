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
        <li>Website, blog, chat app, wiki included for free</li>
        <li>Industry-Specific Insights</li>
        <li>Workmates hiring hives</li>
        <li>Job scraping</li>
        <li>AI content creation</li>
        <li>AI cover letter generation</li>
        <li>Automation</li>
        <li>Chat</li>
        <li>Docker</li>
        <li>Templates (Next.js, React, Hugo, and more)</li>
      </ul>
    ),
  },
  {
    title: "uses",
    id: "uses",
    content: (
      <ul className="list-disc pl-2">
        
        
        <li>Build a website (included)</li>
        <li>Start a blog (included)</li>
        <li>Start a social network (included)</li>
        <li>Spin up a dashboard (included)</li>
        <li>Deliver online courses (included)</li>
        <li>Share files securely (included)</li>
        <li>Set up a family media server</li>
        <li>Create a development environment</li>
        <li>Automate content creation with AI</li>


      </ul>
    ),
  
    
  
  },
  {
    title: "Apps",
    id: "apps",
    content: (
      <ul className="list-disc pl-2">
        <li>Wordpress</li>
        <li>Rocket.chat</li>
        <li>Ghost</li>
        <li>Organizr</li>
        <li>Databag</li>
        <li>Moodle</li>
        <li>Nextcloud</li>
        <li>100&apos;s more</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>System administration</li>
        <li>Web development</li>
        <li>UI/UX design</li>
        <li>Automation</li>
        <li>Digital Marketing</li>
        <li>Teaching</li>
        <li>AI</li>
      </ul>
      ),
  },  
    {
      title: "Vision",
      id: "vision",
      content: (
        <ul className="list-disc pl-2">
          <li>Data privacy</li>
          <li>Technological self-sufficiency</li>
          <li>Ultimate sandboxing</li>
          <li>Maximum value</li>
          <li>Open-source</li>
          <li>Affordable</li>
          <li>Approachable</li>
        </ul>
      ),
    },
    {
      title: "Costs",
      id: "costs",
      content: (
        <ul className="list-disc pl-2">
          <li>$7/mo (4-core CPU, 8GB RAM, 50GB storage)</li>
        </ul>
      ),
    },
    {
      </ul>
    {
      title: "Vision",
      id: "vision",
      content: (
        <ul className="list-disc pl-2">
          <li>Data privacy</li>
          <li>Technological self-sufficiency</li>
          <li>Ultimate sandboxing</li>
          <li>Maximum value</li>
          <li>Open-source</li>
          <li>Affordable</li>
          <li>Approachable</li>
        </ul>
      ),
    },
    {
      title: "Costs",
      id: "costs",
      content: (
        <ul className="list-disc pl-2">
          <li>$7/mo (4-core CPU, 8GB RAM, 50GB storage)</li>
        </ul>
      ),
    },
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

  const [tab, setTab] = useState("features");
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
        <Image style={{ borderRadius: 16}}src="/images/neon.webp" width={500} height={500}   />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">A Digital Home Away From Home</h2>



          <p className="text-base lg:text-lg">
            Get maximum value from your own personal cloud.  Dojos is &quot;your place, your way&quot;, and it costs less than 25 cents a day.

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
            Dial in your digital lives.  Get maximum value from free and open-source apps in your own cloud.  A Dojo, your "place of the way" is just a few clicks away.  Take back your data and ditch your dependency on Big Tech by hosting your own.
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
              selectTab={() => handleTabChange("uses")}
              active={tab === "uses"}
            >
              {" "}
              Uses{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Features{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("vision")}
              active={tab === "vision"}
            >
              {" "}
              Vision{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("costs")}
              active={tab === "costs"}
            >
              {" "}
              Costs{" "}
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
