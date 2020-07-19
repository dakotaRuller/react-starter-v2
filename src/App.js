//Node Modules
import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Contexts
import ThemeContext, {
  ThemeContextConsumer,
  ThemeContextProvider,
} from 'contexts/ThemeContext';

//Components
import ThemeWrapper from 'components/global/theme-wrapper/ThemeWrapper';
import Navbar from 'components/global/navbar/Navbar';
import AppOverview from 'components/app-overview/AppOverview';
import WebpackBabelOverview from 'components/webpack-babel-overview/WebpackBabelOverview';
import ContextOverview from 'components/context-overview/ContextOverview';
import TestingOverview from 'components/testing-overview/TestingOverview';
import EverythingElse from 'components/everything-else/EverythingElse';

//Scripts
import appRoutes from 'scripts/constants/appRoutes';

//Styles
import './styles/main.scss';

const App = () => {
  //Set updateTheme function to update the context value and set the updater to be the ThemeSwitcher.js
  const [theme, updateTheme] = useState({ activeTheme: 'dark' });
  return (
    <ThemeContextProvider
      value={{
        ...theme,
        changeTheme: (activeTheme) => updateTheme({ ...theme, activeTheme }),
      }}
    >
      <Router>
        <Navbar />
        <div className={'app'}>
          <ThemeWrapper>
            <Switch>
              <Route exact path={appRoutes.home} component={AppOverview} />
              <Route
                path={appRoutes.webpackBabelOverview}
                component={WebpackBabelOverview}
              />
              <Route
                path={appRoutes.contextOverview}
                component={ContextOverview}
              />
              <Route
                path={appRoutes.testingOverview}
                component={TestingOverview}
              />
              <Route
                path={appRoutes.everythingElse}
                component={EverythingElse}
              />
            </Switch>
          </ThemeWrapper>
        </div>
      </Router>
    </ThemeContextProvider>
  );
};

export default App;
