import { Navbar } from '../Navbar/Navbar'
import logo from '../../assets/logo.png'
import './Header.css'


export const Header: React.FC = () => {
    return (
        <header>
            <Navbar />
            <img src={ logo } className='header-image'/>
            <h1 className='header-title'>Welcome to <strong className='h1Strong'>World Forum</strong>!</h1>
        </ header>
    )
}
