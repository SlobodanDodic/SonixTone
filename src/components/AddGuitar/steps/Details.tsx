import { useFormState } from "@/context/FormContext";
import { useForm } from "react-hook-form";
import type { AllFormDataProps } from "@/types";

export function Details() {
  const { onHandleNext, setFormData, onHandleBack, formData } = useFormState();
  const { register, handleSubmit } = useForm<AllFormDataProps>({
    defaultValues: formData ?? {},
  });

  const onHandleFormSubmit = (data: AllFormDataProps) => {
    // setFormData((prev: any) => ({ ...prev, ...data }));
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
        <label htmlFor="email">Email</label>
        <input
          autoFocus
          id="email"
          {...register("email")}
          className="h-11 rounded-md border px-4 focus:outline-blue-500 "
          required={true}
        />

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
