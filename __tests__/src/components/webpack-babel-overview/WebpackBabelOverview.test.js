//Node Modules
import React from 'react';
import { shallow } from 'enzyme';

//Components
import WebpackBabelOverview from 'src/components/webpack-babel-overview/WebpackBabelOverview';
import { Link } from 'react-router-dom';

//Scripts
import appRoutes from 'scripts/constants/appRoutes';

describe("<WebpackBabelOverview/>" , () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WebpackBabelOverview/>)
  });

  test("should have header", () => {
    expect(wrapper.find("h2")).toHaveLength(1);
  });

  test("should have informational content", () => {
    expect(wrapper.find("p")).toHaveLength(11);
  });

  test("should have a list of webpack files", () => {
    expect(wrapper.find("ul")).toHaveLength(1);
    expect(wrapper.find("ul").find("li")).toHaveLength(3);
  });

  test("should have link to next local page", () => {
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find(Link).text()).toEqual("Context/Redux");
    expect(wrapper.find(Link).props().to).toEqual(appRoutes.contextOverview);
  });
});
