import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let number = 1;
  const [todos, setTodos] = useState([]);
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(initialState);
    number++;
  };

  return (
    <>
      <div className="header">
        <h1>Todo List</h1>
        <form className="form" onSubmit={onSubmitHandler}>
          <span className="title">Title: </span>
          <input
            type="text"
            name="title"
            value={todo.title}
            className="input"
            onChange={onChangeHandler}
          />
          <button className="btn">Add</button>
        </form>
      </div>
      <div className="list">
        {todos.map((data, idx) => (
          <Card
            key={idx}
            title={data.title}
            body={
              "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
            }
          ></Card>
        ))}
      </div>
    </>
  );
}

const Card = ({ title, body }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default App;
