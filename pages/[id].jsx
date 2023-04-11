import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function getServerSideProps(ctx) {
  const id = ctx.query.id;
  console.log(id);

  const docSnap = await getDoc(doc(db, "todos", id));

  const data = docSnap.data();

  return {
    props: {
      todo: {
        title: data.title,
        detail: data.detail,
      },
    },
  };
}

function id({ todo }) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-7xl">Todo title: {todo.title}</h1>
      <h3 className="text-4xl">Detail: {todo.detail}</h3>
    </div>
  );
}

export default id;
