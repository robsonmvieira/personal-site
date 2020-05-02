/* eslint-disable no-undef */
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

import { animateScroll as scroll } from 'react-scroll'
import FbIcon from '../../assets/icons/facebook.svg'
import TwIcon from '../../assets/icons/twitter.svg'
import InstIcon from '../../assets/icons/instagram.svg'
import LinkIcon from '../../assets/icons/linkedin.svg'
import {
  Container,
  ContactMeButton,
  Wapper,
  Nav,
  List,
  Anchor,
  Apresentation
} from './styles'

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenu = (): void => setShowMenu(!showMenu)

  return (
    <Container>
      <Wapper>
        <Nav>
          <Anchor to="home" onClick={() => scroll.scrollToTop()}>
            @RM
          </Anchor>
          <List visible={showMenu}>
            <li>
              <Anchor to="about" smooth duration={1000}>
                About
              </Anchor>
            </li>
            <li>
              <Anchor to="skills" smooth duration={1000}>
                skills
              </Anchor>
            </li>
            <li>
              <Anchor to="xp" smooth duration={1000}>
                Services
              </Anchor>
            </li>
            <li>
              <Anchor to="contact" smooth duration={1000}>
                Contatc
              </Anchor>
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

        <ContactMeButton to="contact" smooth duration={1000}>
          Contact Me Now
        </ContactMeButton>
      </Apresentation>
    </Container>
  )
}

export default Header
