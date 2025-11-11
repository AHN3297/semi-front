// src/components/Footer/Footer.jsx
import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  FooterGrid,
  FooterColumn,
  FooterTitle,
  FooterList,
  FooterListItem,
  FooterDivider,
  FooterCopyright,
  CopyrightText,
} from "./Footer.styles";

const Footer = () => {
  const footerData = {
    support: {
      title: "고객지원",
      items: ["신고하기", "공지사항", "사용 안내"],
    },
    social: {
      title: "공유",
      items: ["전기차 공유", "공유 자유 게시판", "충전소"],
    },
    contact: {
      title: "문의 안내",
      items: [
        { label: "운영 시간", value: "AM 10:00 - PM 6:00" },
        { label: "전화 문의", value: "010-6589-3107" },
        { label: "이메일 문의", value: "s2selyn@gmail.com" },
        { label: "주소", value: "서울특별시 중구 남대문로1가 18 2층" },
      ],
    },
  };

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterGrid>
          {Object.entries(footerData).map(([key, section]) => (
            <FooterColumn key={key}>
              <FooterTitle>{section.title}</FooterTitle>
              <FooterList>
                {section.items.map((item, idx) =>
                  typeof item === "string" ? (
                    <FooterListItem key={idx}>{item}</FooterListItem>
                  ) : (
                    <FooterListItem key={idx} style={{ fontSize: "0.875rem", color: "#9CA3AF", marginBottom: "0.5rem" }}>
                      <span style={{ color: "#6B7280" }}>{item.label}</span>
                      <br />
                      <span style={{ color: "#D1D5DB" }}>{item.value}</span>
                    </FooterListItem>
                  )
                )}
              </FooterList>
            </FooterColumn>
          ))}
        </FooterGrid>

        <FooterDivider>
          <FooterCopyright>
            <div style={{ fontSize: "1.5rem", fontWeight: "700", letterSpacing: "0.1em" }}>EVE</div>
            <CopyrightText>
              Copyright © 2024. EVE All rights reserved.
            </CopyrightText>
          </FooterCopyright>
        </FooterDivider>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
