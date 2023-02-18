import React, { useState } from "react";

function Colors() {
  const [colors, setColors] = useState(["Kırmızı", "Yeşil", "Mavi"]);

  const handleClick = () => {
    setColors((prev) => [...prev, "Gri"]);
  };

  return (
    <div>
      <h2>Renkler</h2>
      {colors.map((color, i) => (
        <div key={i}>{color}</div>
      ))}
      <button onClick={handleClick}>Ekle</button>
    </div>
  );
}

export default Colors;
