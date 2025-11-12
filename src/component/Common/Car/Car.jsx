import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ 추가
import {
  Container,
  Sidebar,
  KeywordsSection,
  KeywordsTitle,
  SelectedTags,
  Tag,
  RemoveButton,
  CheckboxList,
  CheckboxItem,
  Checkbox,
  CheckboxLabel,
  MainContent,
  SearchBar,
  SearchInput,
  SearchIcon,
  CardGrid,
  Card,
  CardImage,
  CardCategory,
  CardTitle
} from './Car.styles';

const Car = () => {
  const [selectedKeywords, setSelectedKeywords] = useState(['태슬라', '현대', '어떤차']);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate(); 

  const allKeywords = ['태슬라', '현대', '어떤차'];

  const cards = [
    { id: 1, category: '태슬라', title: '키로수도 적고 좋음' },
    { id: 2, category: '현대', title: '국산이라 그런가 산길에 좋음' },
    { id: 3, category: '현대', title: '어쨌든 좋은 차종임' },
    { id: 4, category: '태슬라', title: '화성 갈끄니께' },
    { id: 5, category: '어떤차', title: '중국산 어떤 차라 이거 하지마셈' },
    { id: 6, category: '태슬라', title: '추천함 이거 이유는 없어 배고파도 음료는 없어 목말라도' }
  ];

  const handleRemoveKeyword = (keyword) => {
    setSelectedKeywords(selectedKeywords.filter(k => k !== keyword));
  };

  const handleToggleKeyword = (keyword) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter(k => k !== keyword));
    } else {
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
  };

  const filteredCards = cards.filter(card => 
    selectedKeywords.length === 0 || selectedKeywords.includes(card.category)
  );

  return (
    <Container>
      <Sidebar>
        <KeywordsSection>
          <KeywordsTitle>Keywords</KeywordsTitle>
          
          <SelectedTags>
            {selectedKeywords.map(keyword => (
              <Tag key={keyword}>
                {keyword}
                <RemoveButton onClick={() => handleRemoveKeyword(keyword)}>
                  ×
                </RemoveButton>
              </Tag>
            ))}
          </SelectedTags>

          <CheckboxList>
            {allKeywords.map(keyword => (
              <CheckboxItem key={keyword}>
                <Checkbox
                  type="checkbox"
                  id={keyword}
                  checked={selectedKeywords.includes(keyword)}
                  onChange={() => handleToggleKeyword(keyword)}
                />
                <CheckboxLabel htmlFor={keyword}>
                  {keyword}
                </CheckboxLabel>
              </CheckboxItem>
            ))}
          </CheckboxList>
        </KeywordsSection>
      </Sidebar>

      <MainContent>
        <SearchBar>
          <SearchInput
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <SearchIcon>🔍</SearchIcon>
        </SearchBar>

        <CardGrid>
          {filteredCards.map(card => (
            <Card
              key={card.id}
              onClick={() => navigate(`/carDetail`)} //  클릭 시 이동 후에 #{carNo}넣어야할거임
              style={{ cursor: 'pointer' }} // 클릭 가능 표시
            >
              <CardImage />
              <CardCategory>{card.category}</CardCategory>
              <CardTitle>{card.title}</CardTitle>
            </Card>
          ))}
        </CardGrid>
      </MainContent>
    </Container>
  );
};

export default Car;
