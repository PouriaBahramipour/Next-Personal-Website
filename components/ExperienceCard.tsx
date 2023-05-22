import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col mt-8 snap-center bg-[#292929] p-4 rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] xl:mt-32 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://media.licdn.com/dms/image/C4D12AQGp7-xvaiH1mA/article-cover_image-shrink_600_2000/0/1520122127770?e=2147483647&v=beta&t=SZesB47T-m-ShAUtRpgFI8fX2wQSo4meaxm-3bnoEQk"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Frontend Developer</h4>
        <p className="font-bold text-2xl mt-1">Freelance</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.cdnlogo.com/logos/c/18/css.svg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/1200px-Nuxt_logo.svg.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Start Work Jan 2018 - Jun 2021 · 3 yrs 6 mos
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary point</li>
          <li>summary point</li>
          <li>summary point</li>
          <li>summary point</li>
        </ul>
      </div>
    </article>
  );
}
