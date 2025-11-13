import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
`;

export const FormWrapper = styled.div`
  background: white;
  padding: 50px 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  text-align: center;
  color: #666;
  margin-bottom: 40px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #666;
  }

  &::placeholder {
    color: #ccc;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.2s;
  box-sizing: border-box;
  color: #999;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  margin-top: 30px;

  &:hover {
    opacity: 0.9;
  }
`;