"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderbtn from "@/components/WorkSliderbtn";

const projects = [
  {
    num: "01",
    category: "Full Stack Project",
    title: "Project 1",
    description:
      "A Paytm Wallet where you can transfer your money to the wallet. P2P Tranfer feature to send money to friends.",
    stack: [
      {
        name: "NextJS",
      },
      {
        name: "ExpressJS",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "TailwindCSS",
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/minuszero-01/Paytm2",
  },
  {
    num: "02",
    category: "Web Sockets and WebRTC",
    title: "Project 2",
    description:
      "A P2P video calling Application using WebSockets(Socket.io) and WebRTC",
    stack: [
      {
        name: "Node JS",
      },
      {
        name: "Express JS",
      },
      {
        name: "WebRTC",
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/minuszero-01/WebRTC-P2P-",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get Currect Slide Index
    const currentIndex = swiper.activeIndex;

    //Update project based on current index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.5,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className=" w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            {/* project num */}
            <div className=" flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl text-transparent leading-none font-extrabold text-outline">
                {project.num}
              </div>
              {/* Project Category  */}
              <h2 className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex flex-col sm:flex-row  gap-4 ">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent ">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex gap-4  items-center ">
                {/* Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center hover:text-accent transition-all duration-500  group">
                        {/* <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" /> */}
                        Live
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project (Working on Deployment)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github Project Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Gitub Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className=" w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px]  relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className=" relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Buttons */}
              <WorkSliderbtn
                containerStyles="  flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full  justify-between xl:w-full xl:justify-none"
                iconsStyles=""
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] rounded-full flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
