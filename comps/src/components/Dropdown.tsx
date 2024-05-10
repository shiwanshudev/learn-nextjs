import { useState, useEffect } from "react";

interface Options {
  value: string;
  label: string;
}

export default function Dropdown({ options }: { options: Options[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      <div
        className="flex flex-col items-center justify-center bg-zinc-50 border border-solid border-zinc-200 rounded-md cursor-pointer px-5"
        onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}
      >
        {selected === "" ? "Select..." : selected}
        {isOpen &&
          options.map((country) => (
            <div onClick={() => setSelected(country.value)} key={country.value}>
              {country.label}
            </div>
          ))}
      </div>
    </div>
  );
}
