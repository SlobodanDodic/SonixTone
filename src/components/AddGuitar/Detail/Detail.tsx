import { useFormState } from "@/context/FormContext";
import DetailCondition from "./DetailCondition";
import { conditions } from "../data";
import CustomButton from "@/components/Common/CustomButton";
import { IoArrowRedoCircleSharp, IoArrowUndoCircleSharp } from "react-icons/io5";
import DetailPrice from "./DetailPrice";
import type { DetailStateType } from "@/types";
import DetailEditor from "./DetailEditor";

export function Detail() {
  const { onHandleNext, setFormData, onHandleBack, formData } = useFormState();
  const { selectedCondition, isFixed, isTradeable, price, editor } = formData || {};

  const handleChange = (key: keyof DetailStateType, value: string | boolean) => {
    setFormData((prevFormData: DetailStateType) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleConditionSelect = (title: string) => {
    handleChange("selectedCondition", title);
  };

  const handleEditor = (text: string) => {
    handleChange("editor", text);
  };

  return (
    <form className="text-gray-400" onSubmit={(e) => e.preventDefault()}>
      <h1 className="mt-2 flex w-screen items-center justify-center font-bold tracking-wide text-gray-600 sm:text-sm">
        Your Guitar Details - step 2/3
      </h1>

      <div className="my-10 flex flex-col items-center">
        <h2 className="my-3 text-sm text-gray-600">Choose condition of your guitar</h2>
        <div className="flex max-w-xl flex-wrap items-center justify-center">
          {conditions?.map((condition) => (
            <DetailCondition
              key={condition.id}
              color={condition.color}
              title={condition.name}
              description={condition.description}
              selected={selectedCondition === condition.name}
              onConditionSelect={handleConditionSelect}
            />
          ))}
        </div>

        <DetailPrice
          isFixed={isFixed}
          isTradeable={isTradeable}
          price={price}
          handlePrice={(e) => handleChange("price", e.target.value)}
          handleIsFixedPrice={() => handleChange("isFixed", !isFixed)}
          handleIsTradeable={() => handleChange("isTradeable", !isTradeable)}
        />

        <DetailEditor editor={editor} setEditor={handleEditor} />

        <div className="mt-7 flex justify-center">
          <CustomButton type="button" onClick={onHandleBack} className="mr-2 flex rounded-full px-7">
            <div className="flex items-center justify-center text-xs">
              Back
              <IoArrowUndoCircleSharp className="ml-1 h-4 w-4" />
            </div>
          </CustomButton>
          <div className="group relative">
            <CustomButton
              type="button"
              onClick={onHandleNext}
              className="flex rounded-full px-7"
              disabled={!formData.price || !formData.selectedCondition}
            >
              <div className="flex items-center justify-center text-xs">
                Next
                <IoArrowRedoCircleSharp className="ml-1 h-4 w-4" />
              </div>
            </CustomButton>
            {(!formData.price || !formData.selectedCondition) && (
              <div className="tooltip absolute -bottom-10 left-1/2 hidden w-full -translate-x-1/2 transform rounded bg-gray-500 p-1 text-center text-[10px] text-white transition-all group-hover:block">
                Price or condition cannot be empty!
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
