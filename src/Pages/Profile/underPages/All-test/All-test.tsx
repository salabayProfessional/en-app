import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { ModalInfo } from '../../../../component/Modal/Modals';
import { generateString } from '../../../../specialFunction/specialFunction';
import { RootReducer } from '../../../../store/slices/types';
import "./All-test.scss";

interface Test {
  name: string
  options: {
    timer: number,
    amount: number,
  }
  type: string
  words: {en: string, ua: string}[]
}

const AllTest: React.FC = () => {
  const allTests = useSelector((state: RootReducer) => state.tests.allTests);
  const [isModal, toggleIsModal] = useState(false);
  const [infoID, setInfoId] = useState("");
  const toggleIsInfoModal = () => toggleIsModal(!isModal);

  const list = allTests.map((test: Test) => {
    return (
      <div className="test__item" key={generateString()}>
        <h3 className="title">{test.name}</h3>
        <Button className="btn btn-success btn-center btn-bg border-none" type="button" onClick={() => {
          setInfoId(test.name);
          toggleIsInfoModal();
        }}>Show</Button>
      </div>
    )
  })

  return (
    <>
      <ModalInfo 
        toggle={toggleIsInfoModal} 
        test={allTests.find((test: Test) => test.name === infoID)} 
        isModal={isModal} 
      />
      <div className="All-test">
        <div className="All-test__inner">
          { list }
        </div>
      </div>
    </>
  );
};

export default AllTest;