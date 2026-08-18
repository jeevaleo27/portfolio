import React, { useEffect } from "react";
import { Briefcase, MapPin, Calendar, ExternalLink, Sparkles, BadgeCheck } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    id: 1,
    company: "Skills Agency",
    position: "Full-Stack Developer",
    duration: "June 2022 – Present",
    location: "Bangalore",
    type: "Full-time",
    roles: [
      { title: "Lead - Software Engineer", duration: "July 2026 – Present", current: true },
      { title: "Senior - Software Engineer", duration: "July 2025 – June 2026"},
      { title: "Software Engineer", duration: "June 2022 – June 2025" },
    ],
    description:
      "Led end-to-end development and support of scalable web applications using PHP (Zend, CodeIgniter, Laravel), Angular, React, and NestJS. Built robust RESTful APIs and optimized PostgreSQL/MySQL databases for high performance and seamless integration. Managed deployments, mentored developers, and improved system reliability while supporting campaign audit and invoicing platforms.",
    tech: ["PHP", "Zend Framework", "CodeIgniter", "Laravel", "Angular", "AngularJS", "ReactJS", "NestJS", "Node.js", "PostgreSQL", "MySQL", "REST APIs", "Apache", "Docker"],
    color: "from-[#0ea5e9] to-[#2a9d8f]",
    dotColor: "bg-[#0ea5e9]",
    link: "https://skills-agency.com",
  },
  {
    id: 2,
    company: "Avanze",
    position: "Full-Stack Developer",
    role: "Software Engineer",
    duration: "Jan 2021 – June 2022",
    location: "Salem",
    type: "Full-time",
    description:
      "Gained 1.4 years of hands-on experience developing dynamic and responsive web applications using PHP, JavaScript, jQuery, and Bootstrap. Delivered client-focused solutions by quickly understanding requirements and consistently following best coding practices. Collaborated effectively using Git and GitHub to maintain a high-quality and well-managed codebase.",
    tech: ["PHP", "HTML", "JavaScript", "jQuery", "Bootstrap", "Git", "GitHub"],
    color: "from-[#0ea5e9] to-[#2a9d8f]",
    dotColor: "bg-[#0ea5e9]",
    link: "https://www.avanzetechlabs.com/",
  }
  // ,
  // {
  //   id: 3,
  //   company: "Freelance",
  //   position: "Web Developer",
  //   role: "Senior - Software Engineer",
  //   duration: "Jan 2022 – May 2023",
  //   location: "Remote",
  //   type: "Freelance",
  //   description:
  //     "Designed and delivered custom websites and web apps for small businesses. Handled everything from requirement gathering to deployment, serving 15+ satisfied clients.",
  //   tech: ["React", "PHP", "MySQL", "WordPress", "Figma"],
  //   color: "from-[#f59e0b] to-[#ef4444]",
  //   dotColor: "bg-[#f59e0b]",
  //   link: "#",
  // },
];

const TimelineCard = ({ exp, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex w-full items-center justify-center ${
        isLeft ? "lg:justify-start" : "lg:justify-end"
      }`}
      data-aos={isLeft ? "fade-right" : "fade-left"}
      data-aos-duration="900"
      data-aos-delay={`${index * 150}`}
    >
      {/* Connector dot */}
      <div
        className={`absolute left-0 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#030014] z-10 shadow-lg ${exp.dotColor}`}
        style={{ top: "50%" }}
      />

      {/* Card */}
      <div
        className={`group relative w-full lg:w-[46%] ml-8 lg:ml-0 ${
          isLeft ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"
        }`}
      >
        <div className="relative bg-gray-900/60 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-white/20">
          {/* gradient overlay */}
          <div
            className={`absolute -z-10 inset-0 bg-gradient-to-br ${exp.color} opacity-5 group-hover:opacity-15 transition-opacity duration-300`}
          />

          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1">
              <h3
                className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`}
              >
                {exp.position}
              </h3>
              <div className="flex items-center gap-1 mt-1">
                <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-1 text-sm font-semibold text-white/80 hover:text-white transition-colors"
                  >
                    {exp.company}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-white/80">
                    {exp.company}
                  </span>
                )}
              </div>

              {/* Promotion inner timeline */}
              {exp.roles && (
                <div className="mt-3 ml-1 flex flex-col gap-0">
                  {exp.roles.map((r, i) => (
                    <div key={i} className="relative flex items-start gap-3">
                      {/* connector line between roles */}
                      {i < exp.roles.length - 1 && (
                        <div className="absolute left-[5px] top-4 w-px h-full bg-white/10" />
                      )}
                      {/* dot */}
                      <div
                        className={`mt-1 shrink-0 w-2.5 h-2.5 rounded-full border-2 z-10 ${
                          r.current
                            ? "border-[#0ea5e9] bg-[#0ea5e9]/30"
                            : "border-white/20 bg-white/10"
                        }`}
                      />
                      <div className="pb-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`text-xs font-semibold ${
                              r.current ? "text-[#0ea5e9]" : "text-white/60"
                            }`}
                          >
                            {r.title}
                          </span>
                          {r.current && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#0ea5e9]/15 border border-[#0ea5e9]/30 text-[#0ea5e9]">
                              <BadgeCheck className="w-2.5 h-2.5" />
                              Current
                            </span>
                          )}
                          { !r.current && (
                            //i === exp.roles.length - 2 &&
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/40">
                              Promoted ↑
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                          <Calendar className="w-3 h-3" />
                          {r.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Single role badge (non-promoted entries) */}
              {!exp.roles && exp.role && (
                <span className="inline-flex items-center gap-1 mt-1 text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#0ea5e9]">
                  <BadgeCheck className="w-3 h-3" />
                  {exp.role}
                </span>
              )}
            </div>
            <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-white/60 border border-white/10">
              {exp.type}
            </span>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {exp.duration}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {exp.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            {exp.description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkedAt = () => {
  useEffect(() => {
    AOS.init({ once: true, offset: 80 });
  }, []);

  return (
    <div
      id="WorkedAt"
      className="min-h-screen py-20 px-[5%] sm:px-[5%] lg:px-[10%]"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block relative group">
          <h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#2a9d8f]"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            Worked At
          </h2>
        </div>
        <p
          className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <Sparkles className="w-5 h-5 text-[#0ea5e9]" />
          My Professional Journey
          <Sparkles className="w-5 h-5 text-[#0ea5e9]" />
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line — hidden on mobile, centered on desktop */}
        <div
          className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #0ea5e9 15%, #2a9d8f 85%, transparent)",
          }}
          data-aos="fade-in"
          data-aos-duration="1200"
        />

        {/* Mobile vertical line */}
        <div
          className="lg:hidden absolute left-0 top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #0ea5e9 15%, #2a9d8f 85%, transparent)",
          }}
        />

        {/* Experience cards */}
        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <TimelineCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        {/* Bottom cap dot */}
        <div
          className="absolute left-0 lg:left-1/2 -translate-x-1/2 bottom-0 w-3 h-3 rounded-full bg-[#2a9d8f] opacity-60"
          data-aos="zoom-in"
          data-aos-delay="600"
        />
      </div>
    </div>
  );
};

export default WorkedAt;
