import { BiLogoMongodb } from "react-icons/bi";
import { FaCss3, FaHtml5, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiRedux } from "react-icons/si";


const Skills = () => {
  const skills = [
    {
      logo: FaJava,
      level: "java",
      count: 86,
    },
    
    {
      logo: FaHtml5,
      level: "html",
      count: 98,
    },
    {
      logo: FaCss3,
      level: "css",
      count: 90,
    },
    {
      logo: RiTailwindCssFill,
      level: "tailwindcss",
      count: 87,
    },
    {
      logo: IoLogoJavascript,
      level: "javaScript",
      count: 90,
    },
    {
      logo: FaReact,
      level: "react js",
      count: 90,
    },
    {
      logo: FaNodeJs,
      level: "node js",
      count: 95,
    },
    {
      logo: SiExpress,
      level: "Express js",
      count: 88,
    },
    {
      logo: BiLogoMongodb,
      level: "mongodb",
      count: 90,
    },
    {
      logo: SiRedux,
      level: "Redux",
      count: 90,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <skill.logo/>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
