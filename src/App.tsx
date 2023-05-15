import { useState } from "react";
import "./App.css";

function App() {
  const [game, setGame] = useState({
    id: 1,
    players: {
      name: "jags",
    },
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product 1", quantity: 1 },
      { id: 2, title: "product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setGame({ ...game, players: { ...game.players, name: "kittu" } });
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <>
      <div></div>
      <button onClick={handleClick}>Click Here</button>
    </>
  );
}

export default App;
