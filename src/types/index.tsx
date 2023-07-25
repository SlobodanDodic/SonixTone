import type { ReactNode } from "react";

export interface Tab {
  label: string;
  value: string;
  icon: ReactNode;
  desc: ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
}

export interface FormData {
  selectedBrand: string | null;
  selectedModel: string | null;
  selectedNeckShape: string | null;
  selectedNeckWood: string | null;
  selectedFingerboard: string | null;
  selectedPickups: string | null;
}

export interface BrandProps {
  selectedBrand: string | null;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string | null>>;
  selectedModel: string | null;
  setSelectedModel: React.Dispatch<React.SetStateAction<string | null>>;
  selectedNeckShape: string | null;
  setSelectedNeckShape: React.Dispatch<React.SetStateAction<string | null>>;
  selectedNeckWood: string | null;
  setSelectedNeckWood: React.Dispatch<React.SetStateAction<string | null>>;
  selectedFingerboard: string | null;
  setSelectedFingerboard: React.Dispatch<React.SetStateAction<string | null>>;
  selectedPickups: string | null;
  setSelectedPickups: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface StepperProps {
  selectedBrand: string | null;
  selectedModel: string | null;
  selectedNeckShape: string | null;
  selectedNeckWood: string | null;
  selectedFingerboard: string | null;
  selectedPickups: string | null;
}

export interface Option {
  value: string;
  label: string;
}

export interface SelectInputProps {
  title?: string;
  label: string;
  defaultValue: string;
  id: string;
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
