import React,{useState,useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoForm from "./TodoForm";
import TodoList from './TodoList';
import uuid from 'uuid';
function TodoApp(){
    let initialTodos = [];

    if(localStorage.getItem("todos") !== undefined)
    {
        initialTodos = JSON.parse(localStorage.getItem("todos"));
    }else{
        initialTodos=[];
    }

    let [todos,setTodos] = useState(initialTodos);

    if(todos == null)
    {
        todos = [];
    }
    
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos]);

    let addTodo = (todo)=>{
        console.log("adding todo");
        if(todo === "")
        return;
        setTodos([...todos,{id:uuid(),task:todo,completed:false}])
    }

    let removeTodo = (todoid)=>{
        let updatedTodos = todos.filter((todo)=>{
            return todo.id !== todoid;
        })
        setTodos(updatedTodos);
    }

    let toggleTodo = (todoId)=>{
        let updatedTodos = todos.map((todo)=>{
            return todoId === todo.id ? {...todo,completed:!todo.completed}:todo;
        })
        setTodos(updatedTodos);
    }

    let updateTodo = (todoId,newTask)=>{
        let updatedTodos = todos.map((todo)=>{
            return todoId === todo.id ? {...todo,task:newTask,completed:false}:todo;
        })
        setTodos(updatedTodos);
    }
    return(
        <Paper
        style={{
            padding:0,
            margin:0,
            height:"100vh",
        }}
        elevation={0}>
            <AppBar 
            color='primary' 
            position='static'
            style={{height:"64px"}}
            >
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{marginTop:"1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm
                    addTodo={addTodo}
                    ></TodoForm>
                    <TodoList
                    todos={todos}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    updateTodo={updateTodo}
                    ></TodoList>
                </Grid>    
            </Grid>
        </Paper>
    )
}

export default TodoApp;


