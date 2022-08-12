import { useEffect, useRef, useState } from "react";
import { StyledTimeSign } from "./styles/TimeSign.styled";

interface TimeSignProps {
  time: {
    name: "days" | "hours" | "minutes" | "seconds";
    value: number | string;
  };
  times: {
    name: "days" | "hours" | "minutes" | "seconds";
    value: number | string;
  }[];
}

const TimeSign: React.FC<TimeSignProps> = ({ time, times }) => {
  return (
    <StyledTimeSign times={times} data-title={time.name}>
      <header></header>
      <main>{time.value}</main>
      <footer>{time.name}</footer>
    </StyledTimeSign>
  );
};

export default TimeSign;
