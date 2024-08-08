import "./Home.scss";
import Redefined from '../assets/Redifined.png'

const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="container">
        <div className="mainHome">
          <div className="textRedefined">
            <h3>Free. Built on open source. Runs everywhere.</h3>
            <h1>Code Editing. Redefined.</h1>
            <button type="button">Download for macOS</button>
            <h2>
              <span>Web</span>, 
              <span>Insiders edition</span>, or <span>other platforms</span>
            </h2>
            <h4>By using VS Code, you agree to its <span>license</span> and <span>privacy statement</span>.</h4>
          </div>
          <div className="bgImg">
            <img src={Redefined} alt="background Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
