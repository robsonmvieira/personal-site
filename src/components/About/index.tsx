import React from 'react'

import { Container } from './styles'
import Profile from '../../assets/images/profile.jpg'

const About: React.FC = () => (
  <Container>
    <h2>About Me</h2>
    <img src={Profile} alt="" srcSet="" />

    <h6>Hi! I&#39;m Robson Maia</h6>

    <p>
      I&#39;m Front-end Engineer and english student. I&#39;m lover technology
      and as it can changes the live&#39;s people. I like of ColdPlay, simple
      red. I&#39;m Barcelona support but also like Premier League.
    </p>

    <button type="button">Hire me Now</button>
  </Container>
)

export default About
