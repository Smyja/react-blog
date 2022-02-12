import React from 'react'

const PostCreate = () => {
    return (
    <div>     
        <header>Create a post List</header>
        <form>
    
      <label>Title</label>
      <input className="text-input" type="text"/>
    <label htmlFor="">Content</label>
    <textarea className="text-area" rows="6"/>
    <button type="submit">Submit</button>
  
        </form>
    </div>
   

    )
}

export default PostCreate
