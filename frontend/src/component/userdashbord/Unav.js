


import { useState } from 'react';
import mystyle from './Unav.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router';


const Unav = () => {

    const navigate = useNavigate();

    const [data, setData] = useState();

    const [sdata, setSdata] = useState([]);
    console.log(sdata)

    const [show, setShow] = useState(false);

    const getData = (event) => {
        setData(event.target.value)
    }

    const sendData = () => {
        axios.post("http://localhost:5000/storesaerch", { sname: data, saddress: data }).then((success) => {
            console.log(success)

            if (success.data.result.length < 1) {
                console.log("data not match")
            } else {

                console.log(success.data.result)
                const name = success.data.result[0].sname;
                const email = success.data.result[0].semail;
                const address = success.data.result[0].saddress;

                console.log(name)
                console.log(email)
                console.log(address)

                navigate("serstore", { state: { name, email, address } })
            }

        }).catch((error) => {
            console.log(error)
        })
    }

    const close = () => {
        setShow(false)
    }

    return (
        <div className={mystyle.main}>

            <div className={mystyle.sub}>
                <p>E-commers</p>
                <div>
                    <input type="text" placeholder='serch here...' onChange={getData} />
                    <button onClick={sendData}>search</button>
                </div>
                <p><i class="bi bi-cart-plus"></i></p>
            </div>
        </div >
    )
}


export default Unav;