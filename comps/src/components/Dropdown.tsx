import { useState } from "react";

interface Option {
  value: string;
  label: string;
}
type PropsType = {
  options: Option[];
  value: Option | null;
  onChange: (option: Option | null) => void;
};

export default function Dropdown({ options, value, onChange }: PropsType) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: Option | null) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-zinc-50 border border-solid border-zinc-200 rounded-md cursor-pointer px-5">
        <div onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}>
          {value?.label || null}
        </div>
        {isOpen &&
          options.map((option) => (
            <div onClick={() => handleOptionClick(option)} key={option.value}>
              {option.label}
            </div>
          ))}
      </div>
    </div>
  );
}
