import React, {useContext, useEffect, useState} from "react";
import {ThemeContext} from "@/state/Provider";
import { THEME } from "@/enum";
import { THEME_ACTION_TYPE } from "@/state/Action";

enum THEME_ICON_CLASS {
  LIGHT = 'fa-sun-o',
  DARK = 'fa-moon-o',
}

interface ThemeSwitchProps {
  style?:  React.CSSProperties
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({style}) => {
  const { themeState, themeDispatch } = useContext(ThemeContext)
  const [ iconClass, setIconClass ] = useState(THEME_ICON_CLASS.LIGHT)

  useEffect(() => {
    switch (themeState.theme) {
      case THEME.DARK:
        setIconClass(THEME_ICON_CLASS.DARK)
        break
      default:
        setIconClass(THEME_ICON_CLASS.LIGHT)
    }
  }, [themeState.theme])

  const changeThemeHandle = () => {
    switch (themeState.theme) {
      case THEME.DARK:
        themeDispatch({ type: THEME_ACTION_TYPE.SET_THEME, payload: THEME.LIGHT })
        break
      default:
        themeDispatch({ type: THEME_ACTION_TYPE.SET_THEME, payload: THEME.DARK })
    }
  }
  return (
    <>
      <i
        className={['pointer', 'fa', iconClass].join(' ')}
        style={style}
        onClick={changeThemeHandle}
      />
    </>
  )
}

export default ThemeSwitch
