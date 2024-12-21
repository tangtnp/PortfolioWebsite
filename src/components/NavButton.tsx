// NavButton.tsx
import React from "react";

interface NavButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 text-gray-400 hover:text-white border-b-2 ${
        isActive ? "border-blue-500 text-white" : "border-transparent"
      }`}
    >
      {label}
    </button>
  );
};

export default NavButton;
