import React, { useState } from 'react';
import {
  Container,
  PageTitle,
  ContentWrapper,
  LeftSection,
  ImagePreviewArea,
  PreviewImage,
  NoImageText,
  AddImageButton,
  RightSection,
  FormWrapper,
  Title,
  FormGroup,
  Label,
  Input,
  Select,
  Badge,
  InfoText,
  ButtonGroup,
  RegisterButton,
  CancelButton,
  Section,
  SectionHeader,
  SectionTitle,
  SectionContent,
  Arrow
} from './SaveCar.styles';

const SaveCar = () => {
  const [formData, setFormData] = useState({
    carName: '',
    manufacturer: '테슬라',
    plateNumber: '',
    color: '',
    maxPassengers: '7'
  });

  const [expanded, setExpanded] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const manufacturers = [
    '테슬라',
    '현대',
    '기아',
    '제네시스',
    'BMW',
    '벤츠',
    '아우디',
    '폭스바겐',
    '토요타',
    '렉서스'
  ];

  const passengerOptions = ['2', '4', '5', '7', '8', '9', '12', '15'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log('차량 등록 데이터:', formData);
    console.log('이미지:', previewImage);
    alert('차량이 등록되었습니다!');
  };

  const handleCancel = () => {
    setFormData({
      carName: '',
      manufacturer: '테슬라',
      plateNumber: '',
      color: '',
      maxPassengers: '7'
    });
    setPreviewImage(null);
  };

  return (
    <Container>
      <PageTitle>차량 등록</PageTitle>
      
      <ContentWrapper>
        <LeftSection>
          <ImagePreviewArea>
            {previewImage ? (
              <PreviewImage src={previewImage} alt="차량 미리보기" />
            ) : (
              <NoImageText>이미지를 추가해주세요</NoImageText>
            )}
          </ImagePreviewArea>
          <AddImageButton as="label">
            이미지 추가하기
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </AddImageButton>
        </LeftSection>

        <RightSection>
          <FormWrapper>
            
            
            <div>
              
              <FormGroup>
                <Label>차량명</Label>
                <Input
                  type="text"
                  name="carName"
                  value={formData.carName}
                  onChange={handleChange}
                  placeholder="차량명을 입력하세요"
                />
              </FormGroup>

              <FormGroup>
                <Label>제조사</Label>
                <Select 
                  name="manufacturer"
                  value={formData.manufacturer}
                  onChange={handleChange}
                >
                  {manufacturers.map(manufacturer => (
                    <option key={manufacturer} value={manufacturer}>
                      {manufacturer}
                    </option>
                  ))}
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>차량 번호</Label>
                <Input
                  type="text"
                  name="plateNumber"
                  value={formData.plateNumber}
                  onChange={handleChange}
                  placeholder="예: 75하 1234"
                />
              </FormGroup>

              <FormGroup>
                <Label>색상</Label>
                <Input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  placeholder="차량 색상을 입력하세요"
                />
              </FormGroup>

              <FormGroup>
                <Label>최대 탑승 인원</Label>
                <Select
                  name="maxPassengers"
                  value={formData.maxPassengers}
                  onChange={handleChange}
                >
                  {passengerOptions.map(option => (
                    <option key={option} value={option}>
                      {option}인승
                    </option>
                  ))}
                </Select>
              </FormGroup>

              <Section onClick={() => setExpanded(!expanded)}>
                <SectionHeader>
                  <SectionTitle>차량설명</SectionTitle>
                  <Arrow $expanded={expanded}>^</Arrow>
                </SectionHeader>
                {expanded && (
                  <SectionContent>
                    회색 가구 실으면 이것부터 타셈
                  </SectionContent>
                )}
              </Section>

              <ButtonGroup>
                <RegisterButton onClick={handleSubmit}>등록하기</RegisterButton>
                <CancelButton onClick={handleCancel}>취소</CancelButton>
              </ButtonGroup>
            </div>
          </FormWrapper>
        </RightSection>
      </ContentWrapper>
    </Container>
  );
};

export default SaveCar;