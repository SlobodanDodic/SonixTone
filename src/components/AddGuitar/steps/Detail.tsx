import { useFormState } from "@/context/FormContext";
import { useForm } from "react-hook-form";
import type { FormDataStepTwoProps } from "@/types";
import DetailConditions from "./DetailConditions";
import { condition } from "../data";

export function Detail() {
  const { onHandleNext, setFormData, onHandleBack, formData } = useFormState();
  const { register, handleSubmit } = useForm<FormDataStepTwoProps>({
    defaultValues: formData ?? {},
  });

  const onHandleFormSubmit = (data: FormDataStepTwoProps) => {
    setFormData(data);
    onHandleNext();
  };

  console.log(formData);

  return (
    <form className="text-gray-400" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h1 className="flex w-screen items-center justify-center font-bold tracking-wide text-gray-600 sm:text-sm">
        Your Guitar Details - step 2/3
      </h1>

      <div className="my-10 flex flex-col items-center">
        <ul className="flex w-full max-w-xl flex-col items-center justify-center sm:flex-row">
          {condition?.map((c) => <DetailConditions key={c.id} color={c.color} title={c.name} description={c.description} />)}
        </ul>

        <div className="mt-4 flex justify-end gap-4">
          <button type="button" onClick={onHandleBack} className="inline-block h-11 rounded-md bg-blue-600 px-6 font-semibold text-white">
            Back
          </button>
          <button className="inline-block h-11 rounded-md bg-blue-600 px-6 font-semibold text-white">Next</button>
        </div>
      </div>
    </form>
  );
}
