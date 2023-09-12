import { CommentType } from "../../types.s"

import './Comment.css'

interface PropsType {
    comment : CommentType
}

export const Comment: React.FC<{ props: PropsType }> = ({ props }) => {
    const {comment} = props
    return (
        <div className="item-comment-list parent">
            <h4 className="comment-title item-grid-1">{comment.name}</h4>
            <p className="comment-body item-grid-2">{comment.body}</p>
            <p className="comment-email item-grid-3">{comment.email}</p>
        </div>
    )
}
