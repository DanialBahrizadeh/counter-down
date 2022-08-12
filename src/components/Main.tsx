import { StyledMain } from "./styles/Main.styled";
import {
  addYears,
  isPast,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  addHours,
  addMinutes,
  differenceInSeconds,
  addSeconds,
} from "date-fns";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import TimeSign from "./TimeSign";
const Main: React.FC = () => {
  const getMyBirthday = (): Date => {
    const date = new Date(`${new Date().getFullYear()}-9-18`);

    if (!isPast(date)) {
      return date;
    }

    return addYears(date, 1);
  };
  const timeLeft = () => {
    const date = new Date();
    const myBirthday = getMyBirthday();
    const days = differenceInDays(myBirthday, date);
    const hours = differenceInHours(myBirthday, addHours(date, days * 24));
    const minutes = differenceInMinutes(
      myBirthday,
      addMinutes(date, (days * 24 + hours) * 60)
    );
    const seconds = differenceInSeconds(
      myBirthday,
      addSeconds(date, ((days * 24 + hours) * 60 + minutes) * 60)
    );
    return [
      { name: "days", value: String(days).length >= 2 ? days : `0${days}` },
      { name: "hours", value: String(hours).length >= 2 ? hours : `0${hours}` },
      {
        name: "minutes",
        value: String(minutes).length >= 2 ? minutes : `0${minutes}`,
      },
      {
        name: "seconds",
        value: String(seconds).length >= 2 ? seconds : `0${seconds}`,
      },
    ];
  };

  type Time = {
    name: "days" | "hours" | "minutes" | "seconds";
    value: number | string;
  };

  const [time, setTime] = useState(timeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(timeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeElements = time.map((tim) => (
    <TimeSign key={nanoid()} time={tim as Time} times={time as Time[]} />
  ));

  return <StyledMain>{timeElements}</StyledMain>;
};

export default Main;
