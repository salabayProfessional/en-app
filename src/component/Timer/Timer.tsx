import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"
import "./Timer.scss";

const Timer: React.FC<{timer: number | string}> = ({timer}) => {

	const [nowTime, setNowTime] = useState(0);


  useEffect(() => {
    const timeout = setTimeout(() => {
			setNowTime(nowTime + 1);
	  }, 1000);

	if(nowTime === 72) {
		clearTimeout(timeout);
	};
  }, [nowTime, timer]);

	return (
		<motion.div 
			animate={{y: 0, rotate: 360}}
			initial={{y: "-500px"}}
			transition={{duration: 1}}
			className={`alert-${nowTime < timer ? "success" : "danger"} timer`}
		>
			<h3>Time is up</h3>
			<h1>{nowTime}/{timer}</h1>
		</motion.div>
	)
};

export default Timer;
