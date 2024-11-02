import { useState } from "react";
import Image from "../assets/images/profile.jpeg";
import {
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  x,
  github,
  linkedin,
  upwork,
} from "../assets/svg/";

export const SideBar = () => {
  const bigScreen = window.innerWidth >= 1024;
  const [visible, setVisible] = useState(bigScreen ? true : false);
  const qualifications = [
    " Full-stack developer",
    "Software engineer",
    "AI & ML engineer",
  ];

  const socials = [
    {
      title: "Upwork",
      url: "https://www.upwork.com/en-gb/freelancers/~0150f863b1cbce73cf",
      logo: upwork,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/yusuf-dimari-32ab561b8/",
      logo: linkedin,
    },
    { title: "Github", url: "https://github.com/yusufdimari", logo: github },
    { title: "Twitter", url: "https://twitter.com/Dimariyusuf", logo: x },
  ];
  return (
    <div className="bg-white-3 p-5 rounded-3xl w-full xl:justify-center xl:w-fit xl:place-items-center gap-5 border border-black-1 relative xl:h-[650px] ">
      <div
        onClick={() => setVisible(!visible)}
        className="border xl:hidden w-fit border-black-1 rounded-bl-3xl rounded-tr-3xl px-3 border-t-0 border-r-0 right-0 top-0 absolute cursor-pointer hover:bg-black-1 overflow-hidden hover:text-amber-500"
      >
        <p className=" overflow-hidden ">
          {visible ? "Hide Contact" : "Show Contact"}
        </p>
      </div>
      <div className="flex xl:flex-col gap-5 xl:justify-center place-items-center mt-2 md:mt-0 xl:mt-3">
        <img
          className="rounded-xl w-28 xl:w-[160px] h-auto xl:mx-8"
          src={Image}
          alt="Yusuf Dimari"
        />
        <div className="gap-10">
          <p className="text-center font-medium text-xl xl:mb-5">
            Yusuf M. Dimari
          </p>
          {qualifications.map((q) => (
            <p className="bg-black-1 text-gold font-light px-2 text-sm xl:text-md rounded-md mt-2 text-center">
              {q}
            </p>
          ))}
        </div>
      </div>
      <section
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          visible ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
        }`}
      >
        <div className="w-full border-[0.2px] my-5 md:my-8 border-black-1" />
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 place-items-center">
            <div className="w-12 h-12 rounded-xl flex justify-center place-items-center bg-black-1">
              <img src={EmailIcon} width={20} />
            </div>
            <div className="gap-0">
              <b>Email</b>
              <a
                className="hover:text-gold-2"
                href="mailto:dimarijnr@gmail.com"
              >
                dimarijnr@gmail.com
              </a>
            </div>
          </div>
          <div className="flex gap-2 place-items-center">
            <div className="w-12 h-12 rounded-xl flex justify-center place-items-center bg-black-1">
              <img src={PhoneIcon} width={20} />
            </div>
            <div className="gap-0">
              <b>Phone</b>
              <a className="hover:text-gold-2" href="phone:+447918143478">
                +44(0)7918143478
              </a>
            </div>
          </div>
          <div className="flex gap-2 place-items-center">
            <div className="w-12 h-12 rounded-xl flex justify-center place-items-center bg-black-1">
              <img src={LocationIcon} width={20} />
            </div>
            <div className="gap-0">
              <b>Location</b>
              <a className="hover:text-gold-2">London, United Kingdom</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ul className="flex gap-3 mt-5 place-items-center justify-center">
          {socials.map(({ url, logo, title }) => (
            <a href={url} target="_blank" className="cursor-pointer">
              <img width={20} src={logo} alt={title} />
            </a>
          ))}
        </ul>
      </section>
    </div>
  );
};
