import React from 'react'

type Props = {
    children: React.ReactNode;
    params:{
        hero:string
    }
}



export default function layout({children, params}: Props) {
  return (
    <html lang="en">
    <body>
      {/* Layout UI */}
      <main>{children}</main>
    </body>
  </html>
  )
}