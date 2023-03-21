import React from 'react';

import { ToDoItem } from './ToDoItem';

interface ToDoItems {
    id: string;
    caption: string;
    done: boolean;
}

interface ToDoListProps {
    todos: ToDoItems[];
}

export class ToDoList extends React.Component<ToDoListProps> {
  render() {
    const { todos } = this.props;
    const listItems = todos.map((todo) =>
      <ToDoItem todo={todo} key={todo.id}/>
    );
    return (
      <ul className="list-group">
          {listItems}
      </ul>
    );
  }
}
