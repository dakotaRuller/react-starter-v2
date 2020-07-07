//Node Modules
import React from 'react';
import { shallow } from 'enzyme';

//Components
import App from 'src/App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ThemeWrapper from 'components/global/theme-wrapper/ThemeWrapper';
import Navbar from 'components/global/navbar/Navbar';
import AppOverview from 'components/app-overview/AppOverview';
import WebpackBabelOverview from 'components/webpack-babel-overview/WebpackBabelOverview';
import ContextOverview from 'components/context-overview/ContextOverview';
import TestingOverview from 'components/testing-overview/TestingOverview';
import EverythingElse from 'components/everything-else/EverythingElse';

//Contexts
import { ThemeContextProvider } from 'contexts/ThemeContext';

//Scripts
import appRoutes from 'scripts/constants/appRoutes';

let routes = [
  {path: appRoutes.home, component: AppOverview},
  {path: appRoutes.webpackBabelOverview, component: WebpackBabelOverview},
  {path: appRoutes.contextOverview, component: ContextOverview},
  {path: appRoutes.testingOverview, component: TestingOverview},
  {path: appRoutes.everythingElse, component: EverythingElse}
  ];

describe("<App/>" , () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  test("should have ThemeContextProvider main container", () => {
    expect(wrapper.find(ThemeContextProvider)).toHaveLength(1);
  });

  test("should have ThemeWrapper wrapper", () => {
    expect(wrapper.find(ThemeWrapper)).toHaveLength(1);
  });

  test("should have div.app wrapper", () => {
    expect(wrapper.find("div.app")).toHaveLength(1);
  });

  test("should have Router wrapper", () => {
    expect(wrapper.find(Router)).toHaveLength(1);
  });

  test("should have a Navbar component", () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });

  test("should have a Switch wrapper", () => {
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  test("should have routes", () => {
    expect(wrapper.find(Route)).toHaveLength(routes.length);
    routes.forEach((i, index) => {
      expect(wrapper.find(Route).at(index).props().path).toEqual(i.path);
      expect(wrapper.find(Route).at(index).props().component).toEqual(i.component);
    });
  })
});
