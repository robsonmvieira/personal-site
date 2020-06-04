import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-size: 16px;
    font-family: 'Roboto',sans-serif;
  }
`