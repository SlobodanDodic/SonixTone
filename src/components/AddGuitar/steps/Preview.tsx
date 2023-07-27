import { useForm } from "react-hook-form";
import { useFormState } from "../FormContext";
import { useState } from "react";
import type { AllFormDataProps } from "@/types";

export function Preview() {
  const [isCreated, setCreated] = useState(false);
  const { setFormData, formData, onHandleBack } = useFormState();
  const { register, handleSubmit } = useForm<AllFormDataProps>({
    defaultValues: formData ?? {},
  });

  const onHandleFormSubmit = (data: AllFormDataProps) => {
    setFormData((prev: AllFormDataProps) => ({ ...prev, ...data }));
    setCreated(true);
  };

  return isCreated ? (
    <div>
      <p>Account created successfully</p>
      <pre>{JSON.stringify(formData)}</pre>
    </div>
  ) : (
    <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          autoFocus
          id="password"
          {...register("password")}
          className="h-11 rounded-md border px-4 focus:outline-blue-500 "
          type="password"
          required={true}
        />
      </div>

      <div className="flex justify-end gap-4">
        <button type="button" onClick={onHandleBack} className="inline-block h-11 rounded-md bg-blue-600 px-6 font-semibold text-white">
          Back
        </button>
        <button className="inline-block h-11 rounded-md bg-blue-600 px-6 font-semibold text-white">Create</button>
      </div>
    </form>
  );
}
