import { Button } from 'evergreen-ui';
import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap';
import Row from '../../../../../../component/Row/Row';
import avatar from "../../../../../../images/photo.jpeg";
import './ChangeSetting.scss';

const ChangesSetting: React.FC = () => {

  return (
    <div className="change-setting">
      <Row 
        Left={(
         <div className="between">
          <h2>Change</h2>
          <FormGroup>
            <Label for="Name">Change Name</Label>
            <Input className="form-control" type="text" placeholder="name" name="name" />
            <Button type="button" className="top-10">Change name</Button>
          </FormGroup>
          <FormGroup>
            <Label for="Password">Change Password</Label>
            <Input className="form-control" type="password" placeholder="password" name="password" id="password" />
            <Button type="button" className="top-10">Change password</Button>
          </FormGroup>
          <FormGroup>
            <Label for="Name">Change Email</Label>
            <Input className="form-control" type="text" placeholder="email" name="email" id="email" />
            <Button type="button" className="top-10">Change email</Button>
          </FormGroup>
          </div>
        )}
        Right={(
          <div className="between">
            <FormGroup>
              <img alt="" src={avatar} className="photo" id="my_photo" />
              {/* <input type="file" className="btn btn-outline-success btn-100" accept="image/*" ref={ref} onChange={(e: any) => {}}/> */}
            </FormGroup>
            <FormGroup>
            <Button type="button" className="btn btn-success btn-100">Change photo</Button>
            </FormGroup>
          </div>
        )}
      />
    </div>
  )
};

export default React.memo(ChangesSetting);
