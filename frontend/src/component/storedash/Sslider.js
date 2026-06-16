
import { Link } from 'react-router';
import mystyle from './Sslider.module.css';


const Sslider = () => {
    return (
        <div className={mystyle.main}>
            <h3>Store Slider</h3>

            <div className={mystyle.sect1}>
                <p><Link className={mystyle.lin} to="/supass">update Password</Link></p>
            </div>
        </div>
    )
}

export default Sslider;