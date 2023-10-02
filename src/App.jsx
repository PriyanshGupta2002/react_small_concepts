import { useState, useCallback } from "react";
import Search from "./components/Search";
import { shuffleArray } from "./utils";

const App = () => {
  const initialUsers = ["John", "Ron", "Shawn", "Rima", "Raju", "Rohan"];
  const [users, setUsers] = useState(initialUsers);
  const handleChange = useCallback(
    (e) => {
      console.log(users[0]);
      const filteredUsers = initialUsers.filter((user) =>
        user.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setUsers(filteredUsers);
    },
    [users[0]]
  );
  return (
    <div className="flex flex-col gap-4 p-10">
      <div className="flex items-center gap-7">
        <button
          className="bg-blue-600 text-white p-2 rounded-md shadow-lg"
          onClick={() => shuffleArray(users, setUsers)}
        >
          Shuffle
        </button>
        <Search handleChange={handleChange} />
      </div>
      <div className="text-white text-bold ">
        {users.map((user) => (
          <h3 key={user}>{user}</h3>
        ))}
      </div>
    </div>
  );
};

export default App;
