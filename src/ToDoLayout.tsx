import React from 'react';

interface ToDoLayoutProps {
  header: React.ReactNode;
  inputForm: React.ReactNode;
  children?: React.ReactNode;
  footer: React.ReactNode;
}

export class ToDoLayout extends React.Component<ToDoLayoutProps> {
  render() {
    const { header, inputForm, children } = this.props;

    return (
      <>
        <div>{header}</div>
        <div>{inputForm}</div>
        <div>{children}</div>
      </>
    );
  }
}
