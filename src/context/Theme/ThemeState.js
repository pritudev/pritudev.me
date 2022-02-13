import React from 'react'
import ThemeContext from './themeContext'

const ThemeState = (props) => {
  return <ThemeContext.Provider>{props.children}</ThemeContext.Provider>
}

export default ThemeState
