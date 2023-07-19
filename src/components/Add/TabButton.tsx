import type { ReactNode } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

interface TabButtonProps {
  label: string;
  icon: ReactNode;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, icon, active, onClick }) => {
  return (
    <button onClick={onClick} className="relative flex h-8 items-center text-sm transition-all focus:outline-none">
      <span className="mr-1">{icon}</span>
      <span>{label}</span>
      {active && (
        <span className="absolute -right-3 left-auto top-2/4 mt-[2px] -translate-y-1/2 translate-x-1/2">
          <BiSolidDownArrow />
        </span>
      )}
    </button>
  );
};

export default TabButton;
