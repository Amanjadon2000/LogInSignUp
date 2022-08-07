import React, { useEffect, useState } from 'react'
import './index.css'
const Home = () => {
//     let blogs=[{
//         name:'aman',
//         title:'work like hell',
//         id:1
//     },
//     {
//         name:'naman',
//         title:'walk in the mall',
//         id:2
//     },
//     {
//         name:'raman',
//         title:'moj lo puri',
//         id:3
//     }
// ]
const[blogs,setBlogs]=useState(null);
const[error,setError]=useState(null);
const[loading,setLoading]=useState(true);

useEffect(()=>{
    setTimeout(() => {
        fetch('../data/db.json').then((res)=>{
        console.log(res.ok)
        if(!res.ok){
            throw Error("failed to catch the data from the resource")
        }
        return res.json();
    }).then((data)=>{
        console.log(data)
        setLoading(false);
        setBlogs(data);
        setError(null)
    }).catch((err)=>{
        setError(err.message)
        setBlogs(null)
        setLoading(false)
    })
    }, 1000);
    
},[])

let str="";
  return (
    <div id='hero'>
        
      <h1>All Blogs</h1>
      
          { error &&
          <div>
             {error} 
          </div>}

          { loading &&
          <div>
             loading.... 
          </div>}
          {

         blogs && blogs.map((blog)=>
           (
             <div className="blog-preview"  key={blog.id}>
               <h2>{blog.title}</h2>
               <p> written by {blog.name}</p>
           
               {/* <button onClick={()=>props.handleDelete(blog.id)}>  click delete</button> */}
               
             </div>
           
   
           
           )
         
           )
            
           
      }
    </div>
  )
}

export default Home
