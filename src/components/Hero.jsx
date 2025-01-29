import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import hero from "../assets/images/boss.png";

const Hero = () => {

  const openFacebook = () => {
    window.open("https://www.facebook.com/prince.saju.645486/", "_blank", "noopener,noreferrer");
  };
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/shanawaj-hossain-saju-3115b922b/", "_blank", "noopener,noreferrer");
  };
  const openGithub = () => {
    window.open("https://github.com/saju45", "_blank", "noopener,noreferrer");
  };
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>md saju </span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Web Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            <button onClick={openFacebook}><FaFacebook className="text-gray-600 hover:text-white cursor-pointer"/></button>
            <button onClick={openLinkedIn}>
            <FaLinkedin className="text-gray-600 hover:text-white cursor-pointer"/>
            </button>
            <button onClick={openGithub}>
            <FaGithub className="text-gray-600 hover:text-white cursor-pointer"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
