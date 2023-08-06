import { useForm } from "react-hook-form";
import { useFormState } from "@/context/FormContext";
import CustomButton from "@/components/Common/CustomButton";
import { IoArrowRedoCircleSharp } from "react-icons/io5";
import SelectInput from "./SelectInput";
import StepIcons from "./StepIcons";
import type { BrandFormProps, FormFieldProps } from "@/types";
import { BrandFieldsData } from "./BrandFieldsData";

export function Brand() {
  const { onHandleNext, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<BrandFormProps>({
    defaultValues: formData ?? {},
  });

  const onHandleFormSubmit = (data: BrandFormProps) => {
    setFormData(data);
    onHandleNext();
  };

  const onSubmit = (data: BrandFormProps) => {
    onHandleFormSubmit(data);
  };

  return (
    <div className="pt-12">
      <BrandFieldsData>
        {(formFields: FormFieldProps[]) => (
          <form className="flex flex-col font-bold" onSubmit={handleSubmit(onSubmit)}>
            {formFields?.map((field: FormFieldProps, index: number) => {
              const arePreviousFieldsSelected =
                index === 0 || formFields?.slice(0, index).every((prevField) => formData[prevField.inputId]);

              if (arePreviousFieldsSelected || !field.dependencies) {
                return (
                  <SelectInput
                    key={index}
                    title={field.title}
                    label={field.label}
                    inputId={field.inputId}
                    defaultValue={field.defaultValue}
                    register={register}
                    options={field.options}
                  />
                );
              }

              return null;
            })}

            <div className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 transform">
              <StepIcons />
            </div>

            {formData?.selectedPickups && (
              <div className="z-50 flex justify-center bg-white py-10">
                <CustomButton type="submit" className="flex w-28 justify-center rounded-full px-7">
                  <div className="flex items-center justify-center text-xs">
                    Next
                    <IoArrowRedoCircleSharp className="ml-1 h-4 w-4" />
                  </div>
                </CustomButton>
              </div>
            )}
          </form>
        )}
      </BrandFieldsData>
    </div>
  );
}
