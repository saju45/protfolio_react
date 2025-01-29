 

// import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import project_person from "../assets/images/me_hire.png";
import project1 from "../assets/images/project_s.png";
import project2 from "../assets/images/protfolio.png";


const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Ecommerce App",
      github_link: "https://github.com/saju45/Ecommerce_app_mern",
      live_link: "https://shanawaj-ecommerce.netlify.app",
    },
    {
      img: project2,
      name: "Protfolio App",
      github_link: "https://github.com/saju45/protfolio_react",
      live_link: "https://shanawaj-ecommerce.netlify.app",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            // autoplay={{
            //   delay: 3000,
            // }}
            // pagination={{
            //   clickable: true,
            // }}
            // modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div> */}
        <div className="h-80 flex-1 md:mt-0 mt-6 flex justify-center items-center">
                    <div className="lg:w-96 h-80 relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                      <img
                        src={project_person}
                        alt=""
                        className="w-full h-80  bg-cyan-600 rounded-xl"
                      />
                    </div>
                  </div>
      </div>
    </section>
  );
};

export default Project;
