import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="socials">
          <motion.a
            href="https://www.facebook.com/longnmse"
            whileHover={{ scale: 1.2 }}
          >
            <img src="/facebook.png" alt="" title="facebook" />
          </motion.a>
          <motion.a
            href="https://github.com/edoC-doG"
            whileHover={{ scale: 1.2 }}
          >
            <img src="/github.svg" alt="" title="github" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/longnmse/"
            whileHover={{ scale: 1.2 }}
          >
            <img src="/linked.svg" alt="" />
          </motion.a>
          <motion.a href="https://dribbble.com/" whileHover={{ scale: 1.2 }}>
            <img src="/dribbble.png" alt="" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
