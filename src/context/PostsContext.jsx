import React, { Children } from "react";
import{
    createContext,
    useContext, useEffect, useState
} from "react";

const PostContext = createContext();
export function PostProvider({children}){

        const [posts, setPosts] = useState(() =>
    {
        const savedPosts = localStorage.getItem("posts");
        if(savedPosts){
            return JSON.parse(savedPosts)
        }
        return [
        {
            id: 1,
            title: "Oxygen WordPress Site Builder Review",
            text: "Oxygen is a fairly new visual WordPress site builder from the Soflyy team – the developers behind WP All Import and WP Sandbox. The software has just officially launched as version 2.0, which offers advanced functionality from the initial release. Oxygen was designed to offer the ease of use of other theme and page builders […]",
            author: "Ksusha"
        },
    ];
    });

     useEffect(() =>{
        localStorage.setItem(
            "posts",
            JSON.stringify(posts)
        )
    }, [posts]);

    return(
        <PostContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostContext.Provider>
    );

}

export function usePosts(){
    return useContext(PostContext)    
}