import styled from "styled-components";
export const StyledFooter = styled.footer`
  color: hsl(236, 21%, 26%);
  font-size: 1.3rem;
  width: 100%;
  height: ${({ theme }) => {
    return (1 / theme.grid) * 100 + "%";
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconsList = styled.ul`
  display: flex;
  list-style: none;
  column-gap: 15px;

  li a {
    color: hsl(237, 18%, 59%);

    &:hover {
      color: hsl(345, 95%, 68%);
    }
  }
`;
