import React from 'react'

const Header = ({title}) => {
  return (
    <header>
      {title}
    </header>
  )
}

Header.defaultProps = {
  title:"to do app"
}

export default Header;