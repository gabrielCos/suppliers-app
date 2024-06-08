import { ReactNode } from "react"

import "./Modal.css"
import { CloseOutlined } from "@ant-design/icons";

type ModalProps = {
    children: ReactNode;
    title: string;
    open: boolean;
    type: "info" | "form" | "edit"
    onClose?: () => void;
}

const colorClassByType: Record<string, string> = {
    "info": "modal-content-purple",
    "form": "",
    "edit": "modal-content-blue"
}

export function Modal({ children, open, title, type, onClose }: ModalProps) {

    if (!open) return null;

    const colorByType = colorClassByType[type];

    return (
        <div className="modal">
            <div className="modal-overlay" onClick={onClose}></div>
            <div className={`modal-content ${colorByType}`}>
                <div className="modal-content-header">
                    <h3>{title}</h3>
                </div>
                {children}
            </div>
        </div>
    )
}