//Node Modules
import React, { useState } from 'react';

//Components
import { Link } from 'react-router-dom';

//Scripts
import appRoutes from '../../scripts/constants/appRoutes';

const WebpackBabelOverview = () => {
  const [webpackFiles, updateWebpackFiles] = useState([
    'webpack.common.js',
    'webpack.dev.js',
    'webpack.prod.js',
  ]);

  return (
    <div className={'webpack-babel-overview'}>
      <h2>Webpack\Babel</h2>
      <p>
        <small>
          Note: This will not cover the basics of Wepack or Babel. If you’d like
          to learn about either of these things please use the links below:
        </small>
      </p>
      <p>
        Webpack:{' '}
        <a
          className={'link-highlight'}
          href="https://webpack.js.org/"
          target="_blank"
        >
          https://webpack.js.org/
        </a>
      </p>
      <p>
        Babel:{' '}
        <a
          className={'link-highlight'}
          href="https://babeljs.io/"
          target="_blank"
        >
          https://babeljs.io/
        </a>
      </p>
      <p>
        To be clear these are separate technologies/libraries or whatever you
        want to call them. But that's besides the point. These are separate
        technologies but any react application relies on both of these very
        heavily to work, hence why they're grouped together.
      </p>
      <p>
        Let's start with Webpack. Webpack is a module bundler(javascript) and
        asset bundler(html, css/scss, images, videos). What that means is
        Webpack will take all of your modules and or assets and put them in a
        single file to serve to the client(browser).
      </p>
      <p>
        At the root level of the application you'll find three files which are
        relevant to Webpack:
      </p>
      <ul>
        {webpackFiles.map((i, id) => (
          <li key={id}>
            <code>{i}</code>
          </li>
        ))}
      </ul>
      <p>
        The <code>{webpackFiles[0]}</code> is kind of self descriptive. It's the
        code that is shared between all of the Webpack files. So the types of
        things covered in this file are the rules for the assets/file types, the
        entry point for the application, path resolves and the shared plugins.
      </p>
      <p>
        Both the <code>{webpackFiles[1]}</code> and the{' '}
        <code>{webpackFiles[2]}</code> are used to define the environment the
        application is running in. They're especially useful for{' '}
        <a
          className={'link-highlight'}
          href="https://en.wikipedia.org/wiki/Feature_toggle"
          target="_blank"
        >
          feature flags
        </a>
        .
      </p>

      <p>
        Next we come to Babel, the easiest way to explain the role this
        technology plays is that it lets us use the latest version of javascript
        without worrying about browser support since it takes the javascript you
        write and transforms it into a earlier version of JS that will run on
        all clients/browsers.
      </p>
      <p>
        All the configuration for Babel can be found at the root level in the{' '}
        <code>babel.config.json</code> file. The place where this file in the
        project is under the “js” rule object on the “loader” property in the{' '}
        <code>{webpackFiles[0]}</code> file.
      </p>
      <p>
        Next up in line is{' '}
        <Link className={'link-highlight'} to={appRoutes.contextOverview}>
          Context/Redux
        </Link>
      </p>
    </div>
  );
};

export default WebpackBabelOverview;
