import { ReactChild, ReactFragment, ReactPortal } from 'react';
import './Card.css';

const Card = (props: { className?: string; children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
    let classes = 'card';
    if(props.className) classes += props.className;

    return (<div className={classes}>{props.children}</div>);
}

export default Card;