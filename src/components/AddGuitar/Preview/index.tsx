import { useFormState } from "@/context/FormContext";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import type { AllFormDataProps } from "@/types";
import CustomButton from "@/components/Common/CustomButton";
import { IoArrowRedoCircleSharp, IoArrowUndoCircleSharp } from "react-icons/io5";
import FullInfoCard from "@/components/Common/FullInfoCard";

export function Preview() {
  const { onHandleBack, formData } = useFormState();
  const { handleSubmit } = useForm<AllFormDataProps>({
    defaultValues: formData ?? {},
  });

  useEffect(() => {
    if (formData) {
      window.scrollTo(0, 0);
    }
  }, [formData]);

  const onHandleFormSubmit = (data: AllFormDataProps) => {
    console.log(formData);
  };

  return (
    <form className="text-gray-400" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h1 className="mt-2 flex w-screen items-center justify-center font-bold tracking-wide text-gray-600 sm:text-sm">
        Guitar Ad Preview - step 3/3
      </h1>

      <div className="my-10 flex flex-col items-center">
        <FullInfoCard />

        <div className="mt-7 flex justify-center">
          <CustomButton type="button" onClick={onHandleBack} className="mr-1 flex w-28 justify-center rounded-full px-7">
            <div className="flex items-center justify-center text-xs">
              Back
              <IoArrowUndoCircleSharp className="ml-1 h-4 w-4" />
            </div>
          </CustomButton>
          <CustomButton type="submit" className="ml-1 flex w-28 justify-center rounded-full px-7">
            <div className="flex items-center justify-center text-xs">
              Create
              <IoArrowRedoCircleSharp className="ml-1 h-4 w-4" />
            </div>
          </CustomButton>
        </div>
      </div>
    </form>
  );
}
