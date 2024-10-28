"use client"
import React, { useRef } from 'react'
import ProjectCards from './ProjectCards'
import { animate, motion, useInView } from 'framer-motion'

const projectsData = [
  {
    id: 1,
    title: "Incident Monitoring and Response System (IMRS) ",
    type: "React Native Mobile Application",
    description: "Collaborated with A-Shield, LLC and UNT to develop a mobile safety app for improving law enforcement response during active shooter incidents. Built within React Native and powered by AWS Lambda and DynamoDB, the app provides real-time user updates on a dynamic map using Google Maps API, allowing first responders to access critical, location-specific information in real time.",
    image: "/images/IMRS.jpeg",
    gitUrl: "https://github.com/Control-Shift-Create-Capstone-23-24/IMRS-React-Native",
  },
  {
    id: 2,
    title: "Jules Crafting Corner",
    type: "E-Commerce Website",
    description: "Led a team of three in developing a secure, dynamic e-commerce platform for unique, handcrafted goods, focusing on customer experience and data protection. Built with HTML, CSS, PHP, and JavaScript for seamless navigation and user customization. Integrated robust security features, including multifactor authentication, a PayPal payment gateway, and HTTPS encryption. Conducted vulnerability assessments with Nessus and simulated DDoS attacks to ensure system resilience.",
    image: "/images/Jules.jpeg",
    gitUrl: "https://github.com/Brian121301/Jules-Crafting-Corner",
  },
  {
    id: 3,
    title: "Brian's Portfolio Website",
    type: "React Developer Portfolio",
    description: "Developed a personal portfolio website with Next.js and Tailwind CSS to showcase skills and projects to employers. Features include a dynamic hero section, 'About Me' with skills and education, a project gallery linking to GitHub, and a 'Contact Me' form with Resend API for direct messaging. Hosted on AWS for scalability, the site emphasizes responsive design and web development expertise.",
    image: "/images/portfolio.png",
    gitUrl: "https://github.com/Brian121301/Web-Portfolio",
  },
]
const ProjectsSection = () => {

  const ref = useRef(null);
  const isinView = useInView(ref, { once: true })

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id='projects' ref={ref} className='space-y-4 pt-24'>
          <div className='flex flex-row text-center justify-center text-6xl font-bold my-10'>
           <h2 className='text-slate-200'>My</h2>
           <h2 className='pl-3 bg-clip-text text-transparent bg-gradient-to-r from-[#a2d6e5] to-[#bdb8b8]'>Projects</h2> 
           
          </div>
      {/* <h2 className='text-6xl text-white font-bold text-center my-10'>My Projects</h2> */}
      <ul ref={ref} className='grid gap-8 md:grid-cols-3 md:gap-12'>{projectsData.map((project, index) => (
        <motion.li 
        key={index}
        variants={cardVariants} 
        initial="initial" 
        animate={isinView ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: index * 0.4 }}>
          <ProjectCards
            key={project.id}
            title={project.title}
            type={project.type}
            descrpition={project.description}
            gitURL={project.gitUrl}
            imgURL={project.image}/>
        </motion.li>
      ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
