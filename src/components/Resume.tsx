import React, { useState } from "react";
import { BookIcon, Briefcase } from "../assets/svg";
import data from "../assets/dataset.json";

type ResumeEntry = {
  title: string;
  duration: string;
  description: string;
};

export const Resume = () => {
  return (
    <section className="xl:h-[600px] xl:overflow-y-auto">
      <p className="font-bold text-2xl mb-5">My Resume</p>
      <div className="flex flex-col pb-6">
        <ResumeItem title="Education" data={data.education} icon={BookIcon} />
        <ResumeItem
          title="Experience"
          data={data.experiences}
          icon={Briefcase}
        />
      </div>
    </section>
  );
};

function ResumeItem({
  title,
  data,
  icon,
}: {
  title: string;
  data: ResumeEntry[];
  icon: typeof BookIcon;
}) {
  const [visible, setVisible] = useState(true);
  return (
    <div className="flex gap-5">
      <button
        aria-expanded={visible}
        aria-controls={`${title}-content`}
        className="flex z-10 place-items-start"
        onClick={() => {
          setVisible((state) => !state);
        }}
      >
        <div className="w-14 h-14 rounded-xl bg-black-1 flex justify-center place-items-center">
          <img src={icon} width={25} alt="" />
        </div>
      </button>
      <ul className="flex flex-col transition-all duration-1000 ease-in-out">
        <h1 className="font-bold text-xl mb-4 mt-2">{title}</h1>
        <div
          id={`${title}-content`}
          className={`transition-all duration-700 ease-in-out ${
            visible ? "opacity-100 xl:max-h-[1000px]" : "opacity-0 max-h-0"
          }`}
        >
          {visible &&
            data.map((s, index) => (
              <li
                key={s.title}
                className="flex items-start mb-4 relative timeline-item"
                style={{ "--stagger": index } as React.CSSProperties}
              >
                <div className="w-6 h-6 bg-black-1 rounded-full absolute top-0 -left-[60px] flex justify-center items-center">
                  <div className="hidden xl:flex absolute w-[1px] bg-black-1 h-20 bottom-5"></div>
                  {index < data.length - 1 && (
                    <div className="hidden xl:flex absolute w-[1px] bg-black-1 h-20 top-5"></div>
                  )}
                  <div className="w-3 h-3 bg-gold rounded-full" />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">{s.title}</p>
                  <p className="text-gold-2 font-semibold">{s.duration}</p>
                  <p>{s.description}</p>
                </div>
              </li>
            ))}
        </div>
      </ul>
    </div>
  );
}
