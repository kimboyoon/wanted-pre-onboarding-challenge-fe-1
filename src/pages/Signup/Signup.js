import React, { useState } from "react";
import styled from "styled-components";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    pw: "",
    re_pw: "",
  });

  const handleInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const { email, pw, re_pw } = userInfo;

  const isValidateId = email.includes("@" && ".") ? "" : "정확히 입력해주세요";

  const isValidatePw = pw.length >= 8 ? "" : "8자 이상 입력해주세요";

  const isSamePw = pw === re_pw ? "일치" : "불일치";

  const goToLogin = () => {};

  return (
    <>
      <SignupPage>
        <SignupText>회원가입하기</SignupText>
        <Form>
          <Label>이름을 입력하세요.</Label>
          <Input type="text" name="name" onChange={handleInfo} />
        </Form>
        <Form>
          <Label>E-mail을 입력하세요.</Label>
          <Input type="email" name="email" onChange={handleInfo} />
          <CheckPw>{email && isValidateId}</CheckPw>
        </Form>
        <Form>
          <Label>비밀번호를 입력하세요</Label>
          <Input
            type="password"
            name="pw"
            placeholder="8자 이상 입력하세요"
            onChange={handleInfo}
          />
          <CheckPw>{pw && isValidatePw}</CheckPw>
        </Form>
        <Form>
          <Label>비밀번호를 한번 더 입력하세요</Label>
          <Input
            type="password"
            name="re_pw"
            placeholder="동일하게 입력해주세요"
            onChange={handleInfo}
          />
          <CheckPw>{re_pw && isSamePw}</CheckPw>
        </Form>
        <Btn>
          <SignupBtn
            onClick={goToLogin}
            disabled={isValidateId && isValidatePw}
          >
            회원가입하기
          </SignupBtn>
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
  font-size: 1px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 7px;
  width: 100%;
`;

const CheckPw = styled.div`
  font-size: 2px;
  color: red;
`;

const Btn = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignupBtn = styled.button`
  margin: 15px 0;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`;

export default Signup;
