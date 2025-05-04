import image from "./course.png";
import logo1 from "./Group 39.png";
import images from "./Rectangle 94.png";
import "./Course.css";
function Course({ course }) {
    const courses = [
        {
          title: "Web Development Bootcamp",
          description: "Learn HTML, CSS, and JavaScript to build modern websites.",
          image:images,
        },
        {
          title: "Public speaking & communication",
          description: "Master Python, data analysis, and machine learning basics.",
          image:images,
        },
        {
          title: "Physcology and Human Behavior",
          description: "Explore SEO, social media marketing, and content strategy.",
          image:images,
        },
        {
          title: "Graphic Design for Beginners",
          description: "Create stunning visuals using Photoshop and Illustrator.",
          image:images,
        },
        {
            title: "Freelancing and Entrepreneurship",
            description: "Create stunning visuals using Photoshop and Illustrator.",
            image:images,
        },
      ];
      const category = [
        {
            title:"Tech and Digital skills",
            number:"128 courses",
            logo:logo1,
        },
        {
            title:"Creative and media",
            number:"100 courses",
            logo:logo1,
        },
        {
            title:"Personal Development",
            number:"50 courses",
            logo:logo1,
        },
        {
            title:"Science and Innovation",
            number:"150 courses",
            logo:logo1,
        }
      ];
    
  return (
    <div>
    <div className="course-content">
      <div className="course-text">
        <h1>Dive into our Online Courses and Ignite Your Learning.</h1>
        <p>
          Our platform offers: Skill-focused courses that prepare you for
          real-world challenges, Micro-learning modules for quick, effective
          knowledge boosts, Community-driven education where experts and
          learners grow together, Gamified, interactive experiences that make
          learning fun At AltEdu, we’re redefining education—because learning
          should evolve with you. Join us on this journey, and let’s shape the
          future of knowledge together.
        </p>
      </div>
      <div className="course-image">
        <img src={image} alt="courses" />
      </div>
    </div>
    <div className="course-card">
        <h1>Our Popular Online Courses</h1>
        <p>Explore our most popular courses and start your learning journey today!</p>
        <div className="categories">
            {category.map((cat, index) => (
                <div key={index} className="category-card">
                    <div className="category-logo">
                        <img src={cat.logo} alt="logo" className="cat-logo" />
                    </div>
                    <div className="category-text">
                    <h2>{cat.title}</h2>
                    <p>{cat.number}</p>
                    </div>
                    </div>
            ))
                }
        </div>
        <div className="course-list">
          {courses.map((course, index) => (
            <div key={index} className="course-item">
                        <img src={course.image} alt="courseimage" className="course-img" />
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <button className="course-button">Enroll Now</button>
              <button className="course-button1">Explore</button>
            </div>
          ))}
    </div>
    </div>
    </div>
  );
}

export default Course;
