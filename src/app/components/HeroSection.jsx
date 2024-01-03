"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Dojos{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Free",
                1000,
                "Fun",
                1000,
                "Easy",
                1000,
                "Are",
                1000,
                "You",
                1000,
                "Ready",
                1000,
                "To",
                1000,
                "Take",
                1000,
                "The",
                1000,
                "...",
                1000,
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
<<<<<<< HEAD
            Take the 60-day self-hosting challenge and behold the many wonders of open-source technology.
=======
            The 60-Day Self-Hosting Challenge!
>>>>>>> fb2f328b212e2e1669997e45d1da120c900e36cb
          </p>
          <div>
            <Link
              href="https://blog.workdojos.com/#/portal/signup"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Join for Free
            </Link>
            <Link
              href="#contact"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                60-Day Self-Hosting Challenge
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="lg:w-[400px] lg:h-[300px] relative ">
            <Image
              style={{borderRadius: 20}}
<<<<<<< HEAD
              src="/images/winner.gif"
<<<<<<< HEAD
              alt="A beautiful Asian woman smiling and lighting up"
=======
              alt="A beautiful Swedish woman typing"
>>>>>>> 8c8257f6e7c7765a2a3fa7d483d9a8799bf0e5ae
=======
              src="/images/sandbox tv.svg"
              alt="A vintage tv depicting a tropical paradise"
>>>>>>> 2d0463812d371b3918accc9a1accd2618492073b
              className=".img-container"
              width={307}
              height={307}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
