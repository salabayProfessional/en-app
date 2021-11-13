import { Field, Formik, Form } from 'formik';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Button, FormGroup, Label, Table } from 'reactstrap';
import { INP_BG } from '../../../../classes';
import Row from '../../../../component/Row/Row';
import { allWords } from '../../../../mockData/words';
import { generateString } from '../../../../specialFunction/specialFunction';
import { add_home_work } from '../../../../store/slices/authReducer';
import { create_test } from '../../../../store/slices/testsReducer';
import "./Create-test.scss";
import { InitialValues } from './types';

const splitWordsOnAnd = (words: string[]) => {
  return words.map((word: string) => {
    const indexSignAnd = word.indexOf("&");
    return {en: word.slice(0, indexSignAnd), ua: word.slice(indexSignAnd + 1)};// split words on "&" en-word&ua-word
  });
}

const CreateTest: React.FC = () => {
  const dispatch = useDispatch();

  const initialValues: InitialValues = {
    name: "",
    amount: 10,
    type: "en-ua",
    timer: 60,
    words: [],
  }

  const list = useMemo(() => {
    return allWords.map((word: {en: string, ua: string}) => {
      return (
        <tr key={generateString()}>
          <td>{word.en}</td>
          <td>{word.ua}</td>
          <th>
            <Field type="checkbox" value={`${word.en}&${word.ua}`} name="words" />
          </th>
        </tr>
      )
    })
  }, []);

  const onSubmit = (values: any, setFieldValue: any) => {
      const words = values.words.map((word: string) => {
        const idx = word.indexOf("&");
        return {en: word.slice(0, idx), ua: word.slice(idx + 1)};// split words on "&" en-word&ua-word
      });
  
      dispatch(create_test({
        name: values.name,
        words: words,
        type: "en-ua",
        options: values.options
      }));
      
      setFieldValue("name", "");
      setFieldValue("timer", 60);
      setFieldValue("amount", 10);
      setFieldValue("type", "en-ua");
      setFieldValue("words", []);
  };

  return (
    <>
    <div className="create-test">
      <Formik initialValues={initialValues} onSubmit={(values, {setFieldValue}) => onSubmit(values, setFieldValue)}>
        {({values, handleSubmit}) => {
          return (
            <>
              <Form className="crete-test__inner">
                <Row 
                  leftWidth={9}
                  Left={(
                      <Table className="bg-light">
                        <tbody>
                          {
                            list
                          }
                        </tbody>
                      </Table>
                  )} 
                  fixed={"right"}
                  rightWidth={3}
                  Right={(
                    <>
                      <FormGroup>
                        <Label for="Name">Name</Label>
                        <Field className={INP_BG} type="text" placeholder="name" name="name" id="Name" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="Type">Type</Label>
                        <Field className={INP_BG} as="select" name="type" id="Type">
                          <option>EN - UA</option>
                          <option>UA - EN</option>
                        </Field>
                      </FormGroup>
                      <FormGroup>
                        <Label for="Amount">Amount</Label>
                        <Field className={INP_BG} as="select" name="amount" id="Amount">
                          <option>10</option>
                          <option>15</option>
                          <option>20</option>
                          <option>25</option>
                          <option>30</option>
                        </Field>
                      </FormGroup>
                      <FormGroup>
                        <Label for="Timer">Timer</Label>
                        <Field className={INP_BG} as="select" name="timer" id="Timer">
                          <option>30</option>
                          <option>60</option>
                          <option>90</option>
                          <option>120</option>
                          <option>150</option>
                        </Field>
                      </FormGroup>
                      <FormGroup>
                        <Button 
                          className="form-control btn-bg" 
                          color="success" 
                          type="button" 
                          onClick={() => {
                            if(values.words.length !== values.amount) {
                              return alert(`You need to select a ${values.amount}`)
                            } else {
                              alert("success");
                              handleSubmit();
                            }
                        }}
                        >
                          CREATE
                        </Button>
                      </FormGroup>
                      <FormGroup>
                        <Button 
                          className="form-control btn-bg" 
                          color="success" 
                          type="button" 
                          onClick={() => {
                            dispatch(add_home_work({name: values.name, words: splitWordsOnAnd(values.words as any)}));
                        }}
                        >
                          CREATE HOMEWORK
                        </Button>
                      </FormGroup>
                      <h6 className="title">Words selected: {values.words.length}</h6>
                    </>
                  )}/>
                </Form>
              </>
            )
          }}
        </Formik>
      </div>
    </>
  );
};

export default CreateTest;