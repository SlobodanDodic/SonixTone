import { ImHome } from "react-icons/im";
import { MdAccountBox } from "react-icons/md";
import { AiFillPlusSquare } from "react-icons/ai";
import { FaArrowsSpin } from "react-icons/fa6";

const linkStyle = { fontSize: "1.15rem", opacity: "67%", color: "black" };

export const linksData = [
  {
    icon: <ImHome style={linkStyle} />,
    title: "Home",
    description: "See'em all!",
    href: "/",
  },
  {
    icon: <MdAccountBox style={linkStyle} />,
    title: "My Account",
    description: "Fine tunings!",
    href: "/",
  },
  {
    icon: <AiFillPlusSquare style={linkStyle} />,
    title: "Post an Ad",
    description: "It'was mine!",
    href: "/",
  },
  {
    icon: <FaArrowsSpin style={linkStyle} />,
    title: "Cash Flow",
    description: "Spin around!",
    href: "/",
  },
];
