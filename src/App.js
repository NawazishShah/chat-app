import { useState, useRef } from "react";
import Cookies from "universal-cookie";
import "./App.css";
import { Auth } from "./components/Auth.js";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(Cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  if (!isAuth) {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }

  return (
    <div>
     
      {room ? (
        <div>Chat</div>
      ) : (
        <div className="room">
          <label>Enter Room Name</label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
           
            Enter Chat
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
