import { useState, type CSSProperties } from "react";
import { Images } from "../assets/images";
import { ProjectCategories, isBigScreen } from "../types/Screens";

type Project = {
  title: string;
  img: string;
  description?: string;
  url?: string;
};

const featuredProjects: Project[] = [
  {
    title: "InvoicePal",
    img: Images.invoicePal,
    url: "https://getinvoicepal.com",
    description:
      "Mobile-first invoicing for freelancers and small businesses. Describe the work in plain language to draft quotes, invoices, and receipts on one document model. Built with Expo, FastAPI, and Supabase.",
  },
  {
    title: "PitchBook NG",
    img: Images.pitchBook,
    url: "https://pitchbookng.com",
    description:
      "Marketplace for discovering nearby football pitches, checking real-time availability, booking sessions, and managing QR tickets. Flutterwave payments on Supabase Postgres.",
  },
  {
    title: "PitchBook NG - Org",
    img: Images.pitchBookOrg,
    url: "https://org.pitchbookng.com",
    description:
      "Venue operations for pitch owners: onboard facilities, set pricing and availability, manage staff, scan QR tickets, and track earnings with ledger-based payouts.",
  },
  {
    title: "SatoMen Investment",
    img: Images.satoMen,
    url: "https://satomeninvestmentsa.com",
    description:
      "Company website for a Lagos maritime and oil-and-gas operator covering ship management, bunkering, and industrial services.",
  },
];

const projects: Record<Exclude<ProjectCategories, ProjectCategories.all>, Project[]> = {
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
      description: "A dashboard for an online food ordering business",
      url: "https://geticart.com",
    },
    {
      title: "Gas-Zone Limited",
      img: Images.gasZone,
      description: "A simple landing page for an oil and gas company",
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
        "Backend for The Carbon Group marketplace. Interacts with a smart contract and is built with Node.js, Express, and MongoDB.",
      url: "https://github.com/yusufdimari/pumpyfix-server",
    },
    {
      title: "My Scholar Server",
      img: Images.server,
      description:
        "Backend for the My Scholar mobile application, built with Node.js, Express, and MongoDB.",
      url: "https://github.com/yusufdimari/My_Scholar_Project/tree/beta/Server",
    },
    {
      title: "PumpyFix Server",
      img: Images.server,
      description:
        "Backend for a handyman mobile application, built with Node.js, Express, and MongoDB.",
      url: "https://github.com/yusufdimari/pumpyfix-server",
    },
  ],
};

const categoryKeys = Object.keys(projects) as Array<
  Exclude<ProjectCategories, ProjectCategories.all>
>;

export const Portfolio = () => {
  const [active, setActive] = useState<ProjectCategories>(
    ProjectCategories.all
  );
  const allProjects = Object.values(projects).flat();
  const displayedProjects =
    active === ProjectCategories.all ? allProjects : projects[active];

  return (
    <section className="xl:h-[600px] xl:overflow-y-scroll xl:max-h-[600px] pr-1">
      <p className="font-bold text-2xl mb-5">My Portfolio</p>

      <p className="font-bold text-lg mb-4">Featured</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            featured
            stagger={index}
          />
        ))}
      </ul>

      <p className="font-bold text-lg mb-4">
        {active === ProjectCategories.all ? "Earlier work" : "Projects"}
      </p>
      <ul className="hidden md:flex gap-10 mb-5">
        <li
          onClick={() => setActive(ProjectCategories.all)}
          className={`capitalize cursor-pointer hover:text-gold-2 transition-colors duration-200 ${
            active === ProjectCategories.all ? "font-bold text-gold-2" : ""
          }`}
        >
          All{isBigScreen ? " Projects" : ""}
        </li>
        {categoryKeys.map((category) => (
          <li
            key={category}
            onClick={() => setActive(category)}
            className={`capitalize cursor-pointer hover:text-gold-2 transition-colors duration-200 ${
              active === category ? "font-bold text-gold-2" : ""
            }`}
          >
            {category} Projects
          </li>
        ))}
      </ul>
      <ul
        key={active}
        className="portfolio-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10"
      >
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            stagger={index}
          />
        ))}
      </ul>
    </section>
  );
};

function ProjectCard({
  project,
  featured = false,
  stagger = 0,
}: {
  project: Project;
  featured?: boolean;
  stagger?: number;
}) {
  const content = (
    <>
      <div
        className={`relative group project-card ${
          featured ? "featured-card" : ""
        }`}
      >
        <img
          src={project.img}
          alt={project.title}
          className="rounded-3xl cursor-pointer w-full h-48 object-cover"
        />
        {project.description && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out bg-black bg-opacity-80 text-white group-hover:opacity-100 rounded-3xl">
            <p className="text-center text-white p-2">{project.description}</p>
          </div>
        )}
      </div>
      <p className="text-center font-bold text-md cursor-pointer mt-2">
        {project.title}
      </p>
    </>
  );

  const className = "stagger-item";
  const style = { "--stagger": stagger } as CSSProperties;

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={`cursor-pointer ${className}`}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={className} style={style}>
      {content}
    </div>
  );
}
