import React, { useState } from "react";
import TabButton from "./TabButton";
import type { TabsProps } from "@/pages/add";
import Stepper from "./Stepper";

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState("brand");

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  return (
    <>
      <div className="flex items-center justify-around border border-gray-800 bg-gray-800 py-2 font-thin text-white sm:rounded-t">
        {tabs.map(({ label, value, icon }) => (
          <TabButton key={value} label={label} icon={icon} active={activeTab === value} onClick={() => handleTabClick(value)} />
        ))}
      </div>

      <div className="relative flex w-full p-4">
        {/* gradient borders */}
        <div className="absolute left-0 top-0 -z-20 mt-4 hidden h-[65vh] w-screen max-w-xl justify-center bg-gradient-to-b from-transparent via-red-900 to-transparent sm:flex" />
        <div className="absolute left-[1px] top-0 -z-10 mt-4 hidden h-[65vh] w-screen max-w-[574px] justify-center bg-white sm:flex" />

        {tabs.map(({ value, desc }) => (
          <div
            key={value}
            className={`mt-2 w-1/2 items-end text-sm font-normal text-gray-600 ${activeTab === value ? "flex flex-col" : "hidden"}`}
          >
            {desc}
          </div>
        ))}
        <div className="mt-4 flex w-1/2 justify-center text-xs">
          <Stepper />
        </div>
      </div>
    </>
  );
};

export default Tabs;
