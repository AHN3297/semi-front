import React, { useState } from 'react';
import {
  Container,
  FormWrapper,
  Title,
  Subtitle,
  FormGroup,
  Label,
  Input,
  Select,
  SubmitButton
} from './Lisence.styles';

const LicenseCertification = () => {
    
  const [formData, setFormData] = useState({
    licenseNumber: '',
    issueDate: '',
    issuer: '',
    licenseType: '1종 보통'
  });

  const licenseTypes = [
    '1종 대형',
    '1종 보통',
    '1종 특수',
    '2종 보통',
    '2종 소형',
    '2종 원동기'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('운전면허 인증 데이터:', formData);
    alert('운전면허 인증이 완료되었습니다!');
  };

  return (
    <Container>
      <FormWrapper>
        <Title>운전면허 인증</Title>
        <Subtitle>License Certification</Subtitle>

        <FormGroup>
          <Label>운전면허번호</Label>
          <Input
            type="text"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            placeholder="Value"
          />
        </FormGroup>

        <FormGroup>
          <Label>갱신기간</Label>
          <Input
            type="text"
            name="issueDate"
            value={formData.issueDate}
            onChange={handleChange}
            placeholder="날짜 선택하기"
            // 이거 날짜 달력으로 만드는거 해야함 공부해가지고 가자
          />
        </FormGroup>
        

        <FormGroup>
          <Label>발급처</Label>
          <Input
            type="text"
            name="issuer"
            value={formData.issuer}
            onChange={handleChange}
            placeholder="Value"
          />
        </FormGroup>

        <FormGroup>
          <Label>면허종류</Label>
          <Select
            name="licenseType"
            value={formData.licenseType}
            onChange={handleChange}
          >
            {licenseTypes.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </FormGroup>

        <SubmitButton onClick={handleSubmit}>인증하기</SubmitButton>
      </FormWrapper>
    </Container>
  );
};

export default LicenseCertification;