import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from 'firestore'

import Auth from 'components/layout/auth/Auth'
import AuthBotton from './AuthBotton'
import Input from 'components/shared/Input'

const SignUp = () => {
    const [signupInfo, setSignupInfo] = useState({
        email: '',
        nickname: '',
        password: '',
        confirmPassword: '',
    })

    const { email, nickname, password, confirmPassword } = signupInfo

    const handleSignUpInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setSignupInfo({
            ...signupInfo,
            [name]: value,
        })
    }

    const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(user.user, { displayName: nickname })
            await addDoc(collection(db, 'users'), {
                displayName: user.user.displayName,
                uid: user.user.uid,
            })
            if (window.confirm('회원가입이 완료되었습니다!')) {
                window.location.href = '/signin'
            }
        } catch (error) {
            alert('정보를 정확히 기입해주세요.')
            console.log(error)
        }
    }

    return (
        <Auth isSignUp={true} onSubmit={handleSignUpSubmit}>
            <Input
                placeholder="이메일을 입력하세요"
                name="email"
                type="email"
                value={email}
                isSignUp={true}
                onChange={handleSignUpInfoChange}
            />
            <Input
                placeholder="닉네임을 입력하세요"
                name="nickname"
                value={nickname}
                isSignUp={true}
                onChange={handleSignUpInfoChange}
            />
            <Input
                placeholder="비밀번호를 입력하세요"
                name="password"
                type="password"
                value={password}
                isSignUp={true}
                onChange={handleSignUpInfoChange}
            />
            <Input
                placeholder="비밀번호를 확인하세요"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                isSignUp={true}
                onChange={handleSignUpInfoChange}
            />
            <AuthBotton email={email} password={password} nickname={nickname} />
            <LinkSignIn>
                아이디가 있으신가요?
                <Link to="/signin" className="link_signin">
                    로그인
                </Link>
            </LinkSignIn>
        </Auth>
    )
}

export default SignUp

const LinkSignIn = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    .link_signin {
        margin-left: 5px;
        color: ${({ theme }) => theme.color.main};
        border-bottom: 1px solid ${({ theme }) => theme.color.main};
    }
`
