//Node Modules
import React from 'react';

//Styles
import 'styles/components/everything-else/EverythingElse.scss';

const EverythingElse = () => {
  const [technologiesList, updateTechnologiesList] = React.useState([
    {
      text: 'React Router',
      link: 'https://reactrouter.com/web/guides/quick-start',
      description: (
        <p>
          This is an external library used for client side routing in a react
          application. React router is considered the industry standard and has
          very many useful purposes including client side routing, preserving
          state between pages, redirecting, auth and more.
        </p>
      ),
    },
    {
      text: 'Styled Components',
      link: 'https://styled-components.com/',
      description: (
        <p>
          Styled Components is a <a href="https://medium.com/dailyjs/what-is-actually-css-in-js-f2f529a2757" target="_blank" className={"link-highlight"}>CSS-in-JS</a> library. Its a modern way for solving CSS problems in a javascript environment. It has become a industry standard technology that helps with keeping styling scoped and modular.
        </p>
      ),
    },
    {
      text: 'Contentful',
      link: 'https://www.npmjs.com/package/contentful',
      description: (
        <p>
          While this npm library isn't being used in this application currently
          it is installed. Everyone would agree that a CMS is absolutely
          critical to any web application in this day and age and most people
          would also agree that a headless CMS is the best way to go as well.
          This npm library makes it very easy to integrate your web app with
          Contentful.
        </p>
      ),
    },
    {
      text: 'Material UI',
      link: 'https://material-ui.com/',
      description: (
        <p>
          Material UI is the same thing as bootstrap but made to work hand in
          hand with React applications. Since this application is so simple
          Material UI isn't being used anywhere within it but its installed and
          ready to be used.
        </p>
      ),
    },
    {
      text: 'Prettier',
      link: 'https://prettier.io/docs/en/index.html',
      description: (
        <p>
          Prettier is installed in this application and is configured in both
          the <code>.prettierrc.json</code> and <code>.prettierignore</code>{' '}
          files. The <code>prettierrc.json</code> file configures how prettier
          formats the files and the <code>.prettierignore</code> works the same
          as the <code>.gitignore</code> file. To run prettier simply open a
          terminal and go to the root directory of the application and type in:{' '}
          <code>npm run format-files</code>.
        </p>
      ),
    },
  ]);

  return (
    <>
      <h2>Everything Else</h2>
      <p>
        There's a few other things to cover I.E other technologies and
        libraries. Not all are being used in the current state that this
        application is in but they will be useful to you when you build out
        something bigger using this application as a base.
      </p>
      <ul>
        {technologiesList.map((i, id) => (
          <li key={id}>
            <a href={i.link} target="_blank" className={'link-highlight'}>
              {i.text}
            </a>
            {i.description}
          </li>
        ))}
      </ul>
    </>
  );
};

export default EverythingElse;
