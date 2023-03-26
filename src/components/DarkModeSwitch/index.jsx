'use client'

import { useCallback, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { BsFillMoonFill } from 'react-icons/bs'
import { MdLightMode } from 'react-icons/md'

export default function DarkModeSwitch() {
  const { theme, systemTheme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isCurrentThemeDark = mounted && currentTheme === 'dark'

  const changeTheme = useCallback(() => {
    const newTheme = isCurrentThemeDark ? 'light' : 'dark'
    setTheme(newTheme)
  }, [isCurrentThemeDark, setTheme])

  useEffect(() => {
    setMounted(true)
  }, [])

  return isCurrentThemeDark ? (
    <MdLightMode
      className="text-xl cursor-pointer hover:text-amber-500"
      onClick={changeTheme}
    />
  ) : (
    <BsFillMoonFill
      className="text-xl cursor-pointer hover:text-amber-500"
      onClick={changeTheme}
    />
  )
}
