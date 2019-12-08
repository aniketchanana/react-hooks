import React from 'react';
import useInputState from './hooks/useInputState';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
function EditForm({toggleEditing,initValue,updateTodo,id}){
    const [state,changeState,reset] = useInputState(initValue);
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            updateTodo(id,state);
            reset();
            toggleEditing();
        }}
        style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            paddingLeft:"20px",
            paddingRight:"20px"
        }}
        >
        <TextField 
        margin="normal"
        style={{
            width:"70%"
        }}
        label="update todo"
        value={state} onChange={changeState}></TextField>

        <Button
        style={
            {
                width:"20%",
                fontSize:"0.8rem"
            }
        } 
        type="submit" variant="contained" color="secondary">Update</Button>
        </form>
    )
} 

export default EditForm;