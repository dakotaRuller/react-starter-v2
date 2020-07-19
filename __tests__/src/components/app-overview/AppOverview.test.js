//Node Modules
import React from 'react';
import { shallow } from 'enzyme';

//Components
import AppOverview from 'src/components/app-overview/AppOverview';
import { Link } from 'react-router-dom';

//Scripts
import appRoutes from 'scripts/constants/appRoutes';

const technologiesList = [
  { link: 'https://nodejs.org/en/about/', text: 'Node.js (engine)' },
  { link: 'https://www.npmjs.com/', text: 'Npm (package manager)' },
  { link: 'https://expressjs.com/', text: 'Express.js (server)' },
  { link: 'https://webpack.js.org/', text: 'Webpack (code bundling)' },
  { link: 'https://babeljs.io/', text: 'Babel (javascript compiler)' },
  { link: 'https://jestjs.io/', text: 'Jest (testing)' },
  { link: 'https://www.npmjs.com/package/enzyme', text: 'Enzyme (testing)' },
  { link: 'https://sass-lang.com/', text: 'SCSS (styling)' },
];

describe('<AppOverview/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AppOverview />);
  });

  test('should have container', () => {
    expect(wrapper.find('.app-overview')).toHaveLength(1);
  });

  test('should have header', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  test('should have informational content', () => {
    expect(wrapper.find('p')).toHaveLength(3);
  });

  test('should have technology list ui', () => {
    expect(wrapper.find('ul').find('li').at(0).find('a').text()).toBe(
      technologiesList[0].text
    );
    expect(wrapper.find('ul').find('li').at(0).find('a').props().href).toBe(
      technologiesList[0].link
    );

    expect(wrapper.find('ul').find('li').at(1).find('a').text()).toBe(
      technologiesList[1].text
    );
    expect(wrapper.find('ul').find('li').at(1).find('a').props().href).toBe(
      technologiesList[1].link
    );

    expect(wrapper.find('ul').find('li').at(2).find('a').text()).toBe(
      technologiesList[2].text
    );
    expect(wrapper.find('ul').find('li').at(2).find('a').props().href).toBe(
      technologiesList[2].link
    );

    expect(wrapper.find('ul').find('li').at(3).find('a').text()).toBe(
      technologiesList[3].text
    );
    expect(wrapper.find('ul').find('li').at(3).find('a').props().href).toBe(
      technologiesList[3].link
    );

    expect(wrapper.find('ul').find('li').at(4).find('a').text()).toBe(
      technologiesList[4].text
    );
    expect(wrapper.find('ul').find('li').at(4).find('a').props().href).toBe(
      technologiesList[4].link
    );

    expect(wrapper.find('ul').find('li').at(5).find('a').text()).toBe(
      technologiesList[5].text
    );
    expect(wrapper.find('ul').find('li').at(5).find('a').props().href).toBe(
      technologiesList[5].link
    );

    expect(wrapper.find('ul').find('li').at(6).find('a').text()).toBe(
      technologiesList[6].text
    );
    expect(wrapper.find('ul').find('li').at(6).find('a').props().href).toBe(
      technologiesList[6].link
    );

    expect(wrapper.find('ul').find('li').at(7).find('a').text()).toBe(
      technologiesList[7].text
    );
    expect(wrapper.find('ul').find('li').at(7).find('a').props().href).toBe(
      technologiesList[7].link
    );
  });

  test('should have link to next local page', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find(Link).text()).toEqual('Webpack/Babel');
    expect(wrapper.find(Link).props().to).toEqual(
      appRoutes.webpackBabelOverview
    );
  });
});
