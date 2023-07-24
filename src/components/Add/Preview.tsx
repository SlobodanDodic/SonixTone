import React from "react";
import CustomButton from "../Common/CustomButton";
import { BsSendCheckFill, BsSendSlashFill } from "react-icons/bs";

interface PreviewProps {
  selectedFingerboard: string | null;
}

const Preview: React.FC<PreviewProps> = ({ selectedFingerboard }) => {
  return (
    <div className="flex items-center justify-center">
      <CustomButton type="submit" className="flex rounded-full px-4" disabled={selectedFingerboard === null}>
        {selectedFingerboard === null ? (
          <BsSendSlashFill className="h-6 w-6" />
        ) : (
          <div className="flex items-center justify-center text-xs">
            <BsSendCheckFill className="mr-2 h-6 w-6" />
            Send
          </div>
        )}
      </CustomButton>
    </div>
  );
};

export default Preview;
