import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For you</motion.b>{" "}
            Business.
          </h1>
          <motion.button whileHover={{ opacity: 0.6, scale: 1.1 }}>
            WHAT WE DO ?
          </motion.button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>User-Centric Approach</h2>
          {/* <p>
            Prioritize the user experience by designing user-friendly interfaces
            and intuitive workflows. Conduct user research and gather feedback
            to ensure that the software meets the needs and preferences of the
            target audience.
          </p> */}
          <motion.button whileHover={{ opacity: 0.6, scale: 1.1 }}>
            Go
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Innovation and Creativity</h2>
          {/* <p>
            Aim to offer unique and innovative solutions that set the brand
            apart from its competitors. Consider how you can incorporate
            cutting-edge technologies and creative design elements to make the
            software stand out.
          </p> */}
          <motion.button whileHover={{ opacity: 0.6, scale: 1.1 }}>
            Go
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Scalability and Adaptability</h2>
          {/* <p>
            Plan for the future by designing software that can easily scale to
            accommodate growth and evolving business needs. Ensure that the
            software is adaptable to technological advancements and can
            integrate with other systems or platforms seamlessly.
          </p> */}
          <motion.button whileHover={{ opacity: 0.6, scale: 1.1 }}>
            Go
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Security and Compliance</h2>
          {/* <p>
            Prioritize the security of the software to protect sensitive data
            and maintain user trust. Stay updated with the latest security
            measures and regulatory requirements to ensure compliance with
            industry standards and data protection laws.
          </p> */}
          <motion.button whileHover={{ opacity: 0.6, scale: 1.1 }}>
            Go
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
