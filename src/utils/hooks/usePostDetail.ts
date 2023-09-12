import { useEffect, useState } from "react"
import { API_POST_URL, API_COMMENTS_URL } from "../constants/apiUrls"
import type { CommentList, Post } from "../../types.s"

export const usePostDetail = (param:string|undefined) => {
    const [ render, setRender] = useState(false)
    const [publication, setPublication] = useState<Post>()
    const [ comments, setComments ]  = useState<CommentList>()

    useEffect (() => {
        try {
            fetch(API_POST_URL+param)
            .then(response => response.json())
            .then(json => (setPublication(json)) )
            .catch(()=> console.log('ERROR in reguest publication'))

            fetch(API_COMMENTS_URL+param)
            .then(response => response.json())
            .then(json => ( setComments(json) ))
            .catch(()=> console.log('ERROR in reguest'))
            .finally(()=> setRender(true))
        } catch (error) {
            console.log('ERROR. Something wrong in comments + post data request')
        }
    },[param])

    return {
        publication,
        comments,
        render
    }

}