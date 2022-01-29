import React,{useEffect,useState} from 'react'


const BlogList = () => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/blog/posts/")
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            setData(data);
            setLoading(false);

        })
        .catch(error=>{
            setError(error.message);
            setLoading(false);
        })
    },[])
    return (
        <div style={{margin:10,padding:10}}>
            <h1>Blog list</h1>
            {error && (<div style={{padding:5,color:"red"}}> {error}</div>)}
            {loading ? <div>
                loading...
            </div>:(<div>
                {data && data.map(post=> {
                    return(
                    <div><h3>{post.title}</h3>
                    <p>{post.content}</p></div>
                    )})
               }
            </div>

            )}
        </div>
    )
}

export default BlogList
