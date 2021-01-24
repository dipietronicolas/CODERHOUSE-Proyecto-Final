import './Item.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {

  
  return (
    <div className="Card">
      <img className="card-img-top" src={props.item.pageURLBig} alt="Card cap"></img>
      <div className='card-body px-2'>
        <h3 className="card-title">{props.item.title}</h3>
        <p>Precio: ${props.item.price}</p>
        <Link 
          to={`/item/${props.item.id}`}
          className="btn btn-warning">Ver detalle</Link>
      </div>
    </div>
  )
}
