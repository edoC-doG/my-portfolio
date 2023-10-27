import "./services.scss";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="text-container">
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="title-Container">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For you</b> Business.
          </h1>
          <button>WHAT WE DO ?</button>
        </div>
      </motion.div>
      <motion.div className="list-Container">
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ullam
            dicta reiciendis. Laboriosam ducimus cumque cupiditate laborum.
            Voluptas repellat illo deserunt aperiam quasi nostrum, nisi, animi
            rem nemo itaque veniam.
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ullam
            dicta reiciendis. Laboriosam ducimus cumque cupiditate laborum.
            Voluptas repellat illo deserunt aperiam quasi nostrum, nisi, animi
            rem nemo itaque veniam.
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ullam
            dicta reiciendis. Laboriosam ducimus cumque cupiditate laborum.
            Voluptas repellat illo deserunt aperiam quasi nostrum, nisi, animi
            rem nemo itaque veniam.
          </p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
