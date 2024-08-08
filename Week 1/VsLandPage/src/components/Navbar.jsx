import "./Navbar.scss";
import vsIcon from "../assets/vsicon.png";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const Docs = () => toast("Docs Page is Coming Soon!");
  const Updates = () => toast("Updates Page is Coming Soon!");
  const Blog = () => toast("Blog Page is Coming Soon!");
  const Api = () => toast("Api Page is Coming Soon!");
  const Extensions = () => toast("Extensions Page is Coming Soon!");
  const Faq = () => toast("FAQ Page is Coming Soon!");
  const Learn = () => toast("Learn Page is Coming Soon!");

  return (
    <div className="mainNavbar">
      <div className="container">
        <nav>
          <div className="navigationPart">
            <div className="vsLogo">
              <img src={vsIcon} alt="Icon" />
              <p>Visual Studio Code</p>
            </div>
            <ul>
              <li onClick={Docs}>Docs</li>
              <li onClick={Updates}>Updates</li>
              <li onClick={Blog}>Blog</li>
              <li onClick={Api}>Api</li>
              <li onClick={Extensions}>Extensions</li>
              <li onClick={Faq}>FAQ</li>
              <li onClick={Learn}>Learn</li>
              <ToastContainer />
              <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
              />
            </ul>
          </div>
          <div className="actionPart d-flex">
            <img src="https://code.visualstudio.com/assets/icons/theme-light.svg" alt="" />
            <div className="searchInput d-flex">
              <img src="https://code.visualstudio.com/assets/icons/search-dark.svg" alt="" />
              <input type="text" placeholder="Search Docs         " />
            </div>
            <button className="dwnlBtn">Download</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
