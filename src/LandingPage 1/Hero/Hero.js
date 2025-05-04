import "./Hero.css";
import png from "./Frame1.png";
function Hero() {
  return (
    <div className="hero">
      <div className="navbar-container">
        <div className="logo-container">
          <h1>AltEdu</h1>
        </div>
        <nav className="navbar">
          <div>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Courses</a>
            <a href="#">Contact</a>
          </div>
        </nav>
        <div className="sidenav">
          <a href="#">Sign Up</a>
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>A new way to learn & get knowledge.</h1>
          <p>
          AltEdu is here for you with various courses & materials from
            skilled tutors all around the world.
          </p>
          <div className="buttons">
            <button className="hero-button">Join the Class</button>
            <button className="hero-button1">Learn More</button>
          </div>
          <div className="hero-stats">
            <div>
               <span>50.5K+</span>
              <p>Active students</p>
            </div>
            <div>
               <span>1.2K+</span>
              <p>Tutors</p>
            </div>
            <div>
              <span> 500+</span>
              <p>Courses</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={png} alt="He" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
