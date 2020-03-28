import React from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/Todo/TodoInput/TodoInput';
import Todos from './components/Todo/Todos';

function App() {
    const [todos, setTodos] = React.useState([
        {
            id   : uuidv4(),
            title: 'wake up'
        },
        {
            id   : uuidv4(),
            title: 'take a shower'
        }
    ]);
    const [editMode, setEditMode] = React.useState(false);
    const [todo, setTodo] = React.useState({});

    const submitHandler = e => {
        if (editMode) {
            const todoIndex = todos.findIndex(c => c.id === todo.id);
            setTodos(tos => {
                tos[todoIndex] = {
                    id   : todo.id,
                    title: todo.title
                };
                return tos;
            });
        }
        else {
            setTodos(tos => tos.push({
                id   : uuidv4(),
                title: todo.title
            }));
        }
        setEditMode(false);
    };

    const typeHandler = e => {
        setTodo(prevState => {
            return {
                ...prevState,
                title: e.target.value
            };
        });
    };
    const setEditModeHandler = id => {
        setEditMode(true);
        setTodo({
            title: todos.filter(t => t.id === id)[0].title,
            id
        });
    };

    const clearListHandler = () => setTodos([]);
    const removeTodoHandler = id => setTodos(prevState => prevState.filter(c => c.id !== id));

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-10 mx-auto col-md-8 mt-5">
                    <h3 className='text-capitalize text-center'>
                        Todo Input
                    </h3>
                    <TodoInput onSubmit={submitHandler}
                               onChanged={typeHandler}
                               todo={todo}/>
                    <Todos onEditMode={setEditModeHandler}
                           onRemove={removeTodoHandler}
                           onClear={clearListHandler}
                           todos={todos}/>
                </div>
            </div>
        </div>
    );
}

export default App;
