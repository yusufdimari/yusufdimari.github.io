import { useState, type CSSProperties, type ReactNode } from "react";
import { BookIcon, Briefcase } from "../assets/svg";
import data from "../assets/dataset.json";

type ResumeEntry = {
  title: string;
  duration: string;
  description: string;
};

export const Resume = () => {
  const [educationOpen, setEducationOpen] = useState(true);
  const [experienceOpen, setExperienceOpen] = useState(true);

  let stagger = 0;

  return (
    <section className="xl:h-[600px] xl:overflow-y-auto">
      <p className="font-bold text-2xl mb-5">My Resume</p>
      <div className="pb-6">
        <TimelineRow
          stagger={stagger++}
          marker={
            <SectionMarker
              icon={BookIcon}
              expanded={educationOpen}
              controls="Education-content"
              onToggle={() => setEducationOpen((open) => !open)}
            />
          }
        >
          <h2 className="font-bold text-xl pt-3 pb-5">Education</h2>
        </TimelineRow>

        <div id="Education-content">
          {educationOpen &&
            data.education.map((entry) => (
              <TimelineRow key={entry.title} stagger={stagger++}>
                <EntryBody entry={entry} />
              </TimelineRow>
            ))}
        </div>

        <TimelineRow
          stagger={stagger++}
          last={!experienceOpen}
          marker={
            <SectionMarker
              icon={Briefcase}
              expanded={experienceOpen}
              controls="Experience-content"
              onToggle={() => setExperienceOpen((open) => !open)}
            />
          }
        >
          <h2 className="font-bold text-xl pt-3 pb-5">Experience</h2>
        </TimelineRow>

        <div id="Experience-content">
          {experienceOpen &&
            data.experiences.map((entry, index) => (
              <TimelineRow
                key={entry.title}
                stagger={stagger++}
                last={index === data.experiences.length - 1}
              >
                <EntryBody entry={entry} />
              </TimelineRow>
            ))}
        </div>
      </div>
    </section>
  );
};

function TimelineRow({
  marker,
  children,
  stagger,
  last = false,
}: {
  marker?: ReactNode;
  children: ReactNode;
  stagger: number;
  last?: boolean;
}) {
  const style = { "--stagger": stagger } as CSSProperties;
  return (
    <div className="timeline-row" style={style}>
      <div className="timeline-rail">
        <div className="timeline-marker">
          {marker ?? <EntryDot />}
        </div>
        {!last && <span className="timeline-connector" aria-hidden />}
      </div>
      <div className="timeline-copy">{children}</div>
    </div>
  );
}

function SectionMarker({
  icon,
  expanded,
  controls,
  onToggle,
}: {
  icon: string;
  expanded: boolean;
  controls: string;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-expanded={expanded}
      aria-controls={controls}
      onClick={onToggle}
      className="w-14 h-14 rounded-xl bg-black-1 flex justify-center items-center"
    >
      <img src={icon} width={25} alt="" />
    </button>
  );
}

function EntryDot() {
  return (
    <div className="w-6 h-6 bg-black-1 rounded-full flex justify-center items-center">
      <div className="w-3 h-3 bg-gold rounded-full" />
    </div>
  );
}

function EntryBody({ entry }: { entry: ResumeEntry }) {
  return (
    <div className="flex flex-col pb-5">
      <p className="font-bold">{entry.title}</p>
      <p className="text-gold-2 font-semibold">{entry.duration}</p>
      <p>{entry.description}</p>
    </div>
  );
}
