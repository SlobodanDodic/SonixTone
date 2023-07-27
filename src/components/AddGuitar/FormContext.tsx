import type { ChildrenProps, FormContextProps, AllFormDataProps } from "@/types";
import { createContext, useContext, useState } from "react";

export const initialData = {
  selectedBrand: "",
  selectedModel: "",
  selectedNeckShape: "",
  selectedNeckWood: "",
  selectedFingerboard: "",
  selectedPickups: "",

  email: "",
};

const FormContext = createContext<FormContextProps>({
  formData: initialData,
  onHandleBack: (): void => {},
  onHandleNext: (): void => {},
  setFormData: (): void => {},
  step: 0,
});

export function FormProvider({ children }: ChildrenProps) {
  const [formData, setFormData] = useState<AllFormDataProps>(initialData);
  const [step, setStep] = useState<number>(1);

  function onHandleBack() {
    setStep((prev) => prev - 1);
  }

  function onHandleNext() {
    setStep((prev) => prev + 1);
  }

  return <FormContext.Provider value={{ formData, setFormData, onHandleBack, onHandleNext, step }}>{children}</FormContext.Provider>;
}

export function useFormState() {
  return useContext(FormContext);
}
