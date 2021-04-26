import React from 'react'
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import defaultImg from '../images/room-1.jpeg';

function Room({room}) {
    const { name, roomDetail, images, price,size,type } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>{price>0?"$"+price:"Free"}</h6>
          <p>{size} Hours</p>
          <h6>{type}</h6>
        </div>
        <Link to={`/rooms/${roomDetail}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  )
}
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    roomDetail: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Room;