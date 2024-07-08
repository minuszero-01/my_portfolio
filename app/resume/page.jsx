"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGit,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";

//about

const about = {
  title: "About me",
  description: "I am a 4th year CSE from MIT ADT University.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Harsh Hande",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 7977914959",
    },
    {
      fieldName: "Experience",
      fieldValue: "Fresher",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "harshhande95@gmail.com",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi, Marathi",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have done internship as a web developer in a startup. Teachnologies i work on were ReactJS, Golang, TailwindCss, Postgres SQL",
  items: [
    {
      company: "Innovation Hacks AI",
      position: "Web Developer",
      duration: "March 2024 - May 2024",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  // description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut labore quae mollitia, temporibus pariatur est adipisci.",
  items: [
    {
      Institution: "D.A.V. International School",
      degree: "HSC (10th)",
      duration: "March 2018",
      grade: "87.8 %",
    },
    {
      Institution: "D.A.V. International School",
      degree: "SSC (12th)",
      duration: "March 2020",
      grade: "75 %",
    },
    {
      Institution: "MIT ADT University",
      degree: "B.Tech CSE",
      duration: "June 2020 - July 2024",
      grade: "8.35 CGPA",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Technologies I work with. Also Passionate about learning new things.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaGit />,
      name: "Git and Github",
    },
    {
      icon: <SiExpress />,
      name: "Express JS",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiPostgresql />,
      name: "Postgres",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center  py-12 xl:py-0 "
    >
      <div className="container mx-auto ">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skill">Skill</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className=" min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <p className="text-white/60 mx-auto xl:mx-0 ">
                  {experience.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center  lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <div className=" text-white/60">{item.company}</div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="text-white/60 mx-auto xl:mx-0 ">
                  {education.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329]  h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px]  text-center  lg:text-left">
                            {item.degree}
                          </h3>
                          <h5 className="min-h-[60px]">{item.grade}</h5>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <div className=" text-white/60">
                              {item.Institution}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skill" className="w-full h-full  ">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl text-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className=" grid grid-cols-1 xl:grid-cols-2  gap-x-10 gap-y-6  justify-center w-full  xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-center items-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 ">{item.fieldName}</span>
                        <span className="text-lg text-nowrap">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
