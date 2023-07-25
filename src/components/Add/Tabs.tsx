import React, { useState } from "react";
import TabButton from "./TabButton";
import type { TabsProps } from "@/types";

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState("brand");

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  return (
    <>
      <div className="relative flex items-center justify-around py-2 font-thin text-gray-800">
        <div className="absolute left-0 top-0 -z-20 hidden h-full w-screen max-w-xl justify-center bg-gradient-to-b from-transparent via-red-900 to-transparent sm:flex" />
        <div className="absolute left-[1px] top-0 -z-10 hidden h-full w-screen max-w-[574px] justify-center bg-white sm:flex" />
        {tabs.map(({ label, value, icon }) => (
          <TabButton key={value} label={label} icon={icon} active={activeTab === value} onClick={() => handleTabClick(value)} />
        ))}
      </div>

      <div className="absolute left-0 top-32 z-50 h-[1px] w-screen bg-gradient-to-r from-transparent via-red-900 to-transparent" />

      <div className="relative flex w-full p-4">
        <div className="absolute left-0 top-0 -z-20 mt-4 hidden h-[65vh] w-screen max-w-xl justify-center bg-gradient-to-b from-transparent via-red-900 to-transparent sm:flex" />
        <div className="absolute left-[1px] top-0 -z-10 mt-4 hidden h-[65vh] w-screen max-w-[574px] justify-center bg-white sm:flex" />

        {tabs.map(({ value, desc }) => (
          <div
            key={value}
            className={`mt-16 w-full items-stretch text-sm font-normal text-gray-600 ${activeTab === value ? "flex flex-col" : "hidden"}`}
          >
            {desc}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
