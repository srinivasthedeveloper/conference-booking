import React from 'react'

import { RoomConsumer, withRoomConsumer } from "../context";

import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

function RoomsContainer() {
  return (
    <RoomConsumer>
      {
        (value)=>{
          const { loading, sortedRooms, rooms } = value;
          
          if (loading) {
              return <Loading />;
          }
          return (
            <div>
              <RoomsFilter rooms={rooms}/>
              <RoomsList rooms={sortedRooms}/>
            </div>
          );
        }
      }
    </RoomConsumer>
  )
}

export default RoomsContainer