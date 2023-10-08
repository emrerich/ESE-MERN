import React from "react";
import { useData } from "./DataContext";

const UserList = () => {
  const { users } = useData();

  if (users.length === 0) {
    return (
      <div className="user-list">
        <h1>Kullanıcılar</h1>
        <p>Kullanıcı bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="user-list">
      <h1>Kullanıcılar</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}, {user.age}, {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
