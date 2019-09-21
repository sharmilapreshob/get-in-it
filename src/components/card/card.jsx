import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

const Card = (props) => {
  return(
    <div>
    <ul className="row card-container">
    {
      props.cards.map((card, i) => {
        return <li className="card" key={card.id}>
          <img className="card-img-top" src={`https://picsum.photos/id/${card.id}/200/300`} alt="card image"/>
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.body}</p>
            <Link to={{ pathname: '/card', state: { cardId: card.id} }} className="btn btn-primary">View Details</Link>
          </div>
        </li>
      }

      )
    }
    </ul>
    </div>
  );
}

export default Card;
