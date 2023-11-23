import "../styles/Landing.css";

function Landing() {
  return (
    <>
	<div className="navbar-container">
        <h1 className="navbar">Star Hack Alliance</h1>
        <div className="navbar-links">
          <p className="navbar-secondary home">Home</p>
          <p className="navbar-secondary info">Info</p>
          <p className="navbar-secondary info">Rankings</p>
          <p className="navbar-secondary info">Partner</p>
          <p className="navbar-secondary info events">Events</p>
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
