import Card from "./Card";
import Leftside from "./Leftside";

export default function Info() {
  return (
    <div className="container my-5 flex flex-col sm:flex-row">
      <div className="flex w-full flex-col items-end border-b border-gray-300 pr-3 sm:mr-3 sm:w-1/3 sm:border-b-0 sm:border-r">
        <Leftside />
      </div>
      <div className="w-full sm:w-2/3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
