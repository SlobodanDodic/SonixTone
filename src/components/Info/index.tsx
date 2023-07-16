import Card from "./Card";
import Leftside from "./Leftside";

export default function Info() {
  return (
    <div className="container my-5 flex flex-col sm:flex-row">
      <Leftside />
      <div className="mt-4 w-full sm:m-0 sm:w-2/3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
