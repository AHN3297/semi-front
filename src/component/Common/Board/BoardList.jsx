import React, { useState } from "react";
import { Search, MessageSquare, Eye, Clock, ThumbsUp } from "lucide-react";
import { Container } from "../Styles/Styles";
import * as S from "./BoardList.styles";

export default function BoardList() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const posts = [
    {
      id: 1,
      title: "테슬라 모델 3 장거리 주행 후기",
      content: "서울에서 부산까지 다녀왔는데 충전 인프라가 생각보다 잘 되어있더라구요. 고속도로 휴게소마다 급속충전기가 있어서 편하게 다녀왔습니다.",
      author: "EV러버",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=200&h=150&fit=crop",
      category: "후기",
      views: 256,
      time: "2시간 전"
    },
    {
      id: 2,
      title: "전기차 충전 요금 할인 팁 공유합니다",
      content: "심야 시간대 충전하면 최대 50% 할인되는 거 알고 계셨나요? 밤 11시부터 아침 7시까지 충전하면 엄청 저렴해요!",
      author: "충전마스터",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=200&h=150&fit=crop",
      category: "정보",
      views: 512,
      time: "5시간 전"
    },
    {
      id: 3,
      title: "겨울철 전기차 배터리 관리 어떻게 하시나요?",
      content: "요즘 추워져서 주행거리가 확 줄더라구요. 좋은 방법 있을까요? 히터 때문에 배터리 소모가 심한 것 같아요.",
      author: "겨울운전자",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=200&h=150&fit=crop",
      category: "질문",
      views: 189,
      time: "1일 전"
    },
    {
      id: 4,
      title: "전기차 보조금 신청 완료했어요!",
      content: "생각보다 절차가 간단하더라구요. 필요하신 분들 참고하세요. 서류 준비만 잘하면 금방 끝나요.",
      author: "행복한오너",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=150&fit=crop",
      category: "정보",
      views: 342,
      time: "1일 전"
    },
    {
      id: 5,
      title: "오늘 드라이브 코스 추천해요",
      content: "제주도 해안도로 달리는데 전기차로 너무 좋네요. 조용하고 부드러운 승차감이 최고입니다!",
      author: "여행러버",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&h=150&fit=crop",
      category: "자유",
      views: 156,
      time: "2일 전"
    }
  ];

  const categories = ["all", "정보", "질문", "후기", "자유"];

  const filteredPosts = posts.filter(post => {
    const matchesFilter = activeFilter === "all" || post.category === activeFilter;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalPages = 88;
  const pageNumbers = [];
  
  if (currentPage <= 3) {
    pageNumbers.push(1, 2, 3, '...', 87, 88);
  } else if (currentPage >= totalPages - 2) {
    pageNumbers.push(1, 2, '...', 86, 87, 88);
  } else {
    pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', 88);
  }

  return (
    <Container>
      <S.BoardListWrapper>
        <S.Header>
          <S.Title>커뮤니티 게시판</S.Title>
          <S.Subtitle>community board</S.Subtitle>
        </S.Header>

        {/* Search and Filter */}
        <S.SearchFilterWrapper>
          <S.FilterSelect value={activeFilter} onChange={(e) => setActiveFilter(e.target.value)}>
            <option value="all">전체</option>
            {categories.filter(cat => cat !== "all").map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </S.FilterSelect>
          
          <S.SearchInputWrapper>
            <S.SearchInput
              type="text"
              placeholder="게시글 검색..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <S.SearchButton>
              <Search size={18} />
            </S.SearchButton>
          </S.SearchInputWrapper>
        </S.SearchFilterWrapper>

        {/* Posts List */}
        <S.PostList>
          {filteredPosts.map(post => (
            <S.PostItem key={post.id}>
              <S.PostImage src={post.image} alt={post.title} />
              <S.PostContent>
                <S.PostHeader>
                  <S.BadgeWrapper>
                    <S.CategoryBadge>{post.category}</S.CategoryBadge>
                  </S.BadgeWrapper>
                  <S.PostMeta>
                    <S.AuthorInfo>
                      <S.AuthorName>{post.author}</S.AuthorName>
                    </S.AuthorInfo>
                    <S.TimeInfo>
                      <Clock size={12} />
                      {post.time}
                    </S.TimeInfo>
                  </S.PostMeta>
                </S.PostHeader>
                
                <S.PostTitle>{post.title}</S.PostTitle>
                <S.PostDescription>{post.content}</S.PostDescription>
                
                <S.StatsWrapper>
                  <S.StatItem>
                    <Eye size={14} /> {post.views}
                  </S.StatItem>
                </S.StatsWrapper>
              </S.PostContent>
            </S.PostItem>
          ))}
        </S.PostList>

        {/* Pagination */}
        {filteredPosts.length > 0 && (
          <S.Pagination>
            <S.PageButton onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}>
              ← Previous
            </S.PageButton>
            
            {pageNumbers.map((num, idx) => (
              typeof num === 'number' ? (
                <S.PageNumber
                  key={idx}
                  $active={currentPage === num}
                  onClick={() => setCurrentPage(num)}
                >
                  {num}
                </S.PageNumber>
              ) : (
                <S.PageDots key={idx}>...</S.PageDots>
              )
            ))}
            
            <S.PageButton onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}>
              Next →
            </S.PageButton>
          </S.Pagination>
        )}

        {filteredPosts.length === 0 && (
          <S.EmptyState>
            <Search size={48} style={{ color: "#d1d5db", marginBottom: "1rem" }} />
            <p>검색 결과가 없습니다.</p>
          </S.EmptyState>
        )}
      </S.BoardListWrapper>
    </Container>
  );
}