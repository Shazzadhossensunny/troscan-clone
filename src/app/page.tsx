import About from "@/components/home/About";
import Expertise from "@/components/home/Expertise";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Projects />
      <Expertise />
    </>
  );
}
