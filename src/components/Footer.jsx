import React, { useState, useContext } from "react";
import 'flowbite';
import 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from "react-icons/bs"

import logo from '../assets/logoLDR.png'




const Footer = () => {

  

    return(
      <div>
        
<footer class="p-4 bg-inherit rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/#" class="hover:underline">LittleDogeRocket™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://t.me/Littledogerocket" class="mr-4 hover:underline md:mr-6 ">Telegram</a>
        </li>
        <li>
            <a href="/#" class="mr-4 hover:underline md:mr-6">Chart</a>
        </li>
        <li>
            <a href="/#" class="mr-4 hover:underline md:mr-6">Buy</a>
        </li>
        <li>
            <a href="/#" class="hover:underline">Contact us</a>
        </li>
    </ul>
</footer>

      </div>
    )
}

export default Footer;