import logoImg from "../../assets/images/neo-plus-logo.png";

function BrandingPanel() {
  return (
    <section className="branding-panel">

      <div className="overlay"></div>

      <div className="branding-content">

        <div className="logo-container">
          <img
            src={logoImg}
            alt="Neo Plus Logo"
            className="logo"
          />

          <div className="logo-text">
            <h2>NEO PLUS</h2>
            <p>Hospital Management System</p>
          </div>
        </div>

        <div className="hero-content">
          <h1>
            Intelligent Healthcare,
            <br />
            <span>Seamless Tomorrow</span>
          </h1>

          <p>
            Neo Plus HMS helps hospitals streamline
            operations, enhance patient care and
            empower healthcare professionals with
            intelligent solutions.
          </p>
        </div>

        <div className="feature-cards">

          <div className="feature-card">
            <h4>📅</h4>
            <p>Smart Scheduling</p>
          </div>

          <div className="feature-card">
            <h4>👤</h4>
            <p>Patient Management</p>
          </div>

          <div className="feature-card">
            <h4>🤖</h4>
            <p>AI Copilot</p>
          </div>

          <div className="feature-card">
            <h4>🔒</h4>
            <p>Secure Records</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default BrandingPanel;