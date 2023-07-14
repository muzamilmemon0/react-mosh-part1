import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };

  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          hello <span>world!</span>
        </Alert>
      )}
      <Button
        color="primary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My Button
      </Button>
      <Like onClick={() => console.log("clicked")} />
      {drink.price}
      <button onClick={handleClick} type="submit">
        Click me
      </button>
    </>
  );
}

export default App;
