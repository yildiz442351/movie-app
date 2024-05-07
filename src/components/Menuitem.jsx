import React from 'react'

const Menuitem = ({mn}) => {
  return (
    <Link href={mn.url}>{mn.name}</Link>
  )
}

export default Menuitem