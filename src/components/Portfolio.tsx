import { useState } from "react";
import { Images } from "../assets/images";
import { ProjectCategories, isBigScreen } from "../types/Screens";

export const Portfolio = () => {
  const [active, setActive] = useState<ProjectCategories>(
    ProjectCategories.all
  );
  const projects = {
    web: [
      { title: "The Carbon Group", img: Images.theCarbonGroup },
      {
        title: "Nadir OVP",
        img: Images.nadir,
        description: "A web app for an online volunteering platform",
        url: "https://nadirovp.org",
      },
      {
        title: "I-Cart",
        img: Images.iCart,
        description: "A Dasboard for an online food ordering business ",
        url: "https://geticart.com",
      },
      {
        title: "Gas-Zone Limited",
        img: Images.gasZone,
        description: "A simple Landing for an oil and gas company",
        url: "https://gas-zone.com",
      },
      { title: "School Profile", img: Images.schoolProfile },
    ],
    mobile: [
      { title: "Pami Factura", img: Images.mobile },
      { title: "AMD Facility Management", img: Images.mobile },
      { title: "My Scholar", img: Images.mobile },
      { title: "PumpyFix Mobile", img: Images.mobile },
      { title: "Kroo", img: Images.mobile },
    ],
    backend: [
      {
        title: "The Carbon group Server",
        img: Images.server,
        description:
          "Backend for The carbon group Marketplace,it involes interaction with smart contract deployed on the blockchain, and  build using NodeJS, express and mongodb",
        url: "https://github.com/yusufdimari/pumpyfix-server",
      },
      {
        title: "My Scholar Server",
        img: Images.server,
        description:
          "Backend for My Scholar mobile application, build using NodeJS, express and mongodb",
        url: "https://github.com/yusufdimari/My_Scholar_Project/tree/beta/Server",
      },
      {
        title: "PumpyFix Server",
        img: Images.server,
        description:
          "Backend for Handyman mobile application, build using NodeJS, express and mongodb",
        url: "https://github.com/yusufdimari/pumpyfix-server",
      },
    ],
    blockchain: [{ title: "TCG Near Contract", img: Images.blockchain }],
  };
  // Combine all projects when "all" is selected
  const allProjects = Object.values(projects).flat();

  // Determine which projects to display based on the active category
  //@ts-ignore
  const displayedProjects: any[] =
    active === "all" ? allProjects : projects[active];

  return (
    <section className="xl:h-[600px]">
      <p className="font-bold text-2xl mb-5">My Portfolio</p>
      <ul className="hidden md:flex gap-10 mb-5">
        <li
          onClick={() => setActive(ProjectCategories.all)}
          className={`capitalize cursor-pointer hover:text-gold-2 ${
            active == "all" ? "font-bold text-gold-2" : ""
          }`}
        >
          All{isBigScreen ? " Projects" : ""}
        </li>
        {Object.keys(projects).map((category) => (
          <li
            key={category}
            //@ts-ignore
            onClick={() => setActive(category)}
            className={`capitalize cursor-pointer hover:text-gold-2 ${
              active == category ? "font-bold text-gold-2" : ""
            }`}
          >
            {category} Projects
          </li>
        ))}
      </ul>
      <ul className="xl:max-h-[500px] md:overflow-y-scroll grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10">
        {displayedProjects.map((project) => (
          <a href={project.url} target="_blank" className="cursor-pointer">
            <div className="relative group ">
              <img
                src={project.img}
                alt={project.title}
                className="rounded-3xl cursor-pointer transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out bg-black bg-opacity-80 text-white group-hover:opacity-100 rounded-3xl">
                <p className="text-center text-white p-2">
                  {project.description}
                </p>
              </div>
            </div>
            <p className="text-center font-bold text-md cursor-pointer">
              {project.title}
            </p>
          </a>
        ))}
      </ul>
    </section>
  );
};
