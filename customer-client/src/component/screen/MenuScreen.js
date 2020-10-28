import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Section from '../layout/menu/Section'

const MenuScreen = () => {
  const [menu, setMenu] = useState({})

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get('/api/menu')
        setMenu({ ...data.menu })
      } catch (err) {
        console.log(err)
      }
    })()
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
