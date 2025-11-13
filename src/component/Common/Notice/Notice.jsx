import React, { useState } from 'react';
import { Container } from '../Styles/Styles';
import {
  Title,
  Subtitle,
  ContentWrapper,
  SearchSection,
  SearchLabel,
  SearchBox,
  ClearButton,
  NoticeList,
  NoticeCard,
  ImagePlaceholder,
  NoticeContent,
  NoticeTitle,
  NoticeBody,
  Pagination,
  PaginationButton,
  PageNumber,
  Ellipsis
} from './Notice.styles';

const Notice = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('제목 + 내용');

  const notices = [
    { id: 1, title: '예약안내', body: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' },
    { id: 2, title: '신고는 이렇게 해주세요!', body: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' },
    { id: 3, title: '게시판이용안내', body: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.' }
  ];

  const totalPages = 68;

  const handleClearSearch = () => {
    setSearchText('');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    
    if (currentPage === 1) {
      pages.push(
        <PageNumber key={1} active={true}>1</PageNumber>,
        <PageNumber key={2} onClick={() => handlePageChange(2)}>2</PageNumber>,
        <PageNumber key={3} onClick={() => handlePageChange(3)}>3</PageNumber>
      );
    }
    
    if (currentPage > 3) {
      pages.push(<Ellipsis key="ellipsis">...</Ellipsis>);
    }
    
    pages.push(
      <PageNumber key={67} onClick={() => handlePageChange(67)}>67</PageNumber>,
      <PageNumber key={68} onClick={() => handlePageChange(68)}>68</PageNumber>
    );
    
    return pages;
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>공지사항</Title>
        <Subtitle>notice</Subtitle>
        <br/><br/><br/><br/>
        <SearchSection>
          <SearchLabel>공지사항</SearchLabel>
          <SearchBox>
            {searchText}
            {searchText && <ClearButton onClick={handleClearSearch}>×</ClearButton>}
          </SearchBox>
        </SearchSection>

        <NoticeList>
          {notices.map((notice) => (
            <NoticeCard key={notice.id}>
              <ImagePlaceholder />
              <NoticeContent>
                <NoticeTitle>{notice.title}</NoticeTitle>
                <NoticeBody>{notice.body}</NoticeBody>
              </NoticeContent>
            </NoticeCard>
          ))}
        </NoticeList>

        <Pagination>
          <PaginationButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            ← Previous
          </PaginationButton>
          {renderPageNumbers()}
          <PaginationButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next →
          </PaginationButton>
        </Pagination>
      </ContentWrapper>
    </Container>
  );
};

export default Notice;