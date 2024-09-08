import { useState } from "react";
import { TodoContextProvider } from "./contexts";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([])

  const addTodo = (todo) => {
    setTodo((prev) => [{id: Date.now(), ...todo}, ...prev])

    // Creates an id with the current date to get different id everytime.
  }

  const updatedTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))

    // This is happening in 1 line for this -->
    // prev.map((prevTodo) => {
    //   if (prevTodo.id === id) {
    //     todo
    //   } else {
    //     prevTodo
    //   }
    // })
  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((prevTodo) => todo.id !== id))

    // Basically repeats all the todos but filters out that deleted id.
  }

  const toggleComplete = (id) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))

    // Basically goes to the context definition and changes the completed value to its inverse, and overwrites it on completed prop, otherwise leaves it as it is.
  }

  return (
    <TodoContextProvider value={{todo, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-xl rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
