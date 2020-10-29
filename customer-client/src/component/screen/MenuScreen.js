import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import Section from '../layout/menu/Section'
import { loadMenu } from '../../actions/menuActions'

const MenuScreen = () => {
  const dispatch = useDispatch()

  const appState = useSelector(state => {
    return state.appState
  })
  const menu = useSelector(state => {
    return state.menu
  })

  console.log('MENU => ', menu)

  useEffect(() => {
    dispatch(loadMenu())
  }, [])

  return (
    <div>
      <h1>menu screen</h1>

      {Object.keys(menu).length > 0 &&
        Object.keys(menu).map((section, idx) => {
          return (
            <Section
              sectionItems={menu[section]}
              sectionName={section}
              key={idx}
            />
          )
        })}
    </div>
  )
}

export default MenuScreen
