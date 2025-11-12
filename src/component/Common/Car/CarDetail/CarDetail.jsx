import React, { useState } from 'react';
import {
  Container,
  ContentWrapper,
  LeftSection,
  ImageSection,
  HeartButton,
  ImagePlaceholder,
  ReserveButton,
  RightSection,
  Title,
  CategoryTag,
  InfoSection,
  InfoText,
  ColorSection,
  ColorLabel,
  ColorDropdown,
  ReserveButtonTop,
  DetailsSection,
  DetailsHeader,
  DetailsTitle,
  ToggleIcon,
  DetailsContent,
} from './CarDetail.styles';

const CarDetail = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState('블랙');
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <Container>
      <ContentWrapper>
        <LeftSection>
          <ImageSection>
            <HeartButton onClick={handleLikeToggle} isLiked={isLiked}>
              ♥
            </HeartButton>
            <ImagePlaceholder />
          </ImageSection>
          <ReserveButton>예약하기</ReserveButton>
        </LeftSection>

        <RightSection>
          <Title>태슬라 모델 X</Title>
          <CategoryTag>태슬라</CategoryTag>
          
          <InfoSection>
            <InfoText>번호판 : 75하 1234</InfoText>
            <InfoText>최대 탑승 인원 : 7인승</InfoText>
          </InfoSection>

          <ColorSection>
            <ColorLabel>색상</ColorLabel>
            <ColorDropdown value={selectedColor} onChange={handleColorChange}>
              <option value="블랙">블랙</option>
              <option value="화이트">화이트</option>
              <option value="실버">실버</option>
              <option value="레드">레드</option>
            </ColorDropdown>
          </ColorSection>

          <ReserveButtonTop>예약 가능</ReserveButtonTop>

          <DetailsSection>
            <DetailsHeader onClick={toggleDetails}>
              <DetailsTitle>차량설명</DetailsTitle>
              <ToggleIcon isOpen={isDetailsOpen}>^</ToggleIcon>
            </DetailsHeader>
            {isDetailsOpen && (
              <DetailsContent>
                화성 가고 싶으면 이것부터 타셈
              </DetailsContent>
            )}
          </DetailsSection>
        </RightSection>
      </ContentWrapper>
    </Container>
  );
};

export default CarDetail;
