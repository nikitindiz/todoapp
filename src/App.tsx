import React from 'react';

import './App.css';

import { Footer } from './Footer';
import { Header } from './Header';
import { InputForm } from './InputForm';
import { ToDoLayout } from './ToDoLayout';
import { ToDoList } from './ToDoList';

interface ToDoItem {
  id: string;
  caption: string;
  done: boolean;
}

interface AppState {
  todos: ToDoItem[];
}

class App extends React.Component<{}, AppState> {
  /**
   * TODO: Добавить бизнес-логику для управления toDoList
   *
   * 1. Добавить состояние с макетным списком todos
   * 2. Передать todos как пропс в ToDoList
   * 3. Реализовать компонент ToDoList
   */

  state = {
      todos: [
        {
          id: Math.random().toString(36).substring(2,9),
          caption: 'пресс качат',
          done: false,
        },
        {
          id: Math.random().toString(36).substring(2,9),
          caption: 'бегит',
          done: false,
        },
        {
          id: Math.random().toString(36).substring(2,9),
          caption: 'турник',
          done: false,
        },
        {
          id: Math.random().toString(36).substring(2,9),
          caption: 'анжумания',
          done: false,
        },
        {
          id: Math.random().toString(36).substring(2,9),
          caption: 'пресс качат',
          done: false,
        },
        {
          id: Math.random().toString(36).substring(2,9),
          caption: 'бегит',
          done: false,
        },
      ],
  }

  render() {
    return (
      <ToDoLayout
          header={<Header />}
          inputForm={<InputForm />}
          footer={<Footer />}
      >
        <ToDoList todos={this.state.todos} />
      </ToDoLayout>
    );
  }
}

export default App;
