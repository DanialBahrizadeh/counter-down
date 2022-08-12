import styled from "styled-components";

interface StyledTimeSignProps {
  "data-title": string;
  times: {
    name: "days" | "hours" | "minutes" | "seconds";
    value: number | string;
  }[];
}

const circleWidth = 12;
export const StyledTimeSign = styled.div<StyledTimeSignProps>`
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
  }

  &::before {
    animation: ${(props) => {
      const seconds = props.times.find((time) => time.name === "seconds");
      const minutes = props.times.find((time) => time.name === "minutes");
      const hours = props.times.find((time) => time.name === "hours");
      if (props["data-title"] === "seconds") {
        return "endpage 1s";
      }
      if (props["data-title"] === "minutes" && seconds?.value === "00") {
        return "endpage 1s";
      }
      if (
        props["data-title"] === "hours" &&
        minutes?.value === "00" &&
        seconds?.value === "00"
      ) {
        return "endpage 1s";
      }
      if (
        props["data-title"] === "days" &&
        hours?.value === "00" &&
        minutes?.value === "00" &&
        seconds?.value === "00"
      ) {
        return "endpage 1s";
      }
      return "";
    }};
  }

  header,
  &::before,
  &::after {
    background-color: hsl(240, 21%, 22%);
    width: 100%;
    height: 50%;
    position: absolute;
    z-index: -1;
    bottom: 50%;
    border-radius: 0.25rem;
    box-shadow: 0 0 0 1px rgba(44, 44, 68, 0.05);
  }

  &::after {
    background-color: hsl(236, 21%, 26%);
    bottom: 1px;
    transform: rotateX(15deg);
    box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.3);
  }

  header,
  &::before {
    transform: rotateX(-15deg);
  }

  header {
  }

  main {
    color: hsl(345, 95%, 68%);
    font-size: 4rem;
    z-index: 9999;
    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: ${circleWidth}px;
      height: ${circleWidth / 2}px;
      border-top-left-radius: ${circleWidth / 2}px;
      border-top-right-radius: ${circleWidth / 2}px;
      border-bottom: 0;
      background-color: hsl(234, 17%, 12%);
      top: 50%;
      z-index: 999;
    }

    &::before {
      right: -9px;
      transform: translate(-50%, -50%) rotate(-90deg);
    }

    &::after {
      left: 3px;
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }

  footer {
    text-transform: uppercase;
    color: hsl(237, 18%, 59%);
    letter-spacing: 0.4rem;
    width: 100%;
    text-align: center;
    align-self: flex-end;
    position: absolute;
    bottom: -2.5rem;
  }
`;
