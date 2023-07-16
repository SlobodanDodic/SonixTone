"use client";

export default function Info() {
  return (
    <div className="container my-5 flex flex-col sm:flex-row">
      <div className="mr-3 flex w-full flex-col items-end border-r border-gray-300 pr-3 sm:w-1/3">
        <p>First content</p>
        <p>First part content content</p>
        <p>First part content</p>
      </div>
      <div className="w-full sm:w-2/3">Second part content</div>
    </div>
  );
}
