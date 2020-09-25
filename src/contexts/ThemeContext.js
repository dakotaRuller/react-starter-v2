import { createContext } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  isDark: true,
  changeTheme: function (theme) {
    this.theme = theme;
    this.isDark = !this.isDark
  },
});

export const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;
export default ThemeContext;
