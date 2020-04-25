import styled from 'styled-components'
import Bg from '../../assets/images/bg.jpg'

interface ListProperty {
  visible: boolean
}

export const Container = styled.header`
  @media only screen and (max-width: 480px) {
    width: 100%;
    background-image: url(${Bg});
    overflow: hidden;
    height: 500px;
    background-size: cover;
    position: relative;
  }
`
export const Wapper = styled.div`
  width: 100%;
  padding: 10px;
  position: absolute;
  display: flex;
  background: #202430;
`
export const Nav = styled.nav`
  @media only screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    > a {
      text-decoration: none;
      color: #fff;
      margin-top: 10px;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 760px) {
    background: yellow;
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const List = styled.ul<ListProperty>`
  @media only screen and (max-width: 480px) {
    display: ${(p: ListProperty) => (p.visible ? 'block' : 'none')};
    margin-top: 10px;
    flex-direction: column;
    flex: 1;
    li {
      list-style: none;
      margin-bottom: 10px;
      a {
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
      }
    }
  }
`
export const Apresentation = styled.div`
  @media only screen and (max-width: 480px) {
    margin-top: 80px;
    color: #fff;
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;

    h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 2em;
      line-height: 1.5;
      width: 100%;
      margin-bottom: 40px;
      text-align: center;
    }

    h3 {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.9em;
      line-height: 1.5;
      width: 100%;
      padding: 24px 0 0 0;
      text-align: center;
    }
    div {
      width: 100%;
      padding: 10px;
      margin-top: 30px;
      display: flex;

      img {
        cursor: pointer;
      }
      img:not(:last-of-type) {
        margin-right: 100px;
      }
    }
    button {
      margin-top: 20px;
      text-transform: uppercase;
      border-radius: 10px;
      padding: 15px 20px;
      width: 200px;
      border: 1px solid #fff;
      background: transparent;
      color: #fff;
      opacity: 0.6;
      transition: 0.3s;
    }
    button:hover {
      background: #fff;
      color: #202430;
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 760px) {
  }
`
