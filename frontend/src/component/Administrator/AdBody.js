
import axios from 'axios'
import mystyle from './AdBody.module.css'
import { useEffect, useState } from 'react'

const AdBody = () => {


    const [udata, setUdata] = useState([]);
    // console.log(udata)

    const users = udata.length;

    //storedata
    const [sdata, setSdata] = useState([]);

    const stores = sdata.length;

    useEffect(() => {

        axios.get("http://localhost:5000/usersget").then((success) => {
            console.log(success)
            setUdata(success.data);
        }).catch((error) => {
            console.log(error)
        })


        axios.get("http://localhost:5000/storlogin").then((success) => {
            console.log(success)
            setSdata(success.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [])
    return (
        <div className={mystyle.main}>
            <div className={mystyle.sect1}>

                <div className={mystyle.sect1di1}>
                    <p>{users}</p>
                    <p>total number of users</p>
                </div>
                <div className={mystyle.sect1di2}>
                    <p>{stores}</p>
                    <p>total number of Stores</p>
                </div>
                <div className={mystyle.sect1di3}>
                    <p>7000+</p>
                    <p>total number of Submitted ratings</p>
                </div>

            </div>

        </div>
    )
}

export default AdBody;