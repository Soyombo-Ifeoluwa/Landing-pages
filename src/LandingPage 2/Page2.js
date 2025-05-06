import About from "./About/About";
import Hero from "./Hero/Hero";

function Page2() {
  return (
    <div style={{ backgroundColor: "black", height: "100%", padding: "20px" }} >
     <Hero />
     <About/>
    </div>
  );
}

export default Page2;