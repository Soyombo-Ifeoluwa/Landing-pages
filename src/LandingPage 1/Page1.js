import About from "./About/About";
import Contact from "./Contact/contact";
import Course from "./Courses/Course";
import Hero from "./Hero/Hero";
function Page1() {
  return (
    <div>
     <Hero />
     <About/>
     <Course/>
     <Contact/>
    </div>
  );
}


export default Page1;