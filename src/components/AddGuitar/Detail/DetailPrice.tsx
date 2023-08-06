import type { DetailPriceType } from "@/types";

export default function DetailPrice({
  isFixed,
  isTradeable,
  price,
  currency,
  handlePrice,
  handleCurrency,
  handleIsFixedPrice,
  handleIsTradeable,
}: DetailPriceType) {
  const handleInputKeyDown = (e: { key: string; preventDefault: () => void }) => {
    const regex = /^[0-9\b]+$/;
    if (!regex.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  };

  return (
    <div className="my-5">
      <label htmlFor="price" className="mx-1 mb-3 block text-center text-sm text-gray-600">
        Guitar price
      </label>
      <div className="flex rounded bg-gray-600 p-1">
        <label className="relative inline-flex cursor-pointer items-center rounded-l border border-gray-400 p-2">
          <input type="checkbox" value="" checked={isFixed} onChange={handleIsFixedPrice} className="peer sr-only" />
          <div className="peer h-5 w-9 rounded-full border-gray-600 bg-gray-400 after:absolute after:left-[10px] after:top-[10px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white" />
          <span className="ml-2 w-14 text-xs text-gray-200">{isFixed ? "Fixed Price" : "Not Fixed"}</span>
        </label>

        <input
          value={price}
          onChange={handlePrice}
          type="text"
          id="price"
          className="mx-1 block w-20 border border-gray-400 bg-gray-50 p-2 text-center text-sm font-semibold text-gray-600"
          placeholder="price"
          onKeyDown={handleInputKeyDown}
        />
        <select
          id="currency"
          className="flex w-12 items-center justify-center rounded-r border border-gray-400 bg-gray-600 pl-3 text-xs text-gray-200"
          value={currency}
          onChange={handleCurrency}
        >
          <option value="$">$</option>
          <option value="€">€</option>
        </select>
      </div>

      <div className="m-3 mx-auto flex w-fit rounded bg-gray-600 p-1">
        <label className="relative inline-flex cursor-pointer items-center rounded border border-gray-400 p-2">
          <input type="checkbox" value="" checked={isTradeable} onChange={handleIsTradeable} className="peer sr-only" />
          <div className="peer h-5 w-9 rounded-full border-gray-600 bg-gray-400 after:absolute after:left-[10px] after:top-[10px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white" />
          <span className="ml-2 w-20 text-xs text-gray-200">{isTradeable ? "Let's trade" : "Not Tradeable"}</span>
        </label>
      </div>
    </div>
  );
}
