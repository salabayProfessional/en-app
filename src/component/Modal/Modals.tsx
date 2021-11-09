import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { generateString } from '../../specialFunction/specialFunction';
import { set_test, create_test } from '../../store/slices/testsReducer';
import CornModal from './Modal';
import { InitialValuesModalCreate, ModalInfoTypes, ModalType } from './types';
import { Formik, Form, Field } from "formik";
import { Button, Table, FormGroup, ModalHeader, ModalBody } from 'reactstrap';
import { allWords } from "../../mockData/words";
import "./Modal.scss";
import { add_dictionary_part } from '../../store/slices/dictionaryReducer';

const ModalInfo: React.FC<ModalInfoTypes> = ({
  isModal, 
  toggle,
  test,
}) => {
  const [isPassTest, setIsPassTest] = useState(false);
  const dispatch = useDispatch();

  const passTest = () => {
    toggle();
    setIsPassTest(!isPassTest);
    dispatch(set_test({name: test.name, words: test.words}));
  };

  if(isPassTest) {
    return <Redirect to="/tests" />
  };

  return (
    <CornModal 
      isModal={isModal} 
      toggle={toggle} 
      isCancel 
      isConfirm 
      confirm={passTest}
      isBody
    >
      <tbody className="table-words">
        {
          test?.words.map((word: {en: string, ua: string}) => {
            return (
              <tr key={generateString()}>
                <td>{word.en}</td>
                <td>{word.ua}</td>
              </tr>
            )
          })
        }
      </tbody>
   </CornModal>
  );
};

const ModalCreatedTest: React.FC<ModalType> = ({
  isModal, 
  toggle,
  create = "test",
}) => {
  const dispatch = useDispatch();

  const initialValues: InitialValuesModalCreate = {
    name: "",
    words: [],
    options: {
      amount: 10,
      type: "en-ua",
      timer: 60,
    },
  }

  const allWordsList = allWords.map((word: {en: string, ua: string}, idx: number) => {
    return (
      <tr key={`list-success-${idx}`} className="line-top">
        <td>{word.en}</td>
        <td>{word.ua}</td>
        <th><Field type="checkbox" value={word.en}/></th>
      </tr>
    ) 
  });

  const onSubmit = (values: InitialValuesModalCreate) => {
    if(create === "test") {
      dispatch(create_test({
        name: values.name,
        words: values.words,
        type: "en-ua",
        options: values.options
      }));
    } else {
      dispatch(add_dictionary_part({
        name: values.name,
        words: values.words,
      }));
    }
    toggle();
  }

  return (
    <CornModal
      isModal={isModal} 
      toggle={toggle} 
      isCancel 
      isConfirm 
    >
      <Formik initialValues={initialValues} onSubmit={(values) => onSubmit(values)} >
        <Form>
          <tbody className="table-words padding-5">
            { allWordsList }
          </tbody>
          <FormGroup>
            <div className="input__name">
              <input className="form-control" type="text" placeholder="name"/>
            </div>
          </FormGroup>
        </Form>
      </Formik>
    </CornModal>
  );
};

const ModalNotice: React.FC<ModalType> = ({isModal, toggle}) => {

  const [redirect, setRedirect] = useState(false);

  if(redirect) {
    return <Redirect to="/profile/results" />
  }

  return (
    <CornModal isModal={isModal} toggle={toggle} isBody>
      <ModalHeader toggle={toggle}>See result</ModalHeader>
        <Button color="btn btn-outline-success" style={{width: "100%"}} onClick={() => {
          setRedirect(true);
          toggle();
        }}>To look</Button>
    </CornModal>
  )
};

const ModalResult: React.FC<{
  isModal: boolean,
  toggle: () => void,
  result: any
}> = ({
  isModal, 
  toggle,
  result,
}) => {
  const dispatch = useDispatch();
  const [isRepass, setIsRepass] = useState(false);

  const repass = () => setIsRepass(true);

  const list = result?.words.map((word: any, idx: number) => {
    return (
      <tr key={generateString()}>
        <td>{word.en}</td>
        <td>{word.ua}</td>
        <td>{result.answers[idx]}</td>
      </tr>
    );
  });

  const repassTest = () => {
    dispatch(set_test({name: result.name, words: result.words}));
    repass();
  };

  if(isRepass) {
    return <Redirect to="/tests"/>
  };

  return (
      <CornModal 
        isModal={isModal} 
        toggle={toggle} 
        isBody={false} 
        isConfirm
        confirm={repassTest}
        confirmName="Repass"
      >
        <ModalBody>
          <h2 className="title">{result?.name}</h2>
          <Table className="table-words">
            <tbody>
                {list}
            </tbody>
          </Table>
          <div className="bottom-panel"> 
            <div className="bottom-panel__inner">
              <span className="inline-block">type: en-ua</span>
              <span className="inline-block">true: {result?.result.length}</span>
              <span className="inline-block">timer: 60</span>
            </div>
          </div>
        </ModalBody>
      </CornModal>
  );
};

export { 
  ModalInfo,
  ModalCreatedTest,
  ModalNotice,
  ModalResult,
};