import React, { useState } from "react";
import styled from "styled-components";

const Signup = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const saveUserInfo = (id) => {
    setId(id);
  };
  console.log(id);
  return (
    <>
      <SignupPage>
        <SignupText>회원가입하기</SignupText>
        <Form>
          <Label>E-mail을 입력하세요.</Label>
          <Input type="email" />
        </Form>
        <Form>
          <Label>비밀번호를 입력하세요</Label>
          <Input
            type="password"
            placeholder="8자 이상 입력하세요"
            onChange={saveUserInfo}
          />
        </Form>
        <Form>
          <Label>비밀번호를 한번 더 입력하세요</Label>
          <Input type="password" />
        </Form>
        <Btn>
          <SignupBtn>로그인하기</SignupBtn>
        </Btn>
      </SignupPage>
    </>
  );
};

const SignupPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 30px 20px;
  border: 1px solid black;
`;

const SignupText = styled.strong`
  margin: 20px;
  font-weight: bold;
  text-align: center;
`;

const Form = styled.div`
  margin: 10px 0;
`;

const Label = styled.div`
  font-size: 10px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 7px;
  width: 100%;
`;
const Btn = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignupBtn = styled.button`
  margin: 15px 0;
  cursor: pointer;
`;

export default Signup;
