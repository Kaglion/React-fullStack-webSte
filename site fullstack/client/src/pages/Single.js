import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
// import data from "../data";
import { getPosts } from "../services";
 

export default function Single() {
    const [posts, setPost] = useState([])

    useEffect(() => {
        getPosts().then(setPost)
    }, [ ])
    const params  =  useLocation();
    const post = posts.find(post => post._id === params?.state?.id);
    
    return(
    <>
        <Link to='/'>back</Link>
        <h1>{post?.title}</h1>
        <p>{post?.content}</p>
    </>
    )
}