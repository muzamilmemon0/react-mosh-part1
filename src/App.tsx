import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Like from "./components/Like";
import produce from "immer";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const [tags, setTags] = useState(["happy", "cheerful"]);

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);

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

  // const handleClick = () => {
  //   // Add
  //   setTags([...tags, "exciting"]);

  //   // Remove
  //   setTags(tags.filter((tag) => tag !== "happy"));

  //   // Update
  //   setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  // };

  // Update bug object
  // const handleClick = () => {
  //   setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  // };

  // update with immer
  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed === true;
      })
    );
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
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title}
          {bug.fixed ? " Fixed" : " New"}
        </p>
      ))}
      <button onClick={handleClick} type="submit">
        Click me
      </button>
    </>
  );
}

export default App;
