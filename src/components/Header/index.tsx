/* eslint-disable no-undef */
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import FbIcon from '../../assets/icons/facebook.svg'
import TwIcon from '../../assets/icons/twitter.svg'
import InstIcon from '../../assets/icons/instagram.svg'
import LinkIcon from '../../assets/icons/linkedin.svg'
import { Container, Wapper, Nav, List, Apresentation } from './styles'

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenu = (): void => setShowMenu(!showMenu)

  return (
    <Container>
      <Wapper>
        <Nav>
          <a href="home">@RM</a>
          <List visible={showMenu}>
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
          </List>
        </Nav>
        <FiMenu color="#fff" size={24} onClick={handleMenu} />
      </Wapper>
      <Apresentation>
        <h1>I&#39;m Front-end Engineer &#38; Back-end developer</h1>
        <h3>
          Ideas transforms the world. in the next 20 minutes everythings can
          changes. What&#39;s i can to do you today?
        </h3>
        <div>
          <img src={LinkIcon} alt="" srcSet="" />
          <img src={TwIcon} alt="" srcSet="" />
          <img src={FbIcon} alt="" srcSet="" />
          <img src={InstIcon} alt="" srcSet="" />
        </div>

        <button type="button">Contact Me Now</button>
      </Apresentation>
    </Container>
  )
}

export default Header
