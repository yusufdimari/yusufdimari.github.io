import { useState } from "react";
import { AboutMe } from "./AboutMe";
import { Navbar } from "./Navbar";
import { screens } from "../types/Screens";
import { Resume } from "./Resume";
import { Portfolio } from "./Portfolio";

export const Main = () => {
  const [active, setActive] = useState<screens>(screens.About);

  const renderScreen = () => {
    switch (active) {
      case screens.About:
        return <AboutMe />;
      case screens.Resume:
        return <Resume />;
      case screens.Portfolio:
        return <Portfolio />;
      default:
        return <AboutMe />;
    }
  };
  return (
    <div className="bg-white-3 p-5 rounded-3xl w-full xl:w-2/3 gap-5 border border-black-1 md:relative md:first-letter:pt-14 mb-16 xl:mb-0">
      <Navbar active={active} setActive={setActive} />
      {renderScreen()}
    </div>
  );
};
