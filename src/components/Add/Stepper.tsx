import React from "react";
import { ImMagnet } from "react-icons/im";
import { IoStar } from "react-icons/io5";
import { RiTrademarkLine } from "react-icons/ri";
import { GiGuitarHead } from "react-icons/gi";
import { IoMdRose } from "react-icons/io";
import { TbCircleHalfVertical } from "react-icons/tb";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    title: "Brand",
    description: "Choose a brand",
    icon: <RiTrademarkLine className="h-3.5 w-3.5 text-gray-400" />,
  },
  {
    title: "Model",
    description: "Choose a guitar model",
    icon: <IoStar />,
  },
  {
    title: "Neck shape",
    description: "Choose a neck shape",
    icon: <TbCircleHalfVertical />,
  },
  {
    title: "Neck wood",
    description: "Choose a wood type",
    icon: <GiGuitarHead />,
  },
  {
    title: "Fingerboard",
    description: "Choose a fingerboard",
    icon: <IoMdRose />,
  },
  {
    title: "Pickups",
    description: "Choose a pickups",
    icon: <ImMagnet />,
  },
];

const Stepper: React.FC = () => {
  return (
    <ol className="relative border-l border-gray-700 text-gray-400">
      {steps.map((step, index) => (
        <li key={index} className="mb-10 ml-6">
          <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full  bg-gray-700 ring-4 ring-white">
            {step.icon}
          </span>
          <h3 className="font-semibold text-gray-500">{step.title}</h3>
          <p className="">{step.description}</p>
        </li>
      ))}
    </ol>
  );
};

export default Stepper;
