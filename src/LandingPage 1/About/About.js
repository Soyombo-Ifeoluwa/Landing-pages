import about from "./about.png";
import "./About.css";

function About() {
  return (
    <div className="about-content">
      <div className="about-image">
        <img src={about} alt="about" />
      </div>
      <div className="about-text">
        <span>A BIT</span>
        <h1>ABOUT US</h1>
        <p>
          Welcome to AltEdu, where learning takes a new direction. We believe
          education shouldn’t be confined to traditional classrooms—it should be
          accessible, dynamic, and personalized. AltEdu is built for thinkers,
          creators, and problem-solvers looking for practical, engaging learning
          experiences that align with their passions and aspirations. Whether
          you're diving into career-changing skills, exploring creative fields,
          or embracing peer-driven knowledge sharing, AltEdu empowers you to
          learn your way.
        </p>
        <button className="about-button">EXPLORE MORE</button>
      </div>
    </div>
  );
}

export default About;
