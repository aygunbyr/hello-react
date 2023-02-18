import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  // useEffect(() => {
  //   console.log("Bir state değişti.");
  // });

  // useEffect(() => {
  //   console.log("Component mount edildi.");
  // }, []);

  // useEffect(() => {
  //   console.log("Count state değişti.");
  // }, [count]);

  // useEffect(() => {
  //   console.log("Count veya amount state değişti.");
  // }, [count, amount]);

  // useEffect(() => {
  //   console.log("Amount state değişti");
  // }, [amount]);

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("interval");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + amount)}>Arttır</button>
      <hr />
      <div>Arttırma: {amount}</div>
      <button onClick={() => setAmount(1)}>+1</button>
      <button onClick={() => setAmount(3)}>+3</button>
      <button onClick={() => setAmount(10)}>+10</button>
    </div>
  );
}

export default Counter;
