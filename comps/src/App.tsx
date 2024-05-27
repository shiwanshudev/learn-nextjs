import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import CounterPage from "./pages/CounterPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";

export default function App() {
  return (
    <>
      <div>
        <Link to="/accordion">Accordion</Link>
        <Link to="/dropdown">Dropdown</Link>
        <Link to="/modal">Modal</Link>
        <Link to="/counterpage">Counter Page</Link>
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
        <Route path="/counterpage">
          <CounterPage initialCount={5} />
        </Route>
      </div>
    </>
  );
}
