import { Post } from "../../components"
import { Navbar } from "../../layout"
import { Breadcrumbs } from "../../layout"
import { PathList } from "../../types.s"
import loadingp from '../../assets/pink-loader.svg'
import loadingb from '../../assets/blue-loader.svg'
import { usePublications } from "../../utils/hooks/usePublicatios"
import './Publications.css'

export const Publications: React.FC = () => {
    const { posts, mount } = usePublications()

    const pathList : PathList = [
        {name: 'Home', path: '/'}
    ]
    const currentPage: string = 'Publications'


    return (
        <>  
            <header className="header-publications">
                <Navbar />
                <Breadcrumbs props = {{ pathList, currentPage }} />
                <h1 className="Publications-title">All Publications</h1>
            </header>
            
            <main>
                <div className="posts-container" role="list">
                    {
                        mount?
                            posts?.map(item => (
                                <Post props={{post:item}} key={item.id} />
                            ))
                        :
                            <div className="box-publi-loading" role="listitem">
                                <img className='detail-btn-box  publi-loading' src={loadingp}/>
                                <img className="post-info-box publi-loading" src={loadingb} />
                                <img className="detail-btn-box publi-loading" src={loadingp} />
                            </div>
                    }


                </div>
            </main>
        </ >
    )
}
