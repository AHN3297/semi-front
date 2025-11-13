import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #ffffff, #dbeafe);
`;

export const Sidebar = styled.aside`
  width: 270px;
  padding: 40px 32px;
  border-right: 1px solid #e0e0e0;
`;

export const KeywordsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const KeywordsTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin: 0;
`;

export const SelectedTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #666;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  line-height: 1;

  &:hover {
    color: #000;
  }
`;

export const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #000;
`;

export const CheckboxLabel = styled.label`
  font-size: 15px;
  color: #333;
  cursor: pointer;
  user-select: none;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 40px;
`;

export const SearchBar = styled.div`
  position: relative;
  max-width: 400px;
  margin-bottom: 40px;
  margin-left: auto;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 1px solid #ddd;
  border-radius: 24px;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-color: #999;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #666;
  pointer-events: none;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s;
  background: white;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #d9d9d9;
`;

export const CardCategory = styled.div`
  padding: 16px 16px 8px;
  font-size: 13px;
  color: #666;
  font-weight: 500;
`;

export const CardTitle = styled.h4`
  padding: 0 16px 16px;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  line-height: 1.4;
`;