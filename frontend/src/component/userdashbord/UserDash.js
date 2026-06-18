
import { Outlet } from 'react-router';
import Ubody from './Ubody';
import Unav from './Unav';
import mystyle from './UserDash.module.css'
import Uslider from './Uslider';
const UserDash = () => {
    return (
        <div className={mystyle.main}>
            <Unav />
            <div>
                <Uslider />
                <div>
                    <Outlet />
                </div>
            </div>
        </div >
    )
}

export default UserDash;