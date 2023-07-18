import { letter } from "../assets/img";

const Contact = () => {
  return (
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
  );
};

export default Contact;
