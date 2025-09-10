"use client";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-bg-primary/80 py-10 flex flex-col items-center">
       <h1 className="text-4xl md:text-5xl text-white font-bold mb-5 font-serif">
        My Projects
      </h1>
      <p className="text-white max-w-2xl text-center">
        A selection of my recent frontend projects — showcasing React, Next.js,
        Tailwind CSS, API integrations, and animations. Click to explore live demos and source code.
      </p>

      <div className="w-11/12 relative">
       <Swiper modules={[Navigation, Pagination]}  spaceBetween={0}
        slidesPerView={3} navigation pagination={{ clickable: true }}
        loop>
          <SwiperSlide className="p-10">
            <ProjectCard imageSrc="/image.png"
            title="Recipe Finder"
            demoLink="https://recipefinder-web-app.web.app/" 
             githubLink="https://github.com/summbal122/Recipe-Finder.git"
            description="Recipe Finder is a responsive web app to explore global recipes using TheMealDB API. Built with React, Redux Toolkit, and Tailwind CSS, it features recipe search, category browsing, detailed instructions, smooth Motion animations, and is deployed on Firebase with Jest-tested reliability." />
          </SwiperSlide>

          <SwiperSlide className="p-10">
            <ProjectCard imageSrc="/image3.png" title="Netflix-GPT" demoLink=" https://netflixgpt-f6131.web.app/" 
              githubLink="https://github.com/summbal122/Netflix-GPT.git"
              description="Netflix GPT is a movie recommendation app that mimics the Netflix UI and delivers AI-powered suggestions using the TMDB API. Built with React, Redux Toolkit, and Tailwind CSS, it features Firebase authentication, GPT-powered search, and a fully responsive design for a seamless streaming-like experience."
            />
          </SwiperSlide>

          <SwiperSlide className="p-10">
            <ProjectCard imageSrc="/image4.png" title="Amazon Clone" demoLink="https://fir-d25e5.web.app/" 
              githubLink="https://github.com/summbal122/Amazon.git"
              description="Amazon Clone is e-commerce web app built with React, Redux Toolkit, and Tailwind CSS. It features dynamic routing, category-based product rendering with the DummyJSON API, and a functional shopping cart with persistence via localStorage. It includes custom shimmer loading effects and Jest-tested reliability."
            />
          </SwiperSlide>

          <SwiperSlide className="p-10">
            <ProjectCard imageSrc="/image2.png" title="YouTube Clone" demoLink="https://fir-ad80a.web.app/" 
              githubLink="https://github.com/summbal122/Youtube.git"
              description="YouTube Clone is a responsive video streaming app. It integrates the YouTube Data API v3 to display trending videos, handle debounced search queries, and optimize performance with Redux-based LRU caching. The app includes dynamic routing, a simulated live chat, and delivers a smooth user experience."
            />
          </SwiperSlide>

          <SwiperSlide className="p-10">
            <ProjectCard
              imageSrc="/image7.png"
              title="Food Ordering App"
               demoLink="https://food-ordering-app-cc5dc.web.app/" 
              githubLink="https://github.com/summbal122/food_ordering_website.git"
              description="It integrates the Swiggy API for real-time restaurant data, supports Firebase authentication, and features dynamic routing with categorized menus. It includes a shimmer loading effect, persistent cart management via Local Storage, and over 10 Jest-tested unit and integration cases for reliable performance."
            />
          </SwiperSlide>

          <SwiperSlide className="p-10">
            <ProjectCard
              imageSrc="/image5.png"
              title="Dessert Shop"
               demoLink="https://dessert-shop-641cc.web.app/" 
              githubLink="https://github.com/summbal122/Dessert-Shop.git"
              description="Dessert Shop is a multilingual web app. It features dynamic content switching for English, French, and German, reusable HOCs for badges, and smooth Framer Motion animations. The app delivers a scalable, mobile-friendly design, achieves a 90+ Lighthouse score, and is deployed on Firebase."
            />
          </SwiperSlide>

          <SwiperSlide className="p-10">
            <ProjectCard
              imageSrc="/image6.png"
              title="Destino"
              demoLink="https://github.com/summbal122/Destino.git" 
              githubLink="https://summbal122.github.io/Destino/"
              description="Destino is a responsive travel landing page built with Tailwind CSS and deployed on GitHub Pages. It showcases a modern hero section, travel plans with hover effects, and a smooth FAQ accordion, all wrapped in a clean single-page layout. The site emphasizes responsive design, elegant UI, and seamless navigation."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
