import { Link } from "react-router-dom";
import {
  footerOne,
  footerTwo,
  googlePlay,
  appStore,
  logo,
  logoWhite,
} from "../assets/img";

const Footer = ({ mode }) => {
  return (
    <footer>
      <div className="container py-20 relative">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Item  */}
          <div>
            <img
              src={mode ? logoWhite : logo}
              alt="logo"
              className="object-contain mb-5"
            />
            <p className="dark:text-white">This Christmas give a lot of love</p>
          </div>
          {/* Item  */}
          <div>
            <h3 className="text-xl font-semibold mb-5 dark:text-white">
              Our Services
            </h3>
            <ul className="text-secondary text-lg flex flex-col gap-4 dark:text-darkText">
              <li>
                <Link to={"/"}>Pricing</Link>
              </li>
              <li>
                <Link to={"/"}>Discounts</Link>
              </li>
              <li>
                <Link to={"/"}>Shipping mode</Link>
              </li>
            </ul>
          </div>
          {/* Item  */}
          <div>
            <h3 className="text-xl font-semibold mb-5 dark:text-white">
              Support
            </h3>
            <ul className="text-secondary text-lg flex flex-col gap-4 dark:text-darkText">
              <li>
                <Link to={"/"}>FAQs</Link>
              </li>
              <li>
                <Link to={"/"}>Support center</Link>
              </li>
              <li>
                <Link to={"/"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* Item  */}
          <div>
            <h3 className="text-xl font-semibold mb-5 dark:text-white">
              Available On
            </h3>
            <div className="flex flex-col gap-2 items-start">
              <Link to={"/"}>
                <img
                  src={googlePlay}
                  alt="google-play"
                  className="object-contain"
                />
              </Link>
              <Link to={"/"}>
                <img
                  src={appStore}
                  alt="app-Store"
                  className="object-conatain"
                />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center mt-10 text-secondary dark:text-darkText">
          {" "}
          &copy; <a href="https://www.browter.com">Browter.com</a> . All rigths
          reserved
        </p>
        <img
          src={footerOne}
          alt="footer-lamp"
          className="absolute top-36 right-0 md:top-48 md:left-0"
        />
        <img
          src={footerTwo}
          alt="footer-lamp"
          className="absolute bottom-28 right-0 md:right-0 "
        />
      </div>
    </footer>
  );
};

export default Footer;
