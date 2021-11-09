import React from 'react';
import { stories } from '../../mockData/stories';
import { motion } from 'framer-motion';
import './Story.scss';

const Story: React.FC = () => {

  const listStories = stories.map((story, idx: number) => {
    return (
      <motion.div 
        animate={{x: 0, opacity: 1}}
        initial={{x: "-100%", opacity: 0}}
        transition={{duration: 1.5}}
        className={`story-item col-12 col-lg-5 ${idx / 2 === 1 && "col-lg-6"}`} key={story.id}>
        <h3 className="title">{story.title}</h3>
        <p>{story.author}</p>
        <p>{story.date}</p>
        <p>{story.stories}</p>
      </motion.div>
    )
  });

  return (
    <div className="page">
      <div className="story">
        { listStories }
      </div>
    </div>
  );
};

export default Story;
