import {THEME} from "@/enum";
import {THEME_REDUCER} from "@/state/Reducer";
import React, {createContext, useEffect, useReducer} from "react";
import {themeAction, themeState} from "../Reducer/ThemeReducer";
import {getHistoryTheme} from "@/utils";


let ThemeContext: React.Context<{themeState: themeState, themeDispatch: React.Dispatch<themeAction>}>

const ThemeProvider: React.FC<any> = (props) => {

  const [themeState, themeDispatch] = useReducer(THEME_REDUCER, { theme: THEME.LIGHT });

  useEffect(() => {
    const historyTheme = getHistoryTheme()
    if (historyTheme) {
      document.documentElement.setAttribute('class', historyTheme === THEME.DARK ? 'dark' : 'light')
      themeState.theme = historyTheme
    }
  }, [themeState])

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
