import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>NGUYEN MINH LONG</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Engineering
          </motion.h1>
          <motion.div variants={textVariants} style={{zIndex:2}} className="buttons">
          <a href="#!" style={{display:"inline-block"}}>
          <motion.button variants={textVariants} whileHover={{ background: "white", color:"black" }}>
              See the Latest Works
            </motion.button>
          </a>
         <a href="#Contact" style={{display:"inline-block"}}>
         <motion.button variants={textVariants} whileHover={{ background: "white", color:"black" }}>Contact Me</motion.button>
         </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        style={{zIndex:1}}
        initial="initial"
        animate="animate"
      >
        DEVELOP AND DESIGN UI/UX
      </motion.div>
      <div className="imageContainer">
        <img src="/hero-3.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
