import React from "react";
import { motion } from "framer-motion";

type Props = {
  experienceTitle: string;
  companyName: string;
  companyImage: string;
  skills: {
    skill: string;
  }[];
  startDate: string;
};

export default function ExperienceCard({
  experienceTitle,
  companyName,
  companyImage,
  skills,
  startDate,
}: Props) {
  return (
    <article className="flex flex-col mt-8 snap-center bg-[#292929] p-4 rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] xl:mt-32 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={companyImage}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experienceTitle}</h4>
        <p className="font-bold text-2xl mt-1">{companyName}</p>
        <div className="flex space-x-2 my-2">
          {skills.map((item, index) => (
            <img
              key={index}
              className="h-10 w-10 rounded-full"
              src={item.skill}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">{startDate}</p>

        <ul className="list-none space-y-4 ml-5 text-lg">
          <li>summary point</li>
          <li>summary point</li>
          <li>summary point</li>
          <li>summary point</li>
        </ul>
      </div>
    </article>
  );
}
