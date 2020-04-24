/* eslint-disable no-undef */
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Container, Nav } from './styles'

const Header: React.FC = () => {
  ;[showMenu, setShowMenu] = useState(false)
  const handleMenu = (): void => console.log('ok')

  return (
    <Container>
      <Nav>
        <a href="home">@RM</a>
        <ul visible={showMenu}>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="a">Blog</a>
          </li>
          <li>
            <a href="a">Contatc</a>
          </li>
        </ul>
        <FiMenu color="#fff" size={24} onClick={handleMenu} />
      </Nav>
    </Container>
  )
}

export default Header
