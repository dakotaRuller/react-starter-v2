import { createContext } from 'react'

const ThemeContext = createContext({
    theme: "dark",
    changeTheme: function(theme) {
      this.theme = theme;
    }
  }
);

export const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;

export default ThemeContext;