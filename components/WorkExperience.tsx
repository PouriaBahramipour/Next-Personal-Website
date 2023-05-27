import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const experienceItem = [
  {
    experienceTitle: "Frontend Developer",
    companyName: "Freelance",
    companyImage:
      "https://media.licdn.com/dms/image/C4D12AQGp7-xvaiH1mA/article-cover_image-shrink_600_2000/0/1520122127770?e=2147483647&v=beta&t=SZesB47T-m-ShAUtRpgFI8fX2wQSo4meaxm-3bnoEQk",
    skills: [
      {
        skill:
          "https://fr.seaicons.com/wp-content/uploads/2015/07/Other-html-5-icon.png",
      },
      {
        skill: "https://cdn.cdnlogo.com/logos/c/18/css.svg",
      },
      {
        skill:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
      {
        skill:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
      },
      {
        skill:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/1200px-Nuxt_logo.svg.png",
      },
    ],
    startDate: "Start Work Jan 2018 - Jun 2021 · 3 yrs 6 mos",
  },
  {
    experienceTitle: "Frontend Developer",
    companyName: "Airin technology · Full-time",
    companyImage:
      "https://media.licdn.com/dms/image/C560BAQHr0AOemLz1vg/company-logo_100_100/0/1642511585924?e=1692835200&v=beta&t=IPYYhWQvwFG9xDMkF4GB8MGFM8GLU6fexQsrtIE6qPI",
    skills: [
      {
        skill:
          "https://fr.seaicons.com/wp-content/uploads/2015/07/Other-html-5-icon.png",
      },
      {
        skill: "https://cdn.cdnlogo.com/logos/c/18/css.svg",
      },
      {
        skill:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
      {
        skill:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
      },
      {
        skill:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/1200px-Nuxt_logo.svg.png",
      },
    ],
    startDate: "2021 - 2022",
  },
  {
    experienceTitle: "Frontend Developer",
    companyName: "IST Groups · Full-time",
    companyImage:
      "https://media.licdn.com/dms/image/C560BAQG3X3obiI5FXg/company-logo_100_100/0/1519878309818?e=1692835200&v=beta&t=f3kQGInjxkkjBoyQkd-EE1cuBlfurLRYGxvJWrGZ5w4",
    skills: [
      {
        skill:
          "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png",
      },
      {
        skill: "https://cdn.cdnlogo.com/logos/c/18/css.svg",
      },
      {
        skill:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
      {
        skill:
          "data:image/png;base64,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",
      },
      {
        skill:
          "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp",
      },
      {
        skill:
          "https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp",
      },
    ],
    startDate: "December 2022  - Present",
  },
];

export default function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col relative overflow-hidden text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60 ">
        {experienceItem.map((experience, index) => (
          <ExperienceCard
            key={index}
            experienceTitle={experience.experienceTitle}
            companyName={experience.companyName}
            companyImage={experience.companyImage}
            skills={experience.skills}
            startDate={experience.startDate}
          />
        ))}
      </div>
    </motion.div>
  );
}
