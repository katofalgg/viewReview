import React from "react";
import "./Modal.css";

interface IModalProps {
    active: boolean,
    setActive: any,
};
const Modal: React.FC<IModalProps> = ({active, setActive, children}) => {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal_content active' : 'modal_content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};
export default Modal;
