import logo from '../../assets/logo.png'
import { Navbar } from '../Navbar/Navbar'

import './Header.css'

export const Header: React.FC = () => {
    return (
        <header className='header'>
            <Navbar />
            <img src={ logo } className='header-image'/>
            <h1 className='header-title'>Welcome to <strong className='h1Strong'>World Forum</strong>!</h1>
        </ header>
    )
}
