import { givingOne, givingTwo, givingThree } from "../assets/img";

const Giving = () => {
  return (
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
  );
};

export default Giving;
