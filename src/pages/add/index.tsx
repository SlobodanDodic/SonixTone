import React, { useState } from "react";
import type { ReactNode } from "react";
import { PiTrademarkFill, PiListMagnifyingGlassBold } from "react-icons/pi";
import { MdOutlinePreview } from "react-icons/md";
import Brand from "@/components/Add/Brand";
import CustomButton from "@/components/Common/CustomButton";
import Tabs from "@/components/Add/Tabs";
import { BsSendCheckFill, BsSendSlashFill } from "react-icons/bs";

interface Tab {
  label: string;
  value: string;
  icon: ReactNode;
  desc: ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
}

interface FormData {
  selectedBrand: string | null;
  selectedModel: string | null;
  selectedNeckShape: string | null;
  selectedNeckWood: string | null;
  selectedFingerboard: string | null;
}

export default function Add() {
  const [formData, setFormData] = useState<FormData>({
    selectedBrand: null,
    selectedModel: null,
    selectedNeckShape: null,
    selectedNeckWood: null,
    selectedFingerboard: null,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleChange = (field: keyof FormData, value: string | null) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const tabs = [
    {
      label: "Brand",
      value: "brand",
      icon: <PiTrademarkFill style={{ height: "1.15rem", width: "1.15rem" }} />,
      desc: (
        <Brand
          selectedBrand={formData.selectedBrand}
          setSelectedBrand={(value) => handleChange("selectedBrand", value as string)}
          selectedModel={formData.selectedModel}
          setSelectedModel={(value) => handleChange("selectedModel", value as string)}
          selectedNeckShape={formData.selectedNeckShape}
          setSelectedNeckShape={(value) => handleChange("selectedNeckShape", value as string)}
          selectedNeckWood={formData.selectedNeckWood}
          setSelectedNeckWood={(value) => handleChange("selectedNeckWood", value as string)}
          selectedFingerboard={formData.selectedFingerboard}
          setSelectedFingerboard={(value) => handleChange("selectedFingerboard", value as string)}
        />
      ),
    },
    {
      label: "Details",
      value: "details",
      icon: <PiListMagnifyingGlassBold style={{ height: "1.15rem", width: "1.15rem" }} />,
      desc: `Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Preview",
      value: "preview",
      icon: <MdOutlinePreview style={{ height: "1.15rem", width: "1.15rem" }} />,
      desc: `We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-4 min-h-screen w-full max-w-xl">
      <Tabs tabs={tabs} />
      <div className="absolute bottom-0 right-0 mt-7 flex w-full items-center justify-center">
        {/* <CustomButton type="submit" className="rounded-full px-4" disabled={formData.selectedFingerboard === null}>
          {formData.selectedFingerboard === null ? (
            <BsSendSlashFill className="h-6 w-6" />
          ) : (
            <div className="flex items-center justify-center text-xs">
              <BsSendCheckFill className="mr-2 h-6 w-6" />
              Send
            </div>
          )}
        </CustomButton> */}
      </div>
    </form>
  );
}
