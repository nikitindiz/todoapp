import React from 'react';

import './App.css';

import { Footer } from './Footer';
import { Header } from './Header';
import { InputForm } from './InputForm';
import { ToDoLayout } from './ToDoLayout';
import { ToDoList } from './ToDoList';

interface ToDoItem {
  id: number;
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

  render() {
    return (
      <ToDoLayout header={<Header />} inputForm={<InputForm />} footer={<Footer />}>
        <ToDoList />
      </ToDoLayout>
    );
  }
}

export default App;
