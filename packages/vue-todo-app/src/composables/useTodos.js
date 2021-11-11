import { ref, onMounted } from 'vue';
export default function useTodos() {
  const todos = ref([]);
  const addTodo = (todo) => todos.value.push(todo);

  const fetchTodos = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=5'
    );
    const rawTodos = await response.json();
    todos.value = rawTodos.map((todo, i) => ({
      id: i,
      content: todo.title,
      completed: todo.completed,
    }));
  };

  onMounted(fetchTodos);

  return {
    todos,
    addTodo,
  };
}