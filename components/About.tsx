import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../src/assets/programmer.jpg";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={aboutImage.src}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      ></motion.img>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p>
          Experienced Frontend Web Developer with a demonstrated history of
          working in the program development industry. Skilled in HTML, CSS,
          Bootstrap, Sass, JavaScript, TypeScript, React.js, Next.js, Vue.js,
          Nuxtjs, Vuetify, Quasar, GSAP, tailwind and Storybook.
        </p>
      </div>
    </div>
  );
}
