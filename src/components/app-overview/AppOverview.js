//Node Modules
import React, { useState } from 'react';

//Components
import { Link } from 'react-router-dom';

//Styles
// import 'styles/components/app-overview/AppOverview.scss'

//Scripts
import appRoutes from '../../scripts/constants/appRoutes';

const AppOverview = () => {
  const [technologiesLinks, updateTechnologiesLinks] = useState([
    { link: 'https://nodejs.org/en/about/', text: 'Node.js (engine)' },
    { link: 'https://www.npmjs.com/', text: 'Npm (package manager)' },
    { link: 'https://expressjs.com/', text: 'Express.js (server)' },
    { link: 'https://webpack.js.org/', text: 'Webpack (code bundling)' },
    { link: 'https://babeljs.io/', text: 'Babel (javascript compiler)' },
    { link: 'https://jestjs.io/', text: 'Jest (testing)' },
    { link: 'https://www.npmjs.com/package/enzyme', text: 'Enzyme (testing)' },
    { link: 'https://sass-lang.com/', text: 'SCSS (styling)' },
  ]);

  return (
    <div className={'app-overview'}>
      <h2>Getting Started</h2>
      <p>
        Hey there friend, new to React? I’d suggest playing around with{' '}
        <a
          className={'link-highlight'}
          href="https://www.npmjs.com/package/create-react-app"
          target="_blank"
        >
          create-react-app
        </a>{' '}
        before trying to dig into this application too much but then again I’m
        not here to tell you what to do. Live your life. Anyways lets get into
        it. Think of this application as something similar to create-react-app
        but more basic and custom. You’ll learn more about the ins-and-outs of
        whats going on as you read on and visit the different pages.
      </p>
      <p>
        Getting started with this app you'll need to know the basics of what's
        going on. So let's start with a list of the main technologies/libraries
        holding this freakin application together:
      </p>
      <ul>
        {technologiesLinks.map((i, id) => (
          <li key={id}>
            <a className={'link-highlight'} href={i.link} target="_blank">
              {i.text}
            </a>
          </li>
        ))}
      </ul>
      <p>
        Now that you have a list of the different technologies implemented in
        this application lets move onto the first section.
      </p>
      {/*TODO: Figure out a solution to the frontend of the "Link" component coming from react-router-dom onClick*/}
      <Link className={'link-highlight'} to={appRoutes.webpackBabelOverview}>
        Webpack/Babel
      </Link>
    </div>
  );
};

export default AppOverview;
