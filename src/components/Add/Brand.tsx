import SelectInput from "../Common/SelectInput";
import Stepper from "./Stepper";
import { guitars, neck } from "./data";

interface BrandProps {
  selectedBrand: string | null;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string | null>>;
  selectedModel: string | null;
  setSelectedModel: React.Dispatch<React.SetStateAction<string | null>>;
  selectedNeckShape: string | null;
  setSelectedNeckShape: React.Dispatch<React.SetStateAction<string | null>>;
  selectedNeckWood: string | null;
  setSelectedNeckWood: React.Dispatch<React.SetStateAction<string | null>>;
  selectedFingerboard: string | null;
  setSelectedFingerboard: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Brand({
  selectedBrand,
  setSelectedBrand,
  selectedModel,
  setSelectedModel,
  selectedNeckShape,
  setSelectedNeckShape,
  selectedNeckWood,
  setSelectedNeckWood,
  // selectedFingerboard,
  setSelectedFingerboard,
}: BrandProps) {
  const getPopularModelsByBrand = (brandName: string) => {
    const selectedGuitar = guitars.find((guitar) => guitar.name === brandName);
    return selectedGuitar ? selectedGuitar.popularModels.map((model) => model.name) : [];
  };

  const handleChange = (field: keyof BrandProps, value: string | null) => {
    if (field === "selectedBrand") {
      setSelectedBrand(value);
      setSelectedModel(null); // Reset when the brand changes
    } else if (field === "selectedModel") {
      setSelectedModel(value);
      setSelectedNeckShape(null); // Reset when the model changes
    } else if (field === "selectedNeckShape") {
      setSelectedNeckShape(value);
      setSelectedNeckWood(null);
    } else if (field === "selectedNeckWood") {
      setSelectedNeckWood(value);
      setSelectedFingerboard(null);
    } else if (field === "selectedFingerboard") {
      setSelectedFingerboard(value);
    }
  };

  return (
    <>
      <div className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 transform">
        <Stepper />
      </div>

      <SelectInput
        title="Pick Brand"
        label={`One of ${guitars.length} guitar brands`}
        id="guitarBrands"
        options={guitars.map((guitar) => ({ value: guitar.name, label: guitar.name }))}
        onChange={(e) => handleChange("selectedBrand", e.target.value)}
      />

      {selectedBrand && (
        <SelectInput
          title="Pick Brand's Model"
          label={`${selectedBrand ? selectedBrand + "'s Model" : ""}`}
          id="guitarModels"
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
          onChange={(e) => handleChange("selectedNeckShape", e.target.value)}
          options={neck.shapes.map((shape) => ({ value: shape.name, label: shape.name }))}
        />
      )}

      {selectedNeckShape && (
        <SelectInput
          title="Pick Neck Wood"
          label={`${selectedModel ? selectedModel + "'s neck wood" : ""}`}
          id="neckWood"
          onChange={(e) => handleChange("selectedNeckWood", e.target.value)}
          options={neck.woods.map((wood) => ({ value: wood.name, label: wood.name }))}
        />
      )}

      {selectedNeckWood && (
        <SelectInput
          title="Pick Fingerboard"
          label={`${selectedModel ? selectedModel + "'s fingerboard" : ""}`}
          id="neckWood"
          onChange={(e) => handleChange("selectedFingerboard", e.target.value)}
          options={neck.fingerboards.map((fingerboard) => ({ value: fingerboard.name, label: fingerboard.name }))}
        />
      )}
    </>
  );
}
