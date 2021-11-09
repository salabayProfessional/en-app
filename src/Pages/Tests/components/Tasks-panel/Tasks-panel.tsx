import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import { Test } from 'yup/lib/util/createValidation';
import { generateString } from '../../../../specialFunction/specialFunction';
import { set_test } from '../../../../store/slices/testsReducer';
import { RootReducer } from '../../../../store/slices/types';
import './Tasks-panel.scss';

const TasksPanel: React.FC = () => {
  const tests = useSelector((state: RootReducer) => state.tests.allTests);

  const tasksList = tests?.map((test: Test) => {
    return (
      <div key={generateString()}>
        <Card color="dark">
          <CardBody className="task__item">
            <CardTitle tag="h5">{test.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
            <Button color="success" onClick={() => set_test(test)}>INFO</Button>
          </CardBody>
        </Card>
      </div>
    )
  });

  return (
    <>
      <div className="tasks-panel">
        <div className="tasks-panel__inner">
          { tasksList }
        </div>
      </div>
    </>
  )
};

export default TasksPanel;