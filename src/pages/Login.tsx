import { Aside } from "../components/aside-form/AsideForm";
import styled from "styled-components";

const LoginStyled = styled.div`
    display: flex;
    width: 100vw
`;

const PrincipalContentLogin = styled.main`
    font-family: "poppins", sans-serif;
    min-width: 50vw;
    height: 100vh;
    background-color: var(--first-color);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeadingLogin = styled.h1`
    font-weight: 600;
    font-size: 1.5rem;
    text-decoration: underline;
`;

const Form = styled.form`
    height: 50%;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const DivInput = styled.div`
    width: 100%;
`;

const IconInput = styled.img`
    width: 1.5rem;
    position: fixed;
    margin-top: 0.5rem;
`;

const IconInputShowPassword = styled.img`

`

const Input = styled.input`
    width: 100%;
    height: 2.6rem;
    border: none;
    border-radius: 0.2rem;

    ::placeholder {

    }
`;

const DivDetails = styled.div`

`;

const DivInputCheck = styled.div`

`;

const LabelInputCheck = styled.label`

`;

const InputCheck = styled.input`

`;

const ForgetPassword = styled.p`

`;

const SendButton = styled.button`

`;

const SpanText = styled.p`
    span {
        text-decoration: underline;
        font-weight: 700;
    }
`

export const Login: React.FC = () => {
    return (
        <LoginStyled>
            <Aside />
            <PrincipalContentLogin>

                <HeadingLogin>Entrar no sistema</HeadingLogin>

                <Form>

                    <DivInput>
                        <IconInput src="../../public/assets/icons/person-name-to-mark.png" />
                        <Input type="text" />
                    </DivInput>

                    <DivInput>
                        <IconInput src="../../public/assets/icons/password-to-mark.png" />
                        <Input type="text" />
                        <IconInputShowPassword src="../../public/assets/icons/showpassword-to-mark.png" />
                    </DivInput>

                    <DivDetails>
                        <DivInputCheck>
                            <InputCheck type="checkbox" />
                            <LabelInputCheck>Lembre de mim</LabelInputCheck>
                        </DivInputCheck>

                        <ForgetPassword>Esqueceu sua senha?</ForgetPassword>
                    </DivDetails>

                </Form>

                <SendButton type="reset">Entrar</SendButton>

                <SpanText>Novo(a) por aqui? <span>Se inscreva!</span></SpanText>

            </PrincipalContentLogin>
        </LoginStyled>
    )
}