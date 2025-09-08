"use client";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  return (
    <div className="min-h-screen bg-amber-50/20 py-15 flex flex-col items-center">
       <h1 className="text-4xl md:text-5xl text-bg-primary font-bold mb-4 font-serif">
        My Projects
      </h1>
      <p className="text-gray-600 max-w-2xl text-center mb-10">
        A selection of my recent frontend projects — showcasing React, Next.js,
        Tailwind CSS, API integrations, and animations. Click to explore live demos and source code.
      </p>

      {/* Swiper Carousel */}
      <div className="w-11/12">
       <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop >
          <SwiperSlide className="p-4">
            <ProjectCard
              imageSrc="/image.png"
              title="Recipe Finder"
              demoLink="https://recipefinder-web-app.web.app/" 
              githubLink="https://github.com/summbal122/Recipe-Finder.git"
              description="Recipe Finder is a responsive web app to explore global recipes using TheMealDB API. Built with React, Redux Toolkit, and Tailwind CSS, it features recipe search, category browsing, detailed instructions, smooth Motion animations, and is deployed on Firebase with Jest-tested reliability." />
          </SwiperSlide>

          <SwiperSlide className="p-4">
            <ProjectCard
              imageSrc="/image3.png"
              title="Netflix-GPT"
              demoLink=" https://netflixgpt-f6131.web.app/" 
              githubLink="https://github.com/summbal122/Netflix-GPT.git"
              description="This is the description for project one."
            />
          </SwiperSlide>

          <SwiperSlide className="p-4">
            <ProjectCard
              imageSrc="/image4.png"
              title="Amazon Clone"
              demoLink=" https://netflixgpt-f6131.web.app/" 
              githubLink="https://github.com/summbal122/Amazon.git"
              description="This is the description for project one."
            />
          </SwiperSlide>

          <SwiperSlide className="p-4">
            <ProjectCard
              imageSrc="/image2.png"
              title="YouTube Clone"
               demoLink=" https://netflixgpt-f6131.web.app/" 
              githubLink="https://fir-ad80a.web.app/"
              description="This is the description for project one."
            />
          </SwiperSlide>

          <SwiperSlide className="p-4">
            <ProjectCard
              imageSrc="/image7.png"
              title="Food Ordering App"
               demoLink="https://food-ordering-app-cc5dc.web.app/" 
              githubLink="https://github.com/summbal122/food_ordering_website.git"
              description="This is the description for project one."
            />
          </SwiperSlide>

          <SwiperSlide className="p-4">
            <ProjectCard
              imageSrc="/image5.png"
              title="Dessert Shop"
               demoLink="https://dessert-shop-641cc.web.app/" 
              githubLink="https://github.com/summbal122/Dessert-Shop.git"
              description="This is the description for project one."
            />
          </SwiperSlide>

          <SwiperSlide className="p-4">
            <ProjectCard
              imageSrc="/image6.png"
              title="Destino"
              demoLink="https://github.com/summbal122/Destino.git" 
              githubLink="https://summbal122.github.io/Destino/"
              description="This is the description for project one."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
