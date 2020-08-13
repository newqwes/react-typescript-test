export interface ITodo {
    title: string,
    id: number,
    completed: boolean
}
export interface TodoFormProps {
    addHandler(title: string): void
}

export interface TodoListProps {
    todos: ITodo[];
    toggleHandler: (id: number) => void;
    removeHandler: (id: number) => void;
  };
  