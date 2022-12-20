import { React, useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";

function JoinRoom() {
  const [username, setUsername] = useState("");
  const [selectedRole, setSelectedRole] = useState("broadcaster");
  const hmsActions = useHMSActions();

  const ENDPOINT =
    "https://prod-in2.100ms.live/hmsapi/hritik2630.app.100ms.live/";
  const ROOM_ID = "63a1421aae90a28eb1667816";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${ENDPOINT}api/token`, {
      method: "POST",
      body: JSON.stringify({
        user_id: `${Date.now()}`,
        role: selectedRole,
        type: "app",
        room_id: ROOM_ID,
      }),
    });
    const { token } = await response.json();

    hmsActions.join({
      userName: username,
      authToken: token,
    });
  };

  return (
    <form className="join" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Enter name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <select
        type="text"
        required
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        placeholder="Select Role"
      >
        <option>broadcaster</option>
        <option>hls-viewer</option>
      </select>
      <button>Join</button>
    </form>
  );
}

export default JoinRoom;
