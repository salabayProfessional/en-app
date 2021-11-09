import React from "react";

const Statistics: React.FC<any> = ({resultItems}) => {

  return (
    <div className="statistics">
      <ul className="statistics__list">
        <li>
          Passed test: { resultItems?.length | 0 }
        </li>
        <li>
          Is tests: {}
        </li>
        <li>
          Passed test: 0
        </li>
        <li>
          Passed test: 0
        </li>
        <li>
          Passed test: 0
        </li>
        <li>
          Passed test: 0
        </li>
      </ul>
    </div>
  )
};

export default Statistics;