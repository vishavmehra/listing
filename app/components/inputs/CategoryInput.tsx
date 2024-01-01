'use client';

import { IconType } from "react-icons";

interface CategoryInputProps {
    icon: IconType;
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;

}

const CategoryInput: React.FC<CategoryInputProps> = ({
    icon: Icon,
    label,
    selected,
    onClick
}) => {
    return (  
        <div
            onClick={() => onClick(label)}
        className={`
           rounded-xl
           border-2
           p-4
           flex
           flex-col
           gap-3
           hover:border-[#2999FF]
           transition
           cursor-pointer
           no-scrollbar
           ${selected? 'border-[#2999FF]' : 'border-neutral-200'}
        `}
        >
            <div className={`
            text-neutral-200
            `}><Icon size={30}/>
            </div>
            <div className="font-semibold text-neutral-200">
                {label}
            </div>
        </div>
    );
}
 
export default CategoryInput;