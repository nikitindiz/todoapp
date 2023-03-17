import React from 'react';

interface ToDoListProps {}

export class ToDoList extends React.Component<ToDoListProps> {
  render() {
    return (
      <>
        <li>ToDo 1</li>
        <li>ToDo 2</li>
      </>
    );
  }
}
