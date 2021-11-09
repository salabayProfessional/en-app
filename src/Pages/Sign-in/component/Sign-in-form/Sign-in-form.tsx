import React from 'react';
import { FormGroup, Label, FormFeedback, FormText } from 'reactstrap';
import { BTN_BG } from '../../../../classes';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const SignInForm: React.FC = () => {

  interface I {
    name: string,
    password: string,
    repeatPassword: string,
    email: string,
    submit: boolean,
  }

  const onSubmit = (values: I) => {
    alert(JSON.stringify(values));
  };

  const schema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    password: Yup.string().required('Required'),
    repeatPassword: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const { register, handleSubmit } = useForm({resolver: yupResolver (schema)});

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div >
        <FormGroup>
          <Label for="name">Email</Label>
          <input className="form-control btn-bg" {...register("name")}/>
          <FormFeedback>Error email</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="email">Password</Label>
          <input className="form-control btn-bg" {...register("email")}></input>  
          <FormFeedback>Error password</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
      </div>
      
      <FormGroup className="position-relative">
        <button type="submit" className={BTN_BG}>SUBMIT</button>
      </FormGroup>
    </form>
  )
};

export default SignInForm;
