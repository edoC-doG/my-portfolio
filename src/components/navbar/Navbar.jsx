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
          <motion.a href="https://www.facebook.com" whileHover={{ scale: 1.2 }}>
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.a
            href="https://github.com/edoC-doG"
            whileHover={{ scale: 1.2 }}
          >
            <img src="/github-1.png" alt="" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/minh-long-730213257/"
            whileHover={{ scale: 1.2 }}
          >
            <img src="/link-1.webp" alt="" />
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
