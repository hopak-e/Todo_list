import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            main: string
            border: string
            hover_border: string
        }
    }
}
