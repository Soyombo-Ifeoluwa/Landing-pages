import About from "./About/About";
import Contact from "./Contact/contact";
import Course from "./Courses/Course";
import Footer from "./Footer/footer";
import Hero from "./Hero/Hero";
function Page1() {
  return (
    <div>
     <Hero />
     <About/>
     <Course/>
     <Contact/>
     <Footer/>
    </div>
  );
}


export default Page1;