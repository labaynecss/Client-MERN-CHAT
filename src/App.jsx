import { UserContextProvider } from "./UserContext";
import axios from "axios";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL = "https://https://cloudy-lion-sneakers.cyclic.app";
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
