import { Link } from 'react-router';
import mystyle from './AdSlider.module.css'


const AdSlider = () => {
    return (
        <div className={mystyle.main}>
            <h2>This is the slider</h2>
            <div className={mystyle.sect1}>
                <p><Link className={mystyle.lin} to="storedata">Store detiles</Link></p>
                <p><Link className={mystyle.lin} to="data">normal and admin user</Link></p>
            </div>

        </div>
    )
}

export default AdSlider;