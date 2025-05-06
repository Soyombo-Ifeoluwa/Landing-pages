import "./About.css";
import face from "./face.png";
function About() {
  return (
    <div className="page2-about">
      <h5>ABOUT US</h5>
      <h2>
        "The Faces Behind the Lens: Capturing Identity, Expression & Connection"
      </h2>
      <p>
        Welcome to a visual journey that goes beyond mere portraits. Every image
        here is a moment frozen in time—an expression of personality, emotion,<br/>
        and connection. Through this collection, we celebrate diversity,
        confidence, and individuality, showcasing the power of human presence in
        its purest form."
      </p>
      <div className="why">
        <div className="mission">
          <h3>MISSION</h3>
          <p>
            Photography is more than just pictures—it's storytelling without
            words. Our goal is to transform simple portraits into visual
            narratives that evoke emotions, spark conversations, and inspire
            appreciation for the beauty within every individual. Whether it's
            the subtle strength in a gaze or the warmth of an unguarded smile,
            every photograph holds a unique essence waiting to be seen.
          </p>
          <h3>IMPACT</h3>
          <p>
            In a world where people are often judged by fleeting impressions,
            portraits offer a lasting perspective—one that tells a deeper story.
            These images aren’t just photos; they are emotions captured in
            frames, identities preserved in pixels, and reflections of lives
            that deserve to be seen and celebrated.
          </p>
        </div>
        <div className="faces">
          <img src={face} alt="faces" className="face-images" />
        </div>
      </div>
      <div className="button-about">

        <button className="but-ton">Know More About Us</button>
      </div>
    </div>
  );
}

export default About;
