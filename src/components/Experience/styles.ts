import styled from 'styled-components'

export const Container = styled.div`
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background: #202430;

    h2 {
      margin-top: 60px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 40px;
      text-transform: uppercase;
      font-family: 'Roboto', sans-serif;
    }

    ul {
      position: relative;
      list-style: none;
      margin: 20px;
      padding: 0;
    }
    ul::before {
      content: '';
      top: 58px;
      left: 0;
      position: absolute;
      height: 1190px;
      border: 1px dashed #ffffff;
    }
    ul li {
      margin: 30px;
      position: relative;
    }
    ul li > span {
      content: '';
      top: 49px;
      left: -30px;
      position: absolute;
      height: 225px;
      border: 1px solid #ffffff;
    }

    ul li > span::before,
    ul li > span::after {
      content: '';
      width: 15px;
      height: 15px;
      border-radius: 50px;
      background: #ffffff;
      border: 2px solid #ffffff;
      position: absolute;
    }
    ul li > span::before {
      left: -10px;
      top: -21px;
    }
    ul li > span::after {
      left: -10px;
      top: 217px;
    }

    div {
      margin: 40px;
      /* padding: 10px; */
      display: flex;
      flex-direction: column;

      h4 {
        color: #ffffff;
        text-transform: uppercase;
      }

      p {
        margin-top: 10px;
        font-family: 'Montserrat', sans-serif;
        line-height: 1.5;
        color: #ffffff;
      }
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 760px) {
  }
`
export const ContainerDate = styled.div`
  @media only screen and (max-width: 480px) {
    position: relative;
    margin: 0 !important;
    span {
      color: #ffffff;
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 760px) {
  }
`
