import axios from "axios";
import { useState } from "react";
import { useData } from "../listUser/DataContext";
const CreateUser = () => {
  const { setUsers } = useData();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/users/signup", {
        name,
        age,
        email,
      });
      console.log("Kullanıcı oluşturuldu:", response.data.user);
      setUsers((prevUsers) => [...prevUsers, { name, age, email }]);
      setName("");
      setAge(0);
      setEmail("");
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  return (
    <div>
      <div className="create-user">
        <h1> Create User</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Create User</button>
        </form>
      </div>
    </div>
  );
};
export default CreateUser;
