import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";

import Promo from "./components/Promo";
import Giving from "./components/Giving";
import Celebrate from "./components/Celebrate";
import Gift from "./components/Gift";
import NewGift from "./components/NewGift";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const setMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="dark:bg-darkBg">
      <BrowserRouter>
        <Header mode={setMode} />
        {/* Promo Section  */}
        <Promo />
        {/* End Promo Section */}

        {/* Giving Section */}
        <Giving />
        {/* End Giving Section */}

        {/* Celebrate Section  */}
        <Celebrate />
        {/* End Celebrate Section  */}

        {/* Gift Section  */}
        <Gift />
        {/* End Gift Section  */}

        {/* New Gift Section  */}
        <NewGift />
        {/* End New Gift Section  */}

        {/* contact Section  */}
        <Contact />
        {/* End contact Section  */}

        {/* Footer Section  */}
        <Footer mode={darkMode} />
      </BrowserRouter>
    </div>
  );
};

export default App;
