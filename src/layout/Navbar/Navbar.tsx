import { Link } from 'wouter'
import './Navbar.css'

export const Navbar: React.FC = () => {
    return (
        <nav>
            <Link className='navlink' href="/">World Forum</Link>
            <Link className='navlink' href="/">Home</Link>
            <Link className='navlink' href="/publications">Publications</Link>
        </ nav>
    )
}
