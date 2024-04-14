import React, { createContext, useState } from "react";
const BooksContext = createContext({});
function Provider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const valueToShare = {
    count,
    incrementCount,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
export { Provider };
