import React from "react";
import CreateUser from "./pages/createUser/CreateUser";
import UserList from "./pages/listUser/userList";
import { DataProvider } from "./pages/listUser/DataContext";

function App() {
  return (
    <div className="test-wrapper">
      <DataProvider>
        <CreateUser />
        <UserList />
      </DataProvider>
    </div>
  );
}

export default App;
