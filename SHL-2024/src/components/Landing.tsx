import "../styles/Landing.css";

function Landing() {
  return (
    <>
      <div className="container">
        <div className="navbar-container">
          <h1 className="navbar">Star Hack Alliance</h1>
          <p className="navbar-secondary home">Home</p>
          <p className="navbar-secondary info">Info</p>
          <p className="navbar-secondary info">Rankings</p>
          <p className="navbar-secondary info">Partner</p>
          <p className="navbar-secondary info">Events</p>
        </div>
        <div className="image-container">
          <img src="/Star.png" alt="Star" className="image" />
          <h1 className="SHL">Hack 2024</h1>
        </div>
        <hr className="dotted" />
      </div>
    </>
  );
}
export default Landing;
