import { Outlet } from 'react-router';
import AdBody from './AdBody';
import mystyle from './AdMainpage.module.css'
import AdNav from './AdNav';
import AdSlider from './AdSlider';


const AdMainpage = () => {
    return (
        <div className={mystyle.main}>
            <AdNav />
            <div>
                <AdSlider />
                <div>

                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default AdMainpage;