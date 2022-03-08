import './FactItem.css';
import Card from '../../components/UI/Card/Card';
import { JSXElementConstructor, ReactChild, ReactElement, ReactFragment, ReactNodeArray, ReactPortal } from 'react';

const FactItem = (props: { fact: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; certainty: string | number | boolean | {} | ReactElement<any, string | JSXElementConstructor<any>> | ReactNodeArray | ReactPortal | null | undefined; }) => {
  return (
    <li>
        <Card className='fact-item'>
            <div className='fact-item__description'>
                <h2>{props.fact}</h2>
                <div className='fact-item__certainty'>${props.certainty}</div>
            </div>
        </Card>
    </li>
  )
}

export default FactItem