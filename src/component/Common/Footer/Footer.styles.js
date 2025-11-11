// src/components/Footer/Footer.styles.js
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 3rem 0;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const FooterTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterListItem = styled.li`
  font-size: 0.9rem;
  color: #9ca3af;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

export const FooterDivider = styled.div`
  border-top: 1px solid #1f2937;
  padding-top: 2rem;
`;

export const FooterCopyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #6b7280;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const CopyrightText = styled.div`
  font-size: 0.875rem;
  color: #9ca3af;
`;
