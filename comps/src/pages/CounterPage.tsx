import { useEffect, useState } from "react";
import Button from "../components/Button";

function useSomething(initialCount: number) {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log("Count updated: " + count);
  }, [count]);
  const handleClick = () =>
    setCount((currentCount: number) => currentCount + 1);

  return { count, handleClick };
}

export default function CounterPage({
  initialCount,
}: {
  initialCount: number;
}) {
  const { count, handleClick } = useSomething(initialCount);

  return (
    <div>
      <h2>Count is {count}</h2>
      <Button primary onClick={handleClick}>
        Increment
      </Button>
    </div>
  );
}
