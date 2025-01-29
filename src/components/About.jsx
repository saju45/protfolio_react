import aboutImg from "../assets/images/me_about.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "3" },
    // { text: "Companies Work", count: "0" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/MD_Saju_Mia_CV.pdf"; // File inside public folder
    link.download = "MD_Saju_Mia_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center  justify-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Hello, my name is Shanawaj hossain saju, and I’m a full stack developer. With 1 years of experience in web development, I have a strong command over both front-end and back-end technologies, allowing me to build complete and scalable applications. On the front-end side, I specialize in HTML, CSS, tailwindcss, and JavaScript frameworks such as React. I’m passionate about creating intuitive user interfaces that provide an exceptional user experience. I pay great attention to detail, ensuring that the websites or applications I develop are responsive, visually appealing, and accessible across different devices and browsers. Moving to the back end, I’m proficient in server-side language Node.js. I have extensive experience working with databases such as MySQL and MongoDB, and I can design efficient database structures and write optimized queries. I’m familiar with RESTful APIs and know how to integrate them into applications to enable seamless communication between the front end and back end. Additionally, I have expertise in version control systems like Git. I enjoy staying up to date with the latest trends and technologies in the web development world, as it allows me to continually improve my skills and deliver cutting-edge solutions. Throughout my career, I’ve had the opportunity to work on various projects, ranging from small startups to large-scale enterprise applications. I thrive in dynamic environments where I can tackle challenges, collaborate with cross-functional teams, and deliver high-quality solutions that meet both user requirements and business objectives. I’m excited to be part of a team where I can contribute my full stack development skills and help create innovative and impactful applications. Thank you for considering me, and I look forward to discussing how I can contribute to your organisation
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
                <button className="btn-primary" onClick={handleDownload}>Download CV</button>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center justify-center items-center">
            <div className="lg:w-96 h-full  relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full  object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
