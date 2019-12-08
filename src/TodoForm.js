import React from 'react';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from './hooks/useInputState';
import Button from "@material-ui/core/Button"
function TodoForm({addTodo}){
    const [input,changeInput,reset] = useInputState(""); 
    return(
        <Paper style={{
            marginTop:"1rem 0",
            padding:"0 1rem"
        }}>
            <form onSubmit={(e)=>{
                e.preventDefault();
                addTodo(input);
                reset();
            }}
            style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center"
            }}
            >
            <TextField 
            margin="normal"
            label="Add New Todo"
            style={{width:"70%"}}
            value={input} onChange={changeInput}></TextField>

            <Button type="submit" variant="contained" color="primary" style={{width:"20%"}}>Submit</Button>
            </form>
        </Paper>
    )
}

export default TodoForm;