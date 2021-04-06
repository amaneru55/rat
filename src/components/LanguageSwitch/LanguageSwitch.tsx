import {LangContext} from "@/state/Provider";
import React, {useContext} from "react";
import {Select} from "antd";
import {LANG} from "@/enum";
import {LANG_ACTION_TYPE} from "@/state/Action";
const { Option } = Select;

interface LanguageSwitchProps {
  style?: React.CSSProperties
  [key: string]: any
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({style}) => {
  const { langState, langDispatch, textSet } = useContext(LangContext);
  const updateLangHandle = (newLang: LANG) => {
    if (newLang === langState.lang) return
    langDispatch({ type: LANG_ACTION_TYPE.SET_LANG, payload: newLang})
  }
  return (
    <div
      style={style}
    >
      <p>{LANG[langState.lang]}</p>
      <p style={{fontSize: '3rem'}}>{textSet.common.hello}</p>
      <Select
        style={{
          width: '8rem',
        }}
        defaultValue={langState.lang}
        onChange={value => updateLangHandle(value as LANG)}
      >
        <Option value={LANG.ENGLISH}>English</Option>
        <Option value={LANG.CHINESE}>Chinese</Option>
        <Option value={LANG.JAPANESE}>Japanese</Option>
      </Select>
    </div>
  )
}

export default LanguageSwitch
