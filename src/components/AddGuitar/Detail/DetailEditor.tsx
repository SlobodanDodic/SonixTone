import type { DetailQuillType } from "@/types";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image", "video"],
  ],
  clipboard: { matchVisual: false },
};

const formats = ["header", "font", "bold", "italic", "underline", "list", "bullet", "indent", "link", "image", "video"];

export default function DetailEditor({ editor, setEditor }: DetailQuillType) {
  const handleChange = (text: string) => {
    setEditor(text);
  };

  return (
    <QuillNoSSRWrapper
      modules={modules}
      formats={formats}
      theme="snow"
      placeholder="Add description..."
      value={editor}
      onChange={handleChange}
      className="max-w-[572px] text-xs text-gray-600"
    />
  );
}
