import React from 'react'
import dbIcon from '../../assets/icons/database.svg'
import feIcon from '../../assets/icons/front-end.svg'
import beIcon from '../../assets/icons/backend.svg'
import mobiIcon from '../../assets/icons/smartphone.svg'
import { Container } from './styles'

const Skills: React.FC = () => (
  <Container id="skills">
    <h2>Skills</h2>
    <div>
      <img src={feIcon} alt="" srcSet="" />
      <div>
        <h4>Front-End</h4>
        <p>
          build software using html, css, and javiscript with moderns frameworks
          like Angular,ReactJs and VueJs.
        </p>
      </div>
    </div>
    <div>
      <img src={mobiIcon} alt="" srcSet="" />
      <div>
        <h4>Mobile</h4>
        <p>
          Today is possible build crossplataform app using consolided
          React-Native. One code Two native App.
        </p>
      </div>
    </div>
    <div>
      <img src={beIcon} alt="" srcSet="" />
      <div>
        <h4>Back-end</h4>
        <p>
          using nodeJs to build fast and furiuos backend to apply logic business
        </p>
      </div>
    </div>
    <div>
      <img src={dbIcon} alt="" srcSet="" />
      <div>
        <h4>Database</h4>
        <p>
          I&#39;ve experince with relation database like mysql, Postgres and
          nosql as mongodb
        </p>
      </div>
    </div>
  </Container>
)

export default Skills
