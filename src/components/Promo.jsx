import { tree } from "../assets/img";

const Promo = () => {
  return (
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
              Christmas and a new year is about to begin, all good wishes and
              successes.
            </p>
            <button className="btn_primary mt-16">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
