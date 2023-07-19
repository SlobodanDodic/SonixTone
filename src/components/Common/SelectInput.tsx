interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  title: string;
  label: string;
  id: string;
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({ title, label, id, options, onChange }) => {
  return (
    <>
      <label htmlFor={id} className="flex items-end justify-end p-1 text-xs font-semibold text-gray-400">
        {label}
      </label>
      <div className="mb-2 flex w-full">
        <div className="flex w-1/3 items-end justify-end pr-4 text-sm font-semibold text-gray-600 sm:w-1/2">{title}</div>
        <div className="flex w-2/3 flex-col sm:w-1/2">
          <select
            id={id}
            defaultValue="Please select"
            className="block w-full rounded border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600 focus:outline-none"
            onChange={onChange}
          >
            <option value="">Please select</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default SelectInput;
