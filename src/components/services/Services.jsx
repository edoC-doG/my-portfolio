import "./services.scss"
import { motion } from "framer-motion";
const Services = () => {
  return (
    <motion.div className='services'>
        <motion.div className="text-container">
            <p>
                I focus on helping your brand grow
                <br/> and move forward
            </p>
            <hr/>
        </motion.div>
        <motion.div className="title-Container"></motion.div>
        <motion.div className="list-Container"></motion.div>

    </motion.div>
  )
}

export default Services
