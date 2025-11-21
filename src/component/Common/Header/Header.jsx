import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom"; 
import {
  StyledHeader,
  Nav,
  NavContent,
  Logo,
  MenuContainer,
  MenuItem,
  MenuButton,
  Dropdown,
  DropdownItem,
  Icons,
  IconButton,
} from "./Header.styles";
import { AuthContext } from "../../context/AuthContext.jsx";

const Header = () => {
  const navigate = useNavigate();
  const { auth, logout } = useContext(AuthContext);

  const menuItems = [
    {
      id: "car",
      title: "차량공유",
      submenu: [
        { name: "예약하기", path: "/car" },
        { name: "차량등록", path: "/saveCar" }
      ],
    },
    {
      id: "board",
      title: "게시판",
      submenu: [
        { name: "자유게시판", path: "/boardList" },
        { name: "공지사항", path: "/notice" },
      ],
    },
    {
      id: "station",
      title: "충전소",
      submenu: [
        { name: "충전소 정보", path: "/station/info" },
        { name: "충전소 리뷰", path: "/station/review" },
      ],
    },
  ];

  return (
    <StyledHeader>
      <Nav role="navigation" aria-label="메인 내비게이션">
        <NavContent>
          <Logo>
            <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
              EVision
            </NavLink>
          </Logo>

          <MenuContainer as="ul">
            {menuItems.map((item) => (
              <MenuItem as="li" key={item.id}>
                <MenuButton>{item.title}</MenuButton>
                <Dropdown as="ul">
                  {item.submenu.map((sub, idx) => (
                    <DropdownItem as="li" key={idx}>
                      <NavLink
                        to={sub.path}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {sub.name}
                      </NavLink>
                    </DropdownItem>
                  ))}
                </Dropdown>
              </MenuItem>
            ))}
          </MenuContainer>

          <Icons>
            {!auth.isAuthenticated ? (
              <>
                <IconButton onClick={() => navigate("/login")}>로그인</IconButton>
                <IconButton onClick={() => navigate("/join")}>회원가입</IconButton>
              </>
            ) : (
              <>
                <IconButton onClick={() => navigate("/mypage")}>마이페이지</IconButton>
                <IconButton onClick={logout}>로그아웃</IconButton>
              </>
            )}
          </Icons>
        </NavContent>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
