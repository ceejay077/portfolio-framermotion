import { motion } from "framer-motion";

function Test() {
  return (
    <div className="course">
      <motion.div
        className="box"
        transition={{ duration: 2 }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ opacity: 1, scale: 1 }}
      ></motion.div>
    </div>
  );
}

export default Test;
