import { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit =(e)=>{ 
    e.preventDefault();
    if(!title || !desc){
        alert("Title or descripition cannot be blank")
    }
    else{
    addTodo(title, desc);
    setTitle("");
    setDesc("");
    }
    }
    return (
        <div className="container my- 3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb 3">
                    <label htmlFor="Title" className="form-label">Todo Tiltle</label>
                    <input type="Text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="Title" aria-describedby="emailHelp"/>
                    
                </div>
                <div className="mb 3">
                    <label htmlFor="desc" className="form-label">Todo Descripition</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-sm btn-success">AddTodo</button>
            </form>
         </div>
    )
    }

    export default AddTodo


