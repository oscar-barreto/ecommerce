import Container from "../components/Container";
import FormWrap from "../inputs/FormWrap";
import LoginForm from "./LoginForm";
import  useState  from "react";

const Login = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <LoginForm/>
            </FormWrap>
        </Container>
    </>
  )
}

export default Login