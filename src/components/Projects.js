"use client";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaCode } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  return (
    <section id="projects" className=" bg-bg-primary/80 py-6  lg:py-8 px-2 lg:px-0 flex flex-col items-center ">
       <div className="flex items-center gap-4 mb-1 lg:mb-3">
       <span className="text-2xl lg:text-4xl text-white font-bold font-serif">My Projects</span>  
       <FaCode size={35} className="text-golden-yellow lg:mt-2 w-6 lg:w-auto" />
      </div>
      <p className="text-white w-11/12   md:w-9/12 lg:w-7/12 xl:w-6/12 text-xs md:text-sm lg:text-md text-center leading-4.5 lg:leading-normal">
       Here&apos;s a showcase of projects where I combined design, performance, and functionality.
       Discover live websites and review the code behind them with a single click.
      </p>

      <div className="w-full md:w-11/12 relative lg:-mt-2">
       <Swiper
     modules={[Navigation, Pagination]}
     slidesPerView={3}
     navigation
    pagination={{ clickable: true }}  loop
      breakpoints={{
    0: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      spaceBetween:0,
    },
    1440: {
      slidesPerView: 3, 
      spaceBetween: 8,
    },
  }}>
          <SwiperSlide className=" p-5 lg:p-10">
            <ProjectCard imageSrc="/image.png"
            title="Recipe Finder"
            demoLink="https://recipefinder-web-app.web.app/" 
             githubLink="https://github.com/summbal122/Recipe-Finder.git"
            description="Recipe Finder is a responsive web app to explore global recipes using TheMealDB API. Built with React, Redux Toolkit, and Tailwind CSS, it features recipe search, category browsing, detailed instructions, smooth Motion animations, and is deployed on Firebase with Jest-tested reliability." />
          </SwiperSlide>

          <SwiperSlide className=" p-5 lg:p-10">
            <ProjectCard imageSrc="/image3.png" title="Netflix-GPT" demoLink=" https://netflixgpt-f6131.web.app/" 
              githubLink="https://github.com/summbal122/Netflix-GPT.git"
              description="Netflix GPT is a movie recommendation app that mimics the Netflix UI and delivers AI-powered suggestions using the TMDB API. Built with React, Redux Toolkit, and Tailwind CSS, it features Firebase authentication, GPT-powered search, and a fully responsive design for a seamless streaming-like experience."
            />
          </SwiperSlide>

          <SwiperSlide className=" p-5 lg:p-10">
            <ProjectCard imageSrc="/image4.png" title="Amazon Clone" demoLink="https://fir-d25e5.web.app/" 
              githubLink="https://github.com/summbal122/Amazon.git"
              description="Amazon Clone is e-commerce web app built with React, Redux Toolkit, and Tailwind CSS. It features dynamic routing, category-based product rendering with the DummyJSON API, and a functional shopping cart with persistence via localStorage. It includes custom shimmer loading effects and Jest-tested reliability."
            />
          </SwiperSlide>

          <SwiperSlide className=" p-5 lg:p-10">
            <ProjectCard imageSrc="/image2.png" title="YouTube Clone" demoLink="https://fir-ad80a.web.app/" 
              githubLink="https://github.com/summbal122/Youtube.git"
              description="YouTube Clone is a responsive video streaming app. It integrates the YouTube Data API v3 to display trending videos, handle debounced search queries, and optimize performance with Redux-based LRU caching. The app includes dynamic routing, a simulated live chat, and delivers a smooth user experience."
            />
          </SwiperSlide>

          <SwiperSlide className=" p-5 lg:p-10">
            <ProjectCard
              imageSrc="/image7.png"
              title="Food Ordering App"
               demoLink="https://food-ordering-app-cc5dc.web.app/" 
              githubLink="https://github.com/summbal122/food_ordering_website.git"
              description="It integrates the Swiggy API for real-time restaurant data, supports Firebase authentication, and features dynamic routing with categorized menus. It includes a shimmer loading effect, persistent cart management via Local Storage, and over 10 Jest-tested unit and integration cases for reliable performance."
            />
          </SwiperSlide>

          <SwiperSlide className=" p-5 lg:p-10">
            <ProjectCard
              imageSrc="/image5.png"
              title="Dessert Shop"
               demoLink="https://dessert-shop-641cc.web.app/" 
              githubLink="https://github.com/summbal122/Dessert-Shop.git"
              description="Dessert Shop is a multilingual web app. It features dynamic content switching for English, French, and German, reusable HOCs for badges, and smooth Framer Motion animations. The app delivers a scalable, mobile-friendly design, achieves a 90+ Lighthouse score, and is deployed on Firebase."
            />
          </SwiperSlide>

          <SwiperSlide className=" p-5 lg:p-10">
            <ProjectCard
              imageSrc="/image6.png"
              title="Destino"
              githubLink="https://github.com/summbal122/Destino.git" 
              demoLink="https://summbal122.github.io/Destino/"
              description="Destino is a responsive travel landing page built with Tailwind CSS and deployed on GitHub Pages. It showcases a modern hero section, travel plans with hover effects, and a smooth FAQ accordion, all wrapped in a clean single-page layout. The site emphasizes responsive design, elegant UI, and seamless navigation."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
