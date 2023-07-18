import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { BsFillMoonFill, BsMoon } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import logo from "./assets/img/logo.png";
import logoWhite from "./assets/img/logo-white.png";
import tree from "./assets/img/tree.png";
import givingOne from "./assets/img/giving1.png";
import givingTwo from "./assets/img/giving2.png";
import givingThree from "./assets/img/giving3.png";
import celebrate from "./assets/img/celebrate1.png";
import giftOne from "./assets/img/gift1.png";
import giftTwo from "./assets/img/gift2.png";
import giftThree from "./assets/img/gift3.png";
import giftFour from "./assets/img/gift4.png";
import giftFive from "./assets/img/gift5.png";

import nGiftOne from "./assets/img/ngift1.png";
import nGiftTwo from "./assets/img/ngift2.png";
import nGiftThree from "./assets/img/ngift3.png";

import letter from "./assets/img/letter1.png";
import googlePlay from "./assets/img/aviable1.png";
import appStore from "./assets/img/aviable2.png";

import footerOne from "./assets/img/footer1.png";
import footerTwo from "./assets/img/footer2.png";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="dark:bg-darkBg">
      <BrowserRouter>
        <header>
          <div className="container">
            <div className="flex justify-between h-[72px] items-center">
              <div className="logo">
                <Link to="/">
                  {" "}
                  <img
                    src={darkMode ? logoWhite : logo}
                    alt="Logo"
                    className="object-contain"
                  />
                </Link>
              </div>
              <nav className="hidden md:flex">
                <ul className="flex items-center gap-11 text-lg font-medium dark:text-white">
                  <li className="transition-color duration-200 hover:text-red">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="transition-color duration-200 hover:text-red">
                    <Link to="/about">Celebrate</Link>
                  </li>
                  <li className="transition-color duration-200 hover:text-red">
                    <Link to="/gifts">Gifts</Link>
                  </li>
                  <li className="transition-color duration-200 hover:text-red">
                    <Link to="/new">New</Link>
                  </li>
                  <li onClick={toggleDarkMode} className="cursor-pointer">
                    {darkMode ? <BsMoon /> : <BsFillMoonFill />}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {/* Promo Section  */}
        <section>
          <div className="container py-20">
            <div className="flex flex-col justify-between gap-10 items-center md:flex-row">
              <div className="w-full md:w-1/2">
                <img
                  src={tree}
                  alt="christmas tree"
                  className="w-full object-cover"
                />
              </div>
              <div className="w-full text-center md:text-left md:w-1/2">
                <h1 className="text-4xl font-bold text-primary dark:text-white">
                  Merry Christmas and Happy New Year!
                </h1>
                <p className="text-lg mt-5 text-secondary dark:text-darkText">
                  Christmas and a new year is about to begin, all good wishes
                  and successes.
                </p>
                <button className="btn_primary mt-16">Get Started</button>
              </div>
            </div>
          </div>
        </section>
        {/* End Promo Section */}

        {/* Giving Section */}
        <section>
          <div className="container py-20">
            <div className="section_header mb-20">
              <h2 className="text-2xl font-semibold text-primary text-center dark:text-white">
                Start Giving This <br />
                Christmas
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              {/* Item  */}
              <div className="flex flex-col items-center">
                <img src={givingOne} alt="Surprise gifts" className="mb-5" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Surprise gifts
                </h3>
                <p className="text-secondary text-center dark:text-darkText">
                  They are the best gifts there is.
                </p>
              </div>
              {/* Item  */}
              <div className="flex flex-col items-center">
                <img src={givingTwo} alt="Surprise gifts" className="mb-5" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Surprise gifts
                </h3>
                <p className="text-secondary text-center dark:text-darkText">
                  They are the best gifts there is.
                </p>
              </div>
              {/* Item  */}
              <div className="flex flex-col items-center">
                <img src={givingThree} alt="Surprise gifts" className="mb-5" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Surprise gifts
                </h3>
                <p className="text-secondary text-center dark:text-darkText">
                  They are the best gifts there is.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End Giving Section */}

        {/* Celebrate Section  */}
        <section>
          <div className="container py-20">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="w-full flex flex-col gap-10 items-center text-center md:text-left md:items-start md:w-1/2">
                <h2 className="font-semibold text-2xl dark:text-white">
                  Celebrate With A Lot <br />
                  Of Love
                </h2>
                <p className="text-lg text-secondary dark:text-darkText">
                  In this holidays, celebrate with much love and peace, offering
                  many blessings to our loved ones, friends and neighbors,
                  wishing them a good Christmas message.
                </p>
                <button className="btn_primary">Send Good Wishes</button>
              </div>
              <div className="w-full md:w-1/2">
                <img src={celebrate} alt="Celebrate" className="w-full" />
              </div>
            </div>
          </div>
        </section>
        {/* End Celebrate Section  */}

        {/* Gift Section  */}
        <section>
          <div className="container py-20">
            <div className="section_header mb-20">
              <h2 className="text-2xl font-semibold text-primary text-center dark:text-white">
                Share A Gift
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-12 lg:gap-28">
              {/* Item  */}
              <div className="relative px-6 py-8 border border-gray-100 shadow-xl shadow-gray-300 rounded-lg flex flex-col hover:rotate-6 transition-transform duration-200 dark:bg-darkAlt dark:shadow-none dark:border-0">
                <AiOutlineHeart className="absolute top-6 right-6 text-xl text-red cursor-pointer hover:scale-125 transition-transform duration-200" />
                <div className="flex justify-center mb-5">
                  <img src={giftOne} alt="gift1" className="object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  $15
                </h3>
                <Link to={"/"}>
                  <p className="text-secondary font-medium dark:text-darkText">
                    Gingerbread
                  </p>
                </Link>
              </div>
              {/* Item  */}
              <div className="relative px-6 py-8 border border-gray-100 shadow-xl shadow-gray-300 rounded-lg flex flex-col hover:rotate-6 transition-transform duration-200 dark:bg-darkAlt dark:shadow-none dark:border-0">
                <AiOutlineHeart className="absolute top-6 right-6 text-xl text-red cursor-pointer hover:scale-125 transition-transform duration-200" />
                <div className="flex justify-center mb-5">
                  <img src={giftTwo} alt="gift2" className="object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  $22
                </h3>
                <Link to={"/"}>
                  <p className="text-secondary font-medium dark:text-darkText">
                    Santa Claus Hat
                  </p>
                </Link>
              </div>
              {/* Item  */}
              <div className="relative px-6 py-8 border border-gray-100 shadow-xl shadow-gray-300 rounded-lg flex flex-col hover:rotate-6 transition-transform duration-200 dark:bg-darkAlt dark:shadow-none dark:border-0">
                <AiFillHeart className="absolute top-6 right-6 text-xl text-red cursor-pointer hover:scale-125 transition-transform duration-200" />
                <div className="flex justify-center mb-5">
                  <img src={giftThree} alt="gift3" className="object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  $12
                </h3>
                <Link to={"/"}>
                  <p className="text-secondary font-medium dark:text-darkText">
                    Candy Stick
                  </p>
                </Link>
              </div>
              {/* Item  */}
              <div className="relative px-6 py-8 border border-gray-100 shadow-xl shadow-gray-300 rounded-lg flex flex-col hover:rotate-6 transition-transform duration-200 dark:bg-darkAlt dark:shadow-none dark:border-0">
                <AiOutlineHeart className="absolute top-6 right-6 text-xl text-red cursor-pointer hover:scale-125 transition-transform duration-200" />
                <div className="flex justify-center mb-5">
                  <img src={giftFour} alt="gift4" className="object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  $48
                </h3>
                <Link to={"/"}>
                  <p className="text-secondary font-medium dark:text-darkText">
                    Christmas Tree
                  </p>
                </Link>
              </div>

              {/* Item  */}
              <div className="relative px-6 py-8 border border-gray-100 shadow-xl shadow-gray-300 rounded-lg flex flex-col hover:rotate-6 transition-transform duration-200 dark:bg-darkAlt dark:shadow-none dark:border-0">
                <AiOutlineHeart className="absolute top-6 right-6 text-xl text-red cursor-pointer hover:scale-125 transition-transform duration-200" />
                <div className="flex justify-center mb-5">
                  <img src={giftFive} alt="gift5" className="object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  $35
                </h3>
                <Link to={"/"}>
                  <p className="text-secondary font-medium dark:text-darkText">
                    Snowman
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* End Gift Section  */}

        {/* New Gift Section  */}
        <section>
          <div className="container py-20">
            <div className="section_header mb-20">
              <h2 className="text-2xl font-semibold text-primary text-center dark:text-white">
                New Gifts
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-12 lg:gap-28">
              {/* Item  */}
              <div className="shadow-xl rounded-xl overflow-hidden hover:scale-110 transition-transform duration-300">
                <div className="bg-red flex justify-center py-6 rounded-b-full">
                  <img src={nGiftOne} alt="ngift1" className="object-contain" />
                </div>
                <div className="flex flex-col items-center mt-8">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    $18
                  </h3>
                  <p className="text-lg font-medium dark:text-darkText">
                    Christmas Wreath
                  </p>
                </div>
                <div className="flex justify-end">
                  <div className="p-3 bg-red rounded-l-lg cursor-pointer">
                    <AiOutlineHeart className="text-xl text-white cursor-pointer " />
                  </div>
                </div>
              </div>
              {/* Item  */}
              <div className="shadow-xl rounded-xl overflow-hidden hover:scale-110 transition-transform duration-300">
                <div className="bg-red flex justify-center py-6 rounded-b-full">
                  <img src={nGiftTwo} alt="ngift2" className="object-contain" />
                </div>
                <div className="flex flex-col items-center mt-8">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    $95
                  </h3>
                  <p className="text-lg font-medium dark:text-darkText">
                    Reindeer
                  </p>
                </div>
                <div className="flex justify-end">
                  <div className="p-3 bg-red rounded-l-lg cursor-pointer">
                    <AiOutlineHeart className="text-xl text-white cursor-pointer " />
                  </div>
                </div>
              </div>
              {/* Item  */}
              <div className="shadow-xl rounded-xl overflow-hidden hover:scale-110 transition-transform duration-300">
                <div className="bg-red flex justify-center py-6 rounded-b-full">
                  <img
                    src={nGiftThree}
                    alt="ngift3"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-center mt-8">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    $20
                  </h3>
                  <p className="text-lg font-medium dark:text-darkText">
                    Snow globe
                  </p>
                </div>
                <div className="flex justify-end">
                  <div className="p-3 bg-red rounded-l-lg cursor-pointer">
                    <AiOutlineHeart className="text-xl text-white cursor-pointer " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End New Gift Section  */}

        {/* contact Section  */}
        <section>
          <div className="container py-20">
            <div className="flex justify-between bg-red py-10 px-16 rounded-2xl dark:bg-darkAlt">
              <div className="w-full md:w-1/2 flex  flex-col items-center md:items-start">
                <h1 className="text-3xl font-semibold text-white mb-10 text-center md:text-left">
                  Send Good <br />
                  Wishes!
                </h1>
                <input
                  type="text"
                  placeholder="write your message"
                  className="py-6 rounded-full px-6"
                />
                <button className="btn_secondary  mt-5">Send Message</button>
              </div>
              <div className="w-full md:w-1/2">
                <img src={letter} alt="message" className="object-contain" />
              </div>
            </div>
          </div>
        </section>
        {/* End contact Section  */}

        {/* Footer Section  */}
        <footer>
          <div className="container py-20 relative">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
              {/* Item  */}
              <div>
                <img
                  src={darkMode ? logoWhite : logo}
                  alt="logo"
                  className="object-contain mb-5"
                />
                <p className="dark:text-white">
                  This Christmas give a lot of love
                </p>
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
              &copy; <a href="https://www.browter.com">Browter.com</a> . All
              rigths reserved
            </p>
            <img
              src={footerOne}
              alt="footer-lamp"
              className="absolute top-36 right-0 md:top-48 md:left-0"
            />
            <img
              src={footerTwo}
              alt="footer-lamp"
              className="absolute bottom-28 -right-14 md:right-0 "
            />
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
