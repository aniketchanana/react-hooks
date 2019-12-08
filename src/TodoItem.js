import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import useToggleEditForm from './hooks/useToggleEditForm';
import EditForm from './EditForm';
function TodoItem(props){
    const [isEditing,toggleEditing] = useToggleEditForm(false);
    return(
        isEditing? <EditForm id={props.id} toggleEditing={toggleEditing} initValue={props.task} updateTodo={props.updateTodo} /> :<ListItem>
        <CheckBox onClick={()=>{props.toggleTodo(props.id)}} tabIndex={-1} checked={props.completed}></CheckBox>
        <ListItemText style={{textDecoration:props.completed?"line-through":"none",overflow:"none"}} primary={props.task}></ListItemText>
        <IconButton>
            <DeleteIcon
            onClick={()=>{props.removeTodo(props.id)}}
            ></DeleteIcon>
        </IconButton>
        <IconButton>
            <EditIcon onClick={toggleEditing}></EditIcon>
        </IconButton>                 
    </ListItem>
    )
}

export default TodoItem;