import { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { profile } from "./hooks/api/api";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);

  const { data, isLoading, isError } = useQuery(["profile"], profile);

  useEffect(() => {
    if (data) {
      setId(data.userId);
      setUsername(data.username);
    }
  }, [data]);

  return (
    <UserContext.Provider value={{ username, setUsername, id, setId }}>
      {children}
    </UserContext.Provider>
  );
}
