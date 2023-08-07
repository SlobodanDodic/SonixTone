import type { DetailQuillType } from "@/types";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "2" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image", "video"],
  ],
  clipboard: { matchVisual: false },
};

const formats = ["header", "bold", "italic", "underline", "color", "background", "ordered", "bullet", "indent", "link", "image", "video"];

export default function DetailEditor({ editor, setEditor }: DetailQuillType) {
  const handleChange = (text: string) => {
    setEditor(text);
  };

  return (
    <QuillNoSSRWrapper
      modules={modules}
      formats={formats}
      placeholder="Add description..."
      value={editor}
      onChange={handleChange}
      className="max-w-[572px] text-xs text-gray-600"
    />
  );
}
