import React from 'react';
import TodoList from './components/todolist.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



function App() {
  return (<>
    <h1>Todo List</h1>
      <input type="text" placeholder='thêm việc đi thg ngu' />
      <Button disabled={true} variant="primary" style={{ marginLeft: '10px' }}>
        thêm
      </Button>

      <TodoList />
  </>
  );
}

export default App;
