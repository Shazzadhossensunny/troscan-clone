import About from "@/components/home/About";
import CallToAction from "@/components/home/CallToAction";
import Expertise from "@/components/home/Expertise";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import News from "@/components/home/News";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Projects />
      <Expertise />
      <CallToAction />
      <News />
    </>
  );
}
