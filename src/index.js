import React, { useState } from "react";
import ReactDOM from "react-dom";

import Modal from "./Modal";
import "./styles.css";

const initialList = ["Learn React", "Learn Firebase", "Learn GraphQL"];

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [value, setValue] = React.useState("");
  const [list, setList] = React.useState(initialList);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (value) {
      setList(list.concat(value));
    }

    setValue("");

    event.preventDefault();
  };

  function handleSubmitfinal(e) {
    e.preventDefault();
    console.log("You clicked submit.");
    setIsModalVisible(false);
  }
  return (
    <div className="App">
      <h1>Parent container</h1>
      <h3>This is just a demo container</h3>
      <button onClick={() => setIsModalVisible(true)}>open modal</button>
      {isModalVisible && (
        <Modal onModalClose={() => setIsModalVisible(false)}>
          <Modal.Header>Header</Modal.Header>
          <Modal.Body>
            <div>
              <ul>
                {list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange} />
                <button type="submit">Add Item</button>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Footer.CloseBtn>Close</Modal.Footer.CloseBtn>
            <Modal.Footer.SaveBtn onClick={handleSubmitfinal}>
              {" "}
              Save{" "}
            </Modal.Footer.SaveBtn>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
