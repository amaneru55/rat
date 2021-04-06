import {LANG} from "@/enum";
import {LANG_ACTION_TYPE} from "../Action";
import {setLanguage} from "../../utils";
import * as React from "react";

export declare type langState = {
  lang: LANG
}

export declare type langAction = {
  type: LANG_ACTION_TYPE,
  payload: LANG,
}

const updateLang = (lang: LANG) => {
  setLanguage(lang)
}

const LANG_REDUCER: React.Reducer<langState, langAction> = (state, action) => {
  switch (action.type) {
    case LANG_ACTION_TYPE.SET_LANG:
      updateLang(action.payload)
      return { lang: action.payload }
    default:
      return state
  }
}

export default LANG_REDUCER

