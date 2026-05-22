import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm Syed Saaduddin Azhaan — a B.Tech (Data Science) graduate and full-stack
          developer focused on AI, automation, and data-driven systems. I build
          production-ready ML and web products that solve real operational problems,
          including RAG-based LLM systems, fraud detection pipelines, real-time
          computer-vision applications, and full-stack web platforms.
        </p>
        <p className="para">
          Selected work includes an academic social network (Next.js + Node + Redis),
          RewardSync (recruitment incentive platform), an AI-powered PDF summarizer,
          a credit-card fraud detection pipeline, and a face-recognition attendance system.
        </p>
      </div>
    </div>
  );
};

export default About;
