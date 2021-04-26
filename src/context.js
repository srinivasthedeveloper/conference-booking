import React, { Component } from 'react'

import items from "./data";

const RoomContext=React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    city: "world-wide",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    HandsOn: false,
    certification: false
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }
  formatData(items){
    let tempItems=items.map(item =>{
      let id=item.sys.id
      let images=item.fields.images.map(image =>image.fields.file.url);

      let room={...item.fields,images,id}
      return room;
    });
    return tempItems;
  }  

  getRoom = roomDetail => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.roomDetail === roomDetail);
    return room;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      city,
      price,
      minSize,
      maxSize,
      HandsOn,
      certification
    } = this.state;

    let tempRooms = [...rooms];
    // transform values
    // get price
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by city
    if (city !== "world-wide") {
      tempRooms = tempRooms.filter(room => room.city === city);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    //filter by HandsOn
    if (HandsOn) {
      tempRooms = tempRooms.filter(room => room.HandsOn === true);
    }
    //filter by certification
    if (certification) {
      tempRooms = tempRooms.filter(room => room.certification === true);
    }
    this.setState({
      sortedRooms: tempRooms
    });
  };

  render() {
    return <RoomContext.Provider value={{ ...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
      {this.props.children}
    </RoomContext.Provider>
  }
}

const RoomConsumer=RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };