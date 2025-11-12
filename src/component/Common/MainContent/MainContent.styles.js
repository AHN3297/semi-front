import styled from "styled-components";

// Wrapper
export const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #ffffffff, #dbeafe);
`;

// Container
export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
`;

// Grid
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// Image Section
export const ImageSection = styled.div`
  position: relative;
  height: 600px;
  border-radius: 1.5rem;
  overflow: hidden;
  background: linear-gradient(to bottom right, #bfdbfe, #93c5fd);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Placeholder
export const Placeholder = styled.div`
  text-align: center;
`;

// Placeholder Circle
export const PlaceholderCircle = styled.div`
  width: 16rem;
  height: 16rem;
  background-color: #9ca3af;
  border-radius: 9999px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Content Section
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// Badge
export const Badge = styled.span`
  display: inline-block;
`;

// Badge Text
export const BadgeText = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

// Title
export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
`;

// Subtitle
export const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

// Subtitle Text
export const SubtitleText = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;

// Button
export const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #111;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;
