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
  return (
    <NavigationContext.Provider value={{}}>
      {currentPath}
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
