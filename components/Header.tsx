import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://linkedin.com/in/pourya-bahramipour-79a6ba93/"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-125 transition-all duration-300 "
        />
        <SocialIcon
          url="https://github.com/PouriaBahramipour"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-125 transition-all duration-300 "
        />
        <SocialIcon
          url="https://t.me/pourya_bahramipour"
          fgColor="gray"
          bgColor="transparent "
          className="hover:scale-125 transition-all duration-300 "
        />
        <SocialIcon
          url="https://www.instagram.com/pourya_bahramipour"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-125 transition-all duration-300 "
        />
        <SocialIcon
          url="https://twitter.com/pouryataloo"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-125 transition-all duration-300 "
        />
        <SocialIcon
          url="https://www.facebook.com/pourya.papo.98/"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-125 transition-all duration-300 "
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer hover:scale-125 transition-all duration-300 "
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
