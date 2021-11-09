import React, { useState } from 'react';
import { useHomeWork } from '../../../../hooks/useHomeWork';
import HomeworkWorkingPart from './Component/Homework-workingPart/Homework-workingPart';
import HomeWorkItem from './Component/HomeWorkItem/HomeWorkItem';
import Row from '../../../../component/Row/Row';
import "./HomeWork.scss";

const HomeWork: React.FC = () => {
  const homework = useHomeWork();
  console.log(homework)
  const [activeHomeWork, setActiveHomeWork] = useState<string>("");

  const homeworkList = homework?.map((homeworkItem: any) => {
    return (
      <div onClick={() => setActiveHomeWork(homeworkItem.title)}>
        <HomeWorkItem homework={homeworkItem} active={activeHomeWork} />
      </div>
    )
  });

  const foundedActiveHomework = homework?.find((item: any) => item.title === activeHomeWork);

  if(!homework) {
    return <p className="under-title">"you don't pass a test yet. And then here is nothing"</p>
  }

  return (
    <>
      <Row 
        Left={
          (
          <div className="homework-list h-100"> 
            { homeworkList }
          </div>
          )
        }
        Right={
          (<HomeworkWorkingPart homework={foundedActiveHomework}/>)
        }
        rightWidth={7}
        leftWidth={5}
      />
    </>
  )
};

export default HomeWork;
