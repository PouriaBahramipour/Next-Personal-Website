import React from "react";
import { easeInOut, motion } from "framer-motion";

type Props = {
  srcImage: string;
  skillLevel: number;
};

export default function Skill({ srcImage, skillLevel }: Props) {
  return (
    <div className="group relative flex cursor-pointer mt-5 justify-center items-center">
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.2, ease: easeInOut }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={srcImage}
        className="w-20 h-20 rounded-full object-cover  border-2 border-gray-500 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-yellow-500 rounded-full w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 ">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold opacity-100 text-black">
            {skillLevel}%
          </p>
        </div>
      </div>
    </div>
  );
}
