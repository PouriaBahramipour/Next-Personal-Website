import React from "react";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import myPicture from "../src/assets/pourya24.jpg";
import Link from "next/link";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Pourya Baharmipour",
      "Guy Who Loves Coffe.Tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      {/* <BackgroundCircle /> */}
      <img
        className="relative h-60 w-60 object-cover rounded-[80px] opacity-60"
        src={myPicture.src}
        alt=""
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          FrontEnd Developer
        </h2>
        <h1 className="text-5xl lg:text-5xl font-semibold scroll-px-10 ">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
