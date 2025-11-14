import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css'; // import해야 할 수 있음
import { Container } from '../../Styles/Styles';
import {
  FormWrapper,
  Title,
  Subtitle,
  FormGroup,
  Label,
  Input,
  Select,
  SubmitButton,
  SkipButton,
  CustomDatePicker
} from './Lisence.styles';


const LicenseCertification = () => {
  const [formData, setFormData] = useState({
    licenseNumber: '',
    issueDate: null,
    issuer: '',
    licenseType: '1종 보통',
  });

  const licenseTypes = [
    '1종 대형',
    '1종 보통',
    '1종 특수',
    '2종 보통',
    '2종 소형',
    '2종 원동기',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      issueDate: date,
    }));
  };

  const handleSubmit = () => {
    console.log('운전면허 인증 데이터:', formData);
    alert('운전면허 인증이 완료되었습니다!');
  };

  const handleSkip = () => {
    alert('차량 예약 시 운전면허 인증을 해야 합니다.');
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
          <CustomDatePicker
            selected={formData.issueDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            placeholderText="날짜 선택하기"
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
            {licenseTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </FormGroup>

        <SubmitButton onClick={handleSubmit}>인증하기</SubmitButton>
        <SkipButton onClick={handleSkip}>건너뛰기</SkipButton>

        <p
          style={{
            color: '#6b7280',
            fontSize: '13px',
            marginTop: '8px',
            textAlign: 'center',
            lineHeight: '1.5',
          }}
        >
          운전면허 인증을 하지 않아도 회원가입이 가능합니다!<br />
          (차량 예약 시 운전면허 인증이 필요합니다.)
        </p>
      </FormWrapper>
    </Container>
  );
};

export default LicenseCertification;
