import { Link } from 'react-router'
import mystyle from './Uslider.module.css'



const Uslider = () => {
    return (
        <div className={mystyle.main}>
            <h3> User Slider</h3>

            <div className={mystyle.sect1}>
                <p><Link className={mystyle.lin} to="uupass">Update Password</Link></p>
            </div>
            <p className={mystyle.log}><Link className={mystyle.logout} to="/">logout</Link></p>
        </div>
    )
}


export default Uslider