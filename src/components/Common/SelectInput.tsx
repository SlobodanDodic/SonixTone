interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  id: string;
  options: Option[];
  label: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({ id, label, options, onChange }) => {
  return (
    <div className="mb-5 flex w-full flex-col items-end pr-8 sm:px-8">
      <label htmlFor={id} className="p-1 text-xs font-semibold text-gray-400">
        {label}
      </label>
      <select
        id={id}
        defaultValue="Please select"
        className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-500 focus:outline-none"
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
  );
};

export default SelectInput;
