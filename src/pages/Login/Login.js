import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navi = useNavigate();

  const goToSignUp = () => {
    navi("/signup");
  };

  return (
      <LoginPage>
        <LoginText>로그인</LoginText>
        <Form>
          <Label>E-mail</Label>
          <Input type="email" />
        </Form>
        <Form>
          <Label>Pw</Label>
          <Input type="password" />
        </Form>
        <Btn>
          <LoginBtn>로그인하기</LoginBtn>
          <SignUpBtn onClick={goToSignUp}>회원가입하기</SignUpBtn>
        </Btn>
      </LoginPage>
  );
};

const LoginPage = styled.div`
  display: inline-block;
  padding: 20px;
  border: 1px solid black;
`;

const LoginText = styled.div`
  margin: 20px;
  font-weight: bold;
  text-align: center;
`;

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`;

const Label = styled.label``;

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 7px;
  width: 70%;
`;

const Btn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const LoginBtn = styled.button`
  margin: 15px 0;
  cursor: pointer;
`;

const SignUpBtn = styled.button`
  cursor: pointer;
`;

export default Login;
