import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Container } from "../../Styles/Styles";
import { SubContainer, Form, Title, Input, Button } from "./login.styles";

const Login = () => {
  const [memberId, setMemberId] = useState("");
  const [memberPwd, setMemberPwd] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    console.log(memberId, memberPwd);
  };

  const handleSignup = () => {

    navigate("/join");
  };

  return (
    <Container>
      <SubContainer>
      <Form onSubmit={handleLogin}>
        <Title>로그인</Title>
        <Input
          type="text"
          placeholder="아이디를 입력해주세요"
          onChange={(e) => setMemberId(e.target.value)}
        />
        <label style={{ fontSize: "13px", color: "red", padding: "4px" }}>
          {msg}
        </label>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={(e) => setMemberPwd(e.target.value)}
        />
        <Button type="submit">로그인</Button>

        <Button
          type="button"
          onClick={handleSignup}
          style={{
            marginTop: "10px",
            backgroundColor: "#fff",
            color: "#93c5fd",
            border: "1px solid  #93c5fd",
          }}
        >
          회원가입
        </Button>
      </Form>
      </SubContainer>
    </Container>
  );
};

export default Login;
