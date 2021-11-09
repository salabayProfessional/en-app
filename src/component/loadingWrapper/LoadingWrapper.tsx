import React, { Suspense } from 'react';

const loadingWrapper = (Component: React.FC) => {

  return (
    <Suspense fallback={<div>LOADING...</div>}>
      { Component }
    </Suspense>
  )
};

export default loadingWrapper;
