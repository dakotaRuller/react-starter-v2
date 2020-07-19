//Node Modules
import React from 'react'

//Components
import { Link } from 'react-router-dom';

//Scripts
import appRoutes from "scripts/constants/appRoutes";

const ContextOverview = () => {
  return (
    <>
      <h2>Context over Redux</h2>
      <p>If you're not familiar with redux follow this link: <a className={"link-highlight"} href="https://redux.js.org/" target="_blank">https://redux.js.org/</a> to understand it better.
      </p>
      <p>The reason why this section is being included is because of the relationship react and redux have. It seems like most developers default to redux cause for the longest time that was the best option. Now that context is more refined I (along with others)  think it's a better option. The reason being that it’s easier to follow the standard of creating wrappers for individual pieces of state rather than having a global state.</p>
      <p>The concept of individual wrappers for a shared state is achievable with redux but its much easier to implement with context and if you use context it does not require a big external library for it to work.</p>
      <p>The point of this explanation isn't about explaining how to use context or redux it is to explain why one was chosen over the other. You can use either of the following links to learn about context and redux: <a className={"link-highlight"}  href="https://dev.to/ayushmanbthakur/redux-vs-context-api-3182#:~:text=These%20frameworks%20can%20store%20data,state%20and%20app%2Dlevel%20state.&text=Redux%20can%20not%20only%20be,level%20state%20management%20in%20React." target="_blank">Context vs Redux</a>, <a className={"link-highlight"}  href="https://reactjs.org/docs/context.html" target="_blank">Context</a>, <a className={"link-highlight"}  href="https://redux.js.org/introduction/getting-started" target="_blank">Redux</a></p>

      <p>Next subject is <Link className={"link-highlight"} to={appRoutes.testingOverview}>Testing</Link></p>
    </>
  )
};

export default ContextOverview;