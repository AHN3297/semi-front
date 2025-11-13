import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
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

const Header = () => {
  const navigate = useNavigate(); 

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
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              EVision
            </Link>
          </Logo>

          <MenuContainer as="ul">
            {menuItems.map((item) => (
              <MenuItem as="li" key={item.id}>
                <MenuButton>{item.title}</MenuButton>
                <Dropdown as="ul">
                  {item.submenu.map((sub, idx) => (
                    <DropdownItem as="li" key={idx}>
                      <Link
                        to={sub.path}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {sub.name}
                      </Link>
                    </DropdownItem>
                  ))}
                </Dropdown>
              </MenuItem>
            ))}
          </MenuContainer>

          <Icons>
            <IconButton
              aria-label="프로필 보기"
              onClick={() => navigate("/login")} 
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </IconButton>
          </Icons>
        </NavContent>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
