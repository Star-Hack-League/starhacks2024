import "../styles/Landing.css";

function Landing() {
  return (
    <>
      <div className="navbar-container">
        <a href="https://starhack.tech">
          <h1 className="navbar">Star Hack Alliance</h1>
        </a>
        <div className="navbar-links">
          <a href="https://starhack.tech" className="link">
            <p className="navbar-secondary home">Home</p>
          </a>
          <a href="https://starhack.tech/info" className="link">
            <p className="navbar-secondary info">Info</p>
          </a>
          <a href="https://starhack.tech/rankings" className="link">
            <p className="navbar-secondary info">Rankings</p>
          </a>
          <a
            href="https://lll2cu7fgqm.typeform.com/to/Z2Q4Zo7N"
            className="link"
          >
            <p className="navbar-secondary info">Partner</p>
          </a>
          <a href="https://starhack.tech/events" className="link">
            <p className="navbar-secondary info events">Events</p>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="centered-content">
          <div className="image-container">
            <img src="/Star.png" alt="Star" className="image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
