//Node Modules
import React, { useContext } from 'react'

//Components
import TestContext from 'contexts/TestContext';

const Content = () => {
  const context = useContext(TestContext);
  return (
    <>
      {console.log("Context Value: ", context)}
      <h3>Check the <code>console.log()</code> of this component to get the value of the context coming from react.</h3>
    </>
  )
};

const ContextTester = () => {
  return (
    <Content/>
  )
};

export default ContextTester;