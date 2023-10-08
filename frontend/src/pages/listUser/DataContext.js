import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/users/all");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Hata:", error);
      }
    };

    fetchData();
  }, []);
  const value = {
    users,
    setUsers, // Kullanıcı verilerini güncellemek için kullanılacak işlev
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
