import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';


// Initialize CSS (Reset CSS)
export default createGlobalStyle`
  ${reset}
  * {
    box-sizing:border-box;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Do+Hyeon&display=swap&subset=korean');
    font-family: 'Black Han Sans', sans-serif;
    height: 100vh;
    min-height: 550px;
  }

  a {
    text-decoration: none;
    font-family: 'Do Hyeon';
    color: white;
  }
`