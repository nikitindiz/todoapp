import React from 'react';

interface ItemProps {
    id: string;
    caption: string;
    done: boolean;
}

interface ToDoItemProps {
    todo: ItemProps;
}

export class ToDoItem extends React.Component<ToDoItemProps> {
    render() {
        const { todo } = this.props;

        return (
            <li className="d-flex w-100 justify-content-between">
                <div className="">
                    { todo.caption }
                </div>
                <div className="">
                    X
                </div>
            </li>
        );
    }
}