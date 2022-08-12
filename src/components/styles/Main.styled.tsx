import styled from "styled-components";

export const StyledMain = styled.main`
  height: ${({ theme }) => {
    return (2 / theme.grid) * 100 + "%";
  }};
  display: flex;
  column-gap: 5rem;
  padding-top: 100px;
`;
