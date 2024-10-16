import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  bgColor?: string;
  borderColor?: string;
  icon?: ReactNode;
  suffixIcon?: ReactNode;
  prefixIcon?: ReactNode;
}

const Button = ({
  children,
  onClick,
  className,
  variant = "primary",
  bgColor = "bg-blue-500",
  borderColor = "border-transparent",
  icon,
  suffixIcon,
  prefixIcon,
}: ButtonProps) => {

    
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return `${bgColor} text-white`;
      case "secondary":
        return "bg-gray-500 text-white";
      case "outline":
        return `border ${borderColor} text-gray-700`;
      default:
        return "";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center py-2 px-4 rounded-lg font-medium focus:outline-none ${getVariantStyles()} ${className}`}
    >
      {prefixIcon && <span className="mr-2">{prefixIcon}</span>}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {suffixIcon && <span className="ml-2">{suffixIcon}</span>}
    </button>
  );
};

export default Button;
