import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

function CreateTodo() {
  const [todo, settodo] = useState({
    title: "",
    detail: "",
  });

  async function handleSubmit() {
    if (todo.title !== "" && todo.detail !== "") {
      const docRef = await addDoc(collection(db, "todos"), todo);
      settodo({
        title: "",
        detail: "",
      });
    }
  }

  return (
    <>
      <form action="" className="flex flex-col gap-2">
        <label htmlFor="">Title:</label>
        <input
          type="text"
          onChange={(e) => settodo({ ...todo, title: e.target.value })}
          className="border border-black"
          value={todo.title}
        />
        <label htmlFor="">Detail:</label>
        <input
          type="text"
          onChange={(e) => settodo({ ...todo, detail: e.target.value })}
          className="border border-black"
          value={todo.detail}
        />
      </form>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Add Todo
      </button>
      <p>{JSON.stringify(todo)}</p>
    </>
  );
}

export default CreateTodo;
