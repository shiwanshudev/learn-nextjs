import { useState, useEffect, useRef } from "react";

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
  const divEl = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: Option | null) => {
    onChange(option);
    setIsOpen(false);
  };
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!divEl?.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div>
      <div
        ref={divEl}
        className="w-48 shadow border rounded flex flex-col justify-center items-center"
      >
        <div
          onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}
          className="w-full text-center p-1 hover:bg-sky-100 duration-300 cursor-pointer shadow"
        >
          {value?.label || "Select..."}
        </div>
        {isOpen &&
          options.map((option) => (
            <div
              onClick={() => handleOptionClick(option)}
              key={option.value}
              className="w-full text-center p-1 hover:bg-sky-100 duration-100 cursor-pointer"
            >
              {option.label}
            </div>
          ))}
      </div>
    </div>
  );
}
