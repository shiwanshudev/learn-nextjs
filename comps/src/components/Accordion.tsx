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
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setExpandedIndex((current) => {
      if (current === index) {
        return -1;
      } else {
        return index;
      }
    });
  };

  return (
    <div>
      {data.map((fact, index) => {
        return (
          <div
            key={fact.id}
            onClick={() => handleClick(index)}
            className="cursor-pointer"
          >
            <div className="p-3 flex items-center justify-between w-full border-b bg-gray-100">
              <div>{fact.label}</div>{" "}
              <div className="text-2xl">
                {" "}
                {expandedIndex === index ? "⌄" : "›"}
              </div>
            </div>
            {expandedIndex === index && (
              <div className="border-b p-3">{fact.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
