import { useState } from "react";
import { useFormState } from "@/context/FormContext";
import CustomButton from "@/components/Common/CustomButton";
import type { DetailStateType } from "@/types";
import { conditions } from "../data";
import { IoArrowRedoCircleSharp, IoArrowUndoCircleSharp } from "react-icons/io5";
import { BiCloudUpload } from "react-icons/bi";
import { FaImages } from "react-icons/fa";
import Spinner from "@/components/Spinner";
import DetailCondition from "./DetailCondition";
import DetailPrice from "./DetailPrice";
import DetailEditor from "./DetailEditor";

export function Detail() {
  const { onHandleNext, setFormData, onHandleBack, formData } = useFormState();
  const { selectedCondition, isFixed, isTradeable, price, currency, editor, photos } = formData || {};

  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (key: keyof DetailStateType, value: string | boolean | string[]) => {
    setFormData((prevFormData: DetailStateType) => {
      if (Array.isArray(value)) {
        // For the photos property, we directly update it with the new value
        return {
          ...prevFormData,
          [key]: value,
        };
      }
      return {
        ...prevFormData,
        [key]: value,
      };
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsUploading(true);
    const files = e.target.files;
    if (files) {
      const uploadedPhotos = Array.from(files)
        .slice(0, 10)
        .map((file) => URL.createObjectURL(file));
      setIsUploading(false);
      handleChange("photos", uploadedPhotos);
    }
  };

  const handleConditionSelect = (title: string) => {
    handleChange("selectedCondition", title);
  };

  const handleEditor = (text: string) => {
    handleChange("editor", text);
  };

  if (isUploading) return <Spinner />;

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
          currency={currency}
          handlePrice={(e) => handleChange("price", e.target.value)}
          handleCurrency={(e) => handleChange("currency", e.target.value)}
          handleIsFixedPrice={() => handleChange("isFixed", !isFixed)}
          handleIsTradeable={() => handleChange("isTradeable", !isTradeable)}
        />

        <DetailEditor editor={editor} setEditor={handleEditor} />

        <div className="flex w-full max-w-[300px] items-center justify-center p-5">
          <label
            htmlFor="dropzone-file"
            className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded border-2 border-dashed border-gray-400 bg-gray-600 hover:border-gray-200"
          >
            {!!photos ? (
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <FaImages className="mb-2 h-10 w-10 text-gray-200" />
                <p className="mb-1 text-xs text-gray-200">Number of uploaded photos</p>
                <p className="text-gray-200">{photos.length}</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center pb-6 pt-4">
                <BiCloudUpload className="mb-2 h-10 w-10 text-gray-200" />
                <p className="mb-2 text-xs text-gray-200">Click to upload up to 10 photos</p>
                <p className="text-xs text-gray-200">SVG, PNG, JPG or GIF</p>
              </div>
            )}

            <input id="dropzone-file" type="file" className="" multiple onChange={handlePhotoUpload} />
          </label>
        </div>

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
            {!formData.price && (
              <div className="tooltip absolute -bottom-10 left-1/2 hidden w-full -translate-x-1/2 transform rounded bg-gray-500 p-1 text-center text-[10px] text-white transition-all group-hover:block">
                Price cannot be empty!
              </div>
            )}
            {!formData.selectedCondition && (
              <div className="tooltip absolute -bottom-10 left-1/2 hidden w-full -translate-x-1/2 transform rounded bg-gray-500 p-1 text-center text-[10px] text-white transition-all group-hover:block">
                Condition cannot be empty!
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
