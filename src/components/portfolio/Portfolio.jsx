import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "JBL Landing Page",
    img: "jbl.jpg",
    desc: "The JBL Landing Page is a sleek and modern website created using pure JavaScript, HTML, and CSS, following the BEM methodology. It features various animation libraries to enhance user experience.",
    href: "https://jbl-beta.vercel.app/",
  },
  {
    id: 2,
    title: "Shop Dunk",
    img: "iphone15.jpg",
    desc: "Shop Dunk is a dynamic website built with JavaScript, leveraging TailwindCSS, Vite JS, and ReactJS. It incorporates ThreeJS for 3D elements, uses Sentry for CI/CD, and is currently being updated to become a fully-fledged full-stack eCommerce website.",
    href: "https://shop-dunk.vercel.app/",
  },
  {
    id: 3,
    title: "Dentist Page",
    img: "dentist.jpg",
    desc: "The Dentist Page is a sleek and modern website created using pure JavaScript, HTML, and CSS, following the BEM methodology. It features various animation libraries to enhance user experience.",
    href: "https://dentistry-page.vercel.app/",
  },
  {
    id: 4,
    title: "Besnisk Blog Page",
    img: "home.jpg",
    desc: "The Besnisk Landing Page is a sleek and modern website created using pure JavaScript, HTML, and CSS, following the BEM methodology. It features various animation libraries to enhance user experience.",
    href: "https://besnik-page-iota.vercel.app/",
  },
  {
    id: 5,
    title: "Portfolio",
    img: "nike.jpg",
    href: "https://portfolio-page-pi-beige.vercel.app/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 6,
    title: "Gear VN Shop",
    href: "#!",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Gear VN Shop is an e-commerce platform with its backend built using NodeJS, Express, and MongoDB, and its frontend developed with ReactJS.",
  },
  {
    id: 7,
    title: "Zing MP3",
    href: "https://zing-mp3-2023.vercel.app/",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "ZING MP3 is a website designed based on the Zing MP3 interface and integrates their API to replicate similar functionalities.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.href === "#!" ? (
              <motion.button whileHover={{ opacity: 0.6, scale: 1.1 }}>
                Coming Soon
              </motion.button>
            ) : (
              <a href={`${item.href}`} target="_blank" rel="noreferrer">
                <motion.button whileHover={{ opacity: 0.6, scale: 1.1 }}>
                  See Demo
                </motion.button>
              </a>
            )}
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
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
