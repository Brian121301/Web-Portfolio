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
    <section id='about' className='mt-32 pt-6'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:16 xl:px-12 sm:py-12 h-full'>
        <div className='h-full mr-6'>
          <Image
            src="/images/sitting2.jpg"
            width={900}
            height={900}
            alt="sitting picture"
          />
        </div>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <div className='flex flex-row text-6xl font-bold pb-2'>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-[#a2d6e5] to-[#bdb8b8]'>About</h2>
            <h2 className='text-slate-200 pl-3'>Me</h2>
          </div>
          
          <div className='space-y-2 my-2 text-md bg-clip-text text-transparent bg-gradient-to-r from-[#a2d6e5] to-[#bdb8b8]'>
            <p>
              Hi, I’m Brian Najera Gonzales, a dedicated Full Stack Developer with a Computer Science degree
              from the University of North Texas.
              My experience spans both frontend and backend development. I’ve built projects like Jules Crafting
              Corner, an e-commerce platform focused on security and user experience, and an Incident Monitoring
              System designed to improve law enforcement response times using real-time geofencing and AWS services.
            </p>
            <p>
              I recently earned my AWS Cloud Practitioner certification, expanding my skills in cloud computing
              and serverless architectures, and I’m always eager to tackle new challenges, so feel free to check out my
              work and reach out!
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
