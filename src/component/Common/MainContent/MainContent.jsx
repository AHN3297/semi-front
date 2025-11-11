// src/components/Main/MainContent.jsx
import React from "react";
import {
  Wrapper,
  Container,
  Grid,
  ImageSection,
  Placeholder,
  PlaceholderCircle,
  ContentSection,
  Badge,
  BadgeText,
  Title,
  Subtitle,
  SubtitleText,
  Button,
} from "./MainContent.styles";

const MainContent = () => {
  return (
    <Wrapper>
      <Container>
        <Grid>
          {/* Left Side - Image */}
          <ImageSection>
            <Placeholder>
              <PlaceholderCircle>
                <svg
                  width="128"
                  height="128"
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
              </PlaceholderCircle>
              <p style={{ color: "#4B5563", fontSize: "0.875rem", textAlign: "center" }}>
                ▲팀장님임
              </p>
            </Placeholder>
          </ImageSection>

          {/* Right Side - Content */}
          <ContentSection>
            <Badge>
              <BadgeText>임시메인페이지</BadgeText>
            </Badge>
            <Title>EVision</Title>
            <Subtitle>
              <SubtitleText>세상에 새롭게 태어난</SubtitleText>
              <SubtitleText>평균 나이 30대의 젊은 피가 간다!</SubtitleText>
            </Subtitle>
            <Button>더 알아보지않기</Button>
          </ContentSection>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default MainContent;
