import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { set_options } from '../../store/slices/optionsReducer';
import { motion } from 'framer-motion';
import './Options.scss';

const Options: React.FC<{isOpen: boolean, setIsOption: () => void, children: any}> = 
({
  isOpen, 
  setIsOption, 
  children: renderChild,
}) => {
  const dispatch = useDispatch()
  
  const initialValues = {
    timer: "60",
    type: "en-ua",
    words: "10",
    random: true,
  };

  const onSubmit = (values: any) => {
    dispatch(set_options(values));
    setIsOption();
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  }

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={(values) => onSubmit(values)}
    >
      {({values}: any) => {
        return (
          <Form>
            <motion.div 
              animate={isOpen ? "open" : "closed"}
              variants={variants}
              transition={{duration: 0.7}}
              className="options col-8 col-lg-3 bg-light"
            >    
              <div className="options__content">
                {
                  renderChild(values)
                }
              </div>
              <button type="submit" className="btn btn-outline-success btn-apply">APPLY</button>
            </motion.div>
          </Form>
        )
      }}
    </Formik>
  )
};

export default Options;
