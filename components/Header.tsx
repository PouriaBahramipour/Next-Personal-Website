import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <div>
        <SocialIcon
          url="https://linkedin.com/in/pourya-bahramipour-79a6ba93/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/PouriaBahramipour"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://t.me/pourya_bahramipour"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
    </header>
  );
}
