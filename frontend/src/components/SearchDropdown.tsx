import { LucideIcon } from 'lucide-react';
import React from 'react';

interface SearchOption {
  id: number;
  name: string;
  icon: LucideIcon;
  bonus: string;
  color: string;
}

interface SearchDropdownProps {
  isOpen: boolean;
  searchQuery: string;
  options: SearchOption[];
  onSelectOption: (option: SearchOption) => void;
}

export default function SearchDropdown({
  isOpen,
  searchQuery,
  options,
  onSelectOption
}: SearchDropdownProps) {
  if (!isOpen) return null;

  const filteredOptions = options.filter(option =>
    option.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 max-h-96 overflow-y-auto">
      <div className="p-4">
        {filteredOptions.map((option) => {
          const IconComponent = option.icon;
          return (
            <div
              key={option.id}
              className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors duration-200"
              onClick={() => onSelectOption(option)}
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 ${option.color} rounded-lg flex items-center justify-center mr-4`}>
                  <IconComponent
                    size={20}
                    className={option.color === 'bg-black' ? 'text-white' : 'text-gray-600'}
                  />
                </div>
                <span className="text-gray-800 font-medium">{option.name}</span>
              </div>
              <span className="text-green-600 font-semibold text-sm">{option.bonus}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}