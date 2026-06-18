import { useLocation } from 'react-router';
import mystyle from './StoreSearch.module.css'



const StoreSearch = () => {

    const location = useLocation();

    const uname = location.state.name;
    const uemail = location.state.email;
    const uaddress = location.state.address;

    console.log(location.state)
    return (
        <div className={mystyle.main}>
            {
                <div className={mystyle.sub}>
                    <p>{uname}</p>
                    <p>{uemail}</p>
                    <p>{uaddress}</p>
                </div>
            }

        </div>
    )
}

export default StoreSearch;