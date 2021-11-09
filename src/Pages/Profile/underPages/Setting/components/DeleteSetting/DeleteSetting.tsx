import { Button } from 'evergreen-ui';
import React from 'react'
import { useDispatch } from 'react-redux';
import { FormGroup, Input, Label } from 'reactstrap';
import Row from '../../../../../../component/Row/Row';
import { delete_result, delete_results } from '../../../../../../store/slices/resultReducer';
import { delete_test, delete_tests } from '../../../../../../store/slices/testsReducer';
import './DeleteSetting.scss';

const DeleteSetting: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="delete-setting">
        <Row 
          Left={(
            <>
            <h1 className="title">Test</h1>
            <FormGroup>
              <Label for="Name">Delete Test</Label>
              <Input className="form-control" type="text" placeholder="name" name="name" />
              <Button type="button" className="btn btn-bg" onClick={() => dispatch(delete_test("oleg"))}>DELETE</Button>
              <Button type="button" className="btn btn-bg" onClick={() => dispatch(delete_tests())}>DELETE ALL</Button>
            </FormGroup>
            </>
          )} 
          Right={(
          <>
          <h1 className="title">Result</h1>
          <FormGroup>
            <Label for="Name">Delete Result</Label>
            <Input className="form-control" type="text" placeholder="name" name="name" />
            <Button type="button" className="btn btn-bg" onClick={() => dispatch(delete_result("oleg"))}>DELETE</Button>
            <Button type="button" className="btn btn-bg" onClick={() => dispatch(delete_results())}>DELETE ALL</Button>
          </FormGroup>
          </>
          )}/>
      </div>
    </div>
  )
};

export default DeleteSetting;
