import React, {useState} from "react";
import "./CreateTodo.css";


const CreateTodo = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const onTitleChangehandler = (event) => setEnteredTitle(event.target.value);
    const onDescriptionChangehandler = (event) => setEnteredDescription(event.target.value);
    const onDateChangehandler = (event) => setEnteredDate(event.target.value);

    const onFormSubmit = (event) => { 
        event.preventDefault();
        const new_todo = {
            title: enteredTitle,
            description: enteredDescription,
            date: new Date(enteredDate),
        }
        props.onSave(new_todo);
        console.log('new_expense', new_todo);
        setEnteredTitle('');
        setEnteredDescription('');
        setEnteredDate('');
    }
    return (
        <form onSubmit={onFormSubmit}>
            <div className="heading"><label>Create To-Do List</label></div>
            <div className="new-todo__controls">
                <div className="new-todo__control">
                    <label>Title</label>
                    <input type="text" value ={enteredTitle} onChange={onTitleChangehandler}/>
                </div>
                <div className="new-todo__control">
                    <label>Description</label>
                    <input type="text" value={enteredDescription} onChange={onDescriptionChangehandler} />
                </div>
                <div className="new-todo__control">
                    <label>Task Date</label>
                    <input type="date" min="2020-01-01" max="2099-12-31" value={enteredDate} onChange={onDateChangehandler}/>
                </div>
            </div>
            <div className="new-todo__actions">
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add ToDo</button>
            </div>
        </form>
        
    )
}





export default CreateTodo