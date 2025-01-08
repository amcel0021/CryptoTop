import React from 'react'
import img from '../../imgassets/img4.jpg'

const Home = () => {
  return (
    <section id='Home'>
        <div class='text-white' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover'}}>
          <div class='text-white '>
          <div class='max-w-[850px] pb-30 w-full h-screen mx-auto text-center flex flex-col justify-center'>
              <h1 class='text-[20px] font-bold text-[#00df9a]'>  WELCOME TO CRYPTOTOP</h1>
              <p class='text-[35px] font-bold'>Empowering the Future of Finance</p>
              <p class='text-[20px]'>
                  Cryptotop is your go-to destination for all things cryptocurrency. 
                  Founded in 2024, our platform is dedicated to providing accessible education,
                  tools, and resources to help you navigate the exciting world of digital assets.  
              </p>
            <div class="flex justify-center">
              <button class="bg-[#7c4622] w-[200px] h-[50px] rounded-lg ml-8 mt-4 item">Get Started</button>
            </div>
          </div>
        
      </div>
      </div>
    </section>
    
  )
}

export default Home