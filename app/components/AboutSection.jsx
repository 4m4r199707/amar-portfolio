"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

import TabButton from "./TabButton";

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
          <li key={skill+index}>{skill}</li>
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
        {[
          "INFORMATION SCIENCE AND ENGINEERING",
        ].map((edu, index) => (
          <li key={edu+index}>{edu}</li>
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
          <li key={cert+index}>{cert}</li>
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
        <Image alt="about" src="/images/about.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            {`I'm a Technology enthusiastic irrespective of domains constantly
            exploring and understanding various technologies and principle
            behind those technologies. In the course of acquiring knowledge and
            understanding the latest technologies, I have developed robust
            concepts of computers and increasing my knowledge.`}
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
            {TAB_DATA.find((t)=>t.id===tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
