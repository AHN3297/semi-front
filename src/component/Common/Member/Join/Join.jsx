import { useState } from "react";
import { Container } from "../../Styles/Styles";
import {
    FormWrapper,
    Title,
    Subtitle,
    FormGroup,
    Label,
    Input,
    ButtonGroup,
    SubmitButton,
    CancelButton,
} from './Join.styles';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Join = () => {
    const navigate = useNavigate();

    const [memberId, setMemberId] = useState("");
    const [memberPwd, setMemberPwd] = useState("");
    const [memberName, setMemberName] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, isLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        isLoading(true);
        setErrMsg(""); // 에러 메시지 초기화

        try {
            axios
                .post("http://localhost:8081/member/join", {
                    memberName,
                    memberId,
                    memberPwd,
                    nickname,
                    address,
                    phone,
                    email,
                    roleStatus: "ROLE_USER"  // 기본값 설정
                })
                .then((result) => {
                    if (result.status === 201) {
                        alert("회원가입이 완료되었습니다. 운전면허 인증페이지로 갑니다.");
                        setTimeout(() => {
                            navigate("/license");
                        }, 1000);
                    }
                })
                .catch((error) => {
                    console.error("회원가입 에러:", error.response);
                    const errorMessage = error.response?.data?.["error-message"] || 
                                       error.response?.data?.message || 
                                       "회원가입 중 오류가 발생했습니다.";
                    setErrMsg(errorMessage);
                    isLoading(false);
                });
        } catch (e) {
            console.error("예외 발생:", e);
            setErrMsg("회원가입 중 오류가 발생했습니다.");
            isLoading(false);
        }
    };

    const handleCancel = () => {
        setMemberId("");
        setMemberPwd("");
        setMemberName("");
        setNickname("");
        setEmail("");
        setAddress("");
        setPhone("");
        setErrMsg("");
    };

    return (
        <>
            <Container>
                <FormWrapper>
                    {loading ? (
                        <Title>회원가입 시도중 ...</Title>
                    ) : (
                        <>
                            <Title>회원가입</Title>
                            <Subtitle>Join Us!</Subtitle>
                            <label style={{ color: "red" }}>{errMsg}</label>

                            <FormGroup>
                                <Label>ID*</Label>
                                <Input
                                    type="text"
                                    placeholder="아이디를 입력해주세요"
                                    onChange={(e) => setMemberId(e.target.value)}
                                    value={memberId}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Password*</Label>
                                <Input
                                    type="password"
                                    placeholder="비밀번호를 입력해주세요"
                                    onChange={(e) => setMemberPwd(e.target.value)}
                                    value={memberPwd}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Name*</Label>
                                <Input
                                    type="text"
                                    placeholder="이름을 입력해 주세요"
                                    onChange={(e) => setMemberName(e.target.value)}
                                    value={memberName}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Nick Name*</Label>
                                <Input
                                    type="text"
                                    placeholder="닉네임을입력해주세요"
                                    onChange={(e) => setNickname(e.target.value)}
                                    value={nickname}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    placeholder="이메일을 입력해주세요"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Address</Label>
                                <Input
                                    type="text"
                                    placeholder="주소를 입력해주세요"
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Phone*</Label>
                                <Input
                                    type="tel"
                                    placeholder="예) 010-1234-1234"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                />
                            </FormGroup>

                            <ButtonGroup>
                                <SubmitButton onClick={handleSubmit}>회원가입</SubmitButton>
                                <CancelButton onClick={handleCancel}>취소</CancelButton>
                            </ButtonGroup>
                        </>
                    )}
                </FormWrapper>
            </Container>
        </>
    );
};

export default Join;