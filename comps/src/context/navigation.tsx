import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext({});

function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // forward and back buttons
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);
  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };
  return (
    <NavigationContext.Provider value={{ navigate, currentPath }}>
      {currentPath}
      <button onClick={() => navigate("/accordion")}>Accordion</button>
      <button onClick={() => navigate("/dropdown")}>Dropdown</button>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
