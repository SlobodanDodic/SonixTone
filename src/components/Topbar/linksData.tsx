import { ImHome } from "react-icons/im";
import { FaHeartBroken } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";

const linkStyle = { fontSize: "1.15rem", opacity: "67%", color: "black" };

export const linksData = [
  {
    icon: <ImHome style={linkStyle} />,
    title: "Home",
    description: "See'em all!",
    href: "/",
  },
  {
    icon: <FaHeartBroken style={linkStyle} />,
    title: "Ads",
    description: "Don't need!",
    href: "/",
  },
  {
    icon: <AiFillMessage style={linkStyle} />,
    title: "Messages",
    description: "Let's talk!",
    href: "/",
  },
  {
    icon: <BsFillSuitHeartFill style={linkStyle} />,
    title: "I Want",
    description: "One of these days!",
    href: "/",
  },
];
