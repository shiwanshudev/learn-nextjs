import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";

export default function App() {
  return (
    <>
      <div>
        <Link to="/accordion">Accordion</Link>
        <Link to="/dropdown">Dropdown</Link>
        <Link to="/modal">Modal</Link>
      </div>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>{" "}
        <Route path="/modal">
          <ModalPage />
        </Route>
      </div>
    </>
  );
}
