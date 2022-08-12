import styled from "styled-components";

export const StyledHeader = styled.header`
  height: ${({ theme }) => {
    return (1 / theme.grid) * 100 + "%";
  }};
  display: flex;
  align-items: flex-end;
  h1 {
    color: #fff;
    /* font-size: 1.5rem; */
    letter-spacing: 0.4rem;
    text-transform: uppercase;
  }
`;
