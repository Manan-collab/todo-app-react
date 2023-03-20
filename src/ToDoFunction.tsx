import React, { useState } from "react";
import { initialState } from "./to-do";
import './styleList.css'

export const ToDoApp = (props: any) => {
    const [list, setList] = useState(initialState)
    function change(id: any) {
        //     const temp = [...list]
        //     const state = temp[index].isDone
        //     temp[index].isDone = !state
        //     setList(temp)
        //     console.log(initialState[index]);
        setList(list.map(state => {
            if (state.id == id) {
                console.log(state);
                return { ...state, isDone: !state.isDone }
                if (state.isDone === true) {
                    // <div className="move"></div>
                }
            }
            else {
                return state;
            }
        }))
    }
    return <div className="body">
        <h1>To Do App </h1>
        <div className="list">{list.map((todo, index) => {
            return <div style={{ border:'10px' ,backgroundColor: todo.isDone ? '#f9d32c': '#a7d67e' ,transition:'0.3s'}}>

                <div>{todo.name}</div>
                <button onClick={() => change(todo.id)}>click</button>
            </div>
        })}</div>

    </div>
}