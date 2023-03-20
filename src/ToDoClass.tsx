import React from "react";
import { initialState } from "./to-do";

interface ITodo {
    name: string;
}

export class TodoApp extends React.Component<ITodo> {
    // render takes in jsx
    render() {
       return <h1>{this.props.name}</h1>
    }
}