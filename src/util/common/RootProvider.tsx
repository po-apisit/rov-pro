import React from 'react'
import ReduxProvider from './ReduxProvider'
import ThemeProvider from './ThemeProvider'
import LayoutProvider from './LayoutProvider'

type Props = {
    children: React.ReactNode
}

export default function RootProvider({children}: Props) {
  return (
    <ReduxProvider>
        <ThemeProvider>
                {children}
        </ThemeProvider>
    </ReduxProvider>
  )
}