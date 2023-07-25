import React from "react";
import { ImMagnet } from "react-icons/im";
import { IoStar } from "react-icons/io5";
import { RiTrademarkLine } from "react-icons/ri";
import { GiGuitarHead } from "react-icons/gi";
import { IoMdRose } from "react-icons/io";
import { TbCircleHalfVertical } from "react-icons/tb";
import type { Step, StepperProps } from "@/types";

const Stepper: React.FC<StepperProps> = ({
  selectedBrand,
  selectedModel,
  selectedNeckShape,
  selectedNeckWood,
  selectedFingerboard,
  selectedPickups,
}) => {
  const getStepIconColor = (isSelected: boolean) => (isSelected ? "text-yellow-200" : "text-gray-900");

  const steps: Step[] = [
    {
      title: "Brand",
      description: "Choose a brand",
      icon: <RiTrademarkLine />,
      color: getStepIconColor(!!selectedBrand),
    },
    {
      title: "Model",
      description: "Choose a guitar model",
      icon: <IoStar />,
      color: getStepIconColor(!!selectedModel),
    },
    {
      title: "Neck shape",
      description: "Choose a neck shape",
      icon: <TbCircleHalfVertical />,
      color: getStepIconColor(!!selectedNeckShape),
    },
    {
      title: "Neck wood",
      description: "Choose a wood type",
      icon: <GiGuitarHead />,
      color: getStepIconColor(!!selectedNeckWood),
    },
    {
      title: "Fingerboard",
      description: "Choose a fingerboard",
      icon: <IoMdRose />,
      color: getStepIconColor(!!selectedFingerboard),
    },
    {
      title: "Pickups",
      description: "Choose a pickups",
      icon: <ImMagnet />,
      color: getStepIconColor(!!selectedPickups),
    },
  ];
  return (
    <ol className="relative mt-9 flex w-10 flex-col items-center text-gray-400">
      <div className="absolute -z-10 h-full border-l border-gray-700" />
      <li className="mb-10">
        <span className="flex w-screen items-center justify-center rounded-lg bg-white p-2 text-xs font-bold uppercase tracking-wider text-gray-600 underline underline-offset-4 ring-4 ring-white sm:text-sm">
          Add your guitar
        </span>
      </li>
      {steps.map((step, index) => (
        <li key={index} className="mb-10">
          <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 ring-8 ring-white ${step.color}`}>
            {step.icon}
          </span>
        </li>
      ))}
    </ol>
  );
};

export default Stepper;
