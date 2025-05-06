import About from "./About/About";
import Hero from "./Hero/Hero";
import Testimonial from "./Testimonial/Testimonial";

function Page2() {
  return (
    <div style={{ backgroundColor: "black", height: "100%", padding: "20px" }} >
     <Hero />
     <About/>
     <Testimonial/>
    </div>
  );
}

export default Page2;