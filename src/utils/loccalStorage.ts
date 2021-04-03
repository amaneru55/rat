import {LOCAL_STORAGE_ITEM, THEME} from "@/enum";

const getHistoryTheme = () => {
  const historyTheme = localStorage.getItem(LOCAL_STORAGE_ITEM.THEME)
  if (!historyTheme || !(parseInt(historyTheme) in THEME)) return undefined
  return parseInt(historyTheme) as THEME
}

const setTheme = (theme: THEME) => {
  localStorage.setItem(LOCAL_STORAGE_ITEM.THEME, theme + '')
}

export {
  getHistoryTheme,
  setTheme
}