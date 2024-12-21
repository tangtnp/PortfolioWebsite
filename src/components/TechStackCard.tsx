import React from "react";

interface TechStackCardProps {
  icon: string; // Path to the image in public folder
  title: string;
  className?: string; // Optional additional class for styling
}

const TechStackCard: React.FC<TechStackCardProps> = ({ icon, title, className = "" }) => {
  return (
    <div
      className={`flex items-center bg-gray-800 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:bg-gray-700 ${className}`}
    >
      <img
        src={icon}
        alt={`${title} icon`}
        className="w-8 h-8 mr-4"
        loading="lazy"
        aria-label={title}
      />
      <span className="text-white font-semibold">{title}</span>
    </div>
  );
};

export default TechStackCard;
