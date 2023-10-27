import "./hero.scss";
import { motion } from "framer-motion";

const textVaritants = {
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
    opacity:0,
    y:10,
    transition: {
        duration:2,
        repeat: Infinity
    }
  }
};


const sliderVaritants = {
    initial: {
      x: 0
    },
    animate: {
      x: "-220%",
      transition: {
        duration:20,
        repeatType:"mirror",
        repeat: Infinity
      },
    },
  };

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVaritants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVaritants}>NGUYEN MINH LONG</motion.h2>
          <motion.h1 variants={textVaritants}>Software Engineer</motion.h1>
          <motion.div className="buttons" variants={textVaritants}>
            <motion.button variants={textVaritants}>
              See the Latest Work
            </motion.button>
            <motion.button variants={textVaritants}>Contact Me</motion.button>
          </motion.div>
          <motion.img src="/scroll.png" alt="" variants={textVaritants} animate="scrollButton"/>
        </motion.div>
      </div>
      <motion.div className="sliding-text-container" variants={sliderVaritants} initial="initial" animate="animate">Design and Develop Software</motion.div>
      <div className="img-container">
        <img src="/hero-3.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
