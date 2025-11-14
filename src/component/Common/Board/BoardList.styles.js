import styled from "styled-components";

/* 게시판 전체 영역 */
export const BoardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

/* 헤더 */
export const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111;
  margin: 0 0 0.5rem 0;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

/* 검색 및 필터 영역 */
export const SearchFilterWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FilterSelect = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.95rem;
  background: white;
  cursor: pointer;
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 3rem 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.95rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
  
  &::placeholder {
    color: #999;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #3b82f6;
  }
`;

/* 게시글 리스트 */
export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const PostItem = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const PostImage = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
  background: #f3f4f6;
  
  @media (max-width: 600px) {
    width: 100%;
    height: 150px;
  }
`;

export const PostContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CategoryBadge = styled.span`
  background: #e0f2fe;
  color: #0369a1;
  padding: 3px 8px;
  border-radius: 0.5rem;
  font-size: 12px;
  font-weight: 500;
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: #666;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;


export const AuthorName = styled.span`
  font-size: 0.875rem;
  color: #666;
`;

export const TimeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: #999;
`;

export const PostTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111;
  margin: 0;
`;

export const PostDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

/* 통계 영역 */
export const StatsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #f3f4f6;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

/* 페이지네이션 */
export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;
  flex-wrap: wrap;
`;

export const PageButton = styled.button`
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  color: #666;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
  
  &:hover {
    background: #f9fafb;
    border-color: #3b82f6;
    color: #3b82f6;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PageNumber = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.$active ? '#111' : 'white'};
  border: 1px solid ${props => props.$active ? '#111' : '#e5e7eb'};
  border-radius: 4px;
  color: ${props => props.$active ? 'white' : '#666'};
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
  
  &:hover {
    background: ${props => props.$active ? '#111' : '#f9fafb'};
    border-color: ${props => props.$active ? '#111' : '#3b82f6'};
    color: ${props => props.$active ? 'white' : '#3b82f6'};
  }
`;

export const PageDots = styled.span`
  padding: 0.5rem;
  color: #999;
`;

/* 빈 상태 */
export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 0;
  
  p {
    font-size: 1rem;
    color: #6b7280;
  }
`;