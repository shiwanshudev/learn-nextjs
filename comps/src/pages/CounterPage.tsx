import { useEffect, useState } from "react";
import Button from "../components/Button";

function useCounter(initialCount: number) {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log("Count updated: " + count);
  }, [count]);
  const handleClick = () =>
    setCount((currentCount: number) => currentCount + 1);

  return { count, increment: handleClick };
}

export default function CounterPage({
  initialCount,
}: {
  initialCount: number;
}) {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <h2>Count is {count}</h2>
      <Button primary onClick={increment}>
        Increment
      </Button>
    </div>
  );
}
