import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const Header = styled.div`
  width: 100%;
  background-color: #e8e8e8;
  padding: 80px 0;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 8px;
  color: #000;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin: 0;
`;

export const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
`;

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
`;

export const SearchLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  white-space: nowrap;
`;

export const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 300px;
  font-size: 14px;
  color: #666;
  cursor: pointer;

  &:hover {
    border-color: #999;
  }
`;

export const ClearButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #999;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;

  &:hover {
    color: #333;
  }
`;

export const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 60px;
`;

export const NoticeCard = styled.div`
  display: flex;
  gap: 24px;
  padding: 32px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ImagePlaceholder = styled.div`
  width: 140px;
  height: 140px;
  background-color: #d9d9d9;
  border-radius: 4px;
  flex-shrink: 0;
`;

export const NoticeContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NoticeTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin: 0;
`;

export const NoticeBody = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin: 0;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  background: none;
  border: none;
  font-size: 14px;
  color: ${props => props.disabled ? '#ccc' : '#666'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: ${props => props.disabled ? '#ccc' : '#000'};
  }
`;

export const PageNumber = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background-color: ${props => props.active ? '#000' : 'transparent'};
  color: ${props => props.active ? '#fff' : '#666'};
  border: none;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.active ? '#000' : '#f0f0f0'};
  }
`;

export const Ellipsis = styled.span`
  padding: 0 8px;
  color: #666;
  font-size: 14px;
`;