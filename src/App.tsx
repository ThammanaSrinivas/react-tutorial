import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Chennai", "Bangalore", "Hyderabad", "Delhi", "Vijayawada"];
  const [throwAlert, setThrowAlert] = useState(false);
  const alert = () => {
    return (
      <Alert onClose={() => setThrowAlert(false)}>
        This is an <span style={{ color: "red" }}>alert</span>
      </Alert>
    );
  };
  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelect={(item) => {
          console.log(item);
        }}
      />
      <br />
      {throwAlert && alert()}
      <br />
      <Button onSelect={() => setThrowAlert(true)}>Done Button</Button>
    </>
  );
}

export default App;
