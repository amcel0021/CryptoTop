import React from 'react';
import img from '../../imgassets/pic5.png';

const About = () => {

    
  return (

    <section id='About'>
        <div className='w-full h-5/6 bg-slate-50 py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
            <div className='flex items-center justify-center'>
            <img className='w-full h-auto rounded-lg object-cover' src={img} alt="Cryptotop" />
            </div>
            <div className='flex flex-col justify-center'>

            <h1 className='font-bold text-[#2e886c] text-[25px] mb-4'>ABOUT CRYPTOTOP</h1>
            <p className='text-[18px] text-black mb-6'>
                Cryptotop is your go-to destination for all things cryptocurrency.
                Founded in 2024, our platform is dedicated to providing accessible education,
                tools, and resources to help you navigate the exciting world of digital assets.
            </p>

            <h1 className='font-bold text-[#2e886c] text-[25px] mb-4'>OUR MISSION</h1>
            <p className='text-[18px] text-black mb-6'>
                Our mission is to empower individuals by providing the knowledge and tools necessary to navigate the world of cryptocurrency.
                We aim to foster innovation and create a supportive community that drives the adoption and growth of blockchain technology.
            </p>

            <h1 className='font-bold text-[#2e886c] text-[25px] mb-4'>OUR VISION</h1>
            <p className='text-[18px] text-black'>
                We envision a future where cryptocurrency is mainstream and accessible to all. Through education,
                innovation, and community engagement, we're driving the global transition to a decentralized financial system.
            </p>

            
            </div>
        </div>
        </div>
    </section>
   
  );
}

export default About;
