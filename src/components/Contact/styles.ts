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

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 0 auto;
      align-items: center;
      margin-bottom: 20px;

      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px;
      }

      label {
        margin-bottom: 10px;
        color: #202430;
        font-family: 'Roboto', sans-serif;
      }
      label:not(:first-of-type) {
        margin-top: 10px;
      }
      input {
        font-family: 'Roboto', sans-serif;
        color: #202430;
        border-radius: 5px;
        border: 1px solid #ccc;
        background: #fff;
        height: 45px;
        padding-left: 5px;
      }
      input::placeholder {
        padding-left: 10px;
        /* color: #202430; */
        font-family: 'Roboto', sans-serif;
      }
      textarea {
        font-family: 'Roboto', sans-serif;
        color: #202430;
        border-radius: 5px;
        border: 1px solid #ccc;
        background: #fff;
        height: 45px;
        padding-left: 5px;
        min-height: 100px;
      }
      textarea::placeholder {
        padding-left: 10px;
        padding-top: 10px;
        /* color: #202430; */
        font-family: 'Roboto', sans-serif;
      }

      button {
        font-family: 'Roboto', sans-serif;
        text-transform: uppercase;
        font-weight: 500;
        padding: 15px 15px;
        border: none;
        border-radius: 5px;
        background: #2980b9;
        color: #fff;
        width: 200px;
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
