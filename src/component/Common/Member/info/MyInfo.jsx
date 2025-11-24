import { useState, useEffect } from "react";
import { Container } from "../../Styles/Styles";
import {
    FormWrapper,
    Title,
    Subtitle,
    InfoGroup,
    Label,
    InfoText,
    ButtonGroup,
    UpdateButton,
    CancelButton,
    DeleteButton
} from './MyInfo.styles';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyInfo = () => {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    // 로그인한 사용자 정보 가져오기
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                // 로그인 시 저장한 memberId를 localStorage나 세션에서 가져오기
                const memberId = localStorage.getItem("memberId");
                
                if (!memberId) {
                    alert("로그인이 필요합니다.");
                    navigate("/login");
                    return;
                }

                const response = await axios.get(
                    `http://localhost:8081/member/${memberId}`
                );

                setUserInfo(response.data);
                setLoading(false);
            } catch (error) {
                console.error("사용자 정보 불러오기 실패:", error);
                alert("사용자 정보를 불러올 수 없습니다.");
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, [navigate]);

    const handleUpdate = () => {
        navigate("/mypage/edit");
    };

    const handleCancel = () => {
        navigate("/");
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            "정말로 회원 탈퇴하시겠습니까?\n탈퇴 시 모든 정보가 삭제되며 복구할 수 없습니다."
        );

        if (confirmDelete) {
            try {
                const memberNo = localStorage.getItem("memberNo"); // memberNo로 변경
                const token = localStorage.getItem("token");
                
                const response = await axios.delete(
                    `http://localhost:8081/member/${memberNo}`,
                    {
                        headers: token ? {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        } : {},
                        withCredentials: true
                    }
                );
                
                if (response.status === 200) {
                    alert("회원 탈퇴가 완료되었습니다.");
                    localStorage.removeItem("memberNo");
                    localStorage.removeItem("token");
                    navigate("/");
                }
            } catch (error) {
                console.error("회원 탈퇴 에러:", error);
                console.error("에러 응답:", error.response?.data);
                alert("회원 탈퇴 중 오류가 발생했습니다.");
            }
        }
    };

    if (loading) {
        return (
            <Container>
                <FormWrapper>
                    <Title>로딩 중...</Title>
                </FormWrapper>
            </Container>
        );
    }

    if (!userInfo) {
        return (
            <Container>
                <FormWrapper>
                    <Title>사용자 정보를 불러올 수 없습니다.</Title>
                </FormWrapper>
            </Container>
        );
    }

    return (
        <Container>
            <FormWrapper>
                <Title>마이페이지</Title>
                <Subtitle>My Page</Subtitle>

                <InfoGroup>
                    <Label>사용자 아이디</Label>
                    <InfoText>{userInfo.memberId || "-"}</InfoText>
                </InfoGroup>

                <InfoGroup>
                    <Label>사용자 이름</Label>
                    <InfoText>{userInfo.memberName || "-"}</InfoText>
                </InfoGroup>

                <InfoGroup>
                    <Label>사용자 닉네임</Label>
                    <InfoText>{userInfo.nickname || "-"}</InfoText>
                </InfoGroup>

                <InfoGroup>
                    <Label>사용자 주소</Label>
                    <InfoText>{userInfo.address || "-"}</InfoText>
                </InfoGroup>

                <InfoGroup>
                    <Label>사용자 전번호</Label>
                    <InfoText>{userInfo.phone || "-"}</InfoText>
                </InfoGroup>

                <InfoGroup>
                    <Label>사용자 이메일</Label>
                    <InfoText>{userInfo.email || "-"}</InfoText>
                </InfoGroup>

                <InfoGroup>
                    <Label>사용자 면허인증</Label>
                    <InfoText>{userInfo.isVerified ? "인증완료" : "미인증"}</InfoText>
                </InfoGroup>

                <InfoGroup>
                    <Label>내 게시물</Label>
                    <InfoText>{userInfo.posts || "0"}개</InfoText>
                </InfoGroup>

                <InfoGroup>
                    <Label>내 댓글</Label>
                    <InfoText>{userInfo.comments || "0"}개</InfoText>
                </InfoGroup>

                <InfoGroup>
                    <Label>예약 내역</Label>
                    <InfoText>{userInfo.reservations || "0"}건</InfoText>
                </InfoGroup>

                <InfoGroup>
                    <Label>회원 탈퇴하기</Label>
                    <DeleteButton onClick={handleDelete}>회원 탈퇴</DeleteButton>
                </InfoGroup>

                <ButtonGroup>
                    <UpdateButton onClick={handleUpdate}>정보 수정</UpdateButton>
                    <CancelButton onClick={handleCancel}>취소</CancelButton>
                </ButtonGroup>
            </FormWrapper>
        </Container>
    );
};

export default MyInfo;