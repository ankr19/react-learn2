import axios from "axios";


axios.defaults.baseURL = "http://localhost:5000/v1/api";


export let AddNotes = async (data)=>{
    console.log(data);
    axios.post('/add-notes', {
        ...data,
    })
}

export let getAllNotes = async ()=>{
    let value = await axios.get("/get-notes");
    console.log(value.data?.data)
    return value.data?.data;
}

export let deleteNote = async (id)=>{
    console.log(id)
    let value = await axios.delete(`/delete-notes/${id}`);
    console.log(value.data)
}