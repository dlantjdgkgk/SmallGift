import { ReactNode } from "react";
import reactDom from "react-dom";

interface ModalType {
  children: ReactNode;
}

const Portal = ({ children }: ModalType) => {
  const element = document.getElementById("modal") as HTMLElement;
  return reactDom.createPortal(children, element);
};

export default Portal;
