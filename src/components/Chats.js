import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();

  console.log(user);

  console.log("This shows me user", user);

  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">UniChat</div>
        <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="00ecc894-295a-4828-ba12-7666acc627f6"
        userName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
