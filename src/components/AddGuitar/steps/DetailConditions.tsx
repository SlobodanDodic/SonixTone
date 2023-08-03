import type { DetailConditionsType } from "@/types";
import { BiTachometer } from "react-icons/bi";

export default function DetailConditions({ color, title, description, selected, onConditionSelect }: DetailConditionsType) {
  return (
    <li className="w-1/2 p-2 text-gray-600 sm:w-[25%] sm:p-1">
      <input
        type="radio"
        id={title}
        value={title}
        className="peer hidden"
        checked={selected}
        onChange={() => onConditionSelect(title)}
        required
      />
      <label
        htmlFor={title}
        className={`inline-flex w-full cursor-pointer items-center justify-between rounded-sm bg-white p-3 shadow ${
          selected ? "bg-gray-600 text-gray-100" : "hover:bg-gray-100 hover:text-gray-600"
        }`}
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
