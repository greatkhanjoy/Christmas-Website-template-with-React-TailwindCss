import { AiOutlineHeart } from "react-icons/ai";
import { nGiftOne, nGiftTwo, nGiftThree } from "../assets/img";

const NewGift = () => {
  return (
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
              <p className="text-lg font-medium dark:text-darkText">Reindeer</p>
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
              <img src={nGiftThree} alt="ngift3" className="object-contain" />
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
  );
};

export default NewGift;
