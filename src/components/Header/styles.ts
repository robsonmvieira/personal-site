import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Nav = styled.nav`
  @media only screen and (max-width: 480px) {
    width: 100%;
    background: #202430;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    padding: 10px;
    margin: 0 auto;

    > a {
      text-decoration: none;
      color: #fff;
      margin-top: 10px;
    }
    ul {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin-left: 140px;
      li {
        list-style: none;
        padding: 10px;
        a {
          color: #fff;
          text-decoration: none;
        }
      }
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
