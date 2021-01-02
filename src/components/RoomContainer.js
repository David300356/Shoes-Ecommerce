import React from "react";
import { RoomConsumer } from "../context";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
export default function RoomContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { sortedRooms,rooms } = value;
        return (
          <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} setRoom={setRoom} />
          </>
        );
      }}
    </RoomConsumer>
  );
}
