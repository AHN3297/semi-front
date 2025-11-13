import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 40px 20px;
`;

export const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 40px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: flex-start;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ImagePreviewArea = styled.div`
  width: 100%;
  height: 400px;
  background-color: #fff;
  border: 2px dashed #ddd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NoImageText = styled.p`
  color: #999;
  font-size: 16px;
`;

export const AddImageButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`;

export const RightSection = styled.div`
  flex: 1;
`;

export const FormWrapper = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
`;

export const FormGroup = styled.div`
  margin-bottom: 24px;
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
    border-color: #4CAF50;
  }

  &::placeholder {
    color: #999;
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

  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background-color: #e8f5e9;
  color: #2e7d32;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const InfoText = styled.p`
  font-size: 13px;
  color: #666;
  margin: 4px 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 30px;
`;

const Button = styled.button`
  flex: 1;
  padding: 14px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const RegisterButton = styled(Button)`
  background-color: #4285f4;
  color: white;
`;

export const CancelButton = styled(Button)`
  background-color: #f44336;
  color: white;
`;

export const Section = styled.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const SectionContent = styled.p`
  font-size: 13px;
  color: #666;
  margin: 8px 0 0 0;
`;

export const Arrow = styled.span`
  font-size: 18px;
  color: #666;
  transform: ${props => props.$expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.2s;
`;