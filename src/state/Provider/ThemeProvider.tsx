import {THEME} from "@/enum";
import {THEME_REDUCER} from "@/state/Reducer";
import {createContext, useReducer} from "react";
import {themeAction, themeState} from "../Reducer/ThemeReducer";
import {getHistoryTheme} from "@/utils";


let ThemeContext: React.Context<{themeState: themeState, themeDispatch: React.Dispatch<themeAction>}>
let initialTheme = THEME.LIGHT
const historyTheme = getHistoryTheme()
if (historyTheme) {
  document.documentElement.setAttribute('class', historyTheme === THEME.DARK ? 'dark' : 'light')
  initialTheme = historyTheme
}

const ThemeProvider: React.FC<any> = (props) => {

  const [themeState, themeDispatch] = useReducer(THEME_REDUCER, { theme: initialTheme });

  ThemeContext = createContext({
    themeState,
    themeDispatch,
  });

  return (
    <ThemeContext.Provider value={{themeState, themeDispatch}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeContext,
  ThemeProvider
}