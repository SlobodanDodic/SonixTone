import type { ChildrenProps, FormContextProps } from "@/types";
import { createContext, useContext, useState } from "react";

export const initialData = {
  selectedBrand: "",
  selectedModel: "",
  selectedNeckShape: "",
  selectedNeckWood: "",
  selectedFingerboard: "",
  selectedPickups: "",
};

const FormContext = createContext<FormContextProps>({
  formData: initialData,
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  step: 0,
});

export function FormProvider({ children }: ChildrenProps) {
  const [formData, setFormData] = useState(initialData);
  const [step, setStep] = useState(1);

  function onHandleNext() {
    setStep((prev) => prev + 1);
  }

  function onHandleBack() {
    setStep((prev) => prev - 1);
  }

  return <FormContext.Provider value={{ formData, setFormData, onHandleBack, onHandleNext, step }}>{children}</FormContext.Provider>;
}

export function useFormState() {
  return useContext(FormContext);
}
