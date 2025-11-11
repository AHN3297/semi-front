// src/components/Header/Header.jsx
import React from "react";
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
  const menuItems = [
    { id: "speaker", title: "차량공유", submenu: ["예약하기", "차량 목록",] },
    { id: "headphone", title: "게시판", submenu: ["자유게시판", "공지사항"] },
    { id: "earphone", title: "충전소", submenu: ["충전소 정보", "충전소 리뷰"] },
  ];

  return (
    <StyledHeader>
      <Nav>
        <NavContent>
          <Logo>EVision</Logo>

          <MenuContainer>
            {menuItems.map((item) => (
              <MenuItem key={item.id}>
                <MenuButton>{item.title}</MenuButton>
                <Dropdown>
                  {item.submenu.map((sub, idx) => (
                    <DropdownItem key={idx} href="#">
                      {sub}
                    </DropdownItem>
                  ))}
                </Dropdown>
              </MenuItem>
            ))}
          </MenuContainer>

          <Icons>
            <IconButton>
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
