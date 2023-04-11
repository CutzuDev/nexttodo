import { db } from "@/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

export async function getServerSideProps(ctx){


    return {
        props:{
            data:null
        }
    }
}

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            title: doc.data().title,
            detail: doc.data().detail,
          };
        })
      );
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-center text-6xl">Todos</h1>
        <ul className="flex h-[20rem] w-64 flex-col items-center justify-start gap-2 overflow-y-auto border-2 border-black p-4">
          {todos.map((item) => (
            <Link href={`/${item.id}`} key={item.id} className="h-fit w-full">
              <li className="flex w-full flex-col gap-2 rounded-md border-2 border-black px-4 py-2 text-2xl hover:cursor-pointer hover:bg-blue-200">
                <h1 className="text-xl">{item.title}</h1>
                <p className="text-sm">{item.detail}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
