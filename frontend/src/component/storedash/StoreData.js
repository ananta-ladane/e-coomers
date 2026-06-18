

import { useEffect, useState } from 'react'
import mystyle from './StoreData.module.css'
import axios from 'axios'


const StoreData = () => {

    const [sdata, setSdata] = useState([]);
    console.log(sdata)

    useEffect(() => {

        axios.get("http://localhost:5000/store").then((success) => {
            console.log(success)
            setSdata(success.data)
        }).catch((error) => {
            console.log(error)
        })

    }, []);


    return (

        <div className={mystyle.main}>

            <h3>Store Data  for admin</h3>
            <div className={mystyle.sub}>
                {
                    sdata.map((d, index) => {
                        return (
                            <div className={mystyle.sub1} key={index}>
                                <p>{d.Sid}</p>
                                <p>{d.sname}</p>
                                <p>{d.semail}</p>
                                <p>{d.saddress}</p>
                                <p>{Number(d.rating || 0).toFixed(1)}</p>


                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default StoreData;