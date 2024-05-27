import { useContext } from "react";
import NavigationContext from "../context/navigation";
export default function Link({ to, children }: { children: any; to: string }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e: React.SyntheticEvent) => {
    if (e.ctrlKey || e.metaKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className="p-3 text-lg text-blue-500">
      {children}
    </a>
  );
}
