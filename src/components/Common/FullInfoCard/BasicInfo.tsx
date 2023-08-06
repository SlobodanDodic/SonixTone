import { conditions, guitars } from "@/components/Data";
import { useFormState } from "@/context/FormContext";
import { FaPencilRuler } from "react-icons/fa";
import { BiTachometer } from "react-icons/bi";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function BasicInfo() {
  const { formData } = useFormState();
  const { data: sessionData } = useSession();

  const selectedGuitarBrand = guitars.find((guitar) => guitar.name === formData?.selectedBrand);
  const selectedGuitarModel = selectedGuitarBrand?.popularModels.find((model) => model.name === formData?.selectedModel);

  function getBackgroundColor(selectedCondition: string | undefined) {
    const selected = conditions.find((condition) => condition.name === selectedCondition);
    if (selected) {
      return selected.bg;
    }
    return "bg-gray-600";
  }

  const selectedCondition = formData?.selectedCondition;
  const backgroundColor = getBackgroundColor(selectedCondition);

  return (
    <div className="flex w-screen max-w-xl flex-col text-xs sm:flex-row">
      {/* LEFT */}
      <div className="flex w-screen flex-col items-start border-b border-gray-200 px-4 py-2 sm:w-1/2 sm:items-end sm:border-none">
        <h1 className="pb-2 text-xl font-semibold">
          {formData?.selectedBrand} {formData?.selectedModel}
        </h1>

        <span className="inline-flex items-center rounded border border-gray-50 bg-indigo-600 px-2.5 py-0.5 text-xs font-medium text-gray-50">
          <FaPencilRuler className="mr-1.5 h-2.5 w-2.5" />
          {selectedGuitarModel?.style}
        </span>

        <span
          className={`inline-flex items-center rounded border border-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-50 ${backgroundColor}`}
        >
          <BiTachometer className="mr-1.5 h-3.5 w-3.5" />
          {selectedCondition} condition
        </span>

        <div className="mt-2 pt-[2px] text-start text-gray-500 sm:text-end">
          <p>
            Brand {formData?.selectedBrand} was founded in {selectedGuitarBrand?.country} by {selectedGuitarBrand?.founder} in{" "}
            {selectedGuitarBrand?.established}. More info about {formData?.selectedBrand} you can find on their website:{" "}
            <a href={selectedGuitarBrand?.website} target="_blank" className="font-bold text-gray-600">
              {selectedGuitarBrand?.website}
            </a>
          </p>
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex w-screen flex-col border-gray-200 px-4 py-2 sm:w-1/2 sm:border-l">
        <h1 className="pb-2 text-xl font-semibold">{sessionData?.user?.name}</h1>
        <h1 className="text pb-2 font-semibold">{sessionData?.user?.email}</h1>
        <Image src={sessionData?.user?.image ?? "/avatar.png"} alt="Profile" className="rounded-full" width={70} height={70} />

        {/* <div className="flex">
          <div className="flex pr-3">L</div>
          <div className="flex pr-3">R</div>
        </div> */}
      </div>
    </div>
  );
}
