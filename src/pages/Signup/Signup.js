import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navi = useNavigate();
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

  const isValidId = email.includes("@" && ".") ? "" : "정확히 입력해주세요";

  const isValidPw = pw.length >= 8 ? "" : "8자 이상 입력해주세요";

  const isSamePw = pw === re_pw ? "" : "비밀번호가 일치하지 않습니다";

  const isValidLogin = email && pw && re_pw;

  const goToLogin = () => {
    // axios.post(
    //   "http://localhost:8080/users/create",
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   },
    //   { data: { email: email, password: pw } }
    // );

    axios({
      url: "http://localhost:8080/users/create",
      method: "post",
      data: {
        email: email,
        password: pw,
      },
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        if (res.data.token) {
          alert("회원가입 성공!");
          navi("/todo");
        }
      })
      .catch((err) => alert(err.response.data.details));
  };

  return (
    <SignupPage>
      <SignupText>회원가입하기</SignupText>
      <Form>
        <Label>이름을 입력하세요.</Label>
        <Input type="text" name="name" onChange={handleInfo} />
      </Form>
      <Form>
        <Label>E-mail을 입력하세요.</Label>
        <Input type="email" name="email" onChange={handleInfo} />
        <Check>{email && isValidId}</Check>
      </Form>
      <Form>
        <Label>비밀번호를 입력하세요</Label>
        <Input
          type="password"
          name="pw"
          placeholder="8자 이상 입력하세요"
          onChange={handleInfo}
        />
        <Check>{pw && isValidPw}</Check>
      </Form>
      <Form>
        <Label>비밀번호를 한번 더 입력하세요</Label>
        <Input
          type="password"
          name="re_pw"
          placeholder="동일하게 입력해주세요"
          onChange={handleInfo}
        />
        <Check>{re_pw && isSamePw}</Check>
      </Form>
      <Btn>
        <SignupBtn onClick={goToLogin} disabled={!isValidLogin}>
          회원가입하기
        </SignupBtn>
      </Btn>
    </SignupPage>
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
  margin-bottom: 8px;
  font-size: 1px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid gray;
  border-radius: 7px;

  ::placeholder {
    font-size: 4px;
    padding-left: 5px;
  }
`;

const Check = styled.div`
  margin-top: 10px;
  color: red;
  font-size: 2px;
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
