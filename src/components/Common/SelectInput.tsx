import type { SelectInputProps } from "@/types";

const SelectInput: React.FC<SelectInputProps> = ({ title, label, id, options, defaultValue, onChange }) => {
  return (
    <div className="mt-9 flex h-11">
      <div className="flex w-1/2 flex-col items-end justify-end pr-7 font-semibold sm:mx-10">
        <p className="text-end text-sm text-gray-600">{title}</p>
        <label htmlFor={id} className="p-1 text-end text-xs font-semibold text-gray-400">
          {label}
        </label>
      </div>

      <div className="flex w-1/2 flex-col pl-7 sm:mx-10">
        <select
          id={id}
          defaultValue={defaultValue}
          className="rounded border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600 focus:outline-none"
          onChange={onChange}
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
