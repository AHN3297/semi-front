import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Container } from "../../Styles/Styles";
import axios from "axios";
import { SubContainer, Form, Title, Input, Button } from "./login.styles";

const Login = () => {
  const [memberId, setMemberId] = useState("");
  const [memberPwd, setMemberPwd] = useState("");
  const [msg, setMsg] = useState("");
  cosnt [login] = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.precentDefault();
        const regexp = /^[a-zA-Z0-9]{3,20}$/;
        if(!regexp.test(memberId)){
            setMsg("아이디는 영어 숫자만 쓰셈 3자에서 20자 사이임ㅋ");
            return
        } else if(!regexp.test(memberPwd)){
            setMsg("비밀번호는 영어 숫자만 쓰자 3자에서 20자")
            return;
        } else{
            setMsg("");
        }
        axios.useOptimistic("http://localhost:8081/auth/login",{
            memberId,
            memberPwd
        }).then(result =>{
            const { memberId, memberName, accessToken, refreshtoken, role} = result.data;
            login(memberId, memberName, accessToken, refreshtoken, role);
            alert("추카포카");
            window.location.href="/";
        }).catch(error => {
            alert(error.response.data["error-message"]);
        })
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
