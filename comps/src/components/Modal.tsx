import { createPortal } from "react-dom";
export default function Modal({ onClose }: { onClose: () => void }) {
  return createPortal(
    <div>
      <div
        className="absolute bg-gray-500 inset-0 opacity-80"
        onClick={onClose}
      ></div>
      <div className="absolute inset-40 p-10 bg-blue-500 text-white">
        Message
      </div>
    </div>,
    document.querySelector(".modal")!
  );
}
