import React from "react";

interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => (
  <button
    className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
    onClick={onClick}
  >
    Send to PayU
  </button>
);

export default SubmitButton;
