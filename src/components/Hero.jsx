import styles from "../style";
import { discount, robot , Urbanglow} from "../assets";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The  <br className="sm:block hidden" />{" "}
            <span className="text-gradient">UrbanGlow</span>{" "}
          </h1>
          
        </div>
        <div className="absolute z-[0] w-[80%] h-[35%] top-0 blue__gradient" />
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
         A Clothing brand.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Welcome to UrbanGlow, where city life meets effortless style. Our
          brand is inspired by the vibrant energy of urban landscapes and the
          timeless allure of modern fashion.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={Urbanglow} alt="billing" className="w-[100%] h-[100%] rounded-[1000px] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[80%] h-[35%] top-0 blue__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 white__gradient" />
        {/* gradient end */}
      </div>

     
    </section>
  );
};

export default Hero;
