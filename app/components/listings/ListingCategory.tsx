'use client';

import { IconType } from "react-icons";

interface CategoryViewProps {
  icon: IconType,
  label: string,
  description: string
}

const CategoryView: React.FC<CategoryViewProps> = ({ 
  icon: Icon,
  label,
  description
 }) => {
  return ( 
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <Icon size={40} className="text-[#2999FF]" />
        <div className="flex flex-col">
            <div 
              className="text-lg text-gray-200 font-semibold"
            >
              {label}
            </div>
            <div 
              className="text-gray-300 font-light"
            >
              {description}
            </div>
        </div>
      </div>
    </div>
   );
}
 
export default CategoryView;