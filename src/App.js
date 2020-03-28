import React from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TodoInput from './components/Todo/TodoInput/TodoInput';
import Todos from './components/Todo/Todos';

function App() {
    const [todos, setTodos] = React.useState([]);
    const [editMode, setEditMode] = React.useState(false);
    const [todoTitle, setTodoTitle] = React.useState('');
    const [todoIdEdit, setTodoIdEdit] = React.useState(-1);

    const submitHandler = e => {
        e.preventDefault();
        if (!todoTitle) {
            alert('fill the blank');
            return;
        }

        if (editMode) {
            const todoIndex = todos.findIndex(c => c.id === todoIdEdit);
            setTodos(tos => {
                const todoss = [...tos];
                todoss[todoIndex] = {
                    id   : todoIdEdit,
                    title: todoTitle
                };
                return todoss;
            });
        }
        else {
            setTodos(prevState => {
                const todoss = [...prevState];
                todoss.unshift({
                    id   : uuidv4(),
                    title: todoTitle
                });
                return todoss;
            });
        }
        setTodoTitle('');
        setEditMode(false);
    };

    const typeHandler = e => setTodoTitle(e.target.value);

    const setEditModeHandler = id => {
        setEditMode(true);
        setTodoIdEdit(id);
        setTodoTitle(todos.filter(t => t.id === id)[0].title);
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
                               todo={todoTitle}
                               isEditMode={editMode}/>
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
