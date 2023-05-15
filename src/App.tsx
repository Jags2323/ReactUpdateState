import { useState } from "react";
import "./App.css";
import ExpandableText from "./expandableText";
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
    // updating the quantity of an item.
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <>
      <button onClick={handleClick}>Click Here</button>
      <ExpandableText>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius dolor
        sunt dignissimos. Sunt officia soluta odit, aut nostrum voluptatem ullam
        aspernatur quo illum optio expedita iure quis mollitia nobis laudantium
        vero accusantium, rem dolorum atque obcaecati. Tempora quo doloribus
        recusandae assumenda repudiandae quidem quos, adipisci sint nihil
        deleniti doloremque ipsam officiis non ad, mollitia reprehenderit rem
        accusamus dignissimos inventore molestias maxime. Eveniet inventore
        molestias neque aliquam dignissimos repellendus, voluptatem dolores
        itaque quos, officiis velit facilis odit id illum vitae dolor dicta
        voluptate iure? Natus sit, quas sequi dolor ratione, cumque ab unde
        doloribus esse aperiam nostrum! Maxime aperiam officia provident.
      </ExpandableText>
    </>
  );
}

export default App;
