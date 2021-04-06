import {LOCAL_STORAGE_ITEM, THEME, LANG} from "@/enum";

const getHistoryTheme = () => {
  const historyTheme = localStorage.getItem(LOCAL_STORAGE_ITEM.THEME)
  if (!historyTheme || !(parseInt(historyTheme) in THEME)) return undefined
  return parseInt(historyTheme) as THEME
}

const setTheme = (theme: THEME) => {
  localStorage.setItem(LOCAL_STORAGE_ITEM.THEME, theme + '')
}

const getHistoryLanguage = () => {
  const historyLanguage = localStorage.getItem(LOCAL_STORAGE_ITEM.LANG)
  if (!historyLanguage || !(parseInt(historyLanguage) in LANG)) return undefined
  return parseInt(historyLanguage) as LANG
}

const setLanguage = (lang: LANG) => {
  localStorage.setItem(LOCAL_STORAGE_ITEM.LANG, lang + '')
}

export {
  getHistoryTheme,
  setTheme,
  getHistoryLanguage,
  setLanguage,
}
