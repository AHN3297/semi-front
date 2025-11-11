import styled from "styled-components";

export const StyledHeader = styled.header`
  background: black;
  color: white;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const MenuItem = styled.li`
  position: relative;
`;

export const MenuButton = styled.button`
  font-size: 0.9rem;
  color: white;
  padding: 0.5rem 0;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #d1d5db; /* gray-300 */
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.5rem;
  width: 12rem;
  background: white;
  color: black;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;

  ${MenuItem}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const DropdownItem = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  text-decoration: none;
  color: black;
  transition: background 0.2s;

  &:hover {
    background: #f3f4f6; /* gray-100 */
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #d1d5db; /* gray-300 */
  }
`;
