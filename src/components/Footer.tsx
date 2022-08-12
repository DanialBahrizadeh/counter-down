import { StyledFooter, IconsList } from "./styles/Footer.styled";
import {
  RiInstagramLine,
  RiPinterestFill,
  RiFacebookBoxFill,
} from "react-icons/ri";
const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <IconsList>
        <li>
          <a href="https:/www.facebook.com">
            <RiFacebookBoxFill />
          </a>
        </li>
        <li>
          <a href="https:/www.pinterest.com">
            <RiPinterestFill />
          </a>
        </li>
        <li>
          <a href="https:/www.instgram.com">
            <RiInstagramLine />
          </a>
        </li>
      </IconsList>
    </StyledFooter>
  );
};

export default Footer;
