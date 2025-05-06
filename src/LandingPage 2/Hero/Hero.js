import "./Hero.css";
import Page2img from "./Frame8.png";

function Hero() {
  return (
    <div className="page2-hero">
      <div className="page2hero-text">
        <h1>Celebrating Identity, Style & Stories.</h1>
        <p>
          "Beyond faces, beyond portraits—each image is a reflection of
          identity, confidence, and the untold stories that shape us. From the
          intensity in a gaze to the warmth in a smile, these moments
          immortalize personal journeys, emotions, and individuality. Every
          photograph holds a voice, every person brings a unique presence, and
          together, they form a tapestry of connection, diversity, and
          self-expression. Explore the stories within these faces—because behind
          every portrait, there’s a world waiting to be seen."
        </p>
        <button className="page2hero-button">Explore more</button>
      </div>
      <div className="page2hero-image">
        <img src={Page2img} alt="AI" className="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
