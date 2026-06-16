import { Outlet } from "react-router";
import Sbody from "./Sbody";
import Snav from "./Snav";
import Sslider from "./Sslider";


const StoreDash = () => {
    return (
        <div>
            <Snav />
            <div>
                <Sslider />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default StoreDash;