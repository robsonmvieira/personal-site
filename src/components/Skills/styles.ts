import styled from 'styled-components'

export const Container = styled.div`
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background: #f2f3f4;

    h2 {
      margin-top: 60px;
      font-weight: 600;
      color: #202430;
      margin-bottom: 40px;
      text-transform: uppercase;
      font-family: 'Roboto', sans-serif;
    }
    div {
      padding: 10px;
      display: flex;
      /* align-items: center; */
      img {
        width: 100px;
        height: 100px;
        margin-right: 10px;
        /* border-radius: 50%;
      margin-bottom: 40px; */
      }
      div {
        display: flex;
        flex-direction: column;

        h4 {
          color: #4e586e;
          text-transform: uppercase;
        }
      }
    }
    h6 {
      text-align: center;
      width: 300px;
      font-weight: normal;
      font-size: 1.2em;
      color: #202430;
      font-family: 'Roboto', sans-serif;
    }
    p {
      margin-top: 10px;
      /* padding: 10px; */
      /* text-align: center; */
      font-family: 'Montserrat', sans-serif;
      line-height: 1.5;
      color: #222;
    }
    /* button {
      margin-top: 15px;
      padding: 20px 25px;
      text-transform: uppercase;
      border: none;
      background-image: linear-gradient(#f78361, #f54b64);
      color: #fff;
      border-radius: 10px;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
    } */
  }
  @media only screen and (min-width: 481px) and (max-width: 760px) {
  }
`
