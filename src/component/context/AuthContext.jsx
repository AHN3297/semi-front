import { useState, useEffect, createContext, Children } from "react";
export const AuthContext = createContext();
// 요 컨텍스트를 통해 인증관련 데이터를 하위 컴포넌트에 전달함
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
	    memberNo : null,
	    memberName: null,
	    memberId: null,
	    memberPwd: null,
	    nickname: null,
	    address: null,
	    phone: null,
	    email: null,
	    enrollDate: null,
	    status: null,
	    roleStatus: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
    });
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");
        const memberNo = localStorage.getItem("memberNo");
        const memberId = localStorage.getItem("memberId");
        const memberPwd = localStorage.getItem("memberPwd");
        const nickname = localStorage.getItem("nickname");
        const address = localStorage.getItem("address");
        const phone = localStorage.getItem("phone");
        const email = localStorage.getItem("email");
        const enrollDate = localStorage.getItem("enrollDate");
        const status = localStorage.getItem("status");
        const roleStatus = localStorage.getItem("roleStatus");
        const memberName = localStorage.getItem("memberName");
        const role = localStorage.getItem("role");
        if (accessToken && refreshToken && memberId && memberName && role && memberNo && memberPwd && nickname && address && phone && email && enrollDate && status && roleStatus) {
            setAuth({
	            memberNo,
	            memberName,
	            memberId,
	            memberPwd,
	            nickname,
	            address,
	            phone,
	            email,
	            enrollDate,
	            status,
	            roleStatus,
                accessToken,
                refreshToken,
                isAuthenticated: true,
            });
        }
    }, []);
    // 로그인에 성공했을 때 수행할 함수
    const login = (memberNo,memberName, memberId, memberPwd, nickname, address, phone, email, enrollDate, status, accessToken, refreshToken, role) => {
        setAuth({
	            memberNo,
	            memberName,
	            memberId,
	            memberPwd,
	            nickname,
	            address,
	            phone,
	            email,
	            enrollDate,
	            status,
	            roleStatus,
                accessToken,
                refreshToken,
                isAuthenticated: true,
        });
        localStorage.setItem("memberNo", memberNo);
        localStorage.setItem("memberName", memberName);
        localStorage.setItem("memberId", memberId);
        localStorage.setItem("memberPwd", memberPwd);
        localStorage.setItem("nickname", nickname);
        localStorage.setItem("address", address);
        localStorage.setItem("phone", phone);
        localStorage.setItem("email", email);
        localStorage.setItem("enrolldate", enrollDate);
        localStorage.setItem("status", status);
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("role", role);
    };
    const logout = () => {
        setAuth({
	            memberNo : null,
	            memberName: null,
	            memberId: null,
	            memberPwd: null,
	            nickname: null,
	            address: null,
	            phone: null,
	            email: null,
	            enrollDate: null,
	            status: null,
	            roleStatus: null,
                accessToken: null,
                refreshToken: null,
                isAuthenticated: false,
        });
        localStorage.setItem("memberNo");
        localStorage.setItem("memberName");
        localStorage.setItem("memberId");
        localStorage.setItem("memberPwd");
        localStorage.setItem("nickname");
        localStorage.setItem("address");
        localStorage.setItem("phone");
        localStorage.setItem("email");
        localStorage.setItem("enrolldate");
        localStorage.setItem("status");
        localStorage.setItem("accessToken");
        localStorage.setItem("refreshToken");
        localStorage.setItem("role");
        window.location.href = "/";
    };
    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};










