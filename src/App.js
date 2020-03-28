import React from 'react';
import './App.css';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/Todo/TodoInput/TodoInput';
import Todos from './components/Todo/Todos';

function App() {
    return (
        <div className='container'>
            <div className='row'>
                <TodoInput/>
                <Todos/>
            </div>
        </div>
    );
}

export default App;
