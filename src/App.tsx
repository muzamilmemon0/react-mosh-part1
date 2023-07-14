import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
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
      {customer.address.city} {customer.address.zipCode}
      <button onClick={handleClick} type="submit">
        Click me
      </button>
    </>
  );
}

export default App;
