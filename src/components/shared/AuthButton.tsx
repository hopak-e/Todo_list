import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    children: ReactNode
}

const AuthButton = ({ children }: Props) => {
    return (
        <Container>
            <Button type="submit">{children}</Button>
        </Container>
    )
}

export default AuthButton

const Container = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 40px;
`

const Button = styled.button`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.main};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
`
