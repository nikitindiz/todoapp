import React from 'react';

interface InputFormProps {}

export class InputForm extends React.Component<InputFormProps> {
  render() {
    return <input type="text" placeholder="new todo" />;
  }
}
