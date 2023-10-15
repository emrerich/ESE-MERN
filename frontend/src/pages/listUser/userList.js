import React, { useState } from "react";
import { useData } from "./DataContext";

const UserList = () => {
  const { users } = useData();
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleUserClick = (theme) => {
    setBackgroundColor(theme);
  };

  if (users.length === 0) {
    return (
      <div className="user-list">
        <h1>Kullanıcılar</h1>
        <p>Kullanıcı bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="user-list" style={{ backgroundColor }}>
      <h1>Kullanıcılar</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.theme)}>
            {user.name}, {user.age}, {user.email}, {user.theme}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
