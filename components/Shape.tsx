import React from "react";

type Props = {};

export default function Shape({}: Props) {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="500px"
      height="500px"
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop
            id="stop1"
            stop-color="rgba(248, 117, 55, 1)"
            offset="0%"
          ></stop>
          <stop
            id="stop2"
            stop-color="rgba(251, 168, 31, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M21.6,-22.1C27.3,-15.9,30.6,-8,31,0.4C31.5,8.8,29,17.7,23.4,24.5C17.7,31.4,8.8,36.2,0.4,35.8C-8,35.4,-16.1,29.7,-24.4,22.9C-32.7,16.1,-41.4,8,-41.6,-0.3C-41.9,-8.6,-33.8,-17.2,-25.5,-23.4C-17.2,-29.5,-8.6,-33.3,-0.3,-33C8,-32.7,15.9,-28.3,21.6,-22.1Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
      ></path>
    </svg>
  );
}
