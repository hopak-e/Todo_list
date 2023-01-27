import styled from 'styled-components'
import { FcGoogle } from 'react-icons/fc'

const GoogleAuthButton = () => {
    return (
        <Container>
            <Button>
                <FcGoogle className="fc-google" />
                구글로 로그인
            </Button>
        </Container>
    )
}

export default GoogleAuthButton

const Container = styled.div`
    display: flex;
    margin-top: 20px;
    width: 100%;
    height: 40px;
`

const Button = styled.button`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        border: 1px solid ${({ theme }) => theme.color.hover_border};
    }
    .fc-google {
        height: 24px;
        width: 24px;
        margin-right: 10px;
    }
`
