import React ,{useRef, useState} from 'react'
import { history } from '../helpers'
import axios from 'axios'
import {api} from '../api'

const PostCreate = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [title, setTitle]=useState(null);
    const [markdown, setMarkdown]=useState(null);
    const [thumbnail,setThumbnail]=useState(null);
    const fileInputRef = useRef()

    function handleSubmit(e){
        e.preventDefault();
        setLoading(true)
    const formData = new FormData();
    formData.append('thumbnaill',thumbnail);
    formData.append('title',title);
    formData.append('content',markdown);
    console.log(formData);
    axios.post(api.posts.create,formData,{
        headers:{
            'Content-Type':'multipart/form-data',
            'Authorization':'Token b022aabe809ac2ba3c21c1727507fda0c4a37852'
        }
    })
    .then(res=>{
        console.log(res)
        setLoading(false)
        history.push('/')
    })
    .catch(err=>{
        console.log(err)
        setLoading(false)
        setError(err.message||err)
    }
    
)}

    return (
    <div>     
        <header>Create a post List</header>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
    {thumbnail && thumbnail.name}
      <label>Title</label>
      <input className="text-input" type="text" value={title} onChange={e => setTitle(e.target.value)} />
    <label htmlFor="">Content</label>
    <textarea className="text-area" rows="6" value={markdown} onChange={e=>setMarkdown(e.target.value)}/>
    <button type="button" onClick={()=>fileInputRef.current.click()}>Choose a thumbnail</button>
    <input ref={fileInputRef} type="file" onChange={e => setThumbnail(e.target.files[0])} hidden/>
    <button type="submit" loading={loading} disabled={loading}>Submit</button>
  
        </form>
    </div>
   

    )
}

export default PostCreate
