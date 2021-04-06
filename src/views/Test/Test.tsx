import './index.scss'
import React from "react";
import ThemeSwitch from "@/components/ThemeSwitch";
import LanguageSwitch from "@/components/LanguageSwitch";

const Test: React.FC<any> = (props) => {
  return (
    <div className={['page-content', 'flex-center'].join(' ')}>
      <ThemeSwitch
        style={{
          fontSize: '2rem',
          color: '#FFD21A'
        }}
      />
      <LanguageSwitch
        style={{
          marginLeft: '1rem',
          width: '20rem',
        }}
      />

    </div>
  )
}

export default Test
