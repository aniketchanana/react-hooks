import React from 'react';
import List from '@material-ui/core/List';
import TodoItem from './TodoItem';
import Divider from '@material-ui/core/Divider';

export default function TodoList(props){
    if(props.todos.length)
    return(
        <List style={{
            backgroundColor:"white",
            width:"100%",
            boxShadow:"0px 5px 10px 0px rgba(0,0,0,0.4)"
        }}>
            {props.todos.map((todo,i) => {
                return <div key={todo.id}>
                <TodoItem updateTodo={props.updateTodo} toggleTodo={props.toggleTodo} removeTodo={props.removeTodo} id={todo.id}  task={todo.task} completed={todo.completed}></TodoItem>
                {i<props.todos.length-1 && <Divider/>}
                </div>
            })}
        </List>
    )
    return null;
}