import * as styled from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = styled.createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
    body {
        margin: 0;
        display: flex;
        min-width: 320px;
        min-height: 100vh;
    }

    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }
    h2 {
        font-size: 1.8em;
    }
`

export default GlobalStyle
