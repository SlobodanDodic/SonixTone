import type { ChildrenProps, FormContextProps, AllFormDataProps } from "@/types";
import { createContext, useContext, useState } from "react";
// import { useSession } from "next-auth/react";

export const initialData = {
  selectedBrand: "",
  selectedModel: "",
  selectedNeckShape: "",
  selectedNeckWood: "",
  selectedFingerboard: "",
  selectedPickups: "",

  selectedCondition: "",
  password: "",
};

const FormContext = createContext<FormContextProps>({
  formData: initialData,
  onHandleBack: (): void => {
    // now it's not empty
  },
  onHandleNext: (): void => {
    // now it's not empty
  },
  setFormData: (): void => {
    // now it's not empty
  },
  step: 0,
});

export function FormProvider({ children }: ChildrenProps) {
  const [formData, setFormData] = useState<AllFormDataProps>(initialData);
  const [step, setStep] = useState<number>(1);
  // const { data: session, status } = useSession();

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
