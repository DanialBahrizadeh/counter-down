import styled, { StyledComponent } from "styled-components";

const Container: StyledComponent<"div", any> = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("./images/pattern-hills.svg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Container;
