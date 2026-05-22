import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Experience</span>
          <br /> & Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Intern</h4>
                <h5>Manac Infotech · Hyderabad</h5>
              </div>
              <h3>Dec 2024 – Jan 2025</h3>
            </div>
            <p>
              Developed and deployed a Random Forest fraud detection model achieving 99% accuracy
              on 50,000+ transactions. Built Pandas data pipelines for feature engineering and
              transformation. Reduced false positives by 20% via precision-recall and F1-score optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Intern Certify · Hyderabad</h5>
              </div>
              <h3>Oct 2024 – Nov 2024</h3>
            </div>
            <p>
              Built responsive web applications with HTML, CSS, and JavaScript; improved page load
              time by 30%. Applied GitHub branching strategies across 3 live projects, reducing merge
              conflicts by 40%. Improved user engagement by 25% via interactive DOM elements and
              modern UI/UX patterns.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science (Data Science)</h4>
                <h5>Lords Institute of Engineering & Technology, Hyderabad</h5>
              </div>
              <h3>Nov 2022 – Jun 2026</h3>
            </div>
            <p>
              Graduating June 2026 with a CGPA of 8.7 / 10. Coursework includes Machine Learning,
              Data Structures & Algorithms, OOP, DBMS, SQL, and relevant AI/ML specialization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
