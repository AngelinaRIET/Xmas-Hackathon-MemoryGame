import React from 'react';
import './Card.css';

const onClick = (props) => {
	props.randomCards();
	props.updateScore(props.id);
}

const Card = (props) => (
    <div>
      <a onClick={() => onClick(props)}>
        <img className="thumbnail" src={props.image} />
      </a>
 </div>
)

export default Card