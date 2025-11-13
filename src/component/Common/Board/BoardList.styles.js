import styled from "styled-components";

/* 게시판 전체 영역  */
export const BoardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 1.5rem;
`;

/* 게시판 전체 그리드 */
export const BoardOuter = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  flex-direction: column;
  @media (min-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

/* 개별 카드 */
export const Board = styled.div`
  background: linear-gradient(145deg, #ffffff, #f0f4f8);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  display: flex;
  flex-direction: column; /* 카드 내부 세로 정렬 */
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0,0,0,0.2);
  }
`;

/* 카드 이미지 */
export const BoardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

/* 카드 내용 영역 */
export const BoardContent = styled.div`
  padding: 12px 15px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

/* 글 제목 */
export const BoardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0;
  line-height: 1.3;
`;

/* 작성자 */
export const BoardWriter = styled.span`
  font-size: 13px;
  color: #6b7280;
`;

/* 작성일 */
export const CreateDate = styled.span`
  font-size: 12px;
  color: #9ca3af;
`;