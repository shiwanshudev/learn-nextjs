import Button from "../components/Button";
export default function App() {
  const handleClick = () => console.log("hey");
  return (
    <div className=" flex items-center justify-center">
      <Button primary rounded outline onClick={handleClick}>
        Primary
      </Button>
      <Button secondary rounded>
        Secondary
      </Button>
      <Button warning rounded>
        Secondary
      </Button>
      <Button success rounded>
        Secondary
      </Button>
      <Button danger rounded>
        Secondary
      </Button>
    </div>
  );
}
