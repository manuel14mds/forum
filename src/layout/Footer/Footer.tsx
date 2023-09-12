import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

import './Footer.css'

export const Footer: React.FC = () => {
    return (
        <footer>
            <label className='footer-text'>© 2023 Manuel Florez. All rights reserved.</label>
            <div className='footer-list'>
                <a href="https://www.linkedin.com/in/manuel14mds/" target='_blank'>
                    <img src={linkedin} alt="linkedin.com/in/manuel14mds/" />
                </a>
                <a href="https://github.com/manuel14mds" target='_blank'>
                    <img src={github} alt="github.com/manuel14mds" />
                </a>
            </div>
        </ footer>
    )
}
