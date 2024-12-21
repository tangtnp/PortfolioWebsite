import React from "react";

interface TechnicalDetailsCardProps {
  icon: string; // Path to the icon image
  title: string; // Title of the technical detail
  description: string; // Description of the technical detail
  className?: string; // Optional additional class for styling
}

const TechnicalDetailsCard: React.FC<TechnicalDetailsCardProps> = ({
  icon,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center p-4 bg-gray-800 rounded-md shadow-lg transform transition-transform hover:scale-105 hover:bg-gray-700 ${className}`}
    >
      <img
        src={icon}
        alt={`${title} icon`}
        className="w-8 h-8 mr-4"
        loading="lazy"
        aria-label={title}
      />
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default TechnicalDetailsCard;
