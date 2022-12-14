import React, { useState, useContext } from "react";
import 'flowbite';
import 'flowbite-react';

import logo from '../assets/logoLDR.png'




const Navigation = () => {
  const hidden = "hidden justify-between items-center w-full md:flex md:w-auto md:order-1";
  const show = "justify-between items-center w-full md:flex md:w-auto md:order-1"
  const [dropDownStyle, setdropDownStyle] = useState(hidden);
  const dropDown = () => {
    if(dropDownStyle === hidden){
      setdropDownStyle(show);
    } else {
      setdropDownStyle(hidden);
    }
  }
  

    return(
      <div>
<nav class="bg-gray-700 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 fixed w-full z-20 top-0 left-0 hover:bg-slate-700 ">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="/#" class="flex items-center">
      <img src={logo} class="mr-3 h-6 sm:h-9 rounded-full" alt="Flowbite Logo" />
      <span class="self-center text-xl text-white font-semibold whitespace-nowrap dark:text-white">L D R</span>
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">BUY LDR</button>
      <button onClick={dropDown} data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class={dropDownStyle} id="navbar-cta">
    <ul class="flex flex-col p-4 mt-4 bg-inherit rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:text-xl md:mt-0  md:font-medium md:border-0 md:bg-inherit dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="https://t.me/Littledogerocket" onClick={dropDown} class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Telegram</a>
      </li>
      <li>
        <a href="/#" onClick={dropDown} class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Chart</a>
      </li>
      <li>
        <a href="/#" onClick={dropDown} class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Proposal</a>
      </li>
      <li>
        <a href="/#" onClick={dropDown} class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
      </div>
    )
}

export default Navigation;