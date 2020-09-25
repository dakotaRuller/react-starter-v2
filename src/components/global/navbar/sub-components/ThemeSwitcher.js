//Node Modules
import React, { useContext } from 'react';

//Contexts
import ThemeContext, {
  ThemeContextConsumer,
  ThemeContextProvider,
} from 'contexts/ThemeContext';

//Assets
import lightIcon from 'assets/icons/light.svg';
import darkIcon from 'assets/icons/dark-light-outline.svg';

const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext);
  const isDark = themeContext.activeTheme === "dark";

  return (
    <div className={'theme-switcher-container'}>
      <button
        className={`light-theme-btn ${isDark ? "" : "active-theme"}`}
        onClick={() => themeContext.changeTheme('light')}
      >
        <img src={lightIcon} />
      </button>
      <button
        className={`dark-theme-btn ${isDark ? "active-theme" : ""}`}
        onClick={() => themeContext.changeTheme('dark')}
      >
        <img src={darkIcon} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
