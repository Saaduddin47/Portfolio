import "./styles/Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      icon: "🏆",
      title: "Best Use of AWS Award",
      description:
        "Won ₹22,000 prize at Build With × Hackprix National Hackathon for excellence in cloud architecture and deployment strategy.",
    },
    {
      icon: "📄",
      title: "Research Publication",
      description:
        "Credit Card Fraud Detection Using Random Forest And CART Algorithms — IJLTEMAS Journal, Vol. XIV, Issue IV, April 2025.",
    },
    {
      icon: "🎤",
      title: "Expert Speaker",
      description:
        "Invited speaker at 2-day student hackathon at VBIT — addressed 500+ participants on AI and cloud engineering topics.",
    },
    {
      icon: "🤖",
      title: "Anthropic Certified",
      description:
        "Building with the Claude API (Apr 2026) · AI Fluency Framework & Foundations (Mar 2026)",
    },
    {
      icon: "📊",
      title: "Microsoft Power BI Certified",
      description:
        "36-hour professional certification — ARASMO Technologies",
    },
    {
      icon: "👨‍🏫",
      title: "Student Mentor",
      description:
        "Guided first-year students in technical and career preparation via Lords Skill Connect IQAC initiative.",
    },
  ];

  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>
          Achievements <span>&</span>
          <br /> Certifications
        </h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-icon">{achievement.icon}</div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
