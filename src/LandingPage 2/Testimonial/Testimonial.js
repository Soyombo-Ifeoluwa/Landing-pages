import "./Testimonial.css";

const testimonials = [
  {
    name: "Stephen A.",
    rating: 5,
    text: "I never saw myself as someone worthy of being photographed until now. This portrait helped me embrace my confidence and truly appreciate my own beauty.",
    className: "black-card",
  },
  {
    name: "Barry W.",
    rating: 5,
    text: "There’s something magical about the way these images capture emotion. Seeing myself through the lens made me realize the power of storytelling without words.",
    className: "white-card",
  },
  {
    name: "Simon F.",
    rating: 5,
    text: "Not just a photograph—a moment, a feeling, a powerful reflection of self. This experience reminded me that every expression holds meaning.",
    className: "green-card",
  },
  {
    name: "Aisha M.",
    rating: 5,
    text: "This collection isn’t just about faces—it’s about connection, diversity, and identity. I’m honored to be part of something that showcases real people in their most authentic form.",
    className: "gray-card",
  },
  {
    name: "Emmanuel O.",
    rating: 5,
    text: "Super professional, organised and great to work with. These guys were invaluable on our last major project. Can’t recommend enough.",
    className: "purple-card",
  },
];

const StarRating = ({ rating }) => (
  <div className="stars">
    {[...Array(rating)].map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);
function Testimonial() {
  return (
    <section className="testimonial-section">
      <p className="subtitle">Rating & Reviews</p>
      <h2 className="title">Trusted by people</h2>
      <div className="cards-container">
        {testimonials.map((t, i) => (
          <div key={i} className={`card ${t.className}`}>
            <StarRating rating={t.rating} />
            <p className="text">{t.text}</p>
            {t.name && <p className="author">{t.name}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
