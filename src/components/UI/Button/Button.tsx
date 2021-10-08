import { MouseEventHandler, ReactChild, ReactFragment, ReactPortal } from 'react';
import './Button.css';

const Button = (props: { type: "button" | "submit" | "reset" | undefined; onClick: MouseEventHandler<HTMLButtonElement> | undefined; children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
    return (
        <button type={props.type} className="button" onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;