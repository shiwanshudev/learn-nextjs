import Button from "./Button";
export default function App() {
  return (
    <div className=" flex items-center justify-center">
      <Button primary rounded outline>
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
