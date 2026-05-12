"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2 text-white'>
        <li>NodeJs</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>SQL</li>
        <li>React</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2 text-white'>
        <li>Bachelor of Science, University of North Texas</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className='pl-2'>
        <li>
  <a 
  href="https://www.credly.com/badges/36907eff-cd78-49db-a1ae-091c83aaa100/public_url" target="_blank" rel="noopener noreferrer" 
  className="flex items-center space-x-2 text-white hover:text-[#a2d6e5]">
    <Image
      src="/images/CloudBadge.png"
      alt="cloud image"
      className=""
      width={50}
      height={50}
    />
    <span>AWS Cloud Practitioner</span>
  </a>
</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id='about' className=''>
      <div className='md:grid md:grid-cols-2 items-center xl:16 xl:px-12 sm:py-12 h-full'>
        <div className=''>
          <Image
            src="/images/standing.jpg"
            className='rounded-full'
            width={400}
            height={400}
            alt="standing picture"
          />
        </div>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <div className='flex flex-row text-6xl font-bold pb-2'>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-[#a2d6e5] to-[#bdb8b8]'>About</h2>
            <h2 className='text-slate-200 pl-3'>Me</h2>
          </div>
          
          <div className='space-y-2 my-2 text-md bg-clip-text text-transparent bg-gradient-to-r from-[#a2d6e5] to-[#bdb8b8]'>
            <p>
            Hi, I’m Brian Najera Gonzales, a Software Developer with a Computer Science degree from the University of North Texas 
            and professional experience building and maintaining large-scale internal CRM systems.
            </p>
            <p>
            At Paycom, I work on developing and enhancing full-stack applications used by marketing and sales teams, focusing on 
            scalable backend systems, dynamic user interfaces, and workflow automation. My work includes building reusable APIs, 
            optimizing database performance, and integrating systems and third party software that improve data visibility and 
            operational efficiency across business teams.
            </p>
            <p>
            I also have experience developing full-stack and cloud-based applications using technologies such as AWS, React Native, 
            and REST APIs. Outside of work, I’ve built projects involving real-time systems, geolocation tracking, and secure 
            application design.
            </p>
            <p>
            I’m always eager to tackle new challenges, so feel free to check out my work and reach out!
            </p>
          </div>
          <div className='text-white'>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}>
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}>
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
