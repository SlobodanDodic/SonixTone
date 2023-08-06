import { useFormState } from "@/context/FormContext";
import type { BrandFormProps, SelectInputProps } from "@/types";

const SelectInput: React.FC<SelectInputProps> = ({ title, label, inputId, defaultValue, register, options }) => {
  const { setFormData, formData } = useFormState();
  const required = true;

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    const updatedFormData: BrandFormProps = { ...formData };

    // Reset all fields after the current inputId
    let reset = false;
    for (const key in updatedFormData) {
      if (reset) {
        updatedFormData[key as keyof BrandFormProps] = "";
      }
      if (key === inputId) {
        reset = true;
      }
    }

    updatedFormData[inputId] = newValue;

    setFormData(updatedFormData);
  };

  return (
    <div className="mt-9 flex">
      <div className="flex w-1/2 flex-col items-end justify-end pr-7 font-semibold sm:mx-10">
        <p className="text-end text-sm text-gray-600">{title}</p>
        <label htmlFor={inputId} className="p-1 text-end text-xs font-semibold text-gray-400 sm:w-[150px]">
          {label}
        </label>
      </div>

      <div className="flex w-1/2 flex-col pl-7 sm:mx-10">
        <select
          id={inputId}
          {...register(inputId, { required })}
          className="rounded border border-gray-300 bg-gray-50 p-1 text-xs font-semibold text-gray-600 focus:outline-none sm:w-[150px]"
          defaultValue={defaultValue}
          required={!!required}
          onChange={handleInputChange}
        >
          <option value="">{defaultValue}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
