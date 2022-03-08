import './FactItem.css';
import Card from '../../components/UI/Card/Card';

interface Props {
  fact: string
  certainty: string
}

const FactItem = ( props: Props ) => {
  return (
    <li>
        <Card className='fact-item'>
            <div className='fact-item__description'>
                <h2>{props.fact}</h2>
                <div className='fact-item__certainty'>{props.certainty}</div>
            </div>
        </Card>
    </li>
  )
}

export default FactItem