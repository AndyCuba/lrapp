import { useEffect, useState } from 'react';
import { createDescription } from '../../helpers/todosHelpers';
import Spinner from '../Spinner/Spinner';
import Todo from '../Todo/Todo';
import { StyledCardHeading, StyledTodosCard } from './style';

type TodosPropType = {
    id: number,
    title: string,
    completed: boolean
}[];

const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
};

const createTodosList = (todos: TodosPropType) => {
    const todosList = [];

    // Shows only first 4 todos
    for (let i = 0; i < 4; i++) {
        const { id, title, completed } = todos[i];

        const description = createDescription(title);

        todosList.push(
            <li key={id}>
                <Todo
                    id={id}
                    title={title}
                    completed={completed}
                    todos={todos}
                    description={description}
                />
            </li>
        );
    }
   
    return todosList;
};

function TodosCard() {
    const [todos, setTodos] = useState<null | TodosPropType>(null);

    const fetchTodos = async() => {
        const todos = await fetch('https://jsonplaceholder.typicode.com/todos');
        return await todos.json();
    };

    useEffect(() => {
        try {
            fetchTodos().then(setTodos);
        } catch (error) {
            console.log(error);
        };
    }, []);

    return(
        <StyledTodosCard isAnimated={Boolean(todos)}>
            <StyledCardHeading>
                <h1>Todo list</h1>
                <input 
                    type="submit"
                    form="todos-form"
                    value="ADD"
                    onClick={handleClick}
                />
            </StyledCardHeading>
            {
                todos ? 
                    <form id="todos-form">
                        <ul>
                            {createTodosList(todos)}                 
                        </ul>
                    </form>
                : <Spinner />
            }          
        </StyledTodosCard>
    );
};

export default TodosCard;