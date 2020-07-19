//Node Modules
import React from 'react';
import { Link } from 'react-router-dom';

//Scripts
import appRoutes from 'scripts/constants/appRoutes';

const TestingOverview = () => {
  return (
    <>
      <h2>Testing with Jest and Enzyme</h2>
      <p>
        The testing portion of this app is pretty straight forward if you've
        ever used jest with enzyme. If you havent this{' '}
        <a
          href="https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675"
          target="_blank"
          className="link-highlight"
        >
          Medium article
        </a>{' '}
        will help understand why they are used together and the function of both
        them.
      </p>
      <p>
        There isn't much to say about jest and enzyme that isnt said in the
        article but to reiterate something important that is said. Jest can be
        used to test any javascript application but is used heavily for react
        and enzyme is a react only testing library.
      </p>
      <p>
        TThe structure is very simple. At the root level of the application
        there exist the following files: <code>jest.config.js</code> and{' '}
        <code>setupTests.js</code>. There also exist the following directories
        at the root level: <code>__mocks__</code> and <code>__tests__</code>.
      </p>
      <p>
        The <code>jest.config.js</code> is the file that holds all of the{' '}
        <a
          href="https://jestjs.io/docs/en/configuration"
          target="_blank"
          className={'link-highlight'}
        >
          configuration
        </a>{' '}
        for jest. The <code>setupTests.js</code> file is used to configure
        enzyme using the npm packages for enzyme. Now onto the two directories
        jest uses. The <code>__tests__</code> directory contains all of the
        tests for jest to run. The structure of this directory will mimic what
        you see from the root directory. The final piece left is the{' '}
        <code>__mocks__</code>, this directory holds some miscellaneous
        configuration files and any mock data held in the form of files for
        tests. The structure of this directory can vary based on your
        application.
      </p>
      <p>
        There's two different commands for testing: <code>npm run test</code>{' '}
        and <code>npm run test:coverage</code>. <code>npm run test</code> will
        run all of the test and output the information about what is being ran.{' '}
        <code>npm run test:coverage</code> will output information about the
        coverage of each file and the application as a whole. You run these
        commands the same way you start the application. All you have to do is
        open a terminal and navigate to the root directory of wherever this
        application is stored on your machine then run either of the commands
        listed above.
      </p>
      <p>
        That's the basis for the testing section. The final piece is{' '}
        <Link to={appRoutes.everythingElse} className={'link-highlight'}>
          Everything Else
        </Link>
        .
      </p>
    </>
  );
};

export default TestingOverview;
