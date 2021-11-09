import React from 'react';
import { useDispatch } from 'react-redux';
import { log_out } from '../../../../store/slices/authReducer';

const SignOut: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <form>
      <h1 className="title">Sign out</h1>
      <p className="under-title">Buy! buy!</p>
      <button type="button" onClick={() => dispatch(log_out())} className="btn btn-danger btn-bg btn-10">Sign out</button>
    </form>
  )
};

export default SignOut;
