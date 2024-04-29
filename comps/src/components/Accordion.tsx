import { useState } from "react";

const data = [
  {
    id: 1,
    label: "What is the capital of France?",
    content: "Paris",
  },
  {
    id: 2,
    label: "Who wrote 'Romeo and Juliet'?",
    content: "William Shakespeare",
  },
  {
    id: 3,
    label: "What is the chemical symbol for water?",
    content: "H2O",
  },
  {
    id: 4,
    label: "What is the largest planet in our solar system?",
    content: "Jupiter",
  },
  {
    id: 5,
    label: "What is the square root of 64?",
    content: "8",
  },
  {
    id: 6,
    label: "Who painted the 'Mona Lisa'?",
    content: "Leonardo da Vinci",
  },
  {
    id: 7,
    label: "What is the capital of Japan?",
    content: "Tokyo",
  },
  {
    id: 8,
    label: "What is the formula for calculating the area of a circle?",
    content: "πr^2",
  },
  {
    id: 9,
    label: "Who discovered the theory of relativity?",
    content: "Albert Einstein",
  },
  {
    id: 10,
    label: "What is the tallest mountain in the world?",
    content: "Mount Everest",
  },
];

export default function Accordion() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (index: number) => {
    setExpandedIndex(index);
    console.log(expandedIndex);
  };

  return (
    <div>
      {data.map((fact, index) => {
        return (
          <div className="" key={fact.id} onClick={() => handleClick(index)}>
            <div>{fact.label}</div>
            {expandedIndex === index && <div>{fact.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
