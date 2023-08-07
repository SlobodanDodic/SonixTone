import { useFormState } from "@/context/FormContext";
import BasicInfo from "./BasicInfo";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Gallery from "./Gallery";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = { toolbar: [] };

export default function FullInfoCard() {
  const { formData } = useFormState();

  return (
    <div className="flex flex-col text-gray-600">
      <BasicInfo />

      {!!formData?.editor ? (
        <div className="flex flex-col items-center">
          <h2 className="-mb-5">Guitar description:</h2>
          <QuillNoSSRWrapper theme="snow" value={formData?.editor} modules={modules} className="max-w-[572px] text-xs text-gray-600" />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="-mb-5">There is no guitar description at this moment.</h2>
        </div>
      )}

      <Gallery />
    </div>
  );
}
