import { Breadcrumbs, Navbar } from '../../layout'
import type { PathList, Post, CommentList } from '../../types.s'
import './PostDetail.css'
import loading from '../../assets/pink-loader.svg'
import loadingPost from '../../assets/three-dots-loading.svg'
import { useRoute } from 'wouter'
import { useEffect, useState } from 'react'
import { API_POST_URL, API_COMMENTS_URL } from '../../utils/constants'
import { Comment } from '../../components'





export const PostDetail: React.FC = () => {
    const [render, setRender] = useState(false)
    const [ publication, setPublication ]  = useState<Post>()
    const [ comments, setComments ]  = useState<CommentList>()

    const pathList : PathList = [
        {name: 'Home', path: '/'},
        {name: 'Publications', path: '/publications'}
    ]
    const currentPage: string = 'Post Detail'


    // get toute param
    const route = useRoute('/postDetail:pid')
    const params = route[1]?.pid

    
    useEffect (() => {
        try {
            fetch(API_POST_URL+params)
            .then(response => response.json())
            .then(json => (setPublication(json)) )
            .catch(()=> console.log('ERROR in reguest publication'))

            fetch(API_COMMENTS_URL+params)
            .then(response => response.json())
            .then(json => ( setComments(json) ))
            .catch(()=> console.log('ERROR in reguest'))
            .finally(()=> setRender(true))
        } catch (error) {
            return
        }
    },[params])

    return (
        <>
        <header className='header-detail'>
            <Navbar />
            <Breadcrumbs props={{ pathList, currentPage}} />
            <h1 className='publication-title'>Publication Detail</h1>
        </header>

        <main>
            <section className='detail-box'>
                {
                    !render ?
                    <>
                        <img className='post-title-loading' src={loadingPost}/>
                        <img className='post-title-loading' src={loadingPost}/>
                        <img className='post-title-loading' src={loadingPost}/>
                    </>
                    :
                    <>
                        <h2 className='post-title'>{publication?.title}</h2>
                        <p className='post-body'>{publication?.body}</p>
                        <p className='post-id'>post id: {publication?.id}</p>
                    </>
                }

                <div className="head-comment-list parent">
                    <h3 className="comment-title item-grid-1">Title</h3>
                    <p className="comment-body item-grid-2">Comment</p>
                    <p className="comment-email item-grid-3"> User email</p>
                </div>

                <div className="box-comment">
                    {
                        !render?
                        <div className="item-comment-list parent">
                            <img className="item-grid-1 loading-img" src={loading}/>
                            <img className="item-grid-2 loading-img" src={loading}/>
                            <img className="item-grid-3 loading-img" src={loading}/>
                        </div>
                        :
                        <>
                            {
                                comments?.map(item  => (
                                    <Comment props={{ comment:item }} key={item.id}/>
                                ))
                            }
                        </>
                    }
                    
                        <div className="item-comment-list parent">
                            <h4 className="comment-title item-grid-1">quo vero reiciendis velit similique earum"</h4>
                            <p className="comment-body item-grid-2">est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et</p>
                            <p className="comment-email item-grid-3">Jayne_Kuhic@sydney.com"</p>
                        </div>

                </div>

            </section>
        </ main>
        </>
    )
}
