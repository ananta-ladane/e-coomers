import { useEffect, useState } from 'react';
import mystyle from './Data.module.css';
import axios from 'axios';


const Data = () => {


    const [udata, setUdata] = useState([]);
    const [addata, setAddata] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:5000/usersget").then((success) => {
            console.log(success)
            setUdata(success.data);
        }).catch((error) => {
            console.log(error)
        })


        axios.get("http://localhost:5000/adminlogin").then((success) => {
            console.log(success)
            setAddata(success.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [])

    return (
        <div className={mystyle.main}>

            <h3>User and admin data</h3>

            <h4>user data</h4>
            <div className={mystyle.sub}>

                {
                    udata.map((u, index) => {
                        return (
                            <div className={mystyle.sub1} key={index}>
                                <p>{u.Uid}</p>
                                <p>{u.uname}</p>
                                <p>{u.uemail}</p>
                                <p>{u.uaddress}</p>
                            </div>
                        )
                    })
                }
            </div>

            <h5>User Admin</h5>
            <div className={mystyle.sub2}>

                {
                    addata.map((u, index) => {
                        return (
                            <div className={mystyle.sub4} key={index}>
                                <p>{u.Ad_id}</p>
                                <p>{u.Name}</p>
                                <p>{u.Email}</p>
                                <p>{u.Address}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Data;