import './App.css'
import {useState} from "react";
import axios from "axios";

function App() {
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    let [status, setStatus] = useState("");
    let [date, setDate] = useState("");
    let postResponseMessage;
    let handleSubmit = e => {
        e.preventDefault();

        const userObject = {
            title: title,
            description: description,
            status: status,
            date: date,
        };
        axios.post(`${import.meta.env.VITE_API_KEY}/todo`, {userObject})

            .then((res) => {
                console.log(res.data.message)
                postResponseMessage = res.data.message;
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className='container'>
            <div>
                <h3>hello</h3>
                <form action="" onSubmit={handleSubmit}>
                    <label>Title </label>
                    <input type="text" name="title" onChange={e => setTitle(e.target.value)}/>
                    <br/><br/>
                    <label>Description </label>
                    <input type="text" name="description" onChange={e => setDescription(e.target.value)}/>
                    <br/><br/>
                    <label>Status </label>
                    <input type="radio" value="active" name="status" onChange={e => setStatus(e.target.value)}/> Active
                    <input type="radio" value="Inactive" name="status" onChange={e => setStatus(e.target.value)}/> Inactive
                    <br/><br/>
                    <input type="date"  name="date" onChange={e => setDate(e.target.value)}/>
                    <br/><br/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default App
