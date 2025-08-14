import React from "react";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Git",
  "Firebase",
  "Node.js",
  "Next.js",
  "Redux",
  "Jest",
];

interface SkillItemProps {
  skill: string;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, index }) => {
  return (
    <div
      className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/50 hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:bg-white/90 text-center cursor-pointer"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <h3 className="text-base font-semibold text-gray-800 group-hover:text-slate-700 transition-colors duration-300">
        {skill}
      </h3>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-stone-200 py-20 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-gray-300/20 to-slate-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-stone-300/20 to-gray-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-slate-700 to-gray-800 bg-clip-text text-transparent mb-4">
            My Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I’m familiar with
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-slate-700 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Skills Container */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillItem key={skill} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
