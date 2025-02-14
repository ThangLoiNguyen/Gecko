import About from "@/components/About";
import Navigation from "@/components/Navigation";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="font-sans w-full">  
      <Navigation />
      <Slider />
      <About />
    </div>
  );
}
