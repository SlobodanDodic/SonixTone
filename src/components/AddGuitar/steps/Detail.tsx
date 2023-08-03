import { useState } from "react";
import { useFormState } from "@/context/FormContext";
import type { FormDataStepTwoProps } from "@/types";
import DetailConditions from "./DetailConditions";
import { conditions } from "../data";
import CustomButton from "@/components/Common/CustomButton";
import { IoArrowRedoCircleSharp, IoArrowUndoCircleSharp } from "react-icons/io5";

export function Detail() {
  const { onHandleNext, setFormData, onHandleBack, formData } = useFormState();
  const [selectedCondition, setSelectedCondition] = useState<string>(formData?.selectedCondition ?? "");

  const onHandleFormSubmit = (data: FormDataStepTwoProps) => {
    setFormData(data);
    onHandleNext();
  };

  const handleConditionSelect = (title: string) => {
    setSelectedCondition(title);
    setFormData({
      ...formData,
      selectedCondition: title,
    });
  };

  console.log(formData);

  return (
    <form
      className="text-gray-400"
      onSubmit={(e) => {
        e.preventDefault();
        onHandleFormSubmit(formData);
      }}
    >
      <h1 className="mt-2 flex w-screen items-center justify-center font-bold tracking-wide text-gray-600 sm:text-sm">
        Your Guitar Details - step 2/3
      </h1>

      <div className="my-10 flex flex-col items-center">
        <ul className="flex max-w-xl flex-wrap items-center justify-center">
          {conditions?.map((condition) => (
            <DetailConditions
              key={condition.id}
              color={condition.color}
              title={condition.name}
              description={condition.description}
              selected={selectedCondition === condition.name}
              onConditionSelect={handleConditionSelect}
            />
          ))}
        </ul>

        <div className="mt-7 flex justify-center">
          <CustomButton type="button" onClick={onHandleBack} className="mr-2 flex rounded-full px-7">
            <div className="flex items-center justify-center text-xs">
              Back
              <IoArrowUndoCircleSharp className="ml-1 h-4 w-4" />
            </div>
          </CustomButton>
          <CustomButton type="submit" className="flex rounded-full px-7">
            <div className="flex items-center justify-center text-xs">
              Next
              <IoArrowRedoCircleSharp className="ml-1 h-4 w-4" />
            </div>
          </CustomButton>
        </div>
      </div>
    </form>
  );
}
