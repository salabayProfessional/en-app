import React, { useState } from 'react';
import {Form, Formik} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { makeTest, shuffle, equalAnswerAndWord } from '../../specialFunction/specialFunction';
import { push_audited_test } from '../../store/slices/resultReducer';
import { reset_test } from "../../store/slices/testsReducer";
import Options from '../../component/Options/Options';
import { ModalNotice } from '../../component/Modal/Modals';
import View from './View';
import Timer from '../../component/Timer/Timer';
import { RootReducer } from '../../store/slices/types';
import { InitialValues } from './types';
import { optionsForTest } from '../../component/Options/OptionsType';

const makeRandomArr = (arr: any) => {
  let randomArr = []; 

  for(let i = 0;i < arr; i++) {
    randomArr.push(i);
  }
  return randomArr
};

const Test: React.FC = () => {
  const dispatch = useDispatch();

  const options = useSelector((state: RootReducer) => state.options.options);
  const gotTest: any = useSelector((state: RootReducer) => state.tests.test);
  const [test, setTest] = useState([]);
  const [count, setCount] = useState(0);
  const [end, setEnd] = useState(false);
  const [start, setStart] = useState(false);
  const [isOptions, setIsOptions] = useState(false);
  const [seeResults, setSeeResults] = useState(false);
  const [random, setRandom] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  const [startTime, setStartTime] = useState<any>("");

  const initialValues: InitialValues = {
    answer: '',
    answers: [],
  };

  const onSubmit = (values: any) => {
    values.answers.push(values.answer);
    const auditedTest = equalAnswerAndWord(test, values.answers, options, random, startTime);
    dispatch(push_audited_test(auditedTest));
    setSeeResults(true);
    setCount(0);
    setStart(false);
    setEnd(true);
    values.answers = [];
    values.answer = "";
  };

  const toggleOptions = () => setIsOptions(!isOptions);

  const sendAnswer = (setFieldValue: Function, values: any) => {
    setCount(count + 1);
    setFieldValue("answers", [...values.answers, values.answer]);
    setFieldValue("answer", "");
  };

  const startTest = () => {
    if(!gotTest) {
      setTest(makeTest(options.words));
    }else {
      setTest(gotTest);
    };
    const date = new Date();
    setStartTime(date);
    setStart(true);
    setEnd(false);
    setIsOptions(false);
    setSeeResults(false);
    setRandom(shuffle(makeRandomArr(options.words)));
    dispatch(reset_test());
  };

  return (
    <div className="page">
      { start && <Timer timer={60} /> }
      <Options isOpen={isOptions} setIsOption={() => setIsOptions(false)}> 
        {optionsForTest}
      </Options>

      <ModalNotice isModal={seeResults} toggle={() => setSeeResults(!seeResults)}/>

      <Formik 
        initialValues={initialValues} 
        onSubmit={(values) => onSubmit(values)} 
      >
        {({values, setFieldValue}) => {
          return (
            <Form className="pass-test">
              <div className="pass-test__inner col-12 col-lg-6">
              <View
                test={test} 
                count={count} 
                end={end}
                start={start}
                toggleOptions={toggleOptions}
                options={options}
                randomWords={random}
                values={values}
                setFieldValue={setFieldValue}
                startTest={startTest}
                sendAnswer={sendAnswer}
              />
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
};

export default Test;
