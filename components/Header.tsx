import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from "framer-motion"
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-5 z-10">
        <motion.div 
        initial={{x:-500, opacity:0, scale:0.5}}
        animate={{x:0, opacity:1, scale:1}}
        transition={{duration:1.5,}}
        className="flex flex-row items-center">
          
        <div>
          <img alt='logo' object-left-top object-scale-down h-10 w-10 src='https://i.postimg.cc/fydX6Kbq/va.jpg'/>
        </div>

            {/* Social Icons */}
            <SocialIcon className="hover:scale-125 transition-all" target="_blank" url="https://linkedin.com/in/vyshnav-ajith/" fgColor="gray" bgColor="transparent"/>
            <SocialIcon className="hover:scale-125 transition-all" target="_blank" url="https://github.com/vyshaj" fgColor="gray" bgColor="transparent"/>
            <SocialIcon className="hover:scale-125 transition-all" target="_blank" url="https://www.instagram.com/vichuuuuuuuuuuu/" fgColor="gray" bgColor="transparent"/>
            

        </motion.div>

        <motion.div 
        initial={{x:500, opacity:0, scale:0.5}}
        animate={{x:0, opacity:1, scale:1}}
        transition={{duration:1.5,}}
        className="cursor-pointer flex flex-row items-center">
          
          <Link href="#contact">
            <div className="flex flex-row items-center">
              <SocialIcon className="hover:scale-125 transition-all" network="email" fgColor="gray" bgColor="transparent" />
              <p className="hidden md:inline-flex text-sm text-gray-500"></p>
            </div>
          </Link>

        </motion.div>
    </header>
  )
}