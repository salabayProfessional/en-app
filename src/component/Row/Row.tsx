import React from "react";
import { motion } from "framer-motion"
import "./Row.scss";

const Row: React.FC<{
  Left: any,
  Right: any,
  rightWidth?: number,
  leftWidth?: number,
  fixed?: "right" | "left",
}> = ({
  Left, 
  Right, 
  rightWidth = 6,
  leftWidth = 6,
  fixed = "none"
}) => {

  return (
    <div className="row-wrapper">
      <motion.div 
        animate={{x: 0, opacity: 1}}
        initial={{x: "-100%"}}
        transition={{duration: 0.7, opacity: 0}}
        className={`right col-12 col-lg-${leftWidth} ${fixed === "left" && "fixed"}`}
      >
        { Left }
      </motion.div>
      <motion.div 
        animate={{x: 0, opacity: 1}}
        initial={{x: "100%"}}
        transition={{duration: 0.7, opacity: 0}}
        className={`right col-12 col-lg-${rightWidth} ${fixed === "right" && "fixed"}`}
      >
        { Right }
      </motion.div>
    </div>
  )
};

export default Row;
