import React, { useState } from "react";
import TabButton from "./TabButton";

interface Tab {
  label: string;
  value: string;
  icon: any;
  desc: string | JSX.Element;
}

interface TabsProps {
  tabs: Tab[];
}

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
      <div className="relative flex w-full flex-col p-4">
        <div className="absolute left-0 top-0 -z-20 mt-4 hidden h-[65vh] w-screen max-w-lg justify-center bg-gradient-to-b from-transparent via-red-900 to-transparent sm:flex" />
        <div className="absolute left-[1px] top-0 -z-10 mt-4 hidden h-[65vh] w-screen max-w-[510px] justify-center bg-white sm:flex" />
        {tabs.map(({ value, desc }) => (
          <div
            key={value}
            className={`mt-4 w-full max-w-sm text-sm font-normal text-gray-600 ${activeTab === value ? "flex flex-col" : "hidden"}`}
          >
            {desc}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
