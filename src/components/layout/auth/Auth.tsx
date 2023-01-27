import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
    children: ReactNode
    isSignUp: boolean
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Auth = ({ children, ...props }: Props) => {
    const location = useLocation()
    const { pathname } = location

    return (
        <Container>
            <AuthForm isSignUp={props.isSignUp} onSubmit={props.onSubmit}>
                <AuthLabel>{pathname === '/signin' ? '로그인' : '회원가입'}</AuthLabel>
                {children}
            </AuthForm>
        </Container>
    )
}

export default Auth

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

const AuthForm = styled.form<{ isSignUp: boolean }>`
    border: 1px solid ${({ theme }) => theme.color.border};
    width: 400px;
    height: ${(props) => (props.isSignUp ? '40%' : '35%')};
    border-radius: 10px;
    padding: 2rem 1rem;
`
const AuthLabel = styled.h2`
    display: flex;
    justify-content: center;
`
