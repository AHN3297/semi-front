import styled from "styled-components";

export const SubContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 20px;
`;

export const Form = styled.form`
  background-color: #fff;
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
  text-align: center;
`;

export const Input = styled.input`
  padding: 12px 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #93c5fd;
    box-shadow: 0 0 5px #93c5fd;
  }
`;

export const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: #93c5fd;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #93c5fd;
  }
`;