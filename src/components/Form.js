import React, { useState } from "react";

function Form() {
  const [form, setForm] = useState({ name: "", surname: "", gender: "0" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div>
        <div>İsim</div>
        <input
          placeholder="İsim"
          name="name"
          value={form.name}
          onChange={handleChange}
          //   onChange={(event) => setForm((prev) => ({...prev, name: event.target.value}))}
        />
        <input
          placeholder="Soyisim"
          name="surname"
          value={form.surname}
          onChange={handleChange}
          //   onChange={(event) => setForm((prev) => ({...prev, surname: event.target.value}))}
        />

        <br />
        <br />

        <div>
          <div>Cinsiyet</div>
          <select
            value={form.gender}
            name="gender"
            onChange={handleChange}
            // onChange={(event) => setForm((prev) => ({...prev, gender: event.target.value}))}
          >
            <option value="0">Erkek</option>
            <option value="1">Kadın</option>
          </select>
        </div>

        <hr />

        <div>
          İsim:
          <strong>
            {form.name} {form.surname}
          </strong>
        </div>

        <div>
          Cinsiyet:
          <strong>{form.gender === "0" ? "Erkek" : "Kadın"}</strong>
        </div>
      </div>
    </div>
  );
}

export default Form;
