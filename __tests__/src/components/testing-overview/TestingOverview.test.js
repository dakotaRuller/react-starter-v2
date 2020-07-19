//Node Modules
import React from 'react';
import { shallow } from 'enzyme';

//Components
import TestingOverview from 'src/components/testing-overview/TestingOverview';
import { Link } from 'react-router-dom';

//Scripts
import appRoutes from 'scripts/constants/appRoutes';

describe('<TestingOverview/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TestingOverview />);
  });

  test('should have header', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  test('should have informational content', () => {
    expect(wrapper.find('p')).toHaveLength(6);
    expect(wrapper.find('code')).toHaveLength(12);
  });

  test('should have link to next local page', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find(Link).text()).toEqual('Everything Else');
    expect(wrapper.find(Link).props().to).toEqual(appRoutes.everythingElse);
  });
});
