import { Link } from 'wouter'
import './Navbar.css'

export const Navbar: React.FC = () => {
    return (
        <nav>
            <Link className='navlink' href="/home">World Forum</Link>
            <Link className='navlink' href="/home">Home</Link>
            <Link className='navlink' href="/publications">Publications</Link>
        </ nav>
    )
}
