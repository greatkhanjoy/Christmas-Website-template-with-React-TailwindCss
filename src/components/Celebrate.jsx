import { celebrate } from "../assets/img";

const Celebrate = () => {
  return (
    <section id="celebrate">
      <div className="container py-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="w-full flex flex-col gap-10 items-center text-center md:text-left md:items-start md:w-1/2">
            <h2 className="font-semibold text-2xl dark:text-white">
              Celebrate With A Lot <br />
              Of Love
            </h2>
            <p className="text-lg text-secondary dark:text-darkText">
              In this holidays, celebrate with much love and peace, offering
              many blessings to our loved ones, friends and neighbors, wishing
              them a good Christmas message.
            </p>
            <button className="btn_primary">Send Good Wishes</button>
          </div>
          <div className="w-full md:w-1/2">
            <img src={celebrate} alt="Celebrate" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Celebrate;
