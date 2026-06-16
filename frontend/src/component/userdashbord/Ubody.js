import { useEffect, useState } from 'react';
import mystyle from './Ubody.module.css'
import axios from 'axios';



const Ubody = () => {

    const [sdata, setSdata] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:5000/storlogin").then((success) => {
            console.log(success);
            setSdata(success.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [])

    return (
        <div className={mystyle.main}>

            <h3>Stores list</h3>
            <div className={mystyle.sub}>
                {
                    sdata.map((s, index) => {
                        return (
                            <div key={index} className={mystyle.sub1}>
                                <p>{s.Sid}</p>
                                <p>{s.sname}</p>
                                <p>{s.semail}</p>
                                <p>{s.saddress}</p>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Ubody;