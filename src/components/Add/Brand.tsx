import type { BrandProps } from "@/types";
import SelectInput from "../Common/SelectInput";
import Stepper from "./Stepper";
import { guitars, neck } from "./data";

export default function Brand({
  selectedBrand,
  setSelectedBrand,
  selectedModel,
  setSelectedModel,
  selectedNeckShape,
  setSelectedNeckShape,
  selectedNeckWood,
  setSelectedNeckWood,
  selectedFingerboard,
  setSelectedFingerboard,
  selectedPickups,
  setSelectedPickups,
}: BrandProps) {
  const getPopularModelsByBrand = (brandName: string) => {
    const selectedGuitar = guitars.find((guitar) => guitar.name === brandName);
    return selectedGuitar ? selectedGuitar.popularModels.map((model) => model.name) : [];
  };

  const handleChange = (field: keyof BrandProps, value: string | null) => {
    if (field === "selectedBrand") {
      setSelectedBrand(value);
      setSelectedModel(null);
      setSelectedNeckShape(null);
      setSelectedNeckWood(null);
      setSelectedFingerboard(null);
      setSelectedPickups(null);
    } else if (field === "selectedModel") {
      setSelectedModel(value);
      setSelectedNeckShape(null);
      setSelectedNeckWood(null);
      setSelectedFingerboard(null);
      setSelectedPickups(null);
    } else if (field === "selectedNeckShape") {
      setSelectedNeckShape(value);
      setSelectedNeckWood(null);
      setSelectedFingerboard(null);
      setSelectedPickups(null);
    } else if (field === "selectedNeckWood") {
      setSelectedNeckWood(value);
      setSelectedFingerboard(null);
      setSelectedPickups(null);
    } else if (field === "selectedFingerboard") {
      setSelectedFingerboard(value);
      setSelectedPickups(null);
    } else if (field === "selectedPickups") {
      setSelectedPickups(value);
    }
  };

  return (
    <>
      <div className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 transform">
        <Stepper
          selectedBrand={selectedBrand}
          selectedModel={selectedModel}
          selectedNeckShape={selectedNeckShape}
          selectedNeckWood={selectedNeckWood}
          selectedFingerboard={selectedFingerboard}
          selectedPickups={selectedPickups}
        />
      </div>

      <SelectInput
        title="Pick Brand"
        label={`One of ${guitars.length} guitar brands`}
        id="guitarBrands"
        defaultValue="Select Brand"
        options={guitars.map((guitar) => ({ value: guitar.name, label: guitar.name }))}
        onChange={(e) => handleChange("selectedBrand", e.target.value)}
      />

      {selectedBrand && (
        <SelectInput
          title="Pick Brand's Model"
          label={`${selectedBrand ? selectedBrand + "'s Model" : ""}`}
          id="guitarModels"
          defaultValue="Select Model"
          onChange={(e) => handleChange("selectedModel", e.target.value)}
          options={getPopularModelsByBrand(selectedBrand).map((model) => ({
            value: model,
            label: model,
          }))}
        />
      )}

      {selectedModel && (
        <SelectInput
          title="Pick Neck Shape"
          label={`${selectedModel ? selectedModel + "'s neck shape" : ""}`}
          id="neckShape"
          defaultValue="Select Shape"
          onChange={(e) => handleChange("selectedNeckShape", e.target.value)}
          options={neck.shapes.map((shape) => ({ value: shape.name, label: shape.name }))}
        />
      )}

      {selectedNeckShape && (
        <SelectInput
          title="Pick Neck Wood"
          label={`${selectedModel ? selectedModel + "'s neck wood" : ""}`}
          id="neckWood"
          defaultValue="Select Wood"
          onChange={(e) => handleChange("selectedNeckWood", e.target.value)}
          options={neck.woods.map((wood) => ({ value: wood.name, label: wood.name }))}
        />
      )}

      {selectedNeckWood && (
        <SelectInput
          title="Pick Fingerboard"
          label={`${selectedModel ? selectedModel + "'s fingerboard" : ""}`}
          id="fingerboard"
          defaultValue="Select Fingerboard"
          onChange={(e) => handleChange("selectedFingerboard", e.target.value)}
          options={neck.fingerboards.map((fingerboard) => ({ value: fingerboard.name, label: fingerboard.name }))}
        />
      )}

      {selectedFingerboard && (
        <div className="mt-9 flex h-11">
          <div className="flex w-1/2 flex-col items-end justify-end pr-7 font-semibold sm:mx-10">
            <p className="text-end text-sm text-gray-600">Pickups configuration</p>
            <label className="p-1 text-end text-xs font-semibold text-gray-400">{`${
              selectedModel ? selectedModel + "'s pickups" : ""
            }`}</label>
          </div>

          <div className="flex w-1/2 flex-col pl-7 sm:mx-10">
            <div className="mb-3 mr-4 flex items-center">
              <input
                id="stock-checkbox"
                type="radio"
                value="Stock Pickups"
                checked={selectedPickups === "Stock Pickups"}
                onChange={(e) => handleChange("selectedPickups", e.target.value)}
                className="h-4 w-4 rounded focus:outline-none"
              />
              <label htmlFor="stock-checkbox" className="ml-2 text-xs font-medium text-gray-600">
                Stock Pickups
              </label>
            </div>
            <div className="mb-3 mr-4 flex items-center">
              <input
                id="custom-checkbox"
                type="radio"
                value="Custom Pickups"
                checked={selectedPickups === "Custom Pickups"}
                onChange={(e) => handleChange("selectedPickups", e.target.value)}
                className="h-4 w-4 rounded focus:outline-none"
              />
              <label htmlFor="custom-checkbox" className="ml-2 text-xs font-medium text-gray-600">
                Custom Pickups
              </label>
            </div>
          </div>
        </div>
      )}

      {selectedPickups && <div className="mt-9 flex h-11 items-center justify-center">NEXT</div>}
    </>
  );
}
