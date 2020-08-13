//Node Modules
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

//Contexts
import ThemeContext, { ThemeContextConsumer } from 'contexts/ThemeContext';

const ThemeWrapper = (props) => {
  const { children } = props;
  const themeContext = useContext(ThemeContext);
  return (
    <div className={`app-container theme-${themeContext.activeTheme}`}>
      {children}
    </div>
  );
};

ThemeWrapper.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ThemeWrapper;
