import React, { Component } from 'react'

import defaultBcg from '../images/room-1.jpeg';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import StyledHero from "../components/StyledHero";

import { RoomContext } from "../context";

import { Link } from 'react-router-dom';

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomDetail: this.props.match.params.roomDetail,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.roomDetail);
    console.log(room);

    if (!room) {
      return (
        <div className="error">
          <h3> no such Conference could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      city,
      size,
      price,
      extras,
      HandsOn,
      certification,
      images
    } = room;
    const [main, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>Duration : {size} Hours</h6>
              <h6>
                Location :
                {city}
              </h6>
              <h6>{HandsOn ? "HandsOn session" : "Theoritical session"}</h6>
              <h6>{certification ? "Certicication included":"No certificates"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}