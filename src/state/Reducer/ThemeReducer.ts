import {THEME} from "@/enum";
import { THEME_ACTION_TYPE } from "@/state/Action";
import {setTheme} from "@/utils";
import React from "react";

export declare type themeState = {
  theme: THEME,
}

export declare type themeAction = {
  type: THEME_ACTION_TYPE,
  payload: THEME
}

const updateTheme = (theme: THEME) => {
  setTheme(theme)
  document.documentElement.setAttribute('class', theme === THEME.DARK ? 'dark' : 'light')
}

const THEME_REDUCER: React.Reducer<themeState, themeAction> = (state, action) => {
  switch (action.type) {
    case THEME_ACTION_TYPE.SET_THEME:
      updateTheme(action.payload)
      return { theme: action.payload }
    default:
      return state
  }
}

export default THEME_REDUCER
