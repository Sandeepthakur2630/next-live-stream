import { React, useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";

function JoinRoom() {
  const [username, setUsername] = useState("");
  const [selectedRole, setSelectedRole] = useState("broadcaster");
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    token: "",
  });

  const ENDPOINT ='https://prod-in2.100ms.live/hmsapi/hritik2630.app.100ms.live/' ;
  const ROOM_ID ='63a1421aae90a28eb1667816' ;
    const handleSubmit = async (e) => {
      e.preventDefault()
      const response = await fetch(`${ENDPOINT}api/token`, {
        method: "POST",
        body: JSON.stringify({
          user_id: `${Date.now()}`,
          role: selectedRole, //broadcaster, hls-viewer
          type: "app",
          room_id: ROOM_ID,
        }),
      })
      const { token } = await response.json()
      // Joining the room
      hmsActions.join({
        userName: username,
        authToken: token,
      })
    }

//   const handleInputChange = (e) => {
//     setInputValues((prevValues) => ({
//       ...prevValues,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     hmsActions.join({
//       userName: inputValues.name,
//       authToken: inputValues.token,
//     });
//   };

  return (
    <form className="join" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Enter name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* <div className="input-container">
        <input
          required
          value={inputValues.token}
          onChange={handleInputChange}
          id="token"
          type="text"
          name="token"
          placeholder="Auth token"
        />
      </div> */}

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
