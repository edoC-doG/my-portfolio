import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "JBL Landing Page",
    img: "jbl.jpg",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolorem?",
  },
  {
    id: 2,
    title: "Nike E-commerce",
    img: "nike.jpg",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolorem?",
  },
  {
    id: 3,
    title: "Dentist Landing Page",
    img: "nature.jpg",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolorem?",
  },
//   {
//     id: 4,
//     title: "JBL Landing Page",
//     img: "jbl.jpg",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolorem?",
//   },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useSpring(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="portfolio__single portfolio__single-container">
        <div className="portfolio__single portfolio__single-wrapper">
          <motion.div className="portfolio__single portfolio__single-img" ref={ref}>
            <img src={item.img} alt="" />
          </motion.div>
          <motion.div
            className="portfolio__single portfolio__single-text"
            style={{ y }}
          > 
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.button whileHover={{scale:1.2, opacity:0.8}} transition={{duration: 0.4}}>See Demo</motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="portfolio__progress">
        <h1>Features Works</h1>
        <motion.div
          style={{ scaleX }}
          className="portfolio__progress-bar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
