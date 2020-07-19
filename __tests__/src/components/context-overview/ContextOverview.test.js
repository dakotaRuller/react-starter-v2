//Node Modules
import React from 'react';
import { shallow } from 'enzyme';

//Components
import ContextOverview from 'src/components/context-overview/ContextOverview';
import { Link } from 'react-router-dom';

//Scripts
import appRoutes from 'scripts/constants/appRoutes';

describe('<ContextOverview/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ContextOverview />);
  });

  test('should have header', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  test('should have informational content', () => {
    expect(wrapper.find('p')).toHaveLength(5);
  });

  test('should have link to next local page', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find(Link).text()).toEqual('Testing');
    expect(wrapper.find(Link).props().to).toEqual(appRoutes.testingOverview);
  });
});
