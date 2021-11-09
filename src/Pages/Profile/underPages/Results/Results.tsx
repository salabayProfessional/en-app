import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { ModalResult } from '../../../../component/Modal/Modals';
import RestrictedList from '../../../../component/RestrictedList/RestrictedList';
import { generateString } from '../../../../specialFunction/specialFunction';
import { RootReducer } from '../../../../store/slices/types';
import Statistics from './Statistics';
import "./Results.scss";

const Results: React.FC = () => {
  const results = useSelector((state: RootReducer) => state.result.results);
  const [idResult, setIDResult]: any = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [amount, setAmount] = useState(16);
  const toggleIsModal = () => setIsModal(!isModal);

  return (
    <div className="results-page">

      <ModalResult 
        isModal={isModal} 
        toggle={toggleIsModal} 
        result={idResult}
      />
      <Statistics resultItems={results}/>
      <RestrictedList 
        list={results}
        amount={amount}
        listClasses="test-list"
      >
        {(item) => {
          return (
            <div className="test__item" key={generateString()}>
              <h3 className="title">{item.name}</h3>
              <p className="under-title">{`${item?.startTime}`?.slice(11, 19)} - {`${item?.endTime}`.slice(11, 19)}</p>
              <Button 
                className="btn btn-success btn-center btn-bg border-none" 
                type="button" 
                onClick={() => {
                  setIDResult(item);
                  toggleIsModal();
                }}>
                Show
              </Button>
            </div>
          )
        }}
      </RestrictedList>
      {
        results.length > 12 && (
          <button className="btn btn-success btn-bg" onClick={() => {
            if(amount < results.length) {
              setAmount(amount + 12);
            };
          }}>Yet</button>
        )
      }

      {
        results.length < 1 && <p className="under-title">"you don't pass a test yet. And then here is nothing"</p>
      }
    </div>
  )
};

export default Results;