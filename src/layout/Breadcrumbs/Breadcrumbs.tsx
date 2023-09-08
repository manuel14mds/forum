import { Link } from 'wouter'
import './Breadcrumbs.css'
import { PathList } from '../../types.s' 

interface PropsType {
    pathList : PathList
    currentPage : string
}

export const Breadcrumbs: React.FC<{ props: PropsType }> = ({ props }) => {
    const { pathList, currentPage } = props
    return (
        <ul className="breadcrumb">
            {
                pathList.map(item => (
                    <li key={item.name}><Link className='link-a' href={item.path}>{item.name}</Link></li>
                ))
            }
            <li>{currentPage}</li>
        </ ul> 
    )
}
