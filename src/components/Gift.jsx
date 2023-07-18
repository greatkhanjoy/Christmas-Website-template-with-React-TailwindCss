import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { giftOne, giftTwo, giftThree, giftFour, giftFive } from "../assets/img";

const Gift = () => {
  return (
    <section id="gifts">
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
            <h3 className="text-xl font-semibold mb-2 dark:text-white">$15</h3>
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
            <h3 className="text-xl font-semibold mb-2 dark:text-white">$22</h3>
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
            <h3 className="text-xl font-semibold mb-2 dark:text-white">$12</h3>
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
            <h3 className="text-xl font-semibold mb-2 dark:text-white">$48</h3>
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
            <h3 className="text-xl font-semibold mb-2 dark:text-white">$35</h3>
            <Link to={"/"}>
              <p className="text-secondary font-medium dark:text-darkText">
                Snowman
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gift;
