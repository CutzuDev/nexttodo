import CreateTodo from "@/components/CreateTodo";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-10">
        <TodoList />
        <CreateTodo />
      </main>
    </>
  );
}
