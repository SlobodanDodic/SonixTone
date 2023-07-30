import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { UseFormRegister } from "react-hook-form";

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
  register: UseFormRegister<FormDataStepOneProps>;
  options: Option[];
}

// Component Brand & Component FormFieldsData::
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
export interface FormFieldsDataProps {
  children: (formFields: FormFieldProps[]) => ReactNode;
}
export type FormFieldsDataType = FormFieldProps[];

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
