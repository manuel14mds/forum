import { useEffect, useState } from "react"
import { type Publications } from "../../types.s"
import { API_POSTS_URL } from "../constants/apiUrls"

export const usePublications = () => {
    const [posts, setPosts] = useState<Publications>()
    const [mount, setMount] = useState(false)
    
    useEffect(()=>{
        fetch(API_POSTS_URL)
        .then(response => response.json())
        .then(json => {
            setPosts(json)
            setMount(true)
        })
        .catch(()=> console.log('ERROR in reguest'))
    },[])
    
    return {posts, mount}
}