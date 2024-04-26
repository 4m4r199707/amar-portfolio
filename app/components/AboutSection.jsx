"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

import TabButton from "./TabButton";
import AboutImage from "../../public/images/About.jpeg";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        {[
          "React Js",
          "Node Js",
          "Express",
          "Azure",
          "Next Js",
          "MySQL",
          "JavaScript",
        ].map((skill, index) => (
          <li key={skill + index}>{skill}</li>
        ))}
      </ul>
    ),
  },
  //   {
  //     title: "Experience",
  //     id: "experience",
  //     content: (
  //       <ul>
  //         {[
  //           "Tredence Analytics",
  //           "Infosys LTD"
  //         ].map((exp, index) => (
  //           <li key={exp+index}>{exp}</li>
  //         ))}
  //       </ul>
  //     ),
  //   },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        {["INFORMATION SCIENCE AND ENGINEERING"].map((edu, index) => (
          <li key={edu + index}>{edu}</li>
        ))}
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul>
        {[].map((cert, index) => (
          <li key={cert + index}>{cert}</li>
        ))}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image alt="about" src={AboutImage} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            {`As a technology enthusiast, I have mastered full-stack development with a specialization in React, Node.js, and Azure. My journey is fueled by a relentless quest for understanding, leading to a deep knowledge of computers and a passion for innovation. With my expertise in React and Node.js, I can create dynamic, user-friendly interfaces and robust backend systems. Additionally, my knowledge of Azure enables me to deploy scalable cloud solutions. My commitment to continuous learning positions me as a forward-thinking full-stack developer, always ready to tackle complex challenges and drive innovation.`}
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton> */}
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certification
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
