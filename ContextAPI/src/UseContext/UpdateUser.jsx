/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { userContext } from "./UserProvider";

const UpdateUser = () => {
  const { updateUser } = useContext(userContext);
  const [newName, setNewName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };
  return (
    <div>
      <h1>Update Username</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
