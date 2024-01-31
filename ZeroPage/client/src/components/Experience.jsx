import ".././index.css";
import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoMongodb,
  BiLogoGithub,
  BiLogoGit,
  BiSolidServer,
  BiLogoJava,
  BiLogoPython,
  BiLogoSass,
  BiLogoFigma,
} from "react-icons/bi";
import { SiMysql, SiDotnet } from "react-icons/si";
import { MdDevices } from "react-icons/md";

function Experience() {
  return (
    <div>
      <div className="bg-Skills h-full mx-auto">
        <h3 className="text-white text-7xl px-20 pb-4 pt-20 font-bills">
          SKILLS & TOOLS
        </h3>
        <ul className="flex flex-wrap  px-14 gap-10 mx-20 2xl:mx-10">
          <li className="grid justify-items-center">
            <BiLogoHtml5 style={{ color: "white", fontSize: "6rem" }} />
            <p className="text-white font-nosifer">HTML</p>
          </li>
          <li className="grid justify-items-center">
            <BiLogoJavascript style={{ color: "white", fontSize: "6rem" }} />
            <p className="text-white font-nosifer">Javascript</p>
          </li>
          <li className="grid justify-items-center">
            <BiLogoCss3 style={{ color: "white", fontSize: "6rem" }} />

            <p className="text-white font-nosifer">Css</p>
          </li>
          <li className="grid justify-items-center">
            <BiLogoSass style={{ color: "white", fontSize: "6rem" }} />
            <p className="text-white font-nosifer">Sass</p>
          </li>
          <li className="grid justify-items-center">
            <BiLogoReact style={{ color: "white", fontSize: "6rem" }} />
            <p className="text-white font-nosifer">React</p>
          </li>
          <li className="grid justify-items-center">
            <BiLogoNodejs style={{ color: "white", fontSize: "6rem" }} />
            <p className="text-white font-nosifer">Nodejs</p>
          </li>

          <li className="grid justify-items-center">
            <BiLogoGithub style={{ color: "white", fontSize: "6rem" }} />
            <p className="text-white font-nosifer">Github</p>
          </li>
          <li className="grid justify-items-center">
            <BiLogoGit style={{ color: "white", fontSize: "6rem" }} />
            <p className="text-white font-nosifer">Git</p>
          </li>

          <li className="grid justify-items-center">
            <SiMysql style={{ color: "white", fontSize: "6rem" }} />
            <p className="text-white font-nosifer">Mysql</p>
          </li>
          <li className="grid justify-items-center">
            <BiLogoMongodb style={{ color: "white", fontSize: "6rem" }} />
            <p className="text-white font-nosifer">Mongodb</p>
          </li>
          <li className="grid justify-items-center">
            <MdDevices style={{ color: "white", fontSize: "6rem" }} />
            <p className="text-white font-nosifer">Responsive</p>
          </li>
          <li className="grid justify-items-center">
            <BiSolidServer style={{ color: "white", fontSize: "6rem" }} />
            <p className="text-white font-nosifer">Rest Api</p>
          </li>
          <li className="grid justify-items-center">
            <BiLogoFigma style={{ color: "white", fontSize: "6rem" }} />
            <p className="text-white font-nosifer">Figma</p>
          </li>
        </ul>
        <h3 className="text-white text-5xl px-28 py-10 font-bills">
          High and low level languages
        </h3>
        <ul className="flex px-24 flex-wrap gap-10">
          <li className="grid justify-items-center">
            <BiLogoJava style={{ color: "white", fontSize: "6rem" }} />
            <p className="text-white font-nosifer">Java</p>
          </li>
          <li className="grid justify-items-center">
            <BiLogoPython style={{ color: "white", fontSize: "6rem" }} />
            <p className="text-white font-nosifer">Python</p>
          </li>
          <li className="grid justify-items-center">
            <SiDotnet style={{ color: "white", fontSize: "6rem" }} />
            <p className="text-white font-nosifer">.NET</p>
          </li>
        </ul>
        <h3 className="text-white text-7xl px-20 py-10 font-bills ">
          EXPERENCIES
        </h3>
        <div className="flex justify-around">
          <div className="item flex items-end h-48 w-60 xl:w-80 xl:h-80">
            <p className="text-center xl:text-2xl lg:text-sm text-white px-10 mt-32 bg-black">
              Full Stack Developer Nexus Tech/Studio
              <p> 2021 - 2022</p>
            </p>
          </div>
          <div className="item flex items-end h-48 w-60 xl:w-80 xl:h-80">
            <p className="text-center xl:text-2xl lg:text-sm text-white px-10 mt-32 bg-black">
              Cozcyt Vulnerability Analysis Audit
              <p>2022 - 2023</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
