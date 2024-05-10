import Dropdown from "./components/Dropdown";
import { useState } from "react";

interface Option {
  value: string;
  label: string;
}
const asianCountries = [
  { label: "India", value: "India" },
  { label: "China", value: "China" },
  { label: "Japan", value: "Japan" },
  { label: "South Korea", value: "South Korea" },
  { label: "Indonesia", value: "Indonesia" },
  { label: "Vietnam", value: "Vietnam" },
  { label: "Thailand", value: "Thailand" },
  { label: "Malaysia", value: "Malaysia" },
  { label: "Philippines", value: "Philippines" },
  { label: "Singapore", value: "Singapore" },
];
export default function App() {
  const [selected, setSelected] = useState<null | Option>(null);

  const handleSelected = (option: Option | null) => {
    setSelected(option);
  };
  return (
    <Dropdown
      options={asianCountries}
      value={selected}
      onChange={handleSelected}
    />
  );
}
