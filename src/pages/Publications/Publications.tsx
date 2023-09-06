import { Post } from "../../components"
import { Navbar } from "../../layout"
import { Breadcrumbs } from "../../layout"
import { PathList } from "../../types.s"

import './Publications.css'
export const Publications: React.FC = () => {
    const pathList : PathList = [
        {name: 'Home', path: '/home'}
    ]
    const currentPage: string = 'Publications'
    return (
        <>  
            <header>
                <Navbar />
                <Breadcrumbs key="1" props = {{ pathList, currentPage }} />
                <h1 className="Publications-title">All Publications</h1>
            </header>
            
            <main>
                <div className="posts-container" role="list">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </main>
        </ >
    )
}
