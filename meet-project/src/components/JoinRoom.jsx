import React from "react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function JoinRoom() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  function handleClick() {
    navigate(`/createroom?roomID=${roomId}&role=Cohost`);
  }
  return (
    <div>
      <form className="join-room-form" onSubmit={handleClick}>
        <div className="join-container">
          <h1>Join Room</h1>
          <div className="input-container">
            <input
              type="text"
              id="roomId"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              placeholder="Enter Room ID"
            />
            <button type="submit">Join</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default JoinRoom;
