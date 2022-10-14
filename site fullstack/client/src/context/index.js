import {createContext, useContext, useMemo, useState } from 'react'
import { getPosts, insertPost } from '../services'


const AppContext = createContext();
const {Provider } = AppContext;

const AppProvider = ({children}) => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        getPosts().then(setPosts)
    }
    const addPost = (body) => {
        insertPost(body).then(setPosts)
    }
    
    // console.log( getPosts());

    const value = useMemo(() => {
        return {
            posts,
            fetchPosts,
            addPost
        }
    }, [posts])

    return <Provider value={value}>{children}</Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}

export default AppProvider