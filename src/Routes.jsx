import { useContext } from "react";
import LoginandRegisterForm from "./page/LoginandRegisteForm";
import { UserContext } from "./UserContext";
import Chat from "./Chat";

export default function Routes() {
  const { username } = useContext(UserContext);
<<<<<<< HEAD
  console.log('user', username);
=======
  console.log("user", username);
>>>>>>> ccd2dd632211e5adb19caf1aef8f1fa8d3b21d60
  if (username) {
    return <Chat />;
  }
  return <LoginandRegisterForm />;
}
