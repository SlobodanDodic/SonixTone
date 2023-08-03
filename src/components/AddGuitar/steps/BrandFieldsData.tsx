import { useFormState } from "@/context/FormContext";
import type { BrandFieldsDataProps, BrandFieldsDataType } from "@/types";
import { guitars, neck, pickupOptions } from "../data";

const getPopularModelsByBrand = (brandName: string) => {
  const selectedGuitar = guitars.find((guitar) => guitar.name === brandName);
  return selectedGuitar ? selectedGuitar.popularModels.map((model) => model.name) : [];
};

export const BrandFieldsData: React.FC<BrandFieldsDataProps> = ({ children }) => {
  const { formData } = useFormState();
  const selectedBrand = formData?.selectedBrand ?? "";
  const selectedModel = formData?.selectedModel ?? "";

  const formFields: BrandFieldsDataType = [
    {
      title: "Pick Brand",
      label: `One of ${guitars.length} guitar brands`,
      inputId: "selectedBrand",
      defaultValue: "Select Brand",
      options: guitars.map((guitar) => ({ value: guitar.name, label: guitar.name })),
    },
    {
      title: "Pick Brand's Model",
      label: `${selectedBrand.toString()}'s Model`,
      inputId: "selectedModel",
      defaultValue: "Select Model",
      options: getPopularModelsByBrand(selectedBrand).map((model) => ({ value: model, label: model })),
      dependencies: ["selectedBrand"],
    },
    {
      title: "Pick Neck Shape",
      label: `${selectedBrand.toString()}'s Model`,
      inputId: "selectedNeckShape",
      defaultValue: "Select Shape",
      options: neck.shapes.map((shape) => ({ value: shape.name, label: shape.name })),
      dependencies: ["selectedModel"],
    },
    {
      title: "Pick Neck Wood",
      label: `${selectedModel.toString()}'s neck wood`,
      inputId: "selectedNeckWood",
      defaultValue: "Select Wood",
      options: neck.woods.map((wood) => ({ value: wood.name, label: wood.name })),
      dependencies: ["selectedNeckShape"],
    },
    {
      title: "Pick Fingerboard",
      label: `${selectedModel.toString()}'s fingerboard`,
      inputId: "selectedFingerboard",
      defaultValue: "Select Fingerboard",
      options: neck.fingerboards.map((fingerboard) => ({ value: fingerboard.name, label: fingerboard.name })),
      dependencies: ["selectedNeckWood"],
    },
    {
      title: "Pickups configuration",
      label: `${selectedModel.toString()}'s pickups`,
      inputId: "selectedPickups",
      defaultValue: "Select Pickups",
      options: pickupOptions.map((pickup) => ({ value: pickup.name, label: pickup.name })),
      dependencies: ["selectedFingerboard"],
    },
  ];

  return <>{children(formFields)}</>;
};
