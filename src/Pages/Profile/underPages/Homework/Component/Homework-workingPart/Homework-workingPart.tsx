import React from "react";
import { BTN_BG } from "../../../../../../classes";
import { generateString } from "../../../../../../specialFunction/specialFunction";
import "./Homework-workingPart";

const HomeworkWorkingPart: React.FC<{homework: any}> = ({homework}) => {

  const list = homework?.words?.map((word: any) => {
    return (
      <div className="top-20" key={generateString()}>
        <input className="form-control" name={word.en} placeholder={word.en}/>
      </div>
    )
  });

  const onSubmit = (values: any) => {
    values.preventDefault();
  }

  return (
    <form  className="h-100" onSubmit={(values) => onSubmit(values)}>
      { list }
      <button className={BTN_BG} type="submit">COMMIT</button>
    </form>
  )
};

export default HomeworkWorkingPart;
