import React from "react";

interface FeatureCardProps {
  title: string; // Feature title
  description: string; // Description of the feature
  tag: string; // Tag categorizing the feature
  status: "completed" | "in-progress"; // Status of the feature
  className?: string; // Optional additional class for styling
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  tag,
  status,
  className = "",
}) => {
  return (
    <div
      className={`relative bg-gray-800 p-6 rounded-lg shadow-lg text-white transform transition-transform hover:scale-105 hover:bg-gray-700 hover:shadow-2xl ${className}`}
    >
      {/* Status Badge */}
      <div
        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
          status === "completed" ? "bg-green-700 text-green-300" : "bg-yellow-700 text-yellow-300"
        }`}
      >
        {status === "completed" ? "✔ completed" : "⏳ in progress"}
      </div>

      {/* Icon */}
      <div className="bg-gray-700 p-3 rounded-md mb-4 inline-flex items-center justify-center">

      </div>

      {/* Title */}
      <h3 className="font-bold text-lg mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>

      {/* Tag */}
      <div
        className={`inline-block text-xs font-semibold px-2 py-1 rounded-md ${
          tag === "Core"
            ? "bg-yellow-600 text-yellow-300"
            : tag === "Discovery"
            ? "bg-red-700 text-red-300"
            : "bg-yellow-600 text-yellow-300"
        }`}
      >
        {tag}
      </div>
    </div>
  );
};

export default FeatureCard;
