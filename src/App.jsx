import { UserContextProvider } from "./UserContext";
import axios from "axios";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL = "https://mern-chat-three.vercel.app";
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
