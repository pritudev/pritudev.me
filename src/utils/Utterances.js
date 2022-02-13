import React, { useEffect } from 'react'

import * as Dom from './dom'

const src = 'https://utteranc.es/client.js'
const branch = 'master'
const DARK_THEME = 'photon-dark'
const LIGHT_THEME = 'github-light'

export const Utterences = ({ repo }) => {
  const rootElm = React.createRef()

  useEffect(() => {
    const isDarkTheme = Dom.hasClassOfBody(THEME.DARK)
    const utterances = document.createElement('script')
    const utterancesConfig = {
      src,
      repo,
      branch,
      theme: DARK_THEME,
      label: 'comment',
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    }

    Object.keys(utterancesConfig).forEach((configKey) => {
      utterances.setAttribute(configKey, utterancesConfig[configKey])
    })
    rootElm.current.appendChild(utterances)
  }, [])

  return <div className="utterences" ref={rootElm} />
}
