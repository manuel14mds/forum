import { Breadcrumbs, Navbar } from '../../layout'
import { PathList } from '../../types.s'
import './PostDetail.css'
import loading from '../../assets/pink-loader.svg'
// interface PropsType {}
// export const PostDetail: React.FC<{ props: PropsType }> = () => {
export const PostDetail: React.FC = () => {
    const pathList : PathList = [
        {name: 'Home', path: '/'},
        {name: 'Publications', path: '/publications'}
    ]
    const currentPage: string = 'Post Detail'
    return (
        <>
        <header className='header-detail'>
            <Navbar />
            <Breadcrumbs props={{ pathList, currentPage}} key={2}/>
            <h1 className='publication-title'>Publication Detail</h1>
        </header>

        <main>
            <section className='detail-box'>
                <h2 className='post-title'>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h2>
                <p className='post-body'>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>
                <p className='post-id'>post id: 1</p>

                <div className="head-comment-list parent">
                    <h3 className="comment-title item-grid-1">Title</h3>
                    <p className="comment-body item-grid-2">Comment</p>
                    <p className="comment-email item-grid-3"> User email</p>
                </div>

                <div className="box-comment">
                    <div className="item-comment-list parent">
                        <h4 className="comment-title item-grid-1">quo vero reiciendis velit similique earum"</h4>
                        <p className="comment-body item-grid-2">est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et</p>
                        <p className="comment-email item-grid-3">Jayne_Kuhic@sydney.com"</p>
                    </div>
                    <div className="item-comment-list parent">
                        <h4 className="comment-title item-grid-1">quo vero reiciendis velit similique earum"</h4>
                        <p className="comment-body item-grid-2">est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et</p>
                        <p className="comment-email item-grid-3">Jayne_Kuhic@sydney.com"</p>
                    </div>
                    <div className="item-comment-list parent">
                        <h4 className="comment-title item-grid-1">quo vero reiciendis velit similique earum"</h4>
                        <p className="comment-body item-grid-2">est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et</p>
                        <p className="comment-email item-grid-3">Jayne_Kuhic@sydney.com"</p>
                    </div>
                    <div className="item-comment-list parent">
                        <h4 className="comment-title item-grid-1">quo vero reiciendis velit similique earum"</h4>
                        <p className="comment-body item-grid-2">est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et</p>
                        <p className="comment-email item-grid-3">Jayne_Kuhic@sydney.com"</p>
                    </div>
                    <div className="item-comment-list parent">
                        <img className="item-grid-1 loading-img" src={loading}/>
                        <img className="item-grid-2 loading-img" src={loading}/>
                        <img className="item-grid-3 loading-img" src={loading}/>
                    </div>

                </div>

            </section>
        </ main>
        </>
    )
}
