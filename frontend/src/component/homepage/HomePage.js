
import mystyle from './Home.module.css'
import { Link } from 'react-router';


const HomePage = () => {


    return (
        <div className={mystyle.main} >

            <div className={mystyle.sect1}>
                <div className={mystyle.nav}>
                    <p>E-commers</p>
                    <ul>
                        <li><Link className={mystyle.lin} to="/login">Login</Link></li>
                        <li><Link className={mystyle.lin} to="/usersignup">signup</Link></li>
                    </ul>
                </div>
            </div>
            <div className={mystyle.sect2}>
                <h1>well-come to my task</h1>
            </div>
        </div>
    )
}

export default HomePage;