import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #1f2937;
  color: white;
  height: 64px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    border-radius: 50%;
  }

  button {
    cursor: pointer;
    padding: 4px;
    width: 100px;
    border-radius: 8px;

    &:hover {
      background-color: blue;
      color: white;
    }
  }
`;
