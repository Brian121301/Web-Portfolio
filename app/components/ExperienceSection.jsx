"use client"
import React from 'react'
import Image from 'next/image'

const ExperienceSection = () => {
  return (
    <section id="experience" className="mt-24">
      <div className="h-full">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="flex flex-row text-6xl font-bold pb-2">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#a2d6e5] to-[#bdb8b8]">
              Experience
            </h2>
          </div>
          <div className='flex flex-row space-x-10'>
            <div className="space-y-2 my-2 text-md bg-clip-text text-transparent bg-gradient-to-r from-[#a2d6e5] to-[#bdb8b8]">
              <h4>
                <b>Paycom</b>
              </h4>
              <h6>
                <b>Software Developer II</b>
              </h6>
              <h6>
                March 2025 - Present
              </h6>
              <ul className="list-disc pl-2 text-white">
                <li>
                  Built and enhanced scalable CRM systems used by marketing and
                  sales teams, delivering full-stack features that improved
                  internal workflows and data visibility
                </li>
                <li>
                  Developed dynamic UI components and RESTful backend APIs to
                  support reporting, workflow automation, and real-time data
                  management
                </li>
                <li>
                  Designed reusable backend systems and optimized complex SQL
                  queries to improve application performance, scalability, and
                  maintainability across multiple CRM features
                </li>
                <li>
                  Partnered directly with stakeholders and cross-functional
                  teams to define requirements, iterate on solutions, and
                  deliver production-ready enhancements aligned with business
                  needs and user feedback
                </li>
              </ul>
            </div>
            <div className="mr-6">
              <Image
                src="/images/paycomLogo.png"
                className='rounded-full'
                width={500}
                height={500}
                alt="Paycom Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
