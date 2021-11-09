import React from 'react';
import { BTN_BG } from '../../classes';
import { motion } from 'framer-motion';
import './Proposition.scss';
import propositionMock from '../../mockData/proposition';

const Proposition: React.FC = () => {

  const list = propositionMock.map((proposal: any) => {

    // createHomeWork: true,
    // ownWords: 1000,
    // savedResult: true,
    // createdTest: 100,
    // passTest: 500,
    // dictionary: true,
    // homeWork: true,
    // pushStory: true,
    // createOwnGroup: true,

    return (
      <ul className="proposition__item col-12 col-lg-4">
        <h2>{proposal.role}</h2>
        <li className="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</li>
        <li className="text-muted">Nullam id dolor id nibh ultricies vehicula ut id elit.</li>
        <li className="text-muted">Pellentesque ornare sem lacinia quam venenatis vestibulum.</li>
        <li className="text-muted">Etiam porta sem malesuada magna mollis euismod.</li>
        <li className="text-muted">Donec ullamcorper nulla non metus auctor fringilla.</li>
        <li className="text-muted">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</li>
        <li className="text-muted">Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
        <button className={BTN_BG}>BUY</button>
      </ul>
    )
  })

  return (
    <motion.div
      animate={{x: 0, opacity: 1}}
      initial={{x: "-120%"}}
      transition={{duration: 1.5, opacity: 0}}
      className="proposition"
    >
      { list }
    </motion.div>
  )
};

export default Proposition;
