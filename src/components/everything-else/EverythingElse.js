//Node Modules
import React from 'react';

const EverythingElse = () => {
  const [technologiesList, updateTechnologiesList] = React.useState([
    {
      text: 'React Router',
      link: 'https://reactrouter.com/web/guides/quick-start',
      description:
        'This is an external library used for client side routing in a react application. React router is considered the industry standard and has very many useful purposes including client side routing, preserving state between pages, redirecting, auth and more.',
    },
    {
      text: 'Styled Components',
      link: 'https://styled-components.com/',
      description:
        'Description: Styled Components is a CSS-in-JS library. Its a modern way for solving CSS problems in a javascript environment. It has become a industry standard technology that helps with keeping styling scoped and modular.',
    },
    { text: 'Contentful', link: 'https://www.npmjs.com/package/contentful' },
    { text: 'Material UI', link: 'https://material-ui.com/' },
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
          </li>
        ))}
      </ul>
    </>
  );
};

export default EverythingElse;
