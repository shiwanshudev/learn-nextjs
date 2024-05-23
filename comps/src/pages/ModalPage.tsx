import { useState } from "react";
import Modal from "../components/Modal";
export default function ModalPage() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="relative">
      <button
        className="outline-none py-3 px-5 text-lg bg-blue-500 text-white rounded-md"
        onClick={() => setIsVisible((currentIsVisible) => !currentIsVisible)}
      >
        Modal
      </button>
      {isVisible && <Modal onClose={handleClose} />}
    </div>
  );
}
