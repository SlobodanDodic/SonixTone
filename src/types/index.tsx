import type { Dispatch, ReactNode, SetStateAction } from "react";
import { UseFormRegister } from "react-hook-form";

// All inputs in form:
export interface AllFormDataProps {
  selectedBrand: string;
  selectedModel: string;
  selectedNeckShape: string;
  selectedNeckWood: string;
  selectedFingerboard: string;
  selectedPickups: string;
  email: string;
  password: string;
}

// Component SelectInput:
export interface Option {
  value: string;
  label: string;
}

export interface SelectInputProps {
  title: string;
  label: string;
  inputId: keyof FormDataStepOneProps;
  defaultValue: string;
  register: UseFormRegister<any>;
  options: Option[];
}
// export interface SelectInputProps {
//   title?: string;
//   label: string;
//   inputId: keyof FormDataProps;
//   register: UseFormRegister<any>;
//   options: Option[];
//   defaultValue: string;
//   onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
//   setFormData?: (data: FormDataProps) => void;
// }

// Component Brand:
export interface FormDataStepOneProps {
  selectedBrand: string;
  selectedModel: string;
  selectedNeckShape: string;
  selectedNeckWood: string;
  selectedFingerboard: string;
  selectedPickups: string;
}

export interface FormFieldProps {
  title: string;
  label: string;
  inputId: keyof FormDataStepOneProps;
  defaultValue: string;
  options: Array<{ value: string; label: string }>;
  dependencies?: Array<keyof FormDataStepOneProps>;
}

// Component FormFieldsData:
export interface FormField {
  title: string;
  label: string;
  inputId: keyof FormDataStepOneProps;
  defaultValue: string;
  options: { value: string; label: string }[];
  dependencies?: (keyof FormDataStepOneProps)[];
}

export type FormFieldsDataType = FormField[];

export interface FormFieldsDataProps {
  children: (formFields: any) => ReactNode;
}

// Custom Button:
export interface CustomButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

// Component FormContext:
export interface FormContextProps {
  formData: AllFormDataProps;
  setFormData: Dispatch<SetStateAction<any>>;
  onHandleBack: () => void;
  onHandleNext: () => void;
  step: number;
}

export interface ChildrenProps {
  children: ReactNode;
}

// Component StepIcons

export interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

// older versions

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

export interface StepperProps {
  selectedBrand: string | null;
  selectedModel: string | null;
  selectedNeckShape: string | null;
  selectedNeckWood: string | null;
  selectedFingerboard: string | null;
  selectedPickups: string | null;
}
