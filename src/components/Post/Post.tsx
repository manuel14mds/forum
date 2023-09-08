import { Link } from 'wouter'
import './Post.css'
import { type Post as TypePost } from '../../types.s'

interface PropsType {
    post: TypePost
}

export const Post: React.FC<{ props: PropsType }> = ({ props }) => {
    const {post} = props
    return (
        <div className="post" role="listitem">
            <h2 className='post-id'>ID : {post.id}</h2>
            <div className="post-info-box">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-description">{post.body}</p>
            </div>
            <div className="detail-btn-box">
                <Link className='see-post-detail' to={`/postDetail${post.id}`}>&rarr;</Link>
            </div>
        </div>
    )
}
