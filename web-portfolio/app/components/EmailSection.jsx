"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { POST } from '../api/send/route';

const EmailSection = () => {

    const [emailSubmitted, setemailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
    
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
    
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };
    
        const response = await fetch(endpoint, options);
        
        // Check if the response is OK (status code 200-299)
        if (response.ok) {
            const resData = await response.json();
            console.log('Message Sent.', resData);
            setemailSubmitted(true);
        } else {
            // If not OK, log the response for debugging
            const errorText = await response.text(); // Get error text
            console.error('Error:', errorText);
            throw new Error('Error sending message: ' + errorText);
        }
    };

    return (
        <section id='contact' className='grid md:grid-cols-2 my-12 py-24 gap-4'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>Let's connect</h5>
                <p className='pr-32 mb-4'>
                    {" "}
                    I’m currently seeking new job opportunities and my inbox is always open. 
                    If you have a question, want to discuss potential roles, or just want to 
                    say hi, I’ll get back to you as soon as possible. I look forward to hearing 
                    from you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href={'github'}>
                        <AiFillGithub className='w-8 h-8 text-white hover:text-slate-300' />
                    </Link>
                    <Link href={'LinkedIn'}>
                        <AiFillLinkedin className='w-8 h-8 text-white hover:text-slate-300' />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div className=''>
                        <label htmlFor='email' className='text-white mb-2 block text-sm font-medium'>
                            Your Email
                        </label>
                        <input 
                        name='email'
                        type='email' 
                        id='email' 
                        required 
                        placeholder='example@email.com'
                        className='bg-[#18191E] border border-[#33353F] place-holder-[#9CA2A9] text-gray-100 text-sm rounded-lg lock w-full p-2'
                        />
                    </div>
                    <div>
                        <label htmlFor='subject' className='text-white mb-2 block text-sm font-medium'>
                            Subject
                        </label>
                        <input 
                        name='subject'
                        type='text' 
                        id='subject' 
                        required 
                        placeholder='Just Saying Hi!'
                        className='bg-[#18191E] border border-[#33353F] place-holder-[#9CA2A9] text-gray-100 text-sm rounded-lg lock w-full p-2'
                        />
                    </div>
                    <div>
                    <label htmlFor='message' className='text-white mb-2 block text-sm font-medium'>
                            Message
                        </label>
                        <textarea 
                        name='message'
                        id='message'
                        className='bg-[#18191E] border border-[#33353F] place-holder-[#9CA2A9] text-gray-100 text-sm rounded-lg lock w-full p-2'
                            placeholder='Leave Your Message Here'
                        />
                    </div>
                    <button type='submit' className='bg-white hover:bg-slate-300 text-black font-medium rounded-lg w-full'>
                    Submit
                    </button>
                    {
                        emailSubmitted && (
                            <p className='text-sm pt-2 text-white'>
                                Message Sent Successfully! I will get back to you as soon as I can!
                            </p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}

export default EmailSection
