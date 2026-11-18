import hero from "../assets/hero.svg";
import hero1 from "../assets/hero1.svg";
import hero2 from "../assets/hero -2.svg";
import hero3 from "../assets/hero -3.svg";
import hero4 from "../assets/hero -4.svg";
import hero5 from "../assets/hero -5.svg";
import hero6 from "../assets/hero -6.svg";
import hero7 from "../assets/hero -7.svg";
import hero8 from "../assets/hero -8.svg";
import hero9 from "../assets/hero -9.svg";
import sunflower from "../assets/sunflower.svg";

function Advert() {
  return (
    <div>
      <section className="grid grid-cols-4 gap-7">
        <img src={hero7} alt="hero7" className="w-40 h-20" />
        <img src={hero6} alt="hero6" className="w-30 h-20 pb-6" />
        <img src={hero7} alt="hero7" className="w-45 h-20" />

        <img src={hero4} alt="hero" className="w-30 h-20 pb-6" />
      </section>
      <div className=" flex items-center justify-center  ">
        <p className="text-black text-4xl font-bold">The AI Platform for </p>
        <br />
      </div>
      <p className="text-green-800 text-4xl text-center font-bold">
        Flower Intelligence
      </p>
      <section
        style={{
          backgroundImage: `url(${hero5})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "400px",
        }}
        className=" items-center justify-center gap-4"
      >
        <div className="pt-5">
          <p className="text-gray-600 text-xl text-center">
            Empowering growers,florists,and buyers with deep florial
          </p>
          <p className="text-gray-600 text-xl text-center">
            Knowledge and market insights
          </p>
          <div className="flex items-center justify-center">
            <button className="bg-green-900 md:bg-green-500 text-white  hover:bg-green-900  z-10 rounded-full px-3 py-1 mt-4 cursor-pointer">
              Get started for free
            </button>
          </div>
          <section className="flex flex-row justify-between items-end w-full px-10 py-8 -mt-17 ">
            <img className="w-27 h-auto" src={hero3} alt="hero3" />
            <div>
              <img src={hero} alt="hero" />
              <img className="w-29 h-auto " src={hero1} alt="hero1" />
            </div>
            <img className="w-25  h-auto" src={sunflower} alt="sunflower" />
            <img className="w-29 h-auto" src={hero9} alt="hero9" />
            <div>
              <img className="w-19" src={hero} alt="hero" />
              <img className="w-29 h-auto" src={hero2} alt="hero2" />
            </div>
          </section>
          <div className="w-full overflow-hidden relative z-0 -mt-13">
            <img
              className="w-full h-6 md:h-8 object-cover object-top block"
              src={hero8}
              alt="hero8"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Advert;
