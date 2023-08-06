import type { DetailConditionsType } from "@/types";
import { BiTachometer } from "react-icons/bi";

export default function DetailCondition({ color, title, description, selected, onConditionSelect }: DetailConditionsType) {
  return (
    <label
      className={`group relative m-1 flex w-24 items-center justify-center rounded-md border-gray-50 p-1 shadow transition-all hover:shadow-lg sm:m-2 ${
        selected ? "bg-gray-600 text-gray-100" : "text-gray-700 transition-all hover:text-gray-600 hover:shadow-lg"
      }`}
    >
      <input
        type="radio"
        id={title}
        value={title}
        checked={selected}
        onChange={() => onConditionSelect(title)}
        required
        className="absolute inset-0 opacity-0 hover:cursor-pointer"
      />
      <span className="flex">
        <BiTachometer className={`${color} mr-1 h-5 w-5`} />
        <span className="text-sm">{title}</span>
      </span>
      <span className="absolute top-8 z-10 scale-0 rounded bg-gray-600 p-1 text-center text-xs text-white transition-all group-hover:scale-100">
        {description}
      </span>
    </label>
  );
}
