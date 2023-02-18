import React, { useState } from "react";

function User() {
  const [user, setUser] = useState({ name: "Mehmet", surname: "Seven" });
  return (
    <div>
      <h2>User</h2>
      {user.name} {user.surname}
      <br />
      <br />
      <div>
        <button onClick={() => setUser((prev) => ({ ...prev, name: "Ahmet" }))}>
          İsmi değiştir
        </button>
        <button onClick={() => setUser((prev) => ({ ...prev, surname: "Test Soyisim" }))}>
          Soyismi değiştir
        </button>
      </div>
    </div>
  );
}

export default User;
