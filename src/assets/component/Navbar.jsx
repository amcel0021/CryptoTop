import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div class="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 class="w-full text-3xl font-bold text-[#00df9a]">CRYPTOTOP.</h1>
        <ul class="hidden md:flex">
            <li class="p-4"> 
              <a class="text-white-500 hover:text-[#248164] " href="#Home">Home</a>
            </li>
            <li class="p-4"> 
              <a class="text-white-500 hover:text-[#248164] " href="#About">About</a>
            </li>  <li class="p-4"> 
              <a class="text-white-500 hover:text-[#248164] " href="#">Roadmap</a>
            </li>
            <button class="bg-[#248164] w-[200px] h-[50px] rounded-md">Connect Wallet</button>
        </ul>
      
        <div onClick={handleToggleMobileMenu} class="block md:hidden " aria-label="Toggle mobile menu">
          {isMobileMenuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>     
    </div>

    <div class={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-black fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 ease-in-out duration-800 text-white`}>
      <h1 class="w-full text-3xl font-bold text-[#00df9a] px-4 mt-8">CRYPTOTOP.</h1>
      <ul class="p-4 uppercase ml-2">
        <li class="p-4"> 
          <a class="text-white-500 hover:text-[#248164] " href="#">Home</a>
        </li>
        <li class="p-4"> 
          <a class="text-white-500 hover:text-[#248164] " href="#">About</a>
        </li>  <li class="p-4"> 
          <a class="text-white-500 hover:text-[#248164] " href="#">Roadmap</a>
        </li>
        <button class="bg-[#248164] w-[200px] h-[50px] rounded-lg ml-8 mt-4">Connect Wallet</button>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;