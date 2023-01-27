import { Dispatch, SetStateAction } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
    placeholder: string
    name: string
    type?: string
    value: string
    isSignUp: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ ...props }: Props) => {
    return (
        <Container isSignUp={props.isSignUp}>
            <InputContainer
                placeholder={props.placeholder}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
            />
        </Container>
    )
}

export default Input

const Container = styled.div<{ isSignUp: boolean }>`
    width: 100%;
    height: 40px;
    margin-top: ${(props) => (props.isSignUp ? '20px' : '30px')};
`

const InputContainer = styled.input`
    border: 1px solid ${({ theme }) => theme.color.border};
    width: 100%;
    height: 100%;
    padding-left: 10px;
    border-radius: 5px;
`
