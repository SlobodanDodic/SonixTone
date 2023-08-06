import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { UseFormRegister } from "react-hook-form";

//
// context/FormContext:
//
export interface AllFormDataProps {
  // BrandFormProps
  selectedBrand: string;
  selectedModel: string;
  selectedNeckShape: string;
  selectedNeckWood: string;
  selectedFingerboard: string;
  selectedPickups: string;
  // DetailFormProps
  selectedCondition: string;
  isFixed: boolean;
  isTradeable: boolean;
  price: string;
  currency: string;
  editor: string;
  photos: string[];
}

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

//
// components/AddGuitar/Brand:
//
export interface BrandFormProps {
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
  inputId: keyof BrandFormProps;
  defaultValue: string;
  options: Array<{ value: string; label: string }>;
  dependencies?: Array<keyof BrandFormProps>;
}

export interface BrandFieldsDataProps {
  children: (formFields: FormFieldProps[]) => ReactNode;
}

export type BrandFieldsDataType = FormFieldProps[];

export interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface SelectInputProps {
  title: string;
  label: string;
  inputId: keyof BrandFormProps;
  defaultValue: string;
  register: UseFormRegister<BrandFormProps>;
  options: Option[];
}

//
// components/AddGuitar/Detail:
//
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
  currency: string;
  handlePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleIsFixedPrice: () => void;
  handleIsTradeable: () => void;
}

export interface DetailStateType {
  selectedCondition: string;
  isFixed: boolean;
  isTradeable: boolean;
  price: string;
  currency: string;
  editor: string;
  photos: string[];
}

export interface DetailQuillType {
  editor: string;
  setEditor: (text: string) => void;
}

//
// components/common:
//
export interface CustomButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}
