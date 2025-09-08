import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
       <div className="bg-amber-50/20">
        <MainSection/> 
        <About/>
        <Projects/>
        <Footer/>
          </div>
  );
}
