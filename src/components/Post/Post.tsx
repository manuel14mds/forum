import './Post.css'

export const Post: React.FC = () => {
    return (
        <div className="post" role="listitem">
            <h2 className='post-id'>ID : 80</h2>
            <div className="post-info-box">
                <h3 className="post-title">sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
                <p className="post-description">et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut</p>
            </div>
            <div className="detail-btn-box">
                <a className='see-post-detail'>&rarr;</a>
            </div>
        </div>
    )
}
