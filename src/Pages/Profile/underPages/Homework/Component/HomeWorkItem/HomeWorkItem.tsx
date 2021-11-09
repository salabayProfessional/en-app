import React from 'react';
import { generateString } from '../../../../../../specialFunction/specialFunction';
import './HomeWorkItem.scss';

const HomeWorkItem: React.FC<{
  homework: {
    title: string, 
    words: {
      en: string, 
      ua: string
    }[]
  }, 
  active: string
}> = ({homework, active}) => {
  return (
    <div className={`home-work-item ${active === homework.title && "active-homework"}`} key={generateString()}>
      <h4 className="title">{homework.title}</h4>
    </div>
  )
};

export default HomeWorkItem;
