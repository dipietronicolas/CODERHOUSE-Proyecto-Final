import './Item.css';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

export const Item = (props) => {


  return (
    <div className="Card">
      <img className="card-img-top" src={props.item.pageURLBig} alt="Card cap"></img>
      <div className='Card-body px-2'>
        <div className="Card-header">
          <h5 className="Card-title">{props.item.title}</h5>
          <p className="Card-paragraph">Precio: <NumberFormat value={props.item.price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'}/></p>
        </div>
        <Link
          to={`/item/${props.item.id}`}
          className="btn btn-warning">Ver detalle</Link>
      </div>
    </div>
  )
}
