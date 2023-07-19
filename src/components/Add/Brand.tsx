import SelectInput from "../Common/SelectInput";
import { guitars, neck } from "./data";

interface BrandProps {
  selectedBrand: string | null;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string | null>>;
  selectedModel: string | null;
  setSelectedModel: React.Dispatch<React.SetStateAction<string | null>>;
  selectedNeckShape: string | null;
  setSelectedNeckShape: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Brand({
  selectedBrand,
  setSelectedBrand,
  selectedModel,
  setSelectedModel,
  selectedNeckShape,
  setSelectedNeckShape,
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
    }
  };

  return (
    <>
      <SelectInput
        label={`Select one of ${guitars.length} guitar brands`}
        id="guitarBrands"
        title="Brand™"
        options={guitars.map((guitar) => ({ value: guitar.name, label: guitar.name }))}
        onChange={(e) => handleChange("selectedBrand", e.target.value)}
      />

      {selectedBrand && (
        <SelectInput
          label={`Select a model of ${selectedBrand}™`}
          id="guitarModels"
          title="Model≛"
          onChange={(e) => handleChange("selectedModel", e.target.value)}
          options={getPopularModelsByBrand(selectedBrand).map((model, i) => ({
            value: model,
            label: model,
          }))}
        />
      )}

      {selectedModel && (
        <SelectInput
          label={`Select a model of ${selectedBrand}™`}
          id="neckShape"
          title="Neck shape∅"
          onChange={(e) => handleChange("selectedNeckShape", e.target.value)}
          options={neck.shapes.map((shape) => ({ value: shape.name, label: shape.name }))}
        />
      )}
    </>
  );
}
