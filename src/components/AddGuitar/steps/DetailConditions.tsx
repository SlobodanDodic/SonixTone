import { useFormState } from "@/context/FormContext";
import type { FormDataStepTwoProps } from "@/types";
import { BiTachometer } from "react-icons/bi";

export interface DetailConditionsType {
  key: number;
  color: string;
  title: string;
  description: string;
}

export default function DetailConditions({ color, title, description }: DetailConditionsType) {
  const { onHandleNext, setFormData, formData } = useFormState();

  const onHandleFormSubmit = (data: FormDataStepTwoProps) => {
    const selectedCondition = data.selectedCondition;

    // Create a new object containing the selected condition and other form data
    const updatedFormData: FormDataStepTwoProps = {
      ...formData,
      selectedCondition,
    };

    // Set the updated form data in the context
    setFormData(updatedFormData);
    // onHandleNext();
  };

  return (
    <li className="w-full p-2 text-gray-600 sm:w-[25%] sm:p-1">
      <input type="radio" id={title} value={title} className="peer hidden" required />
      <label
        htmlFor={title}
        className="inline-flex w-full cursor-pointer items-center justify-between rounded-sm bg-white p-3 shadow hover:bg-gray-100 hover:text-gray-600 peer-checked:bg-gray-600 peer-checked:text-gray-100"
        onClick={() => onHandleFormSubmit({ selectedCondition: title })}
      >
        <div className="flex flex-col">
          <div className="flex pb-1">
            <BiTachometer className={`${color} h-5 w-5`} />
            <div className="pl-2 text-sm font-semibold">{title}</div>
          </div>
          <div className="flex">
            <div className="w-full text-xs">{description}</div>
          </div>
        </div>
      </label>
    </li>
  );
}
