import { useContext } from 'react';
import LoginandRegisterForm from './LoginandRegisteForm';
import { UserContext } from './UserContext';
import Chat from './Chat';

export default function Routes() {
  const { username, id } = useContext(UserContext);
  console.log(username);
  if (username) {
    return <Chat />;
  }
  return <LoginandRegisterForm />;
}
