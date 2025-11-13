import React, { useState } from 'react';
import { Container } from '../../Styles/Styles';
import {
  FormWrapper,
  Title,
  Subtitle,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  SubmitButton,
  CancelButton,
  LisenceButton
} from './Join.styles';
import { useNavigate } from 'react-router-dom';

const Join = () => {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        name: '',
        nickName: '',
        email: '',
        address: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('회원가입 데이터:', formData);
        alert('회원가입이 완료되었습니다!');
    };

    const handleCancel = () => {
        setFormData({
        id: '',
        password: '',
        name: '',
        nickName: '',
        email: '',
        address: '',
        phone: ''
        });
    };
    const handleLisence = () =>{
            alert("운전면허인증페이지로 넘어갑니다!");
            navigate("/lisence");
        
        };

    return (
        <Container>
        <FormWrapper>
            <Title>회원가입</Title>
            <Subtitle>Join Us!</Subtitle>

            <FormGroup>
            <Label>ID*</Label>
            <Input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                placeholder="아이디를 입력해주세요"
            />
            </FormGroup>

            <FormGroup>
            <Label>Password*</Label>
            <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="비밀번호를 입력해주세요"
            />
            </FormGroup>

            <FormGroup>
            <Label>Name*</Label>
            <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="이름을 입력해 주세요"
            />
            </FormGroup>

            <FormGroup>
            <Label>Nick Name*</Label>
            <Input
                type="text"
                name="nickName"
                value={formData.nickName}
                onChange={handleChange}
                placeholder="닉네임을입력해주세요"
            />
            </FormGroup>

            <FormGroup>
            <Label>Email</Label>
            <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="이메일을 입력해주세요"
            />
            </FormGroup>

            <FormGroup>
            <Label>Address</Label>
            <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="주소를 입력해주세요"
            />
            </FormGroup>

            <FormGroup>
            <Label>Phone*</Label>
            <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="예) 010-1234-1234"
            />
            </FormGroup>

            <ButtonGroup>
            <SubmitButton onClick={handleLisence}>회원가입</SubmitButton>
            <CancelButton onClick={handleCancel}>취소</CancelButton>
            </ButtonGroup>
        </FormWrapper>
        </Container>
    );
 };

export default Join;