import Todo from '../Todo/Todo';
import { StyledCardHeading, StyledTodosCard } from './style';

const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
};

function TodosCard() {
    return(
        <StyledTodosCard>
            <StyledCardHeading>
                <h1>Todo list</h1>
                <input 
                    type="submit"
                    form="todos-form"
                    value="ADD"
                    onClick={handleClick}
                />
            </StyledCardHeading>
            <form id="todos-form">
                <ul>
                    <li>
                        <Todo id={1} title={'delectus aut autem'} completed={false}/>
                    </li>
                </ul>
            </form>
        </StyledTodosCard>
    );
};

export default TodosCard;