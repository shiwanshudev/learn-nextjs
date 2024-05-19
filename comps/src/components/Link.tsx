import { useContext } from "react";
import NavigationContext from "../context/navigation";
export default function Link({ to, children }: { children: any; to: string }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate(to);
  };

  return <a onClick={handleClick}>{children}</a>;
}
