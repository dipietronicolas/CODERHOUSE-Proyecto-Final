import { useEffect, useState } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
//https://picsum.photos/300/300?random=9
import { getStorageRef } from '../../firebase/firebase';


export const Item = (props) => {

  const [picRef, setPicRef] = useState(null);

  useEffect(() => {
    if (props.item.picture) {
      const storageRef = getStorageRef();
      const pic_name = props.item.picture;
      const final_ref = storageRef.child(pic_name);
      console.log(final_ref);

      // Get the download URL
      final_ref.getDownloadURL()
        .then((url) => {
          setPicRef(url);
        }).catch((error) => {
          console.log(error);
        });
    }


  }, [props])

  return (
    <div className="Card">
      {/*<img className="card-img-top" src={props.item.pageURLBig} alt="Card cap"></img>*/}
      <div className="Card-img-container">
        <img className="Card-img-top" src={picRef ? picRef : props.item.pageURLBig} alt="Card cap"></img>
      </div>

      <div className='Card-body px-2'>
        <div className="Card-header">
          <p className="Card-title">{props.item.title}</p>
          <p className="Card-paragraph">Precio: <NumberFormat value={props.item.price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
        </div>
        <Link
          to={`/item/${props.item.id}`}
          className="btn btn-warning">Ver detalle</Link>
      </div>
    </div>
  )
}
