
import { Navbar } from '../../layout'
import './NotFound.css'
import notFound from '../../assets/error-404.svg'

export const NotFound: React.FC = () => {
    return (
        <>
        <header>
            <Navbar />
        </header>
        <main className='notFound-box'>
            <div className="error-box">
                <h1 className='notFound-title'>Page Not Found</h1>
                <img className='notFound-img' src={notFound} alt="404 image" />
            </div>

        </main>
        </ >
    )
}
