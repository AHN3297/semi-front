import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px; /* 헤더 영역과 동일한 폭 */
  margin: 0 auto; /* 중앙 정렬 */
  min-height: 100vh;
  background-color: #fff;
  padding: 60px 20px; /* 좌우 여백 줄이기 */
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 80px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImageSection = styled.div`
  position: relative;
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
`;

export const HeartButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${props => props.isLiked ? '#ff4444' : '#333'};
  color: #fff;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  z-index: 10;

  &:hover {
    background-color: ${props => props.isLiked ? '#cc0000' : '#000'};
  }
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  background-color: #d9d9d9;
`;

export const ReserveButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #2a2a2a;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #000;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin: 0;
`;

export const CategoryTag = styled.span`
  display: inline-block;
  padding: 6px 16px;
  background-color: #e8f5e9;
  color: #2e7d32;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

export const InfoText = styled.p`
  font-size: 15px;
  color: #666;
  margin: 0;
`;

export const ColorSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
`;

export const ColorLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

export const ColorDropdown = styled.select`
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 15px;
  background-color: #fff;
  cursor: pointer;
  outline: none;

  &:hover {
    border-color: #999;
  }

  &:focus {
    border-color: #666;
  }
`;

export const ReserveButtonTop = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 12px;

  &:hover {
    background-color: #357abd;
  }
`;

export const DetailsSection = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 12px;
`;

export const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: #fafafa;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const DetailsTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin: 0;
`;

export const ToggleIcon = styled.span`
  font-size: 20px;
  color: #666;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.2s;
`;

export const DetailsContent = styled.div`
  padding: 20px;
  background-color: #fff;
  font-size: 15px;
  color: #666;
  line-height: 1.6;
`;
