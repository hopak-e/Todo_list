import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { getAuth } from 'firebase/auth'

import { auth } from 'firestore'
import Auth from 'components/layout/auth/Auth'
import AuthButton from 'components/shared/AuthButton'
import GoogleAuthButton from 'components/shared/GoogleAuthButton'
import Input from 'components/shared/Input'

const SignIn = () => {
    const [signInInfo, setSignInInfo] = useState({ email: '', password: '' })
    const { email, password } = signInInfo

    const navigate = useNavigate()

    const handleSignInInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setSignInInfo({
            ...signInInfo,
            [name]: value,
        })
    }

    const handleSignInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            await localStorage.setItem('uid', user.user.uid)
            user.user.displayName && localStorage.setItem('displayName', user.user.displayName)
            await navigate('/')
        } catch (error) {
            alert('아이디 혹은 비밀번호를 확인해주세요.')
            setSignInInfo({ email: '', password: '' })
        }
    }

    return (
        <Auth isSignUp={false} onSubmit={handleSignInSubmit}>
            <Input
                placeholder="이메일을 입력하세요"
                name="email"
                type="email"
                value={email}
                isSignUp={false}
                onChange={handleSignInInfoChange}
            />
            <Input
                placeholder="비밀번호를 입력하세요"
                name="password"
                type="password"
                value={password}
                isSignUp={false}
                onChange={handleSignInInfoChange}
            />
            <AuthButton>로그인</AuthButton>
            <GoogleAuthButton />
            <LinkSignUp>
                아직 회원이 아니신가요?
                <Link to="/signup" className="link_signup">
                    회원가입
                </Link>
            </LinkSignUp>
        </Auth>
    )
}

export default SignIn

const LinkSignUp = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    .link_signup {
        margin-left: 5px;
        color: ${({ theme }) => theme.color.main};
        border-bottom: 1px solid ${({ theme }) => theme.color.main};
    }
`
