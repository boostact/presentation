import { Boostact } from "boostact";
import classes from "./style";
/** @jsx Boostact.createElement */

const Todo = () => {
    const [todo, setTodo] = Boostact.useState([
        {
            id: 0,
            name: "useState 구현하기",
            isDone: false,
        },
        {
            id: 1,
            name: "TypeScript 공부하기",
            isDone: false,
        },
    ]);
    let id = Object.keys(todo).length;

    const onInsert = (name) => {
        id += 1;
        const unit = [
            {
                id,
                name,
                checked: false,
            },
        ];

        setTodo(todo.concat(unit));
    };

    const onDelete = (id) => {
        const afterDelete = todo.filter((todo) => todo.id !== id);
        setTodo(afterDelete);
    };

    const onToggle = (id) => {
        setTodo(
            todo.map((todoItem) =>
                todoItem.id === id
                    ? { ...todoItem, isDone: !todoItem.isDone }
                    : todoItem
            )
        );
    };

    return (
        <div>
            <div className={classes.todoPanel}>
                <div className={classes.todoHeader}>JUST DO IT</div>
                <TodoInsert onInsert={onInsert} />
                <TodoList todo={todo} onDelete={onDelete} onToggle={onToggle} />
            </div>
        </div>
    );
};

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = Boostact.useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    };
    const onClick = (e) => {
        onInsert(value);
        setValue("");
        e.preventDefault();
    };
    return (
        <form className={classes.inputDiv}>
            <input
                className={classes.input}
                placeholder="어서 일해라"
                value={value}
                onInput={onChange}
            />
            <button className={classes.addList} onClick={onClick}>
                +
            </button>
        </form>
    );
};

const TodoList = ({ todo, onDelete, onToggle }) => {
    return (
        <div className={classes.todoList}>
            {todo.map((todoItem) => (
                <TodoListItem
                    todoItem={todoItem}
                    key={todoItem.id}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

const TodoListItem = ({ todoItem, onDelete, onToggle }) => {
    const { id, name, isDone } = todoItem;
    const clilckDone = () => {
        return (
            <div
                className={
                    isDone ? classes.checkedName : classes.notCheckedName
                }
                onClick={() => onToggle(id)}
            >
                {name}
            </div>
        );
    };
    return (
        <div className={classes.TodoListItem}>
            {clilckDone()}
            <div className={classes.remove} onClick={() => onDelete(id)}>
                -
            </div>
        </div>
    );
};

export default Todo;
