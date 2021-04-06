import {langAction, langState} from "@/state/Reducer/LangReducer";
import React, {createContext, useEffect, useReducer, useState} from "react";
import {LANG} from "@/enum";
import {getHistoryLanguage} from "@/utils";
import {LANG_REDUCER} from "@/state/Reducer";
import {getTextSet} from "@/lang";
import TextSet from "@/lang/testSet";

let LangContext: React.Context<{langState: langState, langDispatch: React.Dispatch<langAction>, textSet: TextSet}>

const LangProvider: React.FC<any> = (props) => {

  const [langState, langDispatch] = useReducer(LANG_REDUCER, { lang: LANG.ENGLISH });
  const [textSet, setTextSet] = useState(getTextSet(langState.lang))

  useEffect(() => {
    const historyLanguage = getHistoryLanguage()
    if (historyLanguage) {
      langState.lang = historyLanguage
    }
  }, [langState])

  useEffect(() => {
    const currentLang = getHistoryLanguage() || LANG.ENGLISH
    setTextSet(getTextSet(currentLang))
  }, [langState.lang])

  LangContext = createContext({
    langState,
    langDispatch,
    textSet,
  });

  return (
    <LangContext.Provider value={{langState, langDispatch, textSet}}>
      {props.children}
    </LangContext.Provider>
  )
}

export {
  LangContext,
  LangProvider,
}
