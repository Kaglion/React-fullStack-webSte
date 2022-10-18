 
import { Link, useLocation } from "react-router-dom"
import { useAppContext } from "../context";
// import data from "../data";
// import { getPosts } from "../services";


export default function Single() {
    const { posts } = useAppContext() 
 
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