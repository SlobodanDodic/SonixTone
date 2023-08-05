import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { UseFormRegister } from "react-hook-form";

// All inputs in form:
export interface AllFormDataProps {
  // FormDataStepOneProps
  selectedBrand: string;
  selectedModel: string;
  selectedNeckShape: string;
  selectedNeckWood: string;
  selectedFingerboard: string;
  selectedPickups: string;
  // FormDataStepTwoProps
  selectedCondition: string;
  isFixed: boolean;
  isTradeable: boolean;
  price: string;
  editor: string;
  // FormDataStepThreeProps
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

// Component Brand & Component BrandFieldsData::
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
export interface BrandFieldsDataProps {
  children: (formFields: FormFieldProps[]) => ReactNode;
}
export type BrandFieldsDataType = FormFieldProps[];

// Component Details:
export interface FormDataStepTwoProps {
  selectedCondition: string;
  isFixed: boolean;
  isTradeable: boolean;
  price: string;
}
export interface DetailConditionsType {
  key: number;
  color: string;
  title: string;
  description: string;
  selected: boolean;
  onConditionSelect: (title: string) => void;
}
export interface DetailPriceType {
  isFixed: boolean;
  isTradeable: boolean;
  price: string;
  handlePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleIsFixedPrice: () => void;
  handleIsTradeable: () => void;
}
export interface DetailStateType {
  selectedCondition: string;
  isFixed: boolean;
  isTradeable: boolean;
  price: string;
  editor: string;
}
export interface DetailQuillType {
  editor: string;
  setEditor: (text: string) => void;
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
