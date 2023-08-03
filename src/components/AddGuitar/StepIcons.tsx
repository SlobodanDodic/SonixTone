import { useFormState } from "@/context/FormContext";
import { FaTrademark } from "react-icons/fa";
import { IoShapes } from "react-icons/io5";
import { SiThemodelsresource } from "react-icons/si";
import { GiWoodBeam } from "react-icons/gi";
import { SiRedwoodjs } from "react-icons/si";
import { ImMagnet } from "react-icons/im";
import { GiCrossMark } from "react-icons/gi";
// import { BsSpeedometer2 } from "react-icons/bs";
import type { Step } from "@/types";

const StepIcons = () => {
  const { formData } = useFormState();
  const { selectedBrand, selectedModel, selectedNeckShape, selectedNeckWood, selectedFingerboard, selectedPickups } = formData ?? {};

  const getStepIconColor = (isSelected: boolean) => (isSelected ? "text-yellow-300" : "text-slate-400");

  const steps: Step[] = [
    {
      title: "Brand",
      description: "Choose a brand",
      icon: !!selectedBrand ? <FaTrademark /> : <GiCrossMark />,
      color: getStepIconColor(!!selectedBrand),
    },
    {
      title: "Model",
      description: "Choose a guitar model",
      icon: !!selectedModel ? <SiThemodelsresource /> : <GiCrossMark />,
      color: getStepIconColor(!!selectedModel),
    },
    {
      title: "Neck shape",
      description: "Choose a neck shape",
      icon: !!selectedNeckShape ? <IoShapes /> : <GiCrossMark />,
      color: getStepIconColor(!!selectedNeckShape),
    },
    {
      title: "Neck wood",
      description: "Choose a wood type",
      icon: !!selectedNeckWood ? <SiRedwoodjs /> : <GiCrossMark />,
      color: getStepIconColor(!!selectedNeckWood),
    },
    {
      title: "Fingerboard",
      description: "Choose a fingerboard",
      icon: !!selectedFingerboard ? <GiWoodBeam /> : <GiCrossMark />,
      color: getStepIconColor(!!selectedFingerboard),
    },
    {
      title: "Pickups",
      description: "Choose a pickups",
      icon: !!selectedPickups ? <ImMagnet /> : <GiCrossMark />,
      color: getStepIconColor(!!selectedPickups),
    },
    // {
    //   title: "Condition",
    //   description: "Guitar condition",
    //   icon: !!selectedPickups ? <BsSpeedometer2 /> : <GiCrossMark />,
    //   color: getStepIconColor(!!selectedPickups),
    // },
  ];
  return (
    <ol className="relative mt-5 flex w-10 flex-col items-center text-gray-400">
      <div className="absolute -z-10 h-full border-l border-gray-700" />
      <li className="bg-white pb-10">
        <h1 className="flex w-screen items-center justify-center bg-white pb-3 pt-1 font-bold tracking-wide text-gray-600 sm:text-sm">
          Add Your Guitar - step 1/3
        </h1>
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

export default StepIcons;
