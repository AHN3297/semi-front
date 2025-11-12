import React, { useState } from "react";
import { Search, Plus, TrendingUp, MessageSquare, Eye, Filter, Clock, ThumbsUp } from "lucide-react";
import * as S from "../Styles/Styles"; 

export default function BoardList() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const posts = [
    {
      id: 1,
      title: "테슬라 모델 3 장거리 주행 후기",
      content: "서울에서 부산까지 다녀왔는데 충전 인프라가 생각보다 잘 되어있더라구요...",
      author: "EV러버",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
      category: "후기",
      likes: 42,
      comments: 18,
      views: 256,
      time: "2시간 전",
      isHot: true
    },
    {
      id: 2,
      title: "전기차 충전 요금 할인 팁 공유합니다",
      content: "심야 시간대 충전하면 최대 50% 할인되는 거 알고 계셨나요?",
      author: "충전마스터",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
      category: "정보",
      likes: 87,
      comments: 31,
      views: 512,
      time: "5시간 전",
      isHot: true
    }
    // 필요하면 더 추가
  ];

  const categories = ["all", "정보", "질문", "후기", "자유"];

  const filteredPosts = posts.filter(post => {
    const matchesFilter = activeFilter === "all" || post.category === activeFilter;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <S.Container>
      {/* Search */}
      <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center" }}>
        <Search size={20} style={{ marginRight: "0.5rem", color: "#888" }} />
        <input
          type="text"
          placeholder="게시글 검색..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{
            flex: 1,
            padding: "10px 15px",
            borderRadius: "1rem",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "14px"
          }}
        />
      </div>

      {/* Category Filters */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            style={{
              padding: "6px 12px",
              borderRadius: "1rem",
              border: activeFilter === cat ? "none" : "1px solid #ccc",
              background: activeFilter === cat ? "linear-gradient(to right, #3b82f6, #06b6d4)" : "#fff",
              color: activeFilter === cat ? "#fff" : "#333",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 500
            }}
          >
            {cat === "all" ? "전체" : cat}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {filteredPosts.map(post => (
          <div
            key={post.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "1.5rem",
              padding: "1rem",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              cursor: "pointer",
              transition: "all 0.3s",
              background: "#fff"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
              <img
                src={post.avatar}
                alt={post.author}
                style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "0.5rem" }}
              />
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "14px" }}>
                  <strong>{post.author}</strong>
                  <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "2px 6px", borderRadius: "0.5rem" }}>
                    {post.category}
                  </span>
                  {post.isHot && (
                    <span style={{ background: "linear-gradient(to right, #f97316, #ef4444)", color: "#fff", padding: "2px 6px", borderRadius: "0.5rem", display: "flex", alignItems: "center", gap: "2px", fontSize: "12px" }}>
                      <TrendingUp size={12} />
                      HOT
                    </span>
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center", fontSize: "12px", color: "#888", gap: "0.25rem", marginTop: "2px" }}>
                  <Clock size={12} />
                  {post.time}
                </div>
              </div>
            </div>

            <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "0.5rem" }}>{post.title}</h3>
            <p style={{ fontSize: "14px", color: "#555", marginBottom: "0.5rem" }}>{post.content}</p>

            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#555" }}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  <ThumbsUp size={14} /> {post.likes}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  <MessageSquare size={14} /> {post.comments}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "#aaa" }}>
                  <Eye size={14} /> {post.views}
                </div>
              </div>
              <button style={{ color: "#3b82f6", fontWeight: 500 }}>자세히 보기 →</button>
            </div>
          </div>
        ))}

        {filteredPosts.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <Search size={32} style={{ color: "#ccc", marginBottom: "1rem" }} />
            <p style={{ fontSize: "16px", color: "#555" }}>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </S.Container>
  );
}
